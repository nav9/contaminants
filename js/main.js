document.addEventListener("DOMContentLoaded", () => {

    const graphData = buildGraphData();

    initializeGraph(graphData.nodes, graphData.links);
});