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
        {authCtx.isLoggedIn && <NavLink to={'/home'}>Skills</NavLink>}
        {authCtx.isLoggedIn && <NavLink to={'/add'}>Add New Skills</NavLink>}
        {!authCtx.isLoggedIn && <NavLink to={'/login'}>Login</NavLink>}
        {!authCtx.isLoggedIn && <NavLink to={'/register'}>Register</NavLink>}
        {authCtx.isLoggedIn && (
          <NavLink onClick={logoutHandler} to={'/login'}>
            Logout
          </NavLink>
        )}
      </nav>
    </header>
  );
}

export default Header;

