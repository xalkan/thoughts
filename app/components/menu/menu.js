const electron = require('electron');
const { app, Menu } = electron;
 
const menuTemplate = [
    {
        label: 'File',
        submenu: [
            {
                label: 'Think something new',
                click(){
                    CreateAddWindow();
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