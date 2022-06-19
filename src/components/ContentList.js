import React, { useState } from "react";
import ContentItem from "./ContentItem";
import "./ContentList.css";

function ContentList({ diaryList, onCreateClick, onDelete, handleTitleClick }) {
  // const [filteredDiary, setFilteredDiary] = useState(diaryList);
  // const [id, setId] = useState(1);
  // const [isFiltered, setIsFiltered] = useState(false);

  return (
    <div className="list-container">
      <div className="list-header">
        <span className="logo-span">🐾</span>
        <h2>List</h2>
        <button className="write-button" onClick={onCreateClick}>
          글쓰기
        </button>
      </div>
      <div className="table">
        <div className="row-header">
          <div className="col">번호</div>
          <div className="col">작성자</div>
          <div className="col">제목</div>
          <div className="col">날짜</div>
        </div>

        {diaryList.map((item) => (
          <ContentItem
            key={item.id}
            {...item}
            handleTitleClick={handleTitleClick}
            onDelete={() => onDelete(item.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default ContentList;
