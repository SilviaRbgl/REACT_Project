import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { data2 } from "../API-data/response2";
import { DetailsContext } from "../Context/DetailsContext";
import Review from "../Components/Review";
import Movies from "./Movies";

function DetailsMovie() {
  // console.log(useParams());
  const { id } = useParams();
  const user = "";

  const { singleMovie, actors, fetchSingleMovie } = useContext(DetailsContext);

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

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
      <button className="Button" onClick={goLogin}>
        RATE & REVIEW THIS MOVIE
      </button>

      <div className="star-rating">
        <p>Your rating: </p>
        {[...Array(5)].map((index) => {
          index += 1;
          return (
            <>
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
            </>
          );
        })}
      </div>
      {user ? (
        <div className="Container-Comment" action="">
          <p>Your review:</p>
          <label for="msg"></label>
          <input type="text" placeholder="Review here" name="msg" required />
          <br></br>
          <button type="submit" className="Button">
            Send
          </button>
        </div>
      ) : (
        <p>login first</p>
      )}

      <div className="Container-Comment">
        {/* <p>Users reviews:</p>
      <div className="grid">
        {reviews.map((review) => {
          return <Review key={review.id} review={review}/>;
        })}
      </div> */}
      </div>
    </div>
  );
}

export default DetailsMovie;
