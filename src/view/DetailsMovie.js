import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { data2 } from "../API-data/response2";
import { DetailsContext } from "../Context/DetailsContext";
import Reviews from "../Components/Reviews";
import DetailsMovieAuth from "../Components/DetailsMovieAuth";
import Movies from "./Movies";
import { AuthContext } from "../Context/AuthContext";

function DetailsMovie() {
  // console.log(useParams());
  const { id } = useParams();

  const { user } = useContext(AuthContext);
  const { singleMovie, fetchSingleMovie } = useContext(DetailsContext);


  const clickLogin = useNavigate();
  const goLogin = () => {
    clickLogin("/login");
  };

  // const [reviews, setReviews] = useState([]);
  // const [error, setError] = useState(null);

  // const fetchReviews = async () => {
  //   try {
  //     const url = `https://imdb-api.com/en/API/Reviews/${process.env.REACT_APP_KEY}/${id}`;
  //     const response = await fetch(url);
  //     const result = await response.json();
  //     setReviews(result);
  //     // setSingleMovie(data2); // use this line if you want to preserve the "fetch" behaviour, but with local data
  //     // console.log("movies from data>>>", data3);
  //     console.log("reviews>>>", result.items);
  //     console.log(result);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    fetchSingleMovie();
    // fetchReviews();
  }, []);

  return (
    <div className="Container-Detail">
      <h3>{singleMovie.fullTitle}</h3>
      <p>Directed by: {singleMovie.directors}</p>

      <p>Top cast: {singleMovie.stars}</p>
      {/* {singleMovie.starList?.map((actor) => {
        return <p>{actor.name}</p>
      })} */}

      <div className="">
        <p>
          <img src={singleMovie.image} alt="poster of the movie" />
          Plot summary: {singleMovie.plot}
        </p>
      </div>

      <p>User rating: {singleMovie.imDbRating}</p>

      { user ?  (
        <DetailsMovieAuth />
      ) : (
        <button className="Button" onClick={goLogin}>
        RATE & REVIEW THIS MOVIE
      </button>
      )
      }
    </div>
  );
}

export default DetailsMovie;
