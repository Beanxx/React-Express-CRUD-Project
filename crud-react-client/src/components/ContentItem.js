import React from "react";

function ContentItem({ id, title, createdAt, handleTitleClick }) {
  return (
    <div className="row">
      <div className="col">{id}</div>
      <div className="col" onClick={handleTitleClick} id={id}>
        {title}
      </div>
      <div className="col">{createdAt}</div>
    </div>
  );
}

export default ContentItem;
