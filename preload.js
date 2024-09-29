// preload.js
console.log("Preload script running...");

const { contextBridge, ipcRenderer } = require('electron')
const path = require('path');

// Expose safe APIs to the renderer process
contextBridge.exposeInMainWorld('electron', {
  getVideoPath: (video) => path.join(__dirname, 'dist', video),

  sendMessage: (channel, data) => {
    // You can whitelist channels here if needed
    let validChannels = ['toMain']
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data)
    }
  },
  receiveMessage: (channel, func) => {
    let validChannels = ['fromMain']
    if (validChannels.includes(channel)) {
      // Deliberately strip event as it includes `sender`
      ipcRenderer.on(channel, (event, ...args) => func(...args))
    }
  }
})
