// =============================
// Graph Rendering (D3 v7)
// =============================

let simulation;
let svg;
let g;
let zoom;

function initializeGraph(nodes, links) {

    svg = d3.select("#graph");
    svg.selectAll("*").remove();

    const width = document.getElementById("graph").clientWidth;
    const height = document.getElementById("graph").clientHeight;

    g = svg.append("g");

    // Zoom behavior
    zoom = d3.zoom()
        .scaleExtent([0.2, 5])
        .on("zoom", (event) => {
            g.attr("transform", event.transform);
        });

    svg.call(zoom);

    simulation = d3.forceSimulation(nodes)
        .force("link", d3.forceLink(links).id(d => d.id).distance(120))
        .force("charge", d3.forceManyBody().strength(-300))
        .force("center", d3.forceCenter(width / 2, height / 2));

    const link = g.append("g")
        .selectAll("line")
        .data(links)
        .enter()
        .append("line")
        .attr("stroke", "#555")
        .attr("stroke-width", 1.5);

    const node = g.append("g")
        .selectAll("circle")
        .data(nodes)
        .enter()
        .append("circle")
        .attr("r", 10)
        .attr("fill", d => d.color || "#888")
        .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended)
        )
        .on("click", (event, d) => {
            showDetails(d);
        });

    const label = g.append("g")
        .selectAll("text")
        .data(nodes)
        .enter()
        .append("text")
        .text(d => d.label)
        .attr("font-size", "10px")
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
            .attr("x", d => d.x + 12)
            .attr("y", d => d.y + 4);
    });

    // Zoom buttons
    document.getElementById("zoom-in").onclick = () =>
        svg.transition().call(zoom.scaleBy, 1.3);

    document.getElementById("zoom-out").onclick = () =>
        svg.transition().call(zoom.scaleBy, 0.7);

    document.getElementById("reset-view").onclick = () =>
        svg.transition().call(zoom.transform, d3.zoomIdentity);
}


// Drag handlers
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