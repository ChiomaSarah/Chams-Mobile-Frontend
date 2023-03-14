import React, { useState, useEffect } from "react";
import axios from "axios";
import UpdateMovie from "./UpdateMovie";

function GetMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  //   get movies
  useEffect(() => {
    async function getAllmovies() {
      setLoading(true);

      await axios
        .get("http://localhost:3000/api/movies")
        .then((response) => {
          setMovies(response.data);
        })
        .catch((err) => {
          console.error(err.message);
        });

      setLoading(false);
    }
    getAllmovies();
  }, []);

  // delete movie
  async function deleteMovie(id) {
    try {
      await axios.delete(`http://localhost:3000/api/movies/${id}`);

      setMovies(movies.filter((movie) => movie.id !== id));
      alert("Success: Book deleted!");
    } catch (err) {
      console.error(err.message);
    }
  }

  if (loading) {
    return <h2> Loading... </h2>;
  }
  return (
    <div>
      <div className="container text-center mt-5 mb-5">
        <h3>Movies</h3>

        <div>
          {/* display movies */}{" "}
          <table className="table table-bordered mt-5 ">
            <thead className="thead-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Title</th>
                <th scope="col">Director</th>
                <th scope="col">Genre</th>
                <th scope="col">Year</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody style={{ color: "#000" }}>
              {movies?.map((movie) => {
                return (
                  <tr key={movie.id}>
                    <td>{movie.id}</td>
                    <td>{movie.title}</td>
                    <td>{movie.director}</td>
                    <td>{movie.genre}</td>
                    <td>{movie.year}</td>
                    <td>
                      <div className="btn-group">
                        <UpdateMovie movie={movie} />
                        <button
                          className="btn btn-sm btn-danger ml-3"
                          onClick={() => {
                            const confirm = window.confirm(
                              "Please confirm delete."
                            );
                            if (confirm === true) {
                              deleteMovie(movie.id);
                            }
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default GetMovies;
