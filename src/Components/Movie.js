import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

function Movie({ movie }) {

  const clickMore = useNavigate();
  
  const goMore = () => {
    clickMore(`${movie.title}`)
  }

  return (
    <div className="Card-Single">
      <img src={movie.image} alt="poster of a movie" />
      <p>{movie.title}</p>
      {/* <Link to={`${movie.title}`}>{movie.title}</Link> */}
      <button
        className="Button"
        onClick={goMore}
      >
        MORE
      </button>
    </div>
  );
}

export default Movie;
