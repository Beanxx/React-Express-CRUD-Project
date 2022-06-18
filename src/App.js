import React, { useState, useRef } from "react";
import "./App.css";
import ContentList from "./components/ContentList";
import Editor from "./components/Editor";
import dummy from "./resource/dummyData";

function App() {
  const [data, setData] = useState(dummy);
  const dataId = useRef(4);

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

  return (
    <div className="App">
      <header className="App-header">
        <h2>React-CRUD-Project</h2>
      </header>
      <div className="container">
        <ContentList diaryList={data} />
        <Editor onCreate={onCreate} />
      </div>
    </div>
  );
}

export default App;
