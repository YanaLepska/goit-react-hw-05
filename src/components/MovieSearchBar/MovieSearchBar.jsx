import  css from './MovieSearchBar.module.css'
import toast, { Toaster } from 'react-hot-toast';
const MovieSearchBar = ({ onSearchMovie }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const query = form.elements.query.value.trim();
    if (query === "") {
      toast('Please, enter search requrest!');
      return;
    }
    onSearchMovie(query);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="query"
          autoComplete="on"
          autoFocus
          placeholder="Search movie"
        />
        <button type="submit" className={css.btnSearch}>Search</button>
      </form>
      <Toaster toastOptions={{
        // Define default options
        className: '',
        duration: 3500,
        style: {
          border: '2px solid #713200',
          padding: '16px',
          color: 'rgb(222, 48, 48)',
          backgroundColor: 'rgb(227, 235, 254)',
        }
      }} />
    </div>
  );
};

export default MovieSearchBar;
