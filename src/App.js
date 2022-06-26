import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import ContentList from "./components/ContentList";
import Editor from "./components/Editor";

function App() {
  const url = "http://localhost:3001/diary";
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  // 새로운 항목 추가 id
  const dataId = useRef(4);
  const [id, setId] = useState("");
  // 글쓰기 버튼 클릭 상태
  const [isClick, setIsClick] = useState(false);
  // 목록 제목 클릭 상태
  const [isTitleClick, setIsTitleClick] = useState(false);
  // 수정 버튼 클릭 상태
  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => {
    setIsEdit(!isEdit);
  };

  // 수정할 내용 상태
  const [editTitle, setEditTitle] = useState(data.title);
  const [editContent, setEditContent] = useState(data.content);

  // 수정 취소
  const handleQuitEdit = () => {
    setIsEdit(false);
    setEditContent(data.content);
  };

  // 글쓰기
  const onCreate = (title, content) => {
    const createdAt = new Date().toLocaleDateString();
    const newItem = {
      id: dataId.current,
      username: "SooBin",
      title,
      content,
      createdAt,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  // 글쓰기 버튼 눌렀을 때 글쓰기 화면 활성화
  const onCreateClick = () => {
    setIsClick(!isClick);
  };

  // 글 삭제
  const onDelete = () => {
    const deletedDiary = data.filter((item) => item.id !== Number(id));
    setData(deletedDiary);
    setIsTitleClick(false);
  };

  // 글 수정 이벤트
  const onEdit = (id, newTitle, newContent) => {
    setData(
      data.map((item) =>
        item.id === Number(id)
          ? { ...item, title: newTitle, content: newContent }
          : item
      )
    );
  };

  // 목록 제목 클릭 이벤트
  const handleTitleClick = (e) => {
    setId(e.target.id);
    setIsTitleClick(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>React-CRUD-Project</h2>
      </header>
      <div className="container">
        <ContentList
          diaryList={data}
          onCreateClick={onCreateClick}
          onDelete={onDelete}
          handleTitleClick={handleTitleClick}
        />
        <Editor
          diaryList={data}
          onCreate={onCreate}
          isClick={isClick}
          isTitleClick={isTitleClick}
          setIsClick={setIsClick}
          onDelete={onDelete}
          handleTitleClick={handleTitleClick}
          ids={id}
          isEdit={isEdit}
          toggleIsEdit={toggleIsEdit}
          handleQuitEdit={handleQuitEdit}
          editContent={editContent}
          setEditContent={setEditContent}
          onEdit={onEdit}
          editTitle={editTitle}
          setEditTitle={setEditTitle}
        />
      </div>
    </div>
  );
}

export default App;
