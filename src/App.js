import "bootstrap/dist/css/bootstrap.min.css";
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
    <div className="App container">
      <h1>Bookmarks List with React</h1>
      <div className="row">
        <div className="col-4">
          <form onSubmit={getSubmit} className="bookmarks-form">
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                className="form-control"
                id="title"
                type="text"
                value={title}
                onChange={updateTitle}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="link">Link</label>
              <input
                className="form-control"
                id="link"
                type="url"
                value={link}
                onChange={updateLink}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                className="form-control"
                id="description"
                rows="3"
                value={description}
                onChange={updateDescription}
              ></textarea>
            </div>
            <button className="btn btn-primary">Add new bookmark</button>
          </form>
        </div>
        <div className="col-8">
          {bookmarks.map(bookmark => {
            return (
              <div className="row shadow-sm p-3 mb-5 bg-white rounded">
                <Bookmark
                  key={bookmark.id}
                  title={bookmark.title}
                  link={bookmark.url}
                  description={bookmark.description}
                />
                <button
                  onClick={getValidationDelete}
                  className="col-2 btn btn-danger"
                >
                  Delete
                </button>

                <div className="bookmarks-delete-validation js-delete-validation">
                  <h5>
                    You are trying to delete the bookmark: {bookmark.title}. Are
                    you sure?
                  </h5>
                  <button
                    onClick={getDelete}
                    bookmarkid={bookmark.id}
                    deletebookmark="true"
                    className="btn btn-danger"
                  >
                    Yes, delete the bookmark!
                  </button>
                  <button
                    onClick={getDelete}
                    deletebookmark="false"
                    className="btn btn-secondary"
                  >
                    No, it was a mistake!
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
