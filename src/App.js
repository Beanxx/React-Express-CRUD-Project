import React from "react";
import "./App.css";
import ContentList from "./components/ContentList";
import Editor from "./components/Editor";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>React-CRUD-Project</h2>
      </header>
      <div className="container">
        <ContentList />
        <Editor />
      </div>
    </div>
  );
}

export default App;
