// main.js

const { app, ipcMain, BrowserWindow } = require('electron');
const windowsModule = require('./windows');
// const ipcHandlersModule = require('./ipcHandlers');
const createMenu = require('./menu');

app.whenReady().then(() => {
    createMenu();
    windowsModule.createEntryWindow();
    // const mainScriptPath = process.argv[1];
    // console.log(`The main script file is: ${mainScriptPath}`);
    // ipcMain.on('search-client', ipcHandlersModule.handleClientSearch);
    // ipcMain.on('search-client', (event, dataSet) => {
    //     const webContents = event.sender
    //     const win = BrowserWindow.fromWebContents(webContents)
    //     win.sendClientSearchRequest(dataSet);
    //   })
});
