import React, { useState, useRef } from "react";
import "./Editor.css";

function Editor({
  diaryList,
  id,
  onCreate,
  isClick,
  setIsClick,
  onDelete,
  ids,
  isTitleClick,
}) {
  const titleInput = useRef();
  const contentInput = useRef();

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

  // title 눌렀을 때 id가 같은 data filtering
  const filtered = diaryList.filter((item) => item.id === Number(ids));

  return (
    <div className="editor-container">
      {isClick ? (
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
          <div className="show-content">{filtered[0]?.content}</div>
        </div>
      ) : (
        <div className="editor-box">
          <h1 className="show-title">{diaryList[0].title}</h1>
          <div className="show-content">{diaryList[0].content}</div>
        </div>
      )}

      {isClick ? (
        <div className="button-container">
          <button className="editor-button" onClick={() => setIsClick(true)}>
            취소
          </button>
          <button className="editor-button" onClick={handleSubmit}>
            저장
          </button>
        </div>
      ) : isTitleClick ? (
        <div className="button-container">
          <button
            className="editor-button"
            onClick={() => {
              alert("수정 완료");
            }}
          >
            수정
          </button>
          <button className="editor-button" onClick={onDelete}>
            삭제
          </button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Editor;
