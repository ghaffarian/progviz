const dagreD3 = require('dagre-d3');

module.exports.getName = (g) => {
    return "CFG";
}

module.exports.getNumberOfNodes = (g) => {
    return  Object.keys(g._nodes).length; 
}

module.exports.getNumberOfEdges = (g) => {
    return  Object.keys(g._edgeObjs).length;
}

