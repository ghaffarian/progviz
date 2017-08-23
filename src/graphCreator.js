const dagreD3 = require('dagre-d3');


function parseGraph(dotString) {

    let graph = {
        nodes: [],
        edges: []
    };

    let lines = dotString.split("\n");

    let i = 2;
    let nodes = new Array();

    while (lines[i] != "") {
        let node_id, node_lable;
        let index = 3;
        while (lines[i].charAt(index) != " ")
            index++;
        node_id = lines[i].substr(3, index - 3);
        index += 11;
        node_lable = lines[i].substr(index, lines[i].length - index - 3);
        nodes.push({
            id: node_id,
            label: node_lable
        });
        i++;
    }


    let edges = new Array();

    for (let j = i + 1; j < lines.length - 3; j++) {
        let source, target, edge_lable;
        let index = 3;
        while (String(lines[j]).charAt(index) != " ")
            index++;
        source = lines[j].substr(3, index - 3);
        index += 4;
        let last_index = index;
        while (String(lines[j]).charAt(index) != " " && lines[j].charAt(index) != ";")
            index++;
        target = lines[j].substr(last_index, index - last_index);
        let curEdge = {
            label: " ",
            source: source,
            target: target,
        };
        if (String(lines[j]).charAt(index) === " ") { // if edge has no lable
            index += 11;
            edge_lable = lines[j].substr(index, lines[j].length - index - 3);
            curEdge.label = edge_lable;
        }
        edges.push(curEdge);
    }

    graph.nodes = nodes;
    graph.edges = edges;

    return graph;

}

function createGraph(graph, direction, shape) {

    let g = new dagreD3.graphlib.Graph().setGraph({ rankdir: direction });

    // Automatically label each of the nodes
    for (let i = 0; i < graph.nodes.length; i++)
        g.setNode(graph.nodes[i].id, { label: graph.nodes[i].label, style: "fill: #00ffd0", shape: shape });

    // Set up the edges
    for (let i = 0; i < graph.edges.length; i++)
        g.setEdge(graph.edges[i].source, graph.edges[i].target, { label: graph.edges[i].label, lineInterpolate: 'basis', style: "stroke : red;stroke-width:2px;" });


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

module.exports.getGraph = (dotString, direction, shape) => {
    let graph = parseGraph(dotString);
    return createGraph(graph, direction, shape);
}


