import { useContext } from 'react';
import { Route } from 'react-router-dom';
import NotLoggedIn from './UI/NotLoggedIn';
import AuthContext from './../store/authContext';

function ProtectedRoute({ children, ...rest }) {
  // console.log('rest ===', rest);
  const authCtx = useContext(AuthContext);
  return <Route {...rest}>{authCtx.isUserLoggedIn ? children : <NotLoggedIn />} </Route>;
}

export default ProtectedRoute;
