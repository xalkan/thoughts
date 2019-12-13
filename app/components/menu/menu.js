const electron = require('electron');
const { app, Menu } = electron;

const AppWindow = require('../addWindow/addWindow.js')

const menuTemplate = [
    {
        label: 'File',
        submenu: [
            {
                label: 'Think something new',
                click(){
                    let appWindow = new AppWindow();
                }
            },
            {
                label: 'Clear head'
            },
            {
                label: 'Exit',
                click(){
                    app.quit();
                }
            }
        ]
    }
];

const menu = Menu.buildFromTemplate(menuTemplate);

module.exports = menu;