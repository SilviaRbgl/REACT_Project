import React, { Fragment, useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const fetchReviews = async () => {
    try {
      const url = `https://imdb-api.com/en/API/Reviews/${process.env.REACT_APP_KEY}/tt1375666`;
      const response = await fetch(url);
      const result = await response.json();
      setReviews(result);
      console.log("reviews data>", result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div>
      {reviews &&
        reviews.items?.slice(0, 3).map((review, index) => {
          return (
            <div key={index} className="container-review">
              <p>{review.username} wrote:</p>
              {/* <h4>"{review.content}"</h4> */}
              <h4>               
                {showMore
                  ? review.content
                  : `${review.content.substring(0, 300)}`}
                <button
                  className="button"
                  onClick={() => setShowMore(!showMore)}
                >
                  {showMore ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              </h4>
              <p>{review.date}</p>
            </div>
          );
        })}
    </div>
  );
}

export default Reviews;
