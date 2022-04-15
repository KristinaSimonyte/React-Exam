import { useContext } from 'react';
import { Route } from 'react-router-dom';
import AuthContext from '../store/authContext';
import NotLoggedIn from '../UI/NotLoggedIn';

function ProtectedRoute({ children, ...rest }) {
  const authCtx = useContext(AuthContext);
  return <Route {...rest}>{authCtx.isUserLoggedIn ? children : <NotLoggedIn />} </Route>;
}

export default ProtectedRoute;
