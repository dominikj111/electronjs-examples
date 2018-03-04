## INIT Angular + Electron

Init Commands

```
1. ng new angelectron
2. cd angelectron
3. npm install electron --save-dev
```

Fix of *src/index.html* `<base href="/"> to <base href="./">`

In the *package.json* add 
	1. `... "main": "main.js", ...`
	2. ```
		"scripts": {
			"electron": "electron .",
			"electron": "ng build --prod && electron .",
		    ....
		},
	  ```

*main.js*

    const { app, BrowserWindow } = require('electron')
	const path = require('path')
	const url = require('url')

	let win

	function createWindow () {

	  win = new BrowserWindow({
	    width: 800,
	    height: 600,
	    backgroundColor: '#ffffff'
	  })

	  win.loadURL(url.format({
	    pathname: path.join(__dirname, '/dist/index.html'),
	    protocol: 'file:',
	    slashes: true
	  }))

	  // win.webContents.openDevTools()

	  win.on('closed', () => win = null)
	}

	app.on('ready', createWindow)

	app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit() })

	app.on('activate', () => { if (win === null) createWindow() })

## Resources

**sound machine**

https://medium.com/developers-writing/building-a-desktop-application-with-electron-204203eeb658

**electron api**

https://github.com/electron/electron/tree/master/docs/api
