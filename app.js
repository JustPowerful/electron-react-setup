const { app, BrowserWindow, ipcMain, Notification } = require("electron");
const path = require("path");

const dev_env = "development";

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });
  win.loadFile("index.html");
};

if (dev_env === "development") {
  require("electron-reload")(__dirname, {
    electron: path.join(__dirname, "node_modules", ".bin", "electron"),
  });
}

ipcMain.on("notification", (event, message) => {
  new Notification({
    title: "A notification is here",
    body: "A new notification is displayed using electron api",
  }).show();
});

app.whenReady().then(() => {
  createWindow();
});
