import React from "react";
import ContentItem from "./ContentItem";
import "./ContentList.css";

function ContentList({
  diaryList,
  onDelete,
  handleTitleClick,
  onEdit,
  ids,
  isTitleClick,
  setIsTitleClick,
}) {
  const filtered = diaryList.filter((item) => item.id === Number(ids));

  return (
    <div className="list-container">
      {isTitleClick ? (
        <div>
          <div className="editor-box">
            <h1 className="show-title">{filtered[0]?.title}</h1>
            <div className="show-username">{filtered[0]?.username}</div>
            <div className="show-content">{filtered[0]?.content}</div>
          </div>
          <div className="button-container">
            <button className="editor-button" onClick={onDelete}>
              삭제
            </button>
            <button
              className="editor-button"
              onClick={() => setIsTitleClick(false)}
            >
              뒤로가기
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="list-header">
            <h2>Feeling Diary List</h2>
          </div>
          <div className="table">
            <div className="row-header">
              <div className="col">No</div>
              <div className="col">Title</div>
              <div className="col">Date</div>
            </div>

            {diaryList.map((item) => (
              <ContentItem
                key={item.id}
                {...item}
                handleTitleClick={handleTitleClick}
                onDelete={() => onDelete(item.id)}
                onEdit={onEdit}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ContentList;
