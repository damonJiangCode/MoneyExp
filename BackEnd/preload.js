// preload.js

const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  clientSearch: (nameSet) => ipcRenderer.send('search-client', nameSet),
  get: (callback) => {console.log('Setting up search-client-result event handler in preload')
  ipcRenderer.on('search-client-result', callback)}
})
