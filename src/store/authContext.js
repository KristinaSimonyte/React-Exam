import { createContext } from 'react';

const AuthContext = createContext({
  isLoggedIn: false,
  login() {},
  logout() {},
});
AuthContext.displayName = 'AuthContext';

export default AuthContext;
