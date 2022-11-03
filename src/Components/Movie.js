import React from "react";
import { Link } from "react-router-dom";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

function Movie({ movie }) {
  return (
    <card className="Card-Single">
      <img src={movie.image} alt="poster of a movie" />
      <p>{movie.title}</p>
      <Link to={`${movie.title}`}>{movie.title}</Link>
      <button
        className="Button"
        onClick={() => 
          console.log("you clicked more button")}
      >
        MORE
      </button>
    </card>
  );
}

export default Movie;
