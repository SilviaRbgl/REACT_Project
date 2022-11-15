import React, { Fragment, useEffect, useState } from "react";

function Reviews() {

  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);


  const fetchReviews = async () => {
    try {
      const url = `https://imdb-api.com/en/API/Reviews/${process.env.REACT_APP_KEY}/tt1375666`
      const response = await fetch(url);
      const result = await response.json();
      setReviews(result);
      console.log("reviews data>", result);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchReviews()
  }, [])
  

  return (
    <div >
{reviews && reviews.items?.map((review, index)=> {
  return (
    <div key={index} className="container-review">
      <p>{review.username} & rate {review.rate}</p>
      <p>{review.content}</p>
    </div>
  )
})}
    </div>
  );
}

export default Reviews;
