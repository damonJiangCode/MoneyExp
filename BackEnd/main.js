const { app, Menu, MenuItem, BrowserWindow } = require('electron')
const { dir } = require('node:console')
const path = require('node:path')

const isMac = process.platform === 'darwin'

const menuTemplate = [
  // PAWN
  {
    label: 'PAWN',
    submenu: [
      new MenuItem({
        label: 'Clients',
        click: () => {
          const clientWindow = new BrowserWindow({ width: 888, height: 666 });
          clientWindow.loadFile(path.join(__dirname, '../FrontEnd/clients.html'));
          clientWindow.setMenu(null); 
        },
        accelerator: process.platform === 'darwin' ? 'Cmd+Alt+C' : 'Ctrl+Alt+C', // Optional keyboard shortcut
        enabled: true, // Enable or disable the menu item
        visible: true, // Show or hide the menu item
        // role: customRole, // Assign your custom role here
      }),
      new MenuItem({
        label: 'Expire Tickets',
        click: () => {
          // Custom action when this item is clicked
        },
        accelerator: process.platform === 'darwin' ? 'Cmd+Alt+E' : 'Ctrl+Alt+E', // Optional keyboard shortcut
        enabled: true, // Enable or disable the menu item
        visible: true, // Show or hide the menu item
        // role: customRole, // Assign your custom role here
      }),
      new MenuItem({
        label: 'Stolen Items',
        click: () => {
          // Custom action when this item is clicked
        },
        accelerator: process.platform === 'darwin' ? 'Cmd+Alt+S' : 'Ctrl+Alt+S', // Optional keyboard shortcut
        enabled: true, // Enable or disable the menu item
        visible: true, // Show or hide the menu item
        // role: customRole, // Assign your custom role here
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
      // new MenuItem({
      //   label: 'Clients',
      //   click: () => {
      //     // Custom action when this item is clicked
      //   },
      //   accelerator: process.platform === 'darwin' ? 'Cmd+Alt+C' : 'Ctrl+Alt+C', // Optional keyboard shortcut
      //   enabled: true, // Enable or disable the menu item
      //   visible: true, // Show or hide the menu item
      //   // role: customRole, // Assign your custom role here
      // }),
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
        accelerator: process.platform === 'darwin' ? 'Cmd+Alt+O' : 'Ctrl+Alt+O', // Optional keyboard shortcut
        enabled: true, // Enable or disable the menu item
        visible: true, // Show or hide the menu item
        // role: customRole, // Assign your custom role here
      }),
      new MenuItem({
        label: 'Pawn Reports',
        click: () => {
          // Custom action when this item is clicked
        },
        accelerator: process.platform === 'darwin' ? 'Cmd+Alt+P' : 'Ctrl+Alt+P', // Optional keyboard shortcut
        enabled: true, // Enable or disable the menu item
        visible: true, // Show or hide the menu item
        // role: customRole, // Assign your custom role here
      }),
      new MenuItem({
        label: 'Buy Back Reports',
        click: () => {
          // Custom action when this item is clicked
        },
        accelerator: process.platform === 'darwin' ? 'Cmd+Alt+B' : 'Ctrl+Alt+B', // Optional keyboard shortcut
        enabled: true, // Enable or disable the menu item
        visible: true, // Show or hide the menu item
        // role: customRole, // Assign your custom role here
      }),
      new MenuItem({
        label: 'Interest Reports',
        click: () => {
          // Custom action when this item is clicked
        },
        accelerator: process.platform === 'darwin' ? 'Cmd+Alt+I' : 'Ctrl+Alt+I', // Optional keyboard shortcut
        enabled: true, // Enable or disable the menu item
        visible: true, // Show or hide the menu item
        // role: customRole, // Assign your custom role here
      }),
      new MenuItem({
        label: 'Total Reports',
        click: () => {
          // Custom action when this item is clicked
        },
        accelerator: process.platform === 'darwin' ? 'Cmd+Alt+T' : 'Ctrl+Alt+T', // Optional keyboard shortcut
        enabled: true, // Enable or disable the menu item
        visible: true, // Show or hide the menu item
        // role: customRole, // Assign your custom role here
      }),
      new MenuItem({
        label: 'XML Reports',
        click: () => {
          // Custom action when this item is clicked
        },
        accelerator: process.platform === 'darwin' ? 'Cmd+Alt+X' : 'Ctrl+Alt+X', // Optional keyboard shortcut
        enabled: true, // Enable or disable the menu item
        visible: true, // Show or hide the menu item
        // role: customRole, // Assign your custom role here
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
        enabled: true, // Enable or disable the menu item
        visible: true, // Show or hide the menu item
        // role: customRole, // Assign your custom role here
      }),
      new MenuItem({
        label: 'IDTypes',
        click: () => {
          // Custom action when this item is clicked
        },
        enabled: true, // Enable or disable the menu item
        visible: true, // Show or hide the menu item
        // role: customRole, // Assign your custom role here
      }),
      new MenuItem({
        label: 'Codes',
        click: () => {
          // Custom action when this item is clicked
        },
        enabled: true, // Enable or disable the menu item
        visible: true, // Show or hide the menu item
        // role: customRole, // Assign your custom role here
      }),
      new MenuItem({
        label: 'Printer',
        click: () => {
          // Custom action when this item is clicked
        },
        enabled: true, // Enable or disable the menu item
        visible: true, // Show or hide the menu item
        // role: customRole, // Assign your custom role here
      }),
    ]
  }
]
if (isMac) {
  menuTemplate.unshift(
    {
      label: app.name,
      submenu: [
        { role: 'about' },
        { type: 'separator' },
        { role: 'services' },
        { type: 'separator' },
        { role: 'hide' },
        { role: 'hideOthers' },
        { role: 'unhide' },
        { type: 'separator' },
        { role: 'quit' }
      ]
    },
    {
      label: 'Edit',
      submenu: [
        // Add your edit menu items here
      ]
    },
    {
      role: 'viewMenu'
    },
    {
      label: 'Window',
      submenu: [
        { role: 'minimize' },
        { role: 'zoom' },
        { type: 'separator' },
        { role: 'front' }
      ]
    }
  );
}
const menu = Menu.buildFromTemplate(menuTemplate)
Menu.setApplicationMenu(menu)


const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    // webPreferences: {
    //   preload: path.join(__dirname, 'preload.js')
    // }
  })

  win.loadFile(path.join(__dirname, '../FrontEnd/index.html'))
}

app.whenReady().then(() => {
    createWindow()

    app.on('window-all-closed', () => {
        if (!isMac) {
          app.quit()
        }
    })
})

