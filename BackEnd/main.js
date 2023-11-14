// main.js

const { app, ipcMain } = require('electron');
const createMenu = require('./menu');
const windowsModule = require('./windows');
const ipcHandlersModule = require('./ipcHandlers');

app.whenReady().then(() => {
    createMenu();
    windowsModule.createEntryWindow();
    const mainScriptPath = process.argv[1];
    console.log(`The main script file is: ${mainScriptPath}`);
    ipcMain.on('search-client', ipcHandlersModule.handleClientSearch);
});
