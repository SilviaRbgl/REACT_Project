import React from "react";
import { useParams } from "react-router-dom";

function DetailsMovie() {
    
  console.log(useParams());
  const { title } = useParams();

  return (
    <div className="Container">
      {/* <card className="Card-Single"> */}
        <h2>Movie: {title} </h2>
        {/* <img src="" alt="poster of a movie" /> */}
        
      {/* </card> */}
    </div>
  );
}

export default DetailsMovie;
