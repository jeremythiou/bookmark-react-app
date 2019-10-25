import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

const Bookmark = ({ title, link, description }) => {
  return (
    <div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="d-flex align-items-center justify-content-around">
          <div className="pl-2">{title}</div>
          <div className="pl-2">{description}</div>
          <div className="pl-2">{link}</div>
        </div>
      </a>
    </div>
  );
};

export default Bookmark;
