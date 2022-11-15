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
      <p className="p-uppercase">Directed by:</p><p>{singleMovie.directors}</p>

      <p className="p-uppercase">Top cast:</p><p>{singleMovie.stars}</p>
      {/* {singleMovie.starList?.map((actor) => {
        return <p>{actor.name}</p>
      })} */}

      <div className="">
        <p className="p-uppercase">
          <img src={singleMovie.image} alt="poster of the movie" />
          Plot summary:</p><p> {singleMovie.plot}
        </p>
      </div>

      <p className="p-uppercase">Genre:</p><p>{singleMovie.genres}</p>
      <p className="p-uppercase">Duration:</p><p>{singleMovie.runtimeStr}</p>
      <p className="p-uppercase">User rating:</p><p>{singleMovie.imDbRating}</p>

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
