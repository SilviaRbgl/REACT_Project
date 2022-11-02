import React from "react";
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';

function Movie({ movie }) {
  return (
    
      <card className="Card-Single">
        <img src={movie.image} alt="poster of a movie"/>
        <p>{movie.title}</p>
      <button
          className="Button"
          onClick={() => console.log("you clicked more button")}>
        MORE
        </button>
      </card>
  );
}

export default Movie;
