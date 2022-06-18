import React, { useState, useRef } from "react";
import "./Editor.css";

function Editor({ onCreate }) {
  const titleInput = useRef();
  const contentInput = useRef();

  const [diary, setDiary] = useState({
    title: "",
    content: "",
  });

  const handleChangeDiary = (e) => {
    setDiary({
      ...diary,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (diary.title.length < 1) {
      titleInput.current.focus();
      alert("제목을 한글자 이상 써주세요.");
      return;
    }

    if (diary.content.length < 5) {
      contentInput.current.focus();
      alert("내용을 다섯글자 이상 써주세요.");
      return;
    }

    onCreate(diary.title, diary.content);
    alert("작성하신 글을 저장 완료하였습니다.");
    setDiary({
      title: "",
      content: "",
    });
  };

  return (
    <div className="editor-container">
      <input
        className="editor-title"
        name="title"
        type="text"
        value={diary.title}
        ref={titleInput}
        onChange={handleChangeDiary}
      />
      <textarea
        className="editor-content"
        name="content"
        type="text"
        value={diary.content}
        ref={contentInput}
        onChange={handleChangeDiary}
      />
      <div className="button-container">
        <button className="editor-button">취소</button>
        <button className="editor-button" onClick={handleSubmit}>
          저장
        </button>
      </div>
    </div>
  );
}

export default Editor;
