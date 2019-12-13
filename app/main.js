const electron = require('electron');
const url = require('url');
const path = require('path');

const menu = require('./components/menu/menu.js');

const { app, BrowserWindow, Menu, ipcMain } = electron;

process.env.NODE_ENV = 'production';

let mainWindow;

// listen for the app to be ready
app.on('ready', () => {
    // create new window
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    });

    // load html file into the window
    let mainWindowViewPath = url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file:',
        slashes: true
    });

    mainWindow.loadURL(mainWindowViewPath);

    mainWindow.on('closed', function(){
        app.quit();
    });

    Menu.setApplicationMenu(menu);

});

ipcMain.on('item:add', function(e, thought){
    // On getting text from addWindow renderer, send it to mainWindow renderer
    mainWindow.webContents.send('item:add', thought);
});
