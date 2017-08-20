const dagreD3 = require('dagre-d3');
const d3 = require('d3');
const graphCreator = require('./src/graphCreator.js');

let graph_dot ; 


function drawGraph() {

    graphCreator.createGraph(graph_dot);

    let graph = graphCreator.getGraph();

    let g = new dagreD3.graphlib.Graph().setGraph({});

    // Automatically label each of the nodes
    for (let i = 0; i < graph.nodes.length; i++)
        g.setNode(graph.nodes[i].id, { label: graph.nodes[i].label, style : "fill: #00ffd0" });

    // Set up the edges
    for (let i = 0; i < graph.edges.length; i++)
        g.setEdge(graph.edges[i].source, graph.edges[i].target, { label: graph.edges[i].label, lineInterpolate: 'basis' });


    // Set some general styles
    g.nodes().forEach(function (v) {
        let node = g.node(v);
        node.rx = node.ry = 5;
    });

    let svg = d3.select("svg"),
        inner = svg.select("g");

    // Set up zoom support
    let zoom = d3.behavior.zoom().on("zoom", function () {
        inner.attr("transform", "translate(" + d3.event.translate + ")" +
            "scale(" + d3.event.scale + ")");
    });
    svg.call(zoom);


    

    // Create the renderer
    let render = new dagreD3.render();

    // Run the renderer. This is what draws the final graph.
    render(inner, g);

    // Center the graph
    let initialScale = 0.75;
    zoom
        .translate([(svg.attr("width") - g.graph().width * initialScale) / 2, 20])
        .scale(initialScale)
        .event(svg);
    svg.attr('height', g.graph().height * initialScale + 40);
}


const { ipcRenderer } = require('electron')

ipcRenderer.send('openFile', () => {
    console.log("Event sent.");
})
ipcRenderer.on('fileData', (event, data) => {
   graph_dot = data; 
   drawGraph();  
})




