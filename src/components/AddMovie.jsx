import React, { useState } from "react";
import axios from "axios";

function AddMovie() {
  const [movie, setMovie] = useState({
    title: "",
    director: "",
    rating: "",
    year: "",
    genre: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setMovie((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  async function onSubmitForm(event) {
    try {
      event.preventDefault();

      const body = {
        title: movie.title,
        director: movie.director,
        year: movie.year,
        genre: movie.genre,
      };

      await axios.post("http://localhost:3000/api/movies", body);

      alert("Success: Added!");
      window.location = "/add-movie";
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <div className="container">
      <h3 className="text-center mb-5 page-header">Add a Movie</h3>
      <form onSubmit={onSubmitForm}>
        <div className="form-group">
          <input
            onChange={handleChange}
            className="form-control"
            name="title"
            value={movie.title}
            type="text"
            placeholder="Title"
            required
          ></input>
        </div>
        <div className="form-group">
          <input
            onChange={handleChange}
            name="director"
            value={movie.director}
            type="text"
            className="form-control"
            placeholder="Director"
            required
          ></input>
        </div>
        <div className="form-group">
          <input
            onChange={handleChange}
            name="genre"
            value={movie.genre}
            type="text"
            className="form-control"
            placeholder="Genre"
            required
          ></input>
        </div>
        <div className="form-group">
          <input
            onChange={handleChange}
            name="year"
            value={movie.year}
            type="text"
            min="1"
            className="form-control"
            placeholder="Year"
            required
          ></input>
        </div>

        <button className="btn btn-lg btn-primary">Add</button>
      </form>
    </div>
  );
}
export default AddMovie;
