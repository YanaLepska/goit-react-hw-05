import { useEffect, useRef, useState } from "react";
import { requestMovieId } from "../../movieAppi";
import { useParams, useLocation, Outlet, Link } from 'react-router-dom';
import MovieData from "../../components/MovieData/MovieData";
import GoBackBtn from "../../components/GoBackBtn/GoBackBtn";
import  css from './MovieDetailsPage.module.css'

const MovieDetailsPage = () => {
    const [movieData, setMovieData] = useState(null);
    const { movieId } = useParams();
    const location = useLocation();
    const backLink = useRef(location.state?.from ?? "/");

useEffect(() => {
  async function getMovies() {
      if (!movieId) return;
      try {
          const response = await requestMovieId(movieId);
        setMovieData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getMovies();
  }, [movieId]);

  return (
      <div >
          <GoBackBtn to={backLink.current} />
          {movieData && <>
              <MovieData movieData={movieData} />
              <h3 className={css.detailsTitle}>Additional information</h3>
              <ul className={css.container}>
                  <li>
                  <Link to="cast">CAST</Link>
                  </li>
                  <li>
                    <Link to="reviews">REVIEWS</Link>
                  </li>
              </ul>
              <Outlet/>
          </>}
    </div>
  )
}

export default MovieDetailsPage