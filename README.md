# ProGViz (Program Graph Visualizer)
ProGViz is a cross-platform graph-visualization desktop-application for visualizing well-known graphical representations of computer program source code such as [CFGs](https://en.wikipedia.org/wiki/Control_flow_graph), [PDGs](https://en.wikipedia.org/wiki/Program_Dependence_Graph), [ASTs](https://en.wikipedia.org/wiki/Abstract_syntax_tree), etc.

This program receives graphs in well-known file formats (such as [DOT](https://en.wikipedia.org/wiki/DOT_(graph_description_language)) and [JSON](https://en.wikipedia.org/wiki/JSON)) and produces a visualization of the graph which is both aesthetically appealing and easily usable for a human user to navigate and analyze the given graph.

It's main intended purpose is to be used by **program analysis experts** who require to visualize and analyze large and complex graphical representations of computer programs.

This is an internal project by a group of students of [Amirkabir University of Technology](http://aut.ac.ir), as a sub-project of the PhD thesis of [Seyed Mohammad Ghaffarian](http://linkedin.com/in/smghaffarian).

## Getting Started

To get started with development on Ubuntu, first install required packages:

```
sudo apt-get install nodejs npm
```

Clone the repository:

```
git clone https://github.com/ghaffarian/progviz.git
```

Now change to the cloned directory and install dependencies using npm:

```
cd progviz/

npm install
```

Now you can run the application using:

```
npm run start
```

After this, you can do your own development.
