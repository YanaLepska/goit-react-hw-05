import { useEffect, useState } from "react";
import { requestMovie } from "../../movieAppi";
import  css from './HomePage.module.css'
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  

  useEffect(() => {
    async function getMovies() {
      try {
        const response = await requestMovie();
          const newMovies = response.data.results;
        setMovies(newMovies);
      } catch (error) {
        console.log(error);
      }
    }
    getMovies();
  }, []);

  return (
    <div>
      <h1 className={css.trend}>Trending today</h1>
      {movies && <MovieList movies={movies} />}
      <div className={css.moviesImg}></div>
    </div>

  );
};

export default HomePage;
