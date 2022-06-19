import React, { useState, useRef } from "react";
import "./App.css";
import ContentList from "./components/ContentList";
import Editor from "./components/Editor";
import dummy from "./resource/dummyData";

function App() {
  const [data, setData] = useState(dummy);

  // 새로운 항목 추가 id
  const dataId = useRef(4);
  const [isClick, setIsClick] = useState(false);
  const [id, setId] = useState("");
  const [isTitleClick, setIsTitleClick] = useState(false);

  // 글쓰기
  const onCreate = (title, content) => {
    const createdAt = new Date();
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
        />
      </div>
    </div>
  );
}

export default App;
