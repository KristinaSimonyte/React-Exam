import { createContext } from 'react';

const AuthContext = createContext({
  isLoggedIn: false,
  isUserLoggedIn() {},
  login() {},
  logout() {},
});
AuthContext.displayName = 'AuthContext';

export default AuthContext;
