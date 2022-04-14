import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../../store/authContext';
import css from './Header.module.css'

function Header() {
  const authCtx = useContext(AuthContext);
  
  function logoutHandler(e) {
    authCtx.logout();
  }

  return (
    <header className={css.header}>
      <img className={css.img}
      src='logo.png' alt='logo' />
      <nav className='main-nav'>
        {authCtx.isUserLoggedIn && <NavLink to={'/'}>Skills</NavLink>}
        {authCtx.isUserLoggedIn && <NavLink to={'/skills'}>Add New Skills</NavLink>}
        {!authCtx.isUserLoggedIn && <NavLink to={'/login'}>Login</NavLink>}
        {!authCtx.isUserLoggedIn && <NavLink to={'/register'}>Register</NavLink>}
        {authCtx.isUserLoggedIn && (
          <NavLink onClick={logoutHandler} to={'/login'}>
            Logout
          </NavLink>
        )}
      </nav>
    </header>
  );
}

export default Header;
