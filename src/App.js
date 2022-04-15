import { useEffect, useState } from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components//header/Header';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import AuthContext from './store/authContext';
import ProtectedRoute from './components/ProtectedRoute';
import RegisterPage from './pages/RegisterPage';
import AddSkillsPage from './pages/AddSkillsPage';
import PageNotFound from './pages/PageNotFound';

function App() {
   const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    isUserLoggedIn();
  }, []);

  function login(userToken) {
    localStorage.setItem('token', userToken);
     setIsLoggedIn(true);
  }
  function logout() {
    localStorage.removeItem('token');
     setIsLoggedIn(false);
  }
  function isUserLoggedIn() {
    if (localStorage.getItem('token')) {
      setIsLoggedIn(true);
    return true;
    } 
    setIsLoggedIn(false);
    return false;
  }

  const ctxValue = {
    isLoggedIn,
    isUserLoggedIn,
    login,
    logout,
  };
  
  return (
    <AuthContext.Provider value={ctxValue}>
      <div className='App'>
        <Header />
        <Switch>

          <Route path={'/register'}>
            <RegisterPage />
          </Route>

          <Route path={'/'} exact>
            <LoginPage />
          </Route>

          <Route path={'/login'}>
            <LoginPage />
          </Route>

          <ProtectedRoute path='/home'>
            <p>Welcome {process.env.REACT_APP_MY_NAME} </p>
            <HomePage />
          </ProtectedRoute>

          <ProtectedRoute path={'/add'}>
            <AddSkillsPage />
          </ProtectedRoute>

          <Route path={'*'}>
            <PageNotFound />
          </Route>

        </Switch>
      </div>
</AuthContext.Provider>
  );
}

export default App;
