const { Menu, MenuItem, } = require('electron');
const path = require('node:path');
const windowsModule = require('./windows');


function createMenu() {
    // const isMac = process.platform === 'darwin';

    const menuTemplate = [
        // PAWN
        {
          label: 'PAWN',
          submenu: [
            new MenuItem({
              label: 'Clients',
              click: () => { windowsModule.createClientsWindow()},
              accelerator: process.platform === 'darwin' ? 'Cmd+Alt+C' : 'Ctrl+Alt+C', 
              enabled: true,
              visible: true, 
            }),
            new MenuItem({
              label: 'Expire Tickets',
              click: () => { handlesubmenuItemCLick("Expire Tickets")},
              accelerator: process.platform === 'darwin' ? 'Cmd+Alt+E' : 'Ctrl+Alt+E', 
              enabled: true, 
              visible: true, 
            }),
            new MenuItem({
              label: 'Stolen Items',
              click: () => { handlesubmenuItemCLick("Stolen Items") },
              accelerator: process.platform === 'darwin' ? 'Cmd+Alt+S' : 'Ctrl+Alt+S', 
              enabled: true, 
              visible: true, 
            }),
            {
              role: 'quit'
            }
          ]
        },
        // LAYWAY
        {
          label: 'LAYWAY',
          submenu: [
          ]
        },
        // REPORTS
        {
          label: 'REPORTS',
          submenu: [
            new MenuItem({
              label: 'Overdue Reports',
              click: () => {
                // Custom action when this item is clicked
              },
              accelerator: process.platform === 'darwin' ? 'Cmd+Alt+O' : 'Ctrl+Alt+O', 
              enabled: true, 
              visible: true, 
            }),
            new MenuItem({
              label: 'Pawn Reports',
              click: () => {
                // Custom action when this item is clicked
              },
              accelerator: process.platform === 'darwin' ? 'Cmd+Alt+P' : 'Ctrl+Alt+P', 
              enabled: true, 
              visible: true,
            }),
            new MenuItem({
              label: 'Buy Back Reports',
              click: () => {
                // Custom action when this item is clicked
              },
              accelerator: process.platform === 'darwin' ? 'Cmd+Alt+B' : 'Ctrl+Alt+B', 
              enabled: true, 
              visible: true, 
            }),
            new MenuItem({
              label: 'Interest Reports',
              click: () => {
                // Custom action when this item is clicked
              },
              accelerator: process.platform === 'darwin' ? 'Cmd+Alt+I' : 'Ctrl+Alt+I', 
              enabled: true, 
              visible: true, 
            }),
            new MenuItem({
              label: 'Total Reports',
              click: () => {
                // Custom action when this item is clicked
              },
              accelerator: process.platform === 'darwin' ? 'Cmd+Alt+T' : 'Ctrl+Alt+T', 
              enabled: true, 
              visible: true, 
            }),
            new MenuItem({
              label: 'XML Reports',
              click: () => {
                // Custom action when this item is clicked
              },
              accelerator: process.platform === 'darwin' ? 'Cmd+Alt+X' : 'Ctrl+Alt+X', 
              enabled: true, 
              visible: true, 
            }),
          ]
        },
        // SETTING
        {
          label: 'SETTINGS',
          submenu: [
            new MenuItem({
              label: 'Employees',
              click: () => {
                // Custom action when this item is clicked
              },
              enabled: true, 
              visible: true, 
            }),
            new MenuItem({
              label: 'IDTypes',
              click: () => {
                // Custom action when this item is clicked
              },
              enabled: true, 
              visible: true, 
            }),
            new MenuItem({
              label: 'Codes',
              click: () => {
                // Custom action when this item is clicked
              },
              enabled: true, 
              visible: true,
            }),
            new MenuItem({
              label: 'Printer',
              click: () => {
                // Custom action when this item is clicked
              },
              enabled: true, 
              visible: true, 
            }),
          ]
        }
      ]

    // if (isMac) {
    //     menuTemplate.unshift(
    //         // ... (Your existing Mac-specific menu items)
    //     );
    // }

    const menu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(menu);
}

module.exports = createMenu;
