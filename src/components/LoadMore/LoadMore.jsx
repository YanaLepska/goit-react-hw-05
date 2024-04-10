import css from "./LoadMore.module.css";
const LoadMore = ({handleMoreMovie}) => {
  return (
    <div className={css.LoadMoreContainer}><button  onClick={handleMoreMovie } className={css.LoadMoreBtn}>Load More</button></div>
  )
}

export default LoadMore