import { useEffect, useState } from "react";
import css from './MovieReviews.module.css'
import { useParams } from 'react-router-dom';
import { requestMovieReviews } from "../../movieAppi";
import MovieReviewsList from "../MovieReviewsList/MovieReviewsList";

const MovieReviews = () => {
    const [movieReviews, setMovieRewiews] = useState(null);
     const { movieId } = useParams();
    
useEffect(() => {
    if (!movieId) return;
    async function getMovies() {
      try {
          const response = await requestMovieReviews(movieId);
        setMovieRewiews(response.data.results);
      } catch (error) {
        console.log(error);
      } 
    }
    getMovies();
  }, [movieId]);

  return (
      <div>
          {movieReviews && movieReviews.length > 0 ? (<MovieReviewsList reviews = {movieReviews} />):(<p className={css.notFound}>Reviews not found</p>)}
          
    </div>
  )
}

export default MovieReviews