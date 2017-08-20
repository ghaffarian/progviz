
let graph = {
    nodes: [],
    edges: []
};


module.exports.createGraph = (dotString) => {
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

}

module.exports.getGraph = () => graph; 

