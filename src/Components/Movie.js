import React from 'react'

function Movie({movie}) {
  return (
      <div>
          <p>{movie.fullTitle}</p>
          {/* <img src={movie.image} alt="poster of a movie" /> */}
    </div>
  )
}

export default Movie