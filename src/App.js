import React, { useState } from "react";
import "./App.css";
import Bookmark from "./Bookmark";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");

  const updateTitle = event => {
    setTitle(event.target.value);
  };

  const updateLink = event => {
    setLink(event.target.value);
  };

  const updateDescription = event => {
    setDescription(event.target.value);
  };

  const getSubmit = event => {
    event.preventDefault();
    setBookmarks(oldArray => [
      ...oldArray,
      { id: id, title: title, url: link, description: description }
    ]);
    setId(id + 1);
  };

  const getValidationDelete = event => {
    var validationDiv = event.target.parentNode.getElementsByClassName(
      "js-delete-validation"
    );
    validationDiv[0].style.display = "flex";
  };

  const getDelete = event => {
    var deleteBookmark = event.target.getAttribute("deletebookmark") === "true";

    if (!deleteBookmark) {
      event.target.parentNode.style.display = "none";
      return;
    }

    var array = [...bookmarks];
    var bookmaridInt = parseInt(event.target.getAttribute("bookmarkid"));
    var index = array.findIndex(bookmark => bookmark.id === bookmaridInt);

    if (index !== -1) {
      array.splice(index, 1);
      setBookmarks(array);
    }
  };

  return (
    <div className="App">
      <h1>Bookmarks List</h1>

      {bookmarks.map(bookmark => {
        return (
          <div>
            <Bookmark
              key={bookmark.id}
              title={bookmark.title}
              link={bookmark.url}
              description={bookmark.description}
            />
            <button onClick={getValidationDelete} className="bookmarks-btn">
              Delete
            </button>

            <div className="bookmarks-delete-validation js-delete-validation">
              <p>
                You are trying to delete the bookmark: {bookmark.title}. Are you
                sure?
              </p>
              <button
                onClick={getDelete}
                bookmarkid={bookmark.id}
                deletebookmark="true"
                className="bookmarks-btn"
              >
                Yes, delete the bookmark!
              </button>
              <button
                onClick={getDelete}
                deletebookmark="false"
                className="bookmarks-btn"
              >
                No, it is a mistake!
              </button>
            </div>
          </div>
        );
      })}

      <hr />
      <form onSubmit={getSubmit} className="bookmarks-form">
        <input
          className="bookmarks-form-input"
          type="text"
          value={title}
          onChange={updateTitle}
          required
        />
        <input
          className="bookmarks-form-input"
          type="url"
          value={link}
          onChange={updateLink}
          required
        />
        <input
          className="bookmarks-form-input"
          type="text"
          value={description}
          onChange={updateDescription}
        />
        <button className="bookmarks-btn">Add new bookmark</button>
      </form>
    </div>
  );
}

export default App;
