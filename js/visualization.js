const VisualizationModule = (function () {
    let width, height;
    let svg, g, simulation;
    let zoom;

    function init() {
        width = $('#visual-display').width();
        height = $('#visual-display').height();

        svg = d3.select('#visual-display')
            .append('svg')
            .attr('width', '100%')
            .attr('height', '100%');

        g = svg.append('g');

        zoom = d3.zoom()
            .scaleExtent([0.1, 8])
            .on('zoom', (event) => {
                g.attr('transform', event.transform);
            });

        svg.call(zoom);

        // Controls
        $('#zoom-in').on('click', () => svg.transition().call(zoom.scaleBy, 1.3));
        $('#zoom-out').on('click', () => svg.transition().call(zoom.scaleBy, 0.7));
        $('#reset-zoom').on('click', () => svg.transition().call(zoom.transform, d3.zoomIdentity));

        window.addEventListener('resize', () => {
            width = $('#visual-display').width();
            height = $('#visual-display').height();
        });
    }

    function updateGraph(activeTagIds) {
        if (!svg) init();

        const filteredData = getRelevantData(activeTagIds);
        const { nodes, links } = generateGraphData(filteredData);

        // Clear existing graph
        g.selectAll('*').remove();

        if (nodes.length === 0) return;

        simulation = d3.forceSimulation(nodes)
            .force('link', d3.forceLink(links).id(d => d.id).distance(100))
            .force('charge', d3.forceManyBody().strength(-300))
            .force('center', d3.forceCenter(width / 2, height / 2))
            .force('collision', d3.forceCollide().radius(50));

        const link = g.append('g')
            .attr('class', 'links')
            .selectAll('line')
            .data(links)
            .enter().append('line')
            .attr('stroke', '#555')
            .attr('stroke-width', 2);

        const node = g.append('g')
            .attr('class', 'nodes')
            .selectAll('g')
            .data(nodes)
            .enter().append('g')
            .attr('class', 'node')
            .call(d3.drag()
                .on('start', dragstarted)
                .on('drag', dragged)
                .on('end', dragended))
            .on('click', (event, d) => {
                $(document).trigger('nodeClicked', [d.originalData]);
            });

        node.append('circle')
            .attr('r', d => d.type === 'primary' ? 12 : 8)
            .attr('fill', d => `var(--color-${d.category})`)
            .attr('stroke', '#fff')
            .attr('stroke-width', 2);

        node.append('text')
            .attr('dx', 15)
            .attr('dy', '.35em')
            .text(d => d.name)
            .attr('fill', '#fff')
            .attr('font-size', '12px')
            .style('pointer-events', 'none');

        simulation.on('tick', () => {
            link
                .attr('x1', d => d.source.x)
                .attr('y1', d => d.source.y)
                .attr('x2', d => d.target.x)
                .attr('y2', d => d.target.y);

            node
                .attr('transform', d => `translate(${d.x},${d.y})`);
        });
    }

    function getRelevantData(activeTagIds) {
        if (activeTagIds.length === 0) return [];

        let relevantIds = new Set(activeTagIds);

        // Find everything connected to active tags
        DATA.forEach(item => {
            if (activeTagIds.includes(item.id)) {
                // Add diseases, symptoms, etc.
                if (item.diseases) item.diseases.forEach(d => {
                    const found = DATA.find(i => i.name === d || i.id === d);
                    if (found) relevantIds.add(found.id);
                });
                if (item.symptoms) item.symptoms.forEach(s => {
                    const found = DATA.find(i => i.name === s || i.id === s);
                    if (found) relevantIds.add(found.id);
                });
            }
        });

        // Also add items that reference active tags
        DATA.forEach(item => {
            if (item.connected_to) {
                item.connected_to.forEach(id => {
                    if (activeTagIds.includes(id)) {
                        relevantIds.add(item.id);
                    }
                });
            }
            if (item.foundIn) {
                item.foundIn.forEach(foodName => {
                    const food = DATA.find(i => i.name === foodName && i.type === 'food');
                    if (food && activeTagIds.includes(item.id)) {
                        relevantIds.add(food.id);
                    }
                });
            }
        });

        return DATA.filter(item => relevantIds.has(item.id));
    }

    function generateGraphData(data) {
        const nodes = data.map(item => ({
            id: item.id,
            name: item.name,
            category: item.type,
            originalData: item
        }));

        const links = [];
        data.forEach(item => {
            if (item.diseases) {
                item.diseases.forEach(dName => {
                    const d = data.find(i => i.name === dName);
                    if (d) links.push({ source: item.id, target: d.id, type: 'causes' });
                });
            }
            if (item.foundIn) {
                item.foundIn.forEach(fName => {
                    const f = data.find(i => i.name === fName);
                    if (f) links.push({ source: item.id, target: f.id, type: 'found_in' });
                });
            }
            if (item.connected_to) {
                item.connected_to.forEach(compId => {
                    if (data.find(i => i.id === compId)) {
                        links.push({ source: item.id, target: compId, type: 'connected_to' });
                    }
                });
            }
            // Auto-link effects if they match other node names
            if (item.effects) {
                item.effects.forEach(effect => {
                    data.forEach(other => {
                        if (other.id !== item.id && effect.toLowerCase().includes(other.name.toLowerCase())) {
                            links.push({ source: item.id, target: other.id, type: 'effect' });
                        }
                    });
                });
            }
        });

        return { nodes, links };
    }

    function dragstarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    }

    function dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
    }

    function dragended(event, d) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
    }

    return {
        updateGraph
    };
})();
