const { BrowserWindow} = require('electron');
const path = require('node:path');

let hasClientsWindow = 0;

function createEntryWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
    });

    win.loadFile(path.join(__dirname, "../FrontEnd/page/index.html"));
}

function createClientsWindow() {
    if (hasClientsWindow == 0) {
        const win = new BrowserWindow({
            width: 888,
            height: 666,
        });
    
        win.loadFile(path.join(__dirname, "../FrontEnd/page/clients.html"));
        win.setMenu(null);
        hasClientsWindow = 1;
    } else {
        
    }
    
}

// function createMainAndClientsWindows() {
//     createWindow('../FrontEnd/page/index.html');

//     app.on('window-all-closed', () => {
//         if (!app.isMac) {
//             app.quit();
//         }
//     });
// }

module.exports = { 
    createEntryWindow,
    createClientsWindow
 };
