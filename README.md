## INIT Angular + Electron

Init Commands

```
1. ng new angelectron
2. cd angelectron
3. npm install electron --save-dev
```

Fix of *src/index.html* (blank page issue) `<base href="/"> to <base href="./">`

In the *package.json* add
1. `... "main": "main.js", ...`
2.	running scripts
	```
	"scripts": {
		"electron": "electron .",
		"electron-build": "ng build --prod && electron .",
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

**electron samples**

https://github.com/electron/electron-api-demos

https://github.com/hokein/electron-sample-apps (npm install -g electron)

**others**

https://github.com/sindresorhus/awesome-electron

**p5.js library**

https://p5js.org/

**jQWidgets**

https://jqwidgets.com/jquery-widgets-demo/showcasedemos/

**d3.js**

https://d3js.org/

