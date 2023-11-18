// windows.js

const { ipcMain, BrowserWindow} = require('electron');
const path = require('node:path');


let hasClientsWindow = false;

function createEntryWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        // webPreferences: {
        //     preload: path.join(__dirname, "preload.js")
        //   }
    });

    win.loadFile(path.join(__dirname, "../FrontEnd/page/index.html"));
}

function createClientsWindow() {
    if (!hasClientsWindow) {
        const win = new BrowserWindow({
            width: 888,
            height: 666,
            webPreferences: {
                preload: path.join(__dirname, "preload.js")
            }
        });
    
        ipcMain.on('search-client', (_event, nameSet) => {
            console.log(`windows.js: received from search-client: ${nameSet.firstName}`)
            win.webContents.send('search-client-result', nameSet.firstName)

          })

        win.loadFile(path.join(__dirname, "../FrontEnd/page/clients.html"))
        win.setMenu(null);
        hasClientsWindow = true;

        win.on('closed', () => {
            hasClientsWindow = false;
        })

        win.webContents.openDevTools()
    } 
}

module.exports = { 
    createEntryWindow,
    createClientsWindow
 }
