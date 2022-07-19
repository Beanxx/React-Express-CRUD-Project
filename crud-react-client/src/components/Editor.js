import React, { useState, useRef } from "react";
import "./Editor.css";
import Button from "./Button";

function Editor({
  diaryList,
  onCreate,
  isClick,
  setIsClick,
  onDelete,
  ids,
  isTitleClick,
  isEdit,
  setEditContent,
  editContent,
  toggleIsEdit,
  handleQuitEdit,
  onEdit,
  setEditTitle,
  editTitle,
}) {
  const titleInput = useRef();
  const contentInput = useRef();
  const editTitleInput = useRef();
  const editContentInput = useRef();

  // const [editTitle, setEditTitle] = useState(diaryList.title);
  // const [editContent, setEditContent] = useState(diaryList.content);

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
  // title 눌렀을 때 id가 같은 data filtering
  // const filtered = diaryList.filter((item) => item.id === Number(ids));

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
        {/* <button className="editor-button" onClick={handleCancel}>
          취소
        </button> */}
        {/* <button className="editor-button" onClick={handleSubmit}>
          저장
        </button> */}
      </div>
      {/* {isEdit ? (
        <div className="editor-box">
          <input
            className="editor-title"
            name="title"
            type="text"
            value={editTitle}
            ref={editTitleInput}
            onChange={(e) => setEditTitle(e.target.value)}
            placeholder="제목 수정 바람"
          />
          <textarea
            className="editor-content"
            name="content"
            ref={editContentInput}
            type="text"
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            placeholder="내용 수정 바람"
          />
        </div>
      ) : isClick ? (
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
            placeholder="내용을 작성하세요.."
          />
        </div>
      ) : isTitleClick ? (
        <div className="editor-box">
          <h1 className="show-title">{filtered[0]?.title}</h1>
          <div className="show-username">{filtered[0]?.username}</div>
          <div className="show-content">{filtered[0]?.content}</div>
        </div>
      ) : (
        <div className="editor-box">
          <h1 className="show-title">{diaryList[0]?.title}</h1>
          <div className="show-username">{diaryList[0]?.username}</div>
          <div className="show-content">{diaryList[0]?.content}</div>
        </div>
      )}

      {isEdit ? (
        <div className="button-container">
          <button className="editor-button" onClick={handleQuitEdit}>
            취소
          </button>
          <button className="editor-button" onClick={handleEdit}>
            수정 완료
          </button>
        </div>
      ) : isClick ? (
        <div className="button-container">
          <button className="editor-button" onClick={() => setIsClick(false)}>
            취소
          </button>
          <button className="editor-button" onClick={handleSubmit}>
            저장
          </button>
        </div>
      ) : isTitleClick ? (
        <div className="button-container">
          <button className="editor-button" onClick={toggleIsEdit}>
            수정
          </button>
          <button className="editor-button" onClick={onDelete}>
            삭제
          </button>
        </div>
      ) : (
        <div></div>
      )} */}
    </div>
  );
}

export default Editor;
