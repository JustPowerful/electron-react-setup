import React, { useState } from "react";

export default function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <div>
      <h1>Set your notification:</h1>
      <input
        placeholder="Title"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <input
        placeholder="Content"
        value={content}
        onChange={(event) => {
          setContent(event.target.value);
        }}
      />
      <button
        onClick={() => {
          electron.notificationApi.sendNotification(title, content);
        }}
      >
        Click on me
      </button>
    </div>
  );
}
