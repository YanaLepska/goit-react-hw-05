import css from "./MovieCastList.module.css";
const MovieCastList = ({ actors: { cast } }) => {
  const defaultImg =
    "https://previews.123rf.com/images/lililia/lililia1711/lililia171100462/90661589-vector-flat-icon-of-user-on-black-background.jpg";

  return (
    <div>
      <ul className={css.castList}>
        {Array.isArray(cast) &&
          cast.map((actor) => (
            <li key={actor.id}>
              <img
                className={css.castImg}
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                    : defaultImg
                }
                alt={actor.name}
              />
              <div className={css.castActor}>
                <p>{actor.name}</p>
                <p>
                  <b>Character:</b> <br />{" "}
                  {actor.character ? actor.character : "not found"}
                </p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MovieCastList;
