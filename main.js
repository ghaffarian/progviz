const {app, BrowserWindow, Menu} = require('electron')
const url = require('url')
const path = require('path')
const electron = require('electron')

let win

function createWindow() {
   win = new BrowserWindow({width: 800, height: 600})
   var screenElectron = electron.screen;
   var mainScreen = screenElectron.getPrimaryDisplay();
   var dimensions = mainScreen.size;
   win.setSize(dimensions.width, dimensions.height);
   win.loadURL(url.format({
      pathname: path.join(__dirname, 'sigma.html'),
      protocol: 'file:',
      slashes: true
   }))
}



app.on('ready', createWindow)

const template = [
   {
      label: 'Edit',
      submenu: [
         {
            role: 'undo'
         },
         {
            role: 'redo'
         },
         {
            type: 'separator'
         },
         {
            role: 'cut'
         },
         {
            role: 'copy'
         },
         {
            role: 'paste'
         }
      ]
   },
   {
      label: 'View',
      submenu: [
         {
            role: 'reload'
         },
         {
            role: 'toggledevtools'
         },
         {
            type: 'separator'
         },
         {
            role: 'resetzoom'
         },
         {
            role: 'zoomin'
         },
         {
            role: 'zoomout'
         },
         {
            type: 'separator'
         },
         {
            role: 'togglefullscreen'
         }
      ]
   },
   {
      role: 'window',
      submenu: [
         {
            role: 'minimize'
         },
         {
            role: 'close'
         }
      ]
   },
   {
      role: 'help',
      submenu: [
         {
            label: 'Learn More'
         }
      ]
   }
]

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)
