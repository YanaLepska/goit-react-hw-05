import css from "./MovieData.module.css";
const MovieData = ({
  movieData: {
    release_date,
    title,
    vote_average,
    overview,
    poster_path,
    genres,
    tagline
  },
}) => {
   const defaultImg =
    "https://static7.depositphotos.com/1000335/708/i/950/depositphotos_7088950-stock-photo-film-icon-dark-blue-isolated.jpghttps://previews.123rf.com/images/vmaster2012/vmaster20121309/vmaster2012130900003/21927476-film-icon-film-camera-black-background.jpg";

  const url = `https://image.tmdb.org/t/p/w300/${poster_path}`;
  return (
    <div className={css.movieData}>
      <div>
        <img src={poster_path ? url : defaultImg} alt={title} />
      </div>

      <div className={css.movieDescription}>
        <h2 className={css.movieTitle}>{title}</h2>
        <p>
          <b>Score:</b> ⭐ {vote_average}
        </p>

        <p><b>Tagline:</b> {tagline ? tagline : "🧾 Not found"}</p>
        <div>
          <p>
            <b>Overview:</b>
            <br />
          </p>
          <p className={css.movieText}> {overview}</p>
        </div>
        <p>
          <b>Release:</b> {release_date}
        </p>
        <ul className={css.movieGenre}>
          <b>Genres:</b>
          {Array.isArray(genres) &&
            genres.map((genre) => (
              <li key={genre.id}>
                <p>{genre.name}</p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieData;
