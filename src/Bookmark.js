import React from "react";

const Bookmark = ({ title, link, description }) => {
  return (
    <div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="bookmark">
          <p className="bookmark-title">{title}</p>
          <p className="bookmark-description">{description}</p>
          <p className="bookmark-link">{link}</p>
        </div>
      </a>
    </div>
  );
};

export default Bookmark;
