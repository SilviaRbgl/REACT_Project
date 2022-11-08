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
  console.log(actors);

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
      {/* {singleMovie.map((actors) => {
        return <p>{actors.actorList}</p>
      })} */}

      <div className="">
        <p><img src={singleMovie.image} alt="poster of the movie"/>Plot summary: {singleMovie.plot}</p>
        
        
      </div>
      
      <p>User rating: {singleMovie.imDbRating}</p>
      <button
          className="Button"
          onClick={goLogin}
        >RATE & REVIEW THIS MOVIE</button>
      
      <div className="star-rating">
      <p>Your rating: </p>
      {[...Array(5)].map((star, index) => {
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
  
    </div>
  );
}

export default DetailsMovie;
