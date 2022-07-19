import React from "react";

function ContentItem({ id, username, title, createdAt, handleTitleClick }) {
  return (
    <div className="row">
      <div className="col">{id}</div>
      {/* <div className="col">{username}</div> */}
      <div className="col" onClick={handleTitleClick} id={id}>
        {title}
      </div>
      <div className="col">{createdAt}</div>
      {/* new Date(createdAt).toLocaleDateString() */}
    </div>
  );
}

export default ContentItem;
