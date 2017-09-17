const dagreD3 = require('dagre-d3');

function createGraph(graph, direction, shape) {

    let g = new dagreD3.graphlib.Graph().setGraph({ rankdir: direction });

    // Automatically label each of the nodes
    for (let key in graph._nodes)
        g.setNode(key, { label: graph._nodes[key].label, style: "fill:mediumSeaGreen", shape: shape });

    // Set up the edges
    for (let key in graph._edgeObjs)
        g.setEdge(graph._edgeObjs[key].v, graph._edgeObjs[key].w, { label: graph._edgeLabels[key].label, lineInterpolate: 'basis' });

    // Set some general styles
    g.nodes().forEach(function (v) {
        let node = g.node(v);
        node.rx = node.ry = 5;
    });

    return g;

}

/**
* Recognized options:
* **********************
* @param  {String} direction    Direction for rank nodes. Can be "TB", "BT", "LR", or "RL", where T = top, B = bottom, L = left, and R = right.
* @param  {String} shape    Shape of nodes. Can be "rect", "circle", "ellipse", or "diamond".
*
*/
const dot = require('graphlib-dot');

module.exports.getGraph = (graph_dot, direction, shape) => {
     let graph = dot.read(graph_dot);
     return createGraph(graph, direction, shape);
}

