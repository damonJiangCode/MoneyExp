// preload.js

const { ipcRenderer, contextBridge } = require('electron');

// Expose ipcRenderer to the renderer process
contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: ipcRenderer
});

