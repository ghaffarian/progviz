const fuseJs = require('fuse.js');


module.exports.search = (g, query) => {


    let nodes = new Array();

    for (key in g._nodes) {
        let node = {};
        node['id'] = key;
        node['label'] = g._nodes[key].label;
        nodes.push(node);
    }

    let options = {
        keys: ['label']
    };
    let fuse = new fuseJs(nodes, options)

    let result = fuse.search(query);


    for (let i=0 ; i<result.length; i++) {
        g._nodes[result[i].id].style =  "fill : " + "red";
    }
    return g;

} 