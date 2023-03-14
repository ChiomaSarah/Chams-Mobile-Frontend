import axios from "axios";
import React, { useState } from "react";

function UpdateMovie({ movie }) {
  const [id, setId] = useState(movie.id);
  const [title, setTitle] = useState(movie.title);
  const [director, setDirector] = useState(movie.director);
  const [genre, setGenre] = useState(movie.genre);
  const [year, setYear] = useState(movie.year);

  async function saveChanges(e) {
    try {
      e.preventDefault();
      const body = {
        id: id,
        title: title,
        director: director,
        genre: genre,
        year: year,
      };

      await axios.patch(
        `https://movie-app-wsmt.onrender.com/api/movies/${id}`,
        body
      );

      alert("Success: Updated!");
      window.location = "/movies";
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <div>
      <button
        type="button"
        className="btn btn-sm btn-info"
        data-toggle="modal"
        data-target={`#id${movie.id}`}
      >
        Update
      </button>

      <div className="modal" id={`id${movie.id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" style={{ color: "#262626" }}>
                Edit Movie
              </h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div className="modal-body">
              <input
                onChange={(e) => setId(e.target.value)}
                className="form-control"
                name="id"
                type="text"
                placeholder="id"
              ></input>
            </div>
            <div className="modal-body">
              <input
                onChange={(e) => setTitle(e.target.value)}
                className="form-control"
                name="title"
                value={title}
                type="text"
                placeholder="Title"
              ></input>
            </div>
            <div className="modal-body">
              <input
                onChange={(e) => setDirector(e.target.value)}
                name="director"
                value={director}
                type="text"
                className="form-control"
                placeholder="Director"
              ></input>
            </div>
            <div className="modal-body">
              <input
                onChange={(e) => setGenre(e.target.value)}
                name="genre"
                value={genre}
                type="text"
                className="form-control"
                placeholder="Genre"
              ></input>
            </div>
            <div className="modal-body">
              <input
                onChange={(e) => setYear(e.target.value)}
                name="year"
                value={year}
                type="number"
                className="form-control"
                placeholder="Year"
              ></input>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success"
                data-dismiss="modal"
                onClick={(e) => saveChanges(e)}
              >
                Save Changes
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UpdateMovie;
