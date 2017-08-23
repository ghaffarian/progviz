const dagreD3 = require('dagre-d3');

module.exports.change_node = (g, node_id, color) => {
    g.node(node_id).style = "fill : " + color;
    return g;
}

module.exports.change_edge = (g, sourceId, targetId, color) => {
    console.log(g.edge(sourceId, targetId));
    g.edge(sourceId, targetId).style = "stroke : " + color + ";" + " stroke-width:2px;";
    return g;
} 


module.exports.change_neighbours = (g, node_id, color) => { 

    let inEdges = g.inEdges(node_id);
    let outEdges = g.outEdges(node_id);


    let neighbours = new Array();

    for(let i=0; i<inEdges.length; i++)
        neighbours.push(inEdges[i].v);

    for(let i=0; i<outEdges.length; i++)
        neighbours.push(outEdges[i].w);

    console.log(neighbours);

    for(let i=0; i<neighbours.length; i++)
        g.node(neighbours[i]).style = "fill : " + color;

    return g; 
}

module.exports.change_two_nodes_of_edge = (g, sourceId, targetId, color) => {
    g.node(sourceId).style = "fill : " + color;
    g.node(targetId).style = "fill : " + color;
    return g; 
}