const electron = require('electron');
const { app, Menu } = electron;

const AppWindow = require('../addWindow/addWindow.js')

const menuTemplate = [
    {
        label: 'File',
        submenu: [
            {
                label: 'Think something new',
                accelerator: Command() + 'N',
                click(){
                    let appWindow = new AppWindow();
                }
            },
            {
                label: 'Clear head',
                accelerator: Command() + 'C',
            },
            {
                label: 'Exit',
                accelerator: Command() + 'Q',
                click(){
                    app.quit();
                }
            }
        ]
    }
];

function Command(){
    return process.platform == 'darwin' ? 'Command+' : 'Ctrl+';
}

const menu = Menu.buildFromTemplate(menuTemplate);

module.exports = menu;