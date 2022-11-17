import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { data } from "../API-data/response";
import Movie from "../Components/Movie";
import Pagination from "../Components/Pagination";
import SearchBar from "../Components/SearchBar";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const fetchMovies = async () => {
    try {
      const url = `https://imdb-api.com/en/API/Top250Movies/${process.env.REACT_APP_KEY1}`;
      const response = await fetch(url);
      const result = await response.json();
      setMovies(result.items);
      // setMovies(data.items); // use this line if you want to preserve the "fetch" behaviour, but with local data
      // console.log("movies from data>>>", data.items);
      console.log("movies from API>>>", result.items);
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const getInput = (input) => {
    // console.log("get input>>", input);

    setSearch(input);
    // console.log("search >>", search);
  };

  const filterMovies = () => {
    // console.log("movies", movies);
    const filteredMovies = data.items.filter((movie) => {
      return movie.title.toLowerCase().includes(search.toLowerCase());
    });
    // console.log('filteredMovies :>> ', filteredMovies);
    return filteredMovies;
  };

  return (
    <div className="container-main">
      <SearchBar getInput={getInput} />
      {/* <>
        {filterMovies().map((movie, index) => {
          return <Movie key={movie.id} movie={movie} search={search} />;
        })}
      </> */}

      <>
        {movies ? (
          <>
            <Pagination
              data={filterMovies()}
              RenderComponent={Movie}
              title="Movies"
              pageLimit={5}
              dataLimit={24}
            />
          </>
        ) : (
          <Link to="/nomatch" />
        )}
      </>
    </div>
  );
}

export default Movies;
