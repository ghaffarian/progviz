const dagreD3 = require('dagre-d3');

module.exports.change_node_color_onHover = (svg) => {

    svg.selectAll("g.node")
        .on("mouseover", handleMouseOver)
        .on("mouseout", handleMouseOut);

    // Create Event Handlers for mouse
    function handleMouseOver(d, i) {  // Add interactivity

        // Use D3 to select element, change color and size
        d3.select(this).attr({
            fill: "yellow",
            stroke : "yellow"
        });
    }

    function handleMouseOut(d, i) {
        // Use D3 to select element, change color back to normal
        d3.select(this).attr({
            fill: "black",
            stroke : null

        });

    }

}