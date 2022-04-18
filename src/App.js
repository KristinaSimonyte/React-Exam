import { useEffect, useState } from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import AuthContext from './store/authContext';
import ProtectedRoute from './components/ProtectedRoute';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import HomePage from './pages/HomePage/HomePage';
import AddSkillsPage from './pages/AddSkillsPage/AddSkillsPage';
import PageNotFound from './pages/PageNotFound';
import Header from './components/header/Header';
import ProtectedRouteLoggedIn from './components/ProtectedRouteLoggedIn';

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
    login,
    logout,
  };
  
  return (
    <AuthContext.Provider value={ctxValue}>
      <div className='App'>
        <Header />
        <Switch>

          <ProtectedRouteLoggedIn path={'/register'}>
            <RegisterPage />
          </ProtectedRouteLoggedIn>

          <ProtectedRouteLoggedIn path={'/'} exact>
            <LoginPage />
          </ProtectedRouteLoggedIn>

          <ProtectedRouteLoggedIn path={'/login'}>
            <LoginPage />
          </ProtectedRouteLoggedIn>

          <ProtectedRoute path='/home'>
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
