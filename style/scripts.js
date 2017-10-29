var w = screen.width ; 

function init(){
    // window.alert('bello');
    document.getElementById('controls').style.width = w/25 ;
    document.getElementById('svgGraph').style.left = w/25 ;
    
    var btns = [
        document.getElementById('openfile') ,
        document.getElementById('capture') ,
        document.getElementById('zoomin') ,
        document.getElementById('zoomout') ,
        document.getElementById('searchkey') ,
        document.getElementById('settings') 
    ];
    for (var i=0 ; i<btns.length ; i++) {
        btns[i].style.width = btns[i].style.height = w/25;
    }


}
function closeSearch(){
    var m = document.getElementById('searchBox');
    if(m.style.marginLeft!="-350px"){
        m.style.marginLeft = "-350px";
    }
    else{
        m.style.marginLeft = "0";
    }

}
function closeInfo(){
    var m = document.getElementById('info');
    var p = document.getElementById('propertiesList');
    if(m.style.marginRight!="-150px"){
        m.style.marginRight = "-150px";
        p.style.opacity = 0;
    }
    else{
        m.style.marginRight = "0";
        p.style.opacity = 1;
    }

}