const VisualizationModule = (function () {
    let width, height;
    let svg, g, simulation;
    let zoom;
    let contextMenuNode = null;

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

        // Context Menu Handlers
        $(document).on('contextmenu', (e) => {
            if (!$(e.target).closest('.node').length) {
                hideContextMenu();
            }
        });

        $(document).on('click', (e) => {
            if (!$(e.target).closest('#context-menu').length) {
                hideContextMenu();
            }
        });

        $('#menu-toggle-glow').on('click', () => {
            if (contextMenuNode) {
                toggleNodeGlow(contextMenuNode);
                hideContextMenu();
            }
        });

        $('#menu-toggle-pin').on('click', () => {
            if (contextMenuNode) {
                toggleNodePin(contextMenuNode);
                hideContextMenu();
            }
        });

        // Controls
        $('#zoom-in').on('click', () => svg.transition().call(zoom.scaleBy, 1.3));
        $('#zoom-out').on('click', () => svg.transition().call(zoom.scaleBy, 0.7));
        $('#reset-zoom').on('click', () => zoomToFit());

        window.addEventListener('resize', () => {
            width = $('#visual-display').width();
            height = $('#visual-display').height();
        });
    }

    function updateGraph() {
        if (!svg) init();

        const allData = DATA;
        const { nodes, links } = generateGraphData(allData);

        // Clear existing graph
        g.selectAll('*').remove();

        if (nodes.length === 0) return;

        // Force Simulation with Categorical Layout
        simulation = d3.forceSimulation(nodes)
            .force('link', d3.forceLink(links).id(d => d.id).distance(d => {
                // Closer if one side is unconnected or just general preference
                const isSourceConnected = links.some(l => l.source.id === d.source.id || l.target.id === d.source.id);
                const isTargetConnected = links.some(l => l.source.id === d.target.id || l.target.id === d.target.id);
                return (isSourceConnected && isTargetConnected) ? 80 : 40;
            }))
            .force('charge', d3.forceManyBody().strength(d => {
                // Unconnected nodes should be pulled closer
                const hasLinks = links.some(l => l.source === d.id || l.target === d.id || l.source.id === d.id || l.target.id === d.id);
                return hasLinks ? -300 : -50;
            }))
            .force('center', d3.forceCenter(width / 2, height / 2))
            .force('collision', d3.forceCollide().radius(50))
            .force('categorical', (alpha) => {
                const categories = {
                    'disease': { angle: null, radius: 0 },
                    'pesticide': { angle: 0, radius: 1 },
                    'poison': { angle: 0, radius: 1 },
                    'heavy-metal': { angle: 45, radius: 1 },
                    'adulterant': { angle: 90, radius: 1 },
                    'symptom': { angle: 135, radius: 1 },
                    'medicine': { angle: 180, radius: 1 },
                    'remedy': { angle: 180, radius: 1 },
                    'food': { angle: 225, radius: 1 },
                    'place': { angle: 270, radius: 1 },
                    'residue': { angle: 315, radius: 1 },
                    'allergen': { angle: 315, radius: 1 }
                };

                nodes.forEach(d => {
                    const cat = categories[d.category] || { angle: 330, radius: 1.2 };
                    let targetX = width / 2;
                    let targetY = height / 2;

                    if (cat.angle !== null) {
                        const rad = (cat.angle * Math.PI) / 180;
                        const dist = 300 * cat.radius;
                        targetX += Math.cos(rad) * dist;
                        targetY += Math.sin(rad) * dist;
                    }

                    d.vx += (targetX - d.x) * alpha * 0.1;
                    d.vy += (targetY - d.y) * alpha * 0.1;
                });
            });

        const link = g.append('g')
            .attr('class', 'links')
            .selectAll('line')
            .data(links)
            .enter().append('line')
            .attr('stroke', '#555')
            .attr('stroke-width', 2)
            .attr('stroke-opacity', 0.6);

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
            })
            .on('contextmenu', (event, d) => {
                event.preventDefault();
                showContextMenu(event.pageX, event.pageY, d);
            });

        node.append('circle')
            .attr('r', d => d.type === 'primary' ? 14 : 10)
            .attr('fill', d => getNodeColor(d.category))
            .attr('stroke', '#fff')
            .attr('stroke-width', 2);

        node.append('text')
            .attr('dx', 18)
            .attr('dy', '.35em')
            .text(d => d.name)
            .attr('fill', '#fff')
            .attr('font-size', '13px')
            .style('pointer-events', 'none')
            .style('text-shadow', '2px 2px 4px rgba(0,0,0,0.8)');

        // Add long-press support for touch devices to open context menu (uses Hammer.js if available)
        g.selectAll('.node').each(function(d) {
            const el = this;
            if (typeof Hammer !== 'undefined') {
                try {
                    const mc = new Hammer.Manager(el);
                    if (!mc.get('press')) mc.add(new Hammer.Press({ time: 500 }));
                    mc.on('press', function(ev) {
                        const pageX = ev.center.x + window.scrollX;
                        const pageY = ev.center.y + window.scrollY;
                        showContextMenu(pageX, pageY, d);
                    });
                } catch (e) {
                    // ignore Hammer setup errors
                }
            } else {
                // Fallback: simple touch long-press
                let pressTimer = null;
                el.addEventListener('touchstart', function(e) {
                    pressTimer = setTimeout(function() {
                        const t = e.touches && e.touches[0];
                        if (t) {
                            const pageX = t.clientX + window.scrollX;
                            const pageY = t.clientY + window.scrollY;
                            showContextMenu(pageX, pageY, d);
                        }
                    }, 600);
                }, { passive: true });
                el.addEventListener('touchend', function() { clearTimeout(pressTimer); }, { passive: true });
                el.addEventListener('touchmove', function() { clearTimeout(pressTimer); }, { passive: true });
            }
        });

        simulation.on('tick', () => {
            link
                .attr('x1', d => d.source.x)
                .attr('y1', d => d.source.y)
                .attr('x2', d => d.target.x)
                .attr('y2', d => d.target.y);

            node
                .attr('transform', d => `translate(${d.x},${d.y})`);
        });

        // Initial zoom to fit
        setTimeout(zoomToFit, 500);
    }

    function getNodeColor(category) {
        if (category === 'food') return '#32CD32'; // lime green for foods
        const purpleTypes = ['pesticide', 'fungicide', 'herbicide', 'poison'];
        let colorVar = `--color-${category}`;
        if (purpleTypes.includes(category)) colorVar = '--color-poison';
        if (category === 'remedy') colorVar = '--color-medicine';
        if (category === 'residue') colorVar = '--color-residue';
        if (category === 'allergen') colorVar = '--color-allergen';

        const color = getComputedStyle(document.documentElement).getPropertyValue(colorVar).trim();
        return color || '#999';
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
        if (!d.pinned) {
            d.fx = null;
            d.fy = null;
        }
    }

    function toggleNodeGlow(d) {
        const node = g.selectAll('.node').filter(n => n.id === d.id);
        const isGlowing = node.classed('glowing-node');
        node.classed('glowing-node', !isGlowing);
        if (!isGlowing) {
            node.style('--glow-color', getNodeColor(d.category));
        } else {
            node.style('--glow-color', null);
        }
    }

    function toggleNodePin(d) {
        d.pinned = !d.pinned;
        if (d.pinned) {
            d.fx = d.x;
            d.fy = d.y;
        } else {
            d.fx = null;
            d.fy = null;
        }
        simulation.alpha(0.3).restart();
    }

    function showContextMenu(x, y, d) {
        contextMenuNode = d;
        $('#context-menu')
            .css({
                top: y + 'px',
                left: x + 'px',
                display: 'block'
            });

        $('#menu-toggle-pin').text(d.pinned ? 'Unpin Node' : 'Pin Node');
    }

    function hideContextMenu() {
        $('#context-menu').hide();
        contextMenuNode = null;
    }

    function highlightNodes(ids = []) {
        g.selectAll('.node')
            .classed('glowing-node', d => ids.includes(d.id))
            .style('--glow-color', d => {
                if (!ids.includes(d.id)) return null;
                return getNodeColor(d.category);
            });

        if (ids.length > 0) {
            zoomToNodes(ids);
        }
    }

    function clearHighlights() {
        g.selectAll('.node').classed('glowing-node', false);
    }

    function zoomToFit() {
        const bounds = g.node().getBBox();
        const parent = svg.node().parentElement;
        const fullWidth = parent.clientWidth;
        const fullHeight = parent.clientHeight;
        const width = bounds.width;
        const height = bounds.height;
        const midX = bounds.x + width / 2;
        const midY = bounds.y + height / 2;

        if (width === 0 || height === 0) return;

        const scale = 0.85 / Math.max(width / fullWidth, height / fullHeight);
        const translate = [fullWidth / 2 - scale * midX, fullHeight / 2 - scale * midY];

        svg.transition()
            .duration(750)
            .call(zoom.transform, d3.zoomIdentity.translate(translate[0], translate[1]).scale(scale));
    }

    function zoomToNodes(ids) {
        const nodes = g.selectAll('.node').filter(d => ids.includes(d.id)).data();
        if (nodes.length === 0) return;

        let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
        nodes.forEach(d => {
            minX = Math.min(minX, d.x);
            maxX = Math.max(maxX, d.x);
            minY = Math.min(minY, d.y);
            maxY = Math.max(maxY, d.y);
        });

        const padding = 100;
        const width = (maxX - minX) + padding * 2;
        const height = (maxY - minY) + padding * 2;
        const midX = (minX + maxX) / 2;
        const midY = (minY + maxY) / 2;

        const parent = svg.node().parentElement;
        const fullWidth = parent.clientWidth;
        const fullHeight = parent.clientHeight;

        const scale = Math.min(2, 0.9 / Math.max(width / fullWidth, height / fullHeight));
        const translate = [fullWidth / 2 - scale * midX, fullHeight / 2 - scale * midY];

        svg.transition()
            .duration(1000)
            .call(zoom.transform, d3.zoomIdentity.translate(translate[0], translate[1]).scale(scale));
    }

    return {
        updateGraph,
        highlightNodes,
        clearHighlights,
        zoomToFit,
        zoomToNodes
    };
})();
