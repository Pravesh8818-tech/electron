const { app, BrowserWindow } = require('electron');


  function createWindow()
  {
  	const mainWindow = new BrowserWindow({
  		width:500, height:600,
  		alwaysOnTop:true,
  		//frame:false,
  		backgroundColor:"#fff",
  		webPreferences:{
  			nodeIntegration:true
  		}
  	})
  	mainWindow.loadFile("index.html")
  	//Open dev tool
  	// mainWindow.webContents.openDevTools(); ctrl+shift+i

	// main process , render process 
	// Main process Electron jis js file par load hota hai vaha run hota hai, and render process html par run hota hai, means main process backend me run hota hai.
	  

	// Browser window properties

  }

  app.whenReady().then(createWindow);
