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

  const getDelete = event => {
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
            <button
              onClick={getDelete}
              bookmarkid={bookmark.id}
              className="bookmarks-btn"
            >
              Delete
            </button>
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
