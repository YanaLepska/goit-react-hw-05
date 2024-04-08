import { Link } from 'react-router-dom';
import  css from './NotFoundPage.module.css'

const NotFoundPage = () => {
  return (
      <div className={css.message}>
          <h1>Oops, this page does not exist.</h1>
          <br />
          <Link to="/"> GO HOME</Link>
 
    </div>
  )
}

export default NotFoundPage