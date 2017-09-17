const dagreD3 = require('dagre-d3');
const d3 = require('d3');
const graphCreator = require('./../src/graphCreator.js');
const graphStyleUpdater = require('./../src/graphStyleUpdater.js');
const graphProperties = require('./../src/graphProperties.js');


function drawGraph(g) {


    let svg = d3.select("svg");
    let inner = svg.select("g");

    let w = 520, h = 600;

    // Create the renderer
    let render = new dagreD3.render();

    // Run the renderer. This is what draws the final graph.
    render(inner, g);

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

    graphStyleUpdater.change_node_color_onHover(svg);
    zoom_by_scroll(svg, inner)
    zoom_In_Out(w,h);


}

function zoom_by_scroll (svg, inner) { 
    let zoom = d3.behavior.zoom().on("zoom", function () {
        inner.attr("transform", "translate(" + d3.event.translate + ")" +
            "scale(" + d3.event.scale + ")");
    });
    svg.call(zoom);
}

function zoom_In_Out  (w, h) {

     var makePanZoomCTRL = function (width, height) {
        var control = {}

        var zoomMin = -10, // Levels of Zoom Out
            zoomMax = 10, // Levels of Zoom In
            zoomCur = 0; // Current Zoom


        var transform = function () {
            var x = -((width * zoomCur / 10) / 2);
            var y = -((height * zoomCur / 10) / 2);
            var s = (zoomCur / 10) + 1;
            d3.select("g")
                .attr("transform", "translate(" + x + " " + y + ") scale(" + s + ")");
        };

        control.zoom = function (btnID) {
            if (btnID === "zoomIn") {
                if (zoomCur >= zoomMax) return;
                zoomCur++;
            } else if (btnID === "zoomOut") {
                if (zoomCur <= zoomMin) return;
                zoomCur--;
            }
            transform();
        };
        return control;
    }

    //***********************************************************
    // INSTANTIATE PAN-ZOOM CONTROL (CREATE INSTANCE)
    //***********************************************************
    var panZoom = makePanZoomCTRL(w, h);

    //***********************************************************
    // SET BUTTON EVENT LISTENERS
    //***********************************************************
    d3.selectAll("#zoomIn, #zoomOut")
        .on("click", function () {
            d3.event.preventDefault();
            var id = d3.select(this).attr("id");
            panZoom.zoom(id);
        });
 


}


module.exports.draw = (data) => {
    graph_dot = data;
    let g = graphCreator.getGraph(graph_dot, "TB", "ellipse");
    properties(g);
    drawGraph(g);

}

function properties(g) {

    // console.log(graphProperties.getNumberOfNodes());
    document.getElementById('nodesProoerty').innerHTML = "Nodes: " + graphProperties.getNumberOfNodes(g);
    document.getElementById('edgesProperty').innerHTML = "Edges: " + graphProperties.getNumberOfEdges(g);
    document.getElementById('nameProperty').innerHTML = "Name: " + graphProperties.getName(g);

}













