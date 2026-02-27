let simulation;
let svg;
let g;
let zoom;

let selectedNodes = new Set();

function initializeGraph(nodes, links) {

    svg = d3.select("#graph");
    svg.selectAll("*").remove();

    const width = document.getElementById("graph").clientWidth;
    const height = document.getElementById("graph").clientHeight;

    g = svg.append("g");

    zoom = d3.zoom()
        .scaleExtent([0.3, 4])
        .on("zoom", (event) => {
            g.attr("transform", event.transform);
        });

    svg.call(zoom);

    // --- CLUSTER POSITIONS BY CATEGORY ---
    const categories = [...new Set(nodes.map(n => n.category || n.type))];

    const clusterCenters = {};
    categories.forEach((cat, i) => {
        clusterCenters[cat] = {
            x: width / 2 + Math.cos(i * 2 * Math.PI / categories.length) * 150,
            y: height / 2 + Math.sin(i * 2 * Math.PI / categories.length) * 150
        };
    });

    // --- SIMULATION ---
    simulation = d3.forceSimulation(nodes)
        .force("link",
            d3.forceLink(links)
                .id(d => d.id)
                .distance(50)   // REDUCED
                .strength(0.9)
        )
        .force("charge",
            d3.forceManyBody()
                .strength(-80) // REDUCED (was -300)
        )
        .force("collision",
            d3.forceCollide().radius(14)
        )
        .force("cluster", clusterForce(clusterCenters))
        .force("center", d3.forceCenter(width / 2, height / 2))
        .alpha(1)
        .alphaDecay(0.03);

    // --- LINKS ---
    const link = g.append("g")
        .selectAll("line")
        .data(links)
        .enter()
        .append("line")
        .attr("stroke", "#666")
        .attr("stroke-width", 1);

    // --- NODES ---
    const node = g.append("g")
        .selectAll("circle")
        .data(nodes)
        .enter()
        .append("circle")
        .attr("r", 9)
        .attr("fill", d => d.category === "adulterant" ? "yellow" : d.color)
        .attr("stroke", "#111")
        .attr("stroke-width", 1)
        .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended)
        )
        .on("click", (event, d) => {
            toggleSelection(d, node, link);
            showDetails(d);
        });

    const label = g.append("g")
        .selectAll("text")
        .data(nodes)
        .enter()
        .append("text")
        .text(d => d.label)
        .attr("font-size", "9px")
        .attr("fill", "#ccc");

    simulation.on("tick", () => {

        link
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);

        node
            .attr("cx", d => d.x)
            .attr("cy", d => d.y);

        label
            .attr("x", d => d.x + 10)
            .attr("y", d => d.y + 4);
    });

    setupZoomControls();
}


// --- Custom Cluster Force ---
function clusterForce(centers) {
    return (alpha) => {
        simulation.nodes().forEach(d => {
            const center = centers[d.category || d.type];
            d.vx += (center.x - d.x) * 0.05 * alpha;
            d.vy += (center.y - d.y) * 0.05 * alpha;
        });
    };
}


// --- Selection System ---
function toggleSelection(d, node, link) {

    if (selectedNodes.has(d.id)) {
        selectedNodes.delete(d.id);
    } else {
        selectedNodes.add(d.id);
    }

    node.attr("stroke-width", n =>
        selectedNodes.has(n.id) ? 3 : 1
    ).attr("stroke", n =>
        selectedNodes.has(n.id) ? "#ffffff" : "#111"
    );

    link.attr("stroke-width", l =>
        selectedNodes.has(l.source.id) ||
        selectedNodes.has(l.target.id) ? 3 : 1
    );

    analyzeCocktail();
}


// --- Cocktail Analysis ---
function analyzeCocktail() {

    if (selectedNodes.size < 2) return;

    const intersectionEffects = [];

    const selectedData = [...selectedNodes].map(id =>
        simulation.nodes().find(n => n.id === id)
    );

    if (!selectedData[0]?.data?.effects) return;

    let common = selectedData[0].data.effects;

    selectedData.forEach(node => {
        if (node.data?.effects) {
            common = common.filter(e =>
                node.data.effects.includes(e)
            );
        }
    });

    if (common.length > 0) {
        const container = document.getElementById("info-content");

        const div = document.createElement("div");
        div.className = "mb-3 p-2 border border-warning rounded";
        div.innerHTML = `
            <strong>⚠ Cocktail Interaction Detected</strong><br>
            Common Effects:<br>
            ${common.join(", ")}
        `;

        container.insertBefore(div, container.firstChild);
    }
}


// --- Dragging ---
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


// --- Zoom Buttons ---
function setupZoomControls() {

    document.getElementById("zoom-in").onclick = () =>
        svg.transition().call(zoom.scaleBy, 1.2);

    document.getElementById("zoom-out").onclick = () =>
        svg.transition().call(zoom.scaleBy, 0.8);

    document.getElementById("reset-view").onclick = () =>
        svg.transition().call(zoom.transform, d3.zoomIdentity);
}