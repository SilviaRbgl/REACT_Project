import React, { useContext, useEffect, useState } from "react";
import { db } from "../config";
import { AuthContext } from "../Context/AuthContext";
import { collection, getDocs } from "firebase/firestore";

function DetailsMovieAuth() {
  const { user } = useContext(AuthContext);

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const getReviews = async () => {
    const querySnapshot = await getDocs(collection(db, "Reviews"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  };

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <div>
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

      <div className="Container-Comment" action="">
        <p>Your review:</p>
        <label htmlFor="msg"></label>
        <input type="text" placeholder="Review here" name="msg" required />
        <br></br>
        <button type="submit" className="Button">
          Send
        </button>
      </div>

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

export default DetailsMovieAuth;
