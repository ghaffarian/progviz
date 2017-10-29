const remote = require('electron').remote
const dialog = remote.dialog;
const fs = require('fs')
const d3 = require('d3');
const graphDrawer = require(__dirname + '/src/graphDrawer.js');


let g;
function open_file() {
    document.getElementById('openfile').addEventListener("click", function () {

        dialog.showOpenDialog(function (fileNames) {
            // fileNames is an array that contains all the selected
            if (fileNames === undefined) {
                console.log("No file selected");
            } else {
                readFile(fileNames[0]);
            }
        });

        function readFile(filepath) {
            fs.readFile(filepath, 'utf-8', (err, data) => {
                if (err) {
                    alert("An error ocurred reading the file :" + err.message)
                    return
                }
                // handle the file content
                g = graphDrawer.draw(data);
            })
        }


    }, false);

}

const fuseSearch = require(__dirname + '/src/fuseSearch.js');

function submit_query() {

    document.getElementById('search').addEventListener("click", function () {

        for (let key in g._nodes) {
            g._nodes[key].style = "fill : " + "mediumSeaGreen";
        }

        
        let updated_g = fuseSearch.search(g, document.getElementById("inputForm").value);
        graphDrawer.drawGraph(updated_g);


    }, false);
}
