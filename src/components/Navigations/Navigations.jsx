import { NavLink } from 'react-router-dom';
import css from './Navigations.module.css'

const Navigations = () => {
  return (
      <div>
          <header  className={css.header} >
              <nav className={css.navLinks}>
                  <NavLink to='/' className={({isActive})=>isActive ? css.active :css.navLinkItem} >HOME</NavLink>
                  <NavLink to='/movies' className={({isActive})=>isActive ? css.active :css.navLinkItem} >MOVIES</NavLink>
              </nav>
          </header>
    </div>
  )
}

export default Navigations

