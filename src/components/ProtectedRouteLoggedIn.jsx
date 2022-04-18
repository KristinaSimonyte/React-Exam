import { useContext } from 'react';
import { Route } from 'react-router-dom';
import AuthContext from '../store/authContext';
import LoggedIn from '../UI/LoggedIn';

function ProtectedRouteLoggedIn({ children, ...rest }) {
  const authCtx = useContext(AuthContext);
  return <Route {...rest}>{authCtx.isLoggedIn ? <LoggedIn /> : children} </Route>;
}

export default ProtectedRouteLoggedIn;
