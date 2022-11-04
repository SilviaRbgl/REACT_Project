import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movies from "./Movies";

function DetailsMovie() {
  console.log(useParams());
  const { id } = useParams();

  const [singleMovie, setSingleMovie] = useState([]);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const fetchSingleMovie = async () => {
    try {
      const url = `https://imdb-api.com/en/API/Title/${process.env.REACT_APP_KEY}/${id}`;
      const response = await fetch(url);
      const result = await response.json();
      setSingleMovie(result);
      // setMovies(data.items); // use this line if you want to preserve the "fetch" behaviour, but with local data
      // console.log("movies from data>>>", data.items);
      console.log("single movies>>>", result.id);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSingleMovie();
  }, []);

  return (
    <div className="Container">
      <h2>{singleMovie.fullTitle}</h2>
      <h4>Directed by: {singleMovie.directors}</h4>
      <div className="Card-Single">
        <img src={singleMovie.image} alt="poster of the movie" />
      </div>
      <p>Plot: {singleMovie.plot}</p>
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
