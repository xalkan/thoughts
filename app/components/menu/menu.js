const electron = require('electron');
const { app, Menu } = electron;

const AddWindow = require('../addWindow/addWindow.js')

const menuTemplate = [
    {
        label: 'File',
        submenu: [
            {
                label: 'Think something new',
                accelerator: Command() + 'N',
                click(){
                    AddNewWindow();
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

if(process.platform == 'darwin'){
    menuTemplate.unshift({});
}

function AddNewWindow(){
    let addWindow = new AddWindow();
    addWindow.on('close', function(){
        addWindow = null;
    });
}

function Command(){
    return process.platform == 'darwin' ? 'Command+' : 'Ctrl+';
}

const menu = Menu.buildFromTemplate(menuTemplate);

module.exports = menu;