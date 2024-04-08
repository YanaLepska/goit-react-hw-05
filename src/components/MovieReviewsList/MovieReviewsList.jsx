import  css from './MovieReviewsList.module.css'

const MovieReviewsList = ({ reviews }) => {
  return (
    <div>
      <ul className={css.reviewsList}>
        {Array.isArray(reviews) &&
          reviews.map((review) => (
            <li key={review.id}>
              <p><b>{review.author}</b></p>
              <p className={css.review}> {review.content}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MovieReviewsList;
