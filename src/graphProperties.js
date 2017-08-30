const dagreD3 = require('dagre-d3');
const graphCreator = require('./graphCreator.js');

module.exports.getName = () => {
    return "CFG";
}

module.exports.getNumberOfNodes = () => {
    return graphCreator.getGraphObject.nodes.length; 
}

module.exports.getNumberOfEdges = () => {
    return graphCreator.getGraphObject.edges.lengths;
}

