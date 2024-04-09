import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { requestMovieByQuery } from "../../movieAppi";
import MovieSearchBar from "../../components/MovieSearchBar/MovieSearchBar";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";
import css from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    async function getMovies() {
      if (!query) return;
      try {
        const response = await requestMovieByQuery(query);
        const newMovies = response.data.results;
        setMovies(newMovies);
        if (newMovies.length === 0) {
          toast("Movies not found ");
        }
      } catch (error) {
        console.log(error);
      }
    }
    getMovies();
  }, [query]);

  const onSearchMovie = (keyWord) => {
    if (query === keyWord) {
      toast("Enter new requarest");
      return;
    }
    setSearchParams({ query: keyWord });
  };

  return (
    <div>
      <div className={css.moviePage}></div>
      <MovieSearchBar onSearchMovie={onSearchMovie} />
      {movies && <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesPage;
