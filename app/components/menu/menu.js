const electron = require('electron');
const { app, Menu, ipcMain } = electron;

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

// add an empty object in menu if platform is mac
if(process.platform == 'darwin'){
    menuTemplate.unshift({});
}

// add developer tools menu item if not in production
if(process.env.NODE_ENV != 'production'){
    menuTemplate.push({
        label: ' Developer Tools',
        submenu: [
            {
                label: 'Toggle Developer Tools',
                accelerator: Command() + 'I',
                click(item, focusedWindow){
                    focusedWindow.toggleDevTools();
                }
            },
            {
                role: 'reload'
            }
        ]
    })
}



function AddNewWindow(){
    let addWindow;
    
    

    addWindow = new AddWindow();
    addWindow.on('close', function(){
        addWindow = null;
    });
    
    ipcMain.on('item:close', function(e){
        const window = e.sender.getOwnerBrowserWindow();
        if(window != null){
            window.close();
        }
    })
}

function Command(){
    return process.platform == 'darwin' ? 'Command+' : 'Ctrl+';
}

const menu = Menu.buildFromTemplate(menuTemplate);

module.exports = menu;