const electron = require('electron');
const url = require('url');
const path = require('path')

const { BrowserWindow } = electron;

const defaultProps = {
    width: 500,
    height: 200,
    title: 'New Thought',
    show: false,
    webPreferences: {
        nodeIntegration: true
    }
}

const template = 'addWindow.html';

class AddWindow extends BrowserWindow{
    constructor(...windowSettings){
        super({...defaultProps, ...windowSettings});

        let addWindowViewPath = url.format({
            pathname: path.join(__dirname, 'addWindow.html'),
            protocol: 'file:',
            slashes: true
        })

        this.loadURL(addWindowViewPath);

        // show when ready
        this.once('ready-to-show', () => {
            this.show();
        });

        this.removeMenu();
    }
    
}

module.exports = AddWindow;