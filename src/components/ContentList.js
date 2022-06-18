import React from "react";
import "./ContentList.css";

function ContentList() {
  return (
    <div className="list-container">
      <div className="list-header">
        <span className="logo-span">🐾</span>
        <h2>목록</h2>
        <button className="write-button">글쓰기</button>
      </div>
      <div className="table">
        <div className="row-header">
          <div className="col">번호</div>
          <div className="col">제목</div>
          <div className="col">날짜</div>
        </div>
        <div className="row">
          <div className="col">1</div>
          <div className="col">제목입니다</div>
          <div className="col">22.06.18</div>
        </div>
      </div>
    </div>
  );
}

export default ContentList;
