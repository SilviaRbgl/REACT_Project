import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaForward } from "react-icons/fa";

function Movie({ movie }) {
  const clickMore = useNavigate();

  const goMore = () => {
    clickMore(`${movie.id}`);
  };

  return (
    <div className="card-movie">
      <img src={movie.image} alt="poster of the movie" />
      <p>{movie.title}</p>
      {/* <Link to={`${movie.title}`}>{movie.title}</Link> */}
      <button className="button" onClick={goMore}>
        MORE <FaForward />
      </button>
    </div>
  );
}

export default Movie;
