const { app } = require('electron');
const createMenu = require('./menu');
const windowsModule = require('./windows');

app.whenReady().then(() => {
    createMenu();
    windowsModule.createEntryWindow();
});
