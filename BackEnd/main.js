const { app, Menu, MenuItem, BrowserWindow } = require('electron')
const { dir } = require('node:console')
const path = require('node:path')


// check whether it is MAC
const isMac = process.platform === 'darwin'


// custom menu template
const menuTemplate = [
  // menu item: PAWN
  {
    label: 'PAWN',
    submenu: [
      // submenu item: Client
      new MenuItem({
        label: 'Client',
        click: () => {
          // Custom action when this item is clicked
        },
        accelerator: process.platform === 'darwin' ? 'Cmd+Alt+C' : 'Ctrl+Alt+C', // Optional keyboard shortcut
        enabled: true, // Enable or disable the menu item
        visible: true, // Show or hide the menu item
        // role: customRole, // Assign your custom role here
      }),
      // submenu item: Expire Tickets
      new MenuItem({
        label: 'Expire Ticket',
        click: () => {
          // Custom action when this item is clicked
        },
        accelerator: process.platform === 'darwin' ? 'Cmd+Alt+E' : 'Ctrl+Alt+E', // Optional keyboard shortcut
        enabled: true, // Enable or disable the menu item
        visible: true, // Show or hide the menu item
        // role: customRole, // Assign your custom role here
      }),
      //  submenu item: Quit
      {
        role: 'quit'
      }
    ]
  },
  // menu item: LAYWAY
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
  // menu item: REPORTS
  {
    label: 'REPORT',
    submenu: [
      // submenu item: Overdue Report
      new MenuItem({
        label: 'Overdue Report',
        click: () => {
          // Custom action when this item is clicked
        },
        accelerator: process.platform === 'darwin' ? 'Cmd+Alt+O' : 'Ctrl+Alt+O', // Optional keyboard shortcut
        enabled: true, // Enable or disable the menu item
        visible: true, // Show or hide the menu item
        // role: customRole, // Assign your custom role here
      }),
      // submenu item: Pawn Report
      new MenuItem({
        label: 'Pawn Report',
        click: () => {
          // Custom action when this item is clicked
        },
        accelerator: process.platform === 'darwin' ? 'Cmd+Alt+P' : 'Ctrl+Alt+P', // Optional keyboard shortcut
        enabled: true, // Enable or disable the menu item
        visible: true, // Show or hide the menu item
        // role: customRole, // Assign your custom role here
      }),
      // submenu item: Buy Back Report
      new MenuItem({
        label: 'Buy Back Report',
        click: () => {
          // Custom action when this item is clicked
        },
        accelerator: process.platform === 'darwin' ? 'Cmd+Alt+B' : 'Ctrl+Alt+B', // Optional keyboard shortcut
        enabled: true, // Enable or disable the menu item
        visible: true, // Show or hide the menu item
        // role: customRole, // Assign your custom role here
      }),
      // submenu item: Interest Report
      new MenuItem({
        label: 'Interest Report',
        click: () => {
          // Custom action when this item is clicked
        },
        accelerator: process.platform === 'darwin' ? 'Cmd+Alt+I' : 'Ctrl+Alt+I', // Optional keyboard shortcut
        enabled: true, // Enable or disable the menu item
        visible: true, // Show or hide the menu item
        // role: customRole, // Assign your custom role here
      }),
      // submenu item: Summary Report
      new MenuItem({
        label: 'Summary Report',
        click: () => {
          // Custom action when this item is clicked
        },
        accelerator: process.platform === 'darwin' ? 'Cmd+Alt+S' : 'Ctrl+Alt+S', // Optional keyboard shortcut
        enabled: true, // Enable or disable the menu item
        visible: true, // Show or hide the menu item
        // role: customRole, // Assign your custom role here
      }),
      // submenu item: XML Report
      new MenuItem({
        label: 'XML Report',
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
  // menu item: SETTING
  {
    label: 'SETTING',
    submenu: [
      // submenu item: Employee
      new MenuItem({
        label: 'Employee',
        click: () => {
          // Custom action when this item is clicked
        },
        enabled: true, // Enable or disable the menu item
        visible: true, // Show or hide the menu item
        // role: customRole, // Assign your custom role here
      }),
      // submenu item: IDType
      new MenuItem({
        label: 'IDType',
        click: () => {
          // Custom action when this item is clicked
        },
        enabled: true, // Enable or disable the menu item
        visible: true, // Show or hide the menu item
        // role: customRole, // Assign your custom role here
      }),
      // submenu item: Code
      new MenuItem({
        label: 'Code',
        click: () => {
          // Custom action when this item is clicked
        },
        enabled: true, // Enable or disable the menu item
        visible: true, // Show or hide the menu item
        // role: customRole, // Assign your custom role here
      }),
      // submenu item: Printer
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
const menu = Menu.buildFromTemplate(menuTemplate)
Menu.setApplicationMenu(menu)


const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js')
      }
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

