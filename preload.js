const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  notificationApi: {
    sendNotification(title, message) {
      ipcRenderer.send("notification", title, message);
    },
  },
  batteryApi: {},
  filesApi: {},
});
