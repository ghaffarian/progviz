# ProGViz (Program Graph Visualizer)
ProGViz is a cross-platform graph-visualization desktop-application for visualizing well-known graphical representations of computer program source code such as [CFGs](https://en.wikipedia.org/wiki/Control_flow_graph), [PDGs](https://en.wikipedia.org/wiki/Program_Dependence_Graph), [ASTs](https://en.wikipedia.org/wiki/Abstract_syntax_tree), etc.

This program receives graphs in well-known file formats (such as [DOT](https://en.wikipedia.org/wiki/DOT_(graph_description_language))) and produces a visualization of the graph which is both aesthetically appealing and easily usable for a human user to navigate and analyze the given graph.

It's main intended purpose is to be used by **program analysis experts** who require to visualize and analyze large and complex graphical representations of computer programs.

This is an internal project by a group of students of [Amirkabir University of Technology](http://aut.ac.ir), as a sub-project of the PhD thesis of [Seyed Mohammad Ghaffarian](http://linkedin.com/in/smghaffarian).

## Getting started
For starting the dependencies of the project should be installed with npm:

`npm install`

To launch the applcation type the following command:

`npm run start`

Due to the problem of dagre-d3 change some files after installing it:

In folder:node_modules/dagre-d3/lib:

In all of these below files change `d3 = require("./d3");` to `d3 = require("d3");`

create-edge-labels.js
create-edge-paths.js
create-nodes.js
position-clusters.js
position-edge-labels.js
position-nodes.js
