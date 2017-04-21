const electron = require('electron')
const ipcRenderer = electron.ipcRenderer

// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

document.getElementById("pingServer").onclick = function(event) {
   fetch('https://BRENDANFORS4110/').then(function(response) {
       debugger
   }).catch(function(err) {
       debugger
   })
}

ipcRenderer.on('certificate-error', (event,  { certificate, error, url }) => {
    debugger
    const message = 'oops, you need to trust this certificate!'
    ipcRenderer.send('show-certificate-trust-dialog', certificate, message )
})

ipcRenderer.on('some-result-from-certificate', (event) => {
    debugger
    console.log('the action completed')
})