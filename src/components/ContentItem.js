import React from "react";

function ContentItem({ id, username, title, createdAt }) {
  return (
    <div className="row">
      <div className="col">{id}</div>
      <div className="col">{username}</div>
      <div className="col">{title}</div>
      <div className="col">{new Date(createdAt).toLocaleDateString()}</div>
    </div>
  );
}

export default ContentItem;
