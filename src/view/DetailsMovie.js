import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data2 } from "../API-data/response2";
import Movies from "./Movies";

function DetailsMovie() {
  // console.log(useParams());
  const { id } = useParams();

  const [singleMovie, setSingleMovie] = useState([]);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [actors, setActors] = useState([]);
  console.log(actors);

  const fetchSingleMovie = async () => {
    try {
      // const url = `https://imdb-api.com/en/API/Title/${process.env.REACT_APP_KEY}/${id}`;
      // const response = await fetch(url);
      // const result = await response.json();
      // setSingleMovie(result);
      setSingleMovie(data2); // use this line if you want to preserve the "fetch" behaviour, but with local data
      console.log("movies from data>>>", data2);
      // console.log("single movies>>>", result.id);
      // console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSingleMovie();
  }, []);

  // const filterActors = () => {
  //   const filteredActors = actors.filter((actor) => {
  //     return actor.actorList.name.toLowerCase()     
  //   })
  //   return filteredActors;
  // }
  // console.log("filter actors >>>", filterActors);

  return (
    <div className="Container-Detail">
      <h3>{singleMovie.fullTitle}</h3>
      <p>Directed by: {singleMovie.directors}</p>
      
      <p>Cast:
        {/* {filterActors().map((actor) => {
          return actors={}
        })} */}
        </p>

      <div className="">
        <p><img src={singleMovie.image} alt="poster of the movie"/>Plot: {singleMovie.plot}</p>
        
        
      </div>
      
      <p>Users Rating: {singleMovie.imDbRating}</p>
      <div className="star-rating">
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
