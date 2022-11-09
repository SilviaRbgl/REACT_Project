import React from 'react'

function DetailsMovieAuth() {
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
  )
}

export default DetailsMovieAuth