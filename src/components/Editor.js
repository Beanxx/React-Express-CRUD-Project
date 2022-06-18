import React from "react";
import "./Editor.css";

function Editor() {
  return (
    <div className="editor-container">
      <input className="editor-title" />
      <textarea className="editor-content" />
      <div className="button-container">
        <button className="editor-button">수정</button>
        <button className="editor-button">삭제</button>
      </div>
    </div>
  );
}

export default Editor;
