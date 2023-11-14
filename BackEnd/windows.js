// windows.js

const { BrowserWindow} = require('electron');
const path = require('node:path');

let hasClientsWindow = false;

function createEntryWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "preload.js")
          }
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
    
        win.loadFile(path.join(__dirname, "../FrontEnd/page/clients.html"));
        win.setMenu(null);
        hasClientsWindow = true;

        win.on('closed', () => {
            hasClientsWindow = false;
        })
    } 
}

module.exports = { 
    createEntryWindow,
    createClientsWindow
 };
