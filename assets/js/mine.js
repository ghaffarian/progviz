

fs = require('fs');
var setting = JSON.parse(fs.readFileSync(__dirname + '/setting.json'));


var scaleCount = 1;



function openGraph(input) {
    document.getElementById('graphPic').src = input.files[0].path;
}