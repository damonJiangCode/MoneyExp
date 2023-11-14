const {BrowserWindow} = require('electron');
const { join } = require('node:path');



function createEntryWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {devTools:true}
    });

    win.loadFile(join(__dirname, "../FrontEnd/page/index.html"));
}

function createClientsWindow() {

    let hasClientsWindow = false;
    return function () {
        if (!hasClientsWindow) {
            const win = new BrowserWindow({
                width: 888,
                height: 666,
                webPreferences: {devTools:true}
            });
        
            win.loadFile(join(__dirname, "../FrontEnd/page/clients.html"));
            win.setMenu(null);
            hasClientsWindow = true;
    
            win.on('closed', () => {
               hasClientsWindow = false;
            })
        } 
    }
    
}

module.exports = { 
    createEntryWindow,
    createClientsWindow
};
