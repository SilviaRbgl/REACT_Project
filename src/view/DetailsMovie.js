import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { data2 } from "../API-data/response2";
import { DetailsContext } from "../Context/DetailsContext";
import Movies from "./Movies";

function DetailsMovie() {
  // console.log(useParams());
  const { id } = useParams();

  const { singleMovie, actors, fetchSingleMovie } = useContext(DetailsContext)
  
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const clickLogin = useNavigate();
  const goLogin = () => {
    clickLogin("/login");
  };

  useEffect(() => {
    fetchSingleMovie();
  }, []);



  return (
    <div className="Container-Detail">
      <h3>{singleMovie.fullTitle}</h3>
      <p>Directed by: {singleMovie.directors}</p>
      
      <p>Top cast:</p>
      {actors.map((actors) => {
        return <p>{actors.actorList}</p>
      })}

      <div className="">
        <p><img src={singleMovie.image} alt="poster of the movie"/>Plot summary: {singleMovie.plot}</p>
        
        
      </div>
      
      <p>User rating: {singleMovie.imDbRating}</p>
      <button
          className="Button"
          onClick={goLogin}
        >RATE & REVIEW THIS MOVIE</button>

      <div className="star-rating">
        <p>Your rating: </p>{[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= (hover || rating) ? "on" : "off"}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <span className="star">&#9733;</span>
            </button>
          );
        })}
      </div>

      <div className="Container-Comment" action="">
      <p>Your review:</p>
      <label for="msg"></label>
        <input
          type="text"
          placeholder="Review here"
          name="msg"
          required
        /><br></br>
        <button type="submit" className="Button">Send</button>
      </div>
    </div>
  );
}

export default DetailsMovie;
