import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { requestMovieByQuery } from "../../movieAppi";
import MovieSearchBar from "../../components/MovieSearchBar/MovieSearchBar";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";
import css from "./MoviesPage.module.css";
import LoadMore from "../../components/LoadMore/LoadMore";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  const [page, setPage] = useState(1);
  const [moviesFetched, setMoviesFetched] = useState(false);

  useEffect(() => {
    async function getMovies() {
      if (!query) return;
      try {
        const response = await requestMovieByQuery(query,page);
        const newMovies = response.data;
        setMovies(prevMovies => [...prevMovies, ...newMovies.results]);
        setMoviesFetched(newMovies.total_pages > page);
        if (newMovies.length === 0) {
          toast("Movies not found ");
        }
      } catch (error) {
        console.log(error);
      }
    }
    getMovies();
  }, [query, page]);

  const onSearchMovie = (keyWord) => {
    if (query === keyWord) {
      toast("Enter new requarest");
      return;
    }
    setSearchParams({ query: keyWord });
    setPage(1);
    setMoviesFetched(false);
  };

  const handleMoreMovie = () => {
    setPage((prev) => prev + 1);
  }

  return (
    <div>
      <div className={css.moviePage}></div>
      <MovieSearchBar onSearchMovie={onSearchMovie} />
      {movies && <MovieList movies={movies} />}
      {moviesFetched && <LoadMore handleMoreMovie={handleMoreMovie} />}
    </div>
  );
};

export default MoviesPage;
