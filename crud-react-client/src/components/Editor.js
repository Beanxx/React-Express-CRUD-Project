import React, { useState, useRef } from "react";
import "./Editor.css";
import Button from "./Button";

function Editor({
  onCreate,
  setIsClick,
  ids,
  editContent,
  toggleIsEdit,
  onEdit,
  editTitle,
}) {
  const titleInput = useRef();
  const contentInput = useRef();
  const editContentInput = useRef();

  // 새로운 제목, 내용
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

  // 수정 완료 버튼 클릭
  const handleEdit = () => {
    if (editContent.length < 3) {
      editContentInput.current.focus();
      alert("내용을 세글자 이상 써주세요.");
      return;
    }
    onEdit(ids, editTitle, editContent);
    toggleIsEdit();
  };

  // 저장 버튼 클릭
  const handleSubmit = () => {
    if (diary.title.length < 1) {
      titleInput.current.focus();
      alert("제목을 한글자 이상 써주세요.");
      return;
    }

    if (diary.content.length < 3) {
      contentInput.current.focus();
      alert("내용을 세글자 이상 써주세요.");
      return;
    }

    onCreate(diary.title, diary.content);
    alert("작성하신 글을 저장하였습니다.");
    setDiary({
      title: "",
      content: "",
    });
    setIsClick(false);
  };

  // 취소 버튼 클릭
  const handleCancel = () => {
    alert("작성하신 글을 취소하였습니다.");
    setDiary({
      title: "",
      content: "",
    });
    setIsClick(false);
  };

  return (
    <div className="editor-container">
      <div className="editor-box">
        <input
          className="editor-title"
          name="title"
          type="text"
          value={diary.title}
          ref={titleInput}
          onChange={handleChangeDiary}
          placeholder="제목을 입력하세요"
        />
        <textarea
          className="editor-content"
          name="content"
          type="text"
          value={diary.content}
          ref={contentInput}
          onChange={handleChangeDiary}
          placeholder="오늘 하루, 느꼈던 감정을 자유롭게 메모해보세요.."
        />
      </div>
      <div className="button-container">
        <Button text="취소" onClick={handleCancel}></Button>
        <Button text="저장" onClick={handleSubmit}></Button>
      </div>
    </div>
  );
}

export default Editor;
