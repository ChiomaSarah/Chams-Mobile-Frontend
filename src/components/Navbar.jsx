import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
      <a className="navbar-brand text-light" href="/#">
        Chams Mobile Test
      </a>
      <button
        className="navbar-toggler bg-light"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      ></button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link text-light" href="/movies">
              Movies
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="/add-movie">
              Add Movies
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
