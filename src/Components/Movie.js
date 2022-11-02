import React from "react";
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';

function Movie({ movie }) {
  return (
    <div >
      <card className="Card">
        <img src={movie.image} alt="poster of a movie"/>
        <p>{movie.title}</p>
        <button
          onClick={() => console.log("you clicked more button")}>
        MORE
        </button>
      </card>
      
    </div>
  );
}

export default Movie;
