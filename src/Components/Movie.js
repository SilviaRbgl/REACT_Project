import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

function Movie({ movie }) {
  const clickMore = useNavigate();

  const goMore = () => {
    clickMore(`${movie.id}`);
  };

  return (
    <div className="Card-Single">
      <img src={movie.image} alt="poster of the movie" />
      <p>{movie.title}</p>
      {/* <Link to={`${movie.title}`}>{movie.title}</Link> */}
      <button className="Button" onClick={goMore}>
        MORE
        {/* <span class="material-symbols-outlined">keyboard_double_arrow_right</span> */}
      </button>
    </div>
  );
}

export default Movie;
