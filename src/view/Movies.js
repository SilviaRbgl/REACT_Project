import React, { useEffect, useState } from "react";
import { data } from "../API-data/response";
import Movie from "../Components/Movie";
import SearchBar from "../Components/SearchBar";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  // const [pagesValue, setPagesValue] = useState("");
  // const [inputs, setInputs] = useState("");
  // const [totalPages, setTotalPages] = useState(0);
  // const [nextPage, setNextPage] = useState("");
  // const [currentPage, setCurrentPage] = useState(1);

  const fetchMovies = async () => {
    try {
      // const url = `https://imdb-api.com/en/API/Top250Movies/${process.env.REACT_APP_KEY}`
      // const response = await fetch();
      // const result = await response.json();
      // setMovies(result.items);
      setMovies(data.items); // use this line if you want to preserve the "fetch" behaviour, but with local data
      console.log("movies from data>>>", data.items);
      // console.log("movies>>>", result.items);
      // setPagesValue(data.items)
      // console.log("pages value", data.items.length);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  // useEffect(() => {
  //   let pageCountFloat = parseInt(setPagesValue.count / 40);
  //   setTotalPages(pageCountFloat);
  //   setNextPage(setPagesValue.next);
  // }, [fetchMovies]);
  // console.log("total pages >", setTotalPages)

  const getInput = (input) => {
    console.log("get input>>", input);

    setSearch(input);
    console.log("search >>", search);
  };

  const filterMovies = () => {
    const filteredMovies = movies.filter((movie) => {
      return movie.title.toLowerCase().includes(search.toLowerCase());
    });
    return filteredMovies;
  };

  const pages = data.items.length;
  console.log("pages>", pages);

  function Movies({ currentMovies }) {
    return (
      <>
        {currentMovies &&
          currentMovies.map((item) => (
            <div>
              <h3>Item #{item}</h3>
            </div>
          ))}
      </>
    );
  }

  return (
    <div className="Container">
      <SearchBar getInput={getInput} />
      <div className="grid">
        {filterMovies().map((movie) => {
          return <Movie key={movie.id} movie={movie} search={search} />;
        })}

      </div>
    </div>
  );
}

export default Movies;
