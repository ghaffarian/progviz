const dagreD3 = require('dagre-d3');
const d3 = require('d3');
const graphCreator = require('./src/graphCreator.js');
const graphStyleUpdater = require('./src/graphStyleUpdater.js');
const graphProperties = require('./src/graphProperties.js');

let svg;

function init() {
    svg = d3.select("svg")
}


function drawGraph(g) {

    /*********** updating examples **************/
    // g = graphStyleUpdater.change_node(g,"n30", "red");
    // g = graphStyleUpdater.change_neighbours(g, "n32", "red");
    // g = graphStyleUpdater.change_edge(g,"n32","n33", "blue");
    // g = graphStyleUpdater.change_two_nodes_of_edge(g,"n32","n33", "red");

    //svg.selectAll("*").remove();
    let inner = svg.select("g");

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


    let w = 520, h = 600;
    let colors = d3.scale.category20();

    let vis = d3.select("#chart").append("svg:svg")
        .attr("width", w)
        .attr("height", h);

    var data = d3.range(20).map(function (i) {
        return { i: i, x: Math.random() * w, y: Math.random() * h, r: Math.random() * 30 }
    });

    vis.selectAll("g.node")
        .data(data)
        .enter().append("svg:g.node")
        .attr("stroke", "black")
        .attr("fill", function (d, i) { return colors(i); })
        .attr("cx", function (d, i) { return d.x; })
        .attr("cy", function (d, i) { return d.y; })
        .attr("r", function (d, i) { return d.r; });

    $('svg g.node').tipsy({
        gravity: 'w',
        html: true,
        title: function () {
            var d = this.__data__, c = colors(d.i);
            return d;
        }
    });



}


const { ipcRenderer } = require('electron')

ipcRenderer.send('openFile', () => {
    console.log("Event sent.");
})
ipcRenderer.on('fileData', (event, data) => {
    graph_dot = data;
    init();
    let g = graphCreator.getGraph(graph_dot, "TB", "ellipse");
    drawGraph(g);
    //properties();

})

function properties() {

    console.log(graphProperties.getNumberOfNodes());
    document.getElementById('nodesProoerty').innerHTML = "Nodes: " + graphProperties.getNumberOfNodes();
    document.getElementById('edgesProperty').innerHTML = "Edges: " + graphProperties.getNumberOfEdges();
    document.getElementById('nameProperty').innerHTML = "Name: " +  graphProperties.getName();

}










