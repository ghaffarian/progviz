var themeBoolean = true; //true for light

function openSideBar() {
    document.getElementById("mySidebar").style.width = "7em";
}
function closeSideBar() {
    document.getElementById("mySidebar").style.width = "0";
}

function openInfoBar() {
    document.getElementById("myInfoBar").style.width = "20em";
}
function closeInfoBar() {
    document.getElementById("myInfoBar").style.width = "0";
}

function closeSetting() {
    document.getElementById('settingModal').style.display= "none";
}
function openSetting() {
    document.getElementById('settingModal').style.display="block";
}

function lightTheme() {
    w3.addClass('#bodyID','w3-light-gray');

    //left sideBar icon change theme
    w3.removeClass('#leftSideBarIcon','w3-hover-teal');
    w3.addClass('#leftSideBarIcon', 'w3-hover-blue');
    w3.removeClass('#leftSideBarIcon','w3-text-teal');
    w3.addClass('#leftSideBarIcon', 'w3-text-blue');
    w3.removeClass('#leftSideBarIcon','w3-hover-text-dark-gray');
    w3.addClass('#leftSideBarIcon', 'w3-hover-text-white');

    //left sideBar change theme
    document.getElementById('mySidebar').style.backgroundColor= "#ffffff";

    //browse button change theme
    w3.removeClass('#browse', 'w3-text-white');
    w3.addClass('#browse','w3-text-blue');
    w3.removeClass('#browse','w3-hover-teal');
    w3.addClass('#browse', 'w3-hover-blue');
    w3.removeClass('#browse','w3-hover-text-dark-gray');
    w3.addClass('#browse', 'w3-hover-text-white');

    //shot button change theme
    w3.removeClass('#shot', 'w3-text-white');
    w3.addClass('#shot','w3-text-blue');
    w3.removeClass('#shot','w3-hover-teal');
    w3.addClass('#shot', 'w3-hover-blue');
    w3.removeClass('#shot','w3-hover-text-dark-gray');
    w3.addClass('#shot', 'w3-hover-text-white');

    //zoomIn button change theme
    w3.removeClass('#zoomIn', 'w3-text-white');
    w3.addClass('#zoomIn','w3-text-blue');
    w3.removeClass('#zoomIn','w3-hover-teal');
    w3.addClass('#zoomIn', 'w3-hover-blue');
    w3.removeClass('#zoomIn','w3-hover-text-dark-gray');
    w3.addClass('#zoomIn', 'w3-hover-text-white');

    //zoomOut button change theme
    w3.removeClass('#zoomOut', 'w3-text-white');
    w3.addClass('#zoomOut','w3-text-blue');
    w3.removeClass('#zoomOut','w3-hover-teal');
    w3.addClass('#zoomOut', 'w3-hover-blue');
    w3.removeClass('#zoomOut','w3-hover-text-dark-gray');
    w3.addClass('#zoomOut', 'w3-hover-text-white');

    //setting button change theme
    w3.removeClass('#setting', 'w3-text-white');
    w3.addClass('#setting','w3-text-blue');
    w3.removeClass('#setting','w3-hover-teal');
    w3.addClass('#setting', 'w3-hover-blue');
    w3.removeClass('#setting','w3-hover-text-dark-gray');
    w3.addClass('#setting', 'w3-hover-text-white');


    //setting modal change theme 
    w3.removeClass('#settingContent','w3-dark-gray');

    w3.removeClass('#settingHeader','w3-teal');
    w3.addClass('#settingHeader', 'w3-blue');

    w3.removeClass('#settingFooter','w3-teal');
    w3.addClass('#settingFooter', 'w3-blue');

    w3.removeClass('#settingConfirmButton','w3-teal');
    w3.addClass('#settingConfirmButton', 'w3-blue');
    w3.removeClass('#settingConfirmButton','w3-hover-text-teal');
    w3.addClass('#settingConfirmButton', 'w3-hover-text-blue');

    w3.removeClass('#lightTheme','w3-light-gray');
    w3.addClass('#lightTheme','w3-blue');

    w3.removeClass('#darkTheme','w3-blue');
    w3.addClass('#darkTheme','w3-light-gray');

    w3.removeClass('#lightTheme','w3-hover-teal');
    w3.addClass('#lightTheme','w3-hover-blue');
    w3.removeClass('#darkTheme','w3-hover-teal');
    w3.addClass('#darkTheme','w3-hover-blue');

    themeBoolean = true;

    //language setting section change theme
    if(document.getElementById('persianLanguage').classList.contains("w3-teal")) {
        w3.removeClass('#persianLanguage','w3-teal');
        w3.addClass('#persianLanguage','w3-blue');

        w3.removeClass('#englishLanguage','w3-hover-teal');
        w3.addClass('#englishLanguage','w3-hover-blue');
        w3.removeClass('#persianLanguage','w3-hover-teal');
        w3.addClass('#persianLanguage','w3-hover-blue');
    }
    else {
        w3.removeClass('#englishLanguage','w3-teal');
        w3.addClass('#englishLanguage','w3-blue');

        w3.removeClass('#englishLanguage','w3-hover-teal');
        w3.addClass('#englishLanguage','w3-hover-blue');
        w3.removeClass('#persianLanguage','w3-hover-teal');
        w3.addClass('#persianLanguage','w3-hover-blue');
    }


    //search button change theme
    w3.removeClass('#search', 'w3-text-white');
    w3.addClass('#search','w3-text-blue');
    w3.removeClass('#search','w3-hover-teal');
    w3.addClass('#search', 'w3-hover-blue');
    w3.removeClass('#search','w3-hover-text-dark-gray');
    w3.addClass('#search', 'w3-hover-text-white');

    //home button change theme
    w3.removeClass('#home', 'w3-text-white');
    w3.addClass('#home','w3-text-blue');
    w3.removeClass('#home','w3-hover-teal');
    w3.addClass('#home', 'w3-hover-blue');
    w3.removeClass('#home','w3-hover-text-dark-gray');
    w3.addClass('#home', 'w3-hover-text-white');

    //closeLeftSideBar button change theme
    w3.removeClass('#closeLeftSideBar', 'w3-text-white');
    w3.addClass('#closeLeftSideBar','w3-text-blue');
    w3.removeClass('#closeLeftSideBar','w3-hover-teal');
    w3.addClass('#closeLeftSideBar', 'w3-hover-blue');
    w3.removeClass('#closeLeftSideBar','w3-hover-text-dark-gray');
    w3.addClass('#closeLeftSideBar', 'w3-hover-text-white');

    //right sideBar icon change theme
    w3.removeClass('#rightSideBarIcon','w3-hover-teal');
    w3.addClass('#rightSideBarIcon', 'w3-hover-blue');
    w3.removeClass('#rightSideBarIcon','w3-hover-text-dark-gray');
    w3.addClass('#rightSideBarIcon', 'w3-hover-text-white');
    w3.removeClass('#rightSideBarIcon','w3-text-teal');
    w3.addClass('#rightSideBarIcon', 'w3-text-blue');

    //right sideBar change theme
    w3.removeClass('#myInfoBar','w3-teal');
    w3.addClass('#myInfoBar', 'w3-blue');

    //closeRightSideBar button change theme
    w3.removeClass('#closeRightSideBar','w3-hover-teal');
    w3.addClass('#closeRightSideBar', 'w3-hover-blue');
    w3.removeClass('#closeRightSideBar','w3-hover-text-dark-gray');
    w3.addClass('#closeRightSideBar', 'w3-hover-text-white');
}
function darkTheme() {
    w3.removeClass('#bodyID','w3-light-gray');
    document.getElementById('bodyID').style.backgroundColor= "#252526";

    //left sideBar icon change theme
    w3.removeClass('#leftSideBarIcon','w3-hover-blue');
    w3.addClass('#leftSideBarIcon', 'w3-hover-teal');
    w3.removeClass('#leftSideBarIcon','w3-text-blue');
    w3.addClass('#leftSideBarIcon', 'w3-text-teal');
    w3.removeClass('#leftSideBarIcon','w3-hover-text-white');
    w3.addClass('#leftSideBarIcon', 'w3-hover-text-dark-gray');

    //left sideBar change theme
    document.getElementById('mySidebar').style.backgroundColor= "#333333";

    //browse button change theme
    w3.removeClass('#browse','w3-text-blue');
    w3.addClass('#browse', 'w3-text-white');
    w3.removeClass('#browse','w3-hover-blue');
    w3.addClass('#browse', 'w3-hover-teal');
    w3.removeClass('#browse','w3-hover-text-white');
    w3.addClass('#browse', 'w3-hover-text-dark-gray');

    //shot button change theme
    w3.removeClass('#shot','w3-text-blue');
    w3.addClass('#shot', 'w3-text-white');
    w3.removeClass('#shot','w3-hover-blue');
    w3.addClass('#shot', 'w3-hover-teal');
    w3.removeClass('#shot','w3-hover-text-white');
    w3.addClass('#shot', 'w3-hover-text-dark-gray');
    
    //zoomIn button change theme
    w3.removeClass('#zoomIn','w3-text-blue');
    w3.addClass('#zoomIn', 'w3-text-white');
    w3.removeClass('#zoomIn','w3-hover-blue');
    w3.addClass('#zoomIn', 'w3-hover-teal');
    w3.removeClass('#zoomIn','w3-hover-text-white');
    w3.addClass('#zoomIn', 'w3-hover-text-dark-gray');

    //zoomOut button change theme
    w3.removeClass('#zoomOut','w3-text-blue');
    w3.addClass('#zoomOut', 'w3-text-white');
    w3.removeClass('#zoomOut','w3-hover-blue');
    w3.addClass('#zoomOut', 'w3-hover-teal');
    w3.removeClass('#zoomOut','w3-hover-text-white');
    w3.addClass('#zoomOut', 'w3-hover-text-dark-gray');

    //setting button change theme
    w3.removeClass('#setting','w3-text-blue');
    w3.addClass('#setting', 'w3-text-white');
    w3.removeClass('#setting','w3-hover-blue');
    w3.addClass('#setting', 'w3-hover-teal');
    w3.removeClass('#setting','w3-hover-text-white');
    w3.addClass('#setting', 'w3-hover-text-dark-gray');


    //setting modal change theme 
    w3.addClass('#settingContent','w3-dark-gray');

    w3.removeClass('#settingHeader','w3-blue');
    w3.addClass('#settingHeader', 'w3-teal');

    w3.removeClass('#settingFooter','w3-blue');
    w3.addClass('#settingFooter', 'w3-teal');

    w3.removeClass('#settingConfirmButton','w3-blue');
    w3.addClass('#settingConfirmButton', 'w3-teal');
    w3.removeClass('#settingConfirmButton','w3-hover-text-blue');
    w3.addClass('#settingConfirmButton', 'w3-hover-text-teal');

    w3.removeClass('#darkTheme','w3-light-gray');
    w3.addClass('#darkTheme','w3-teal');

    w3.removeClass('#lightTheme','w3-blue');
    w3.addClass('#lightTheme','w3-light-gray');

    w3.removeClass('#lightTheme','w3-hover-blue');
    w3.addClass('#lightTheme','w3-hover-teal');
    w3.removeClass('#darkTheme','w3-hover-blue');
    w3.addClass('#darkTheme','w3-hover-teal');

    themeBoolean = false;

    //language setting section change theme
    if(document.getElementById('persianLanguage').classList.contains("w3-blue")) {
        w3.removeClass('#persianLanguage','w3-blue');
        w3.addClass('#persianLanguage','w3-teal');

        w3.removeClass('#englishLanguage','w3-hover-blue');
        w3.addClass('#englishLanguage','w3-hover-teal');
        w3.removeClass('#persianLanguage','w3-hover-blue');
        w3.addClass('#persianLanguage','w3-hover-teal');
    }
    else {
        w3.removeClass('#englishLanguage','w3-blue');
        w3.addClass('#englishLanguage','w3-teal');

        w3.removeClass('#englishLanguage','w3-hover-blue');
        w3.addClass('#englishLanguage','w3-hover-teal');
        w3.removeClass('#persianLanguage','w3-hover-blue');
        w3.addClass('#persianLanguage','w3-hover-teal');
    }


    //search button change theme
    w3.removeClass('#search','w3-text-blue');
    w3.addClass('#search', 'w3-text-white');
    w3.removeClass('#search','w3-hover-blue');
    w3.addClass('#search', 'w3-hover-teal');
    w3.removeClass('#search','w3-hover-text-white');
    w3.addClass('#search', 'w3-hover-text-dark-gray');

    //home button change theme
    w3.removeClass('#home', 'w3-text-blue');
    w3.addClass('#home','w3-text-white');
    w3.removeClass('#home','w3-hover-blue');
    w3.addClass('#home', 'w3-hover-teal');
    w3.removeClass('#home','w3-hover-text-white');
    w3.addClass('#home', 'w3-hover-text-dark-gray');

    //closeLeftSideBar button change theme
    w3.removeClass('#closeLeftSideBar','w3-text-blue');
    w3.addClass('#closeLeftSideBar', 'w3-text-white');
    w3.removeClass('#closeLeftSideBar','w3-hover-blue');
    w3.addClass('#closeLeftSideBar', 'w3-hover-teal');
    w3.removeClass('#closeLeftSideBar','w3-hover-text-white');
    w3.addClass('#closeLeftSideBar', 'w3-hover-text-dark-gray');

    //right sideBar icon change theme
    w3.removeClass('#rightSideBarIcon','w3-hover-blue');
    w3.addClass('#rightSideBarIcon', 'w3-hover-teal');
    w3.removeClass('#rightSideBarIcon','w3-text-blue');
    w3.addClass('#rightSideBarIcon', 'w3-text-teal');
    w3.removeClass('#rightSideBarIcon','w3-hover-text-white');
    w3.addClass('#rightSideBarIcon', 'w3-hover-text-dark-gray');

    //right sideBar change theme
    w3.removeClass('#myInfoBar','w3-blue');
    w3.addClass('#myInfoBar', 'w3-teal');

    //closeRightSideBar button change theme
    w3.removeClass('#closeRightSideBar','w3-hover-blue');
    w3.addClass('#closeRightSideBar', 'w3-hover-teal');
    w3.removeClass('#closeRightSideBar','w3-hover-text-white');
    w3.addClass('#closeRightSideBar', 'w3-hover-text-dark-gray');
}

function persian() {
    document.getElementById('themeLabel').innerText= ":تم برنامه";
    document.getElementById('lightTheme').innerText= "روشن";    
    document.getElementById('darkTheme').innerText= "تیره";
    document.getElementById('languageLabel').innerText= ":زبان";
    document.getElementById('englishLanguage').innerText= "انگلیسی";    
    document.getElementById('persianLanguage').innerText= "فارسی";
    document.getElementById('settingConfirmButton').innerText= "بستن";
    document.getElementById('settingHeaderLabel').innerText= "تنظیمات";

    document.getElementById('graphInfoLabel').style.textAlign = "right";
    document.getElementById('graphInfoLabel').innerText= ":اطلاعات گراف";

    document.getElementById('GraphNameLabel').style.textAlign = "right";
    document.getElementById('GraphNameLabel').innerText= ":نام";

    document.getElementById('nodeNameLabel').style.textAlign = "right";
    document.getElementById('nodeNameLabel').innerText= ":گره ها";
    
    document.getElementById('edgeNameLabel').style.textAlign = "right";
    document.getElementById('edgeNameLabel').innerText= ":یال ها";
    

    //setting modal section change color 
    w3.removeClass('#englishLanguage','w3-blue');
    w3.addClass('#englishLanguage','w3-light-gray');

    w3.removeClass('#persianLanguage','w3-light-gray');
    w3.addClass('#persianLanguage','w3-blue');

    //setting modal section change color 
    if(!themeBoolean) {
        w3.removeClass('#englishLanguage','w3-teal');
        w3.addClass('#englishLanguage','w3-light-gray');

        w3.removeClass('#persianLanguage','w3-light-gray');
        w3.addClass('#persianLanguage','w3-teal');
    }
    else {
        w3.removeClass('#englishLanguage','w3-blue');
        w3.addClass('#englishLanguage','w3-light-gray');

        w3.removeClass('#persianLanguage','w3-light-gray');
        w3.addClass('#persianLanguage','w3-blue');
    }
}
function english() {
    document.getElementById('themeLabel').innerText= "Theme:";
    document.getElementById('lightTheme').innerText= "Light";    
    document.getElementById('darkTheme').innerText= "Dark";
    document.getElementById('languageLabel').innerText= "Language:";
    document.getElementById('englishLanguage').innerText= "English";    
    document.getElementById('persianLanguage').innerText= "Persian";
    document.getElementById('settingConfirmButton').innerText= "Done!"; 
    document.getElementById('settingHeaderLabel').innerText= "Setting";

    document.getElementById('graphInfoLabel').style.textAlign = "left";
    document.getElementById('graphInfoLabel').innerText= "Graph info:";

    document.getElementById('GraphNameLabel').style.textAlign = "left";
    document.getElementById('GraphNameLabel').innerText= "Name:";

    document.getElementById('nodeNameLabel').style.textAlign = "left";
    document.getElementById('nodeNameLabel').innerText= "Nodes:";
    
    document.getElementById('edgeNameLabel').style.textAlign = "left";
    document.getElementById('edgeNameLabel').innerText= "Edges:";


    //setting modal section change color 
    if(themeBoolean) {
        w3.removeClass('#persianLanguage','w3-blue');
        w3.addClass('#persianLanguage','w3-light-gray');

        w3.removeClass('#englishLanguage','w3-light-gray');
        w3.addClass('#englishLanguage','w3-blue');
    }
    else {
        w3.removeClass('#persianLanguage','w3-teal');
        w3.addClass('#persianLanguage','w3-light-gray');

        w3.removeClass('#englishLanguage','w3-light-gray');
        w3.addClass('#englishLanguage','w3-teal');
    }
}