const { app, BrowserWindow } = require('electron')
const { dir } = require('node:console')
const path = require('node:path')

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
        if (process.platform !== 'darwin') {
          app.quit()
          
        }
    })
})

