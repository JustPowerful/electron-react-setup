import React from "react";

export default function App() {
  return (
    <div>
      <h1>Click on the notification</h1>
      <button
        onClick={() => {
          electron.notificationApi.sendNotification("My custom notification!");
        }}
      >
        Click on me
      </button>
    </div>
  );
}
