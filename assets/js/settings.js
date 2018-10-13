var themeBoolean = true; //true for light
var languageBoolean = true; //true for english

function loadSetting() {
    if (setting.language == true) {
        languageBoolean = true;
        english();
    } else {
        languageBoolean = false;
        persian();
    }

    if (setting.theme == true) {
        themeBoolean = true;
        lightTheme();
    } else {
        themeBoolean = false;
        darkTheme();
    }
    console.log(JSON.stringify(setting));
}
function saveSetting() {
    fs.writeFile(__dirname + '/setting.json', JSON.stringify(setting));
}
loadSetting();