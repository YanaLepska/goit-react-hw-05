import { Link, useLocation  } from "react-router-dom"
import css from './MovieList.module.css'

const MovieList = ({ movies }) => {
   const location = useLocation();
  return (
    <div>
      <ul className={css.movieList}>
        {Array.isArray(movies) && movies.map((movie) => (
          <li key={movie.id} className={css.movieItem}>
            <Link to={`/movies/${movie.id}` } state={{ from: location }} >{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
