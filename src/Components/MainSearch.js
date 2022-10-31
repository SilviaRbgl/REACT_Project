import React, { useEffect, useState } from 'react'
import { data } from "../API-data/response"
import Movie from './Movie'

function MainSearch() {

  const [movies, setMovies] = useState([])
  const [error, setError] = useState(null)

  const fetchMovies = async () => {
    try {
      // const url = `https://imdb-api.com/en/API/Top250Movies/${process.env.REACT_APP_KEY}`
      // const response = await fetch();
      // const result = await response.json();
      // setMovies(result.items);
      setMovies(data.items) // use this line if you want to preserve the "fetch" behaviour, but with local data
      console.log("movies from data>>>", data.items);
      // console.log("movies>>>", result.items);

    } catch (error) {
      console.log(error);
    }
    
  }

useEffect(() => {
  fetchMovies();
}, [])


  return (
    <div>
      {movies.map((movie) => {
        return <Movie movie={movie} />
      })}
      
    </div>
  )
}

export default MainSearch