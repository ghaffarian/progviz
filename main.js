'use strict';

const {app, BrowserWindow, Menu} = require('electron')
const url = require('url')
const path = require('path')
const {ipcMain} = require('electron')
const electron = require('electron')



let win

function createWindow() {
   win = new BrowserWindow({width: 800, height: 600})
   var screenElectron = electron.screen;
   let mainScreen = screenElectron.getPrimaryDisplay();
   let dimensions = mainScreen.size;
   // win.setSize(dimensions.width, dimensions.height);
   win.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
   }))
}

app.on('ready', createWindow)

ipcMain.on('openFile', (event, path) => {
      const {dialog} = require('electron')
      const fs = require('fs')
      dialog.showOpenDialog(function (fileNames) {
            // fileNames is an array that contains all the selected
          if(fileNames === undefined){
                  console.log("No file selected");
          }else{
                  readFile(fileNames[0]);
          }
      });

      function readFile(filepath){
         fs.readFile(filepath, 'utf-8', (err, data) => {
            if(err){
               alert("An error ocurred reading the file :" + err.message)
               return
            }
            // handle the file content
            event.sender.send('fileData', data)
      })
      }
}) 


/*
*
menu
*
*/

const template = [
   {
      label: 'File',
      submenu: [
         {
            label: 'New',
            accelerator: "ctrl+n"
         },
         {
            label: 'Open'
         },
         {
            label: 'Exit',
            accelerator: "ctrl+q"
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
            label: 'Learn More',
         },
        {
            label: 'Check for updates'
        }
      ]
   }
]

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)
