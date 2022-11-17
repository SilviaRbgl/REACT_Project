import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function ApiReview({ review }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <p>{review.username} wrote:</p>
      {/* <h4>"{review.content}"</h4> */}
      <h4>
        {console.log("review.content.lenght", review.content.length)}
        {showMore ? review.content : `${review.content.substring(0, 300)}`}
        <button
          className={review.content.length > 300 ? "button" : "item-hide"}
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </h4>

      <p>{review.date}</p>
    </>
  );
}

export default ApiReview;
