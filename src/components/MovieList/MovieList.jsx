import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();
  const defaultImg =
    "https://static7.depositphotos.com/1000335/708/i/950/depositphotos_7088950-stock-photo-film-icon-dark-blue-isolated.jpghttps://previews.123rf.com/images/vmaster2012/vmaster20121309/vmaster2012130900003/21927476-film-icon-film-camera-black-background.jpg";

  return (
    <div>
      <ul className={css.movieList}>
        {Array.isArray(movies) &&
          movies.map((movie) => (
            <li key={movie.id} className={css.movieItem}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                <img
                  className={css.poster}
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
                      : defaultImg
                  }
                  alt={movie.title}
                />
                <h3 className={css.posterTitle}>
                  {movie.title} 
                </h3>
                <p className={css.posterScore}>⭐ {movie.vote_average}</p>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MovieList;
