import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { requestMovieCast } from "../../movieAppi";
import MovieCastList from "../MovieCastList/MovieCastList";


const MovieCast = () => {
    const [movieCast, setMovieCast] = useState(null);
     const { movieId } = useParams();
    
useEffect(() => {
    if (!movieId) return;
    async function getMovies() {
      try {
          const response = await requestMovieCast(movieId);
        setMovieCast(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getMovies();
  }, [movieId]);

  return (
      <div>
          {movieCast && <MovieCastList actors={movieCast} />}
    </div>
  )
}

export default MovieCast
