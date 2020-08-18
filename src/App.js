import React, { useContext, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import NewMovie from './pages/NewMovie/NewMovie';
import MovieList from './pages/MovieList/MovieList';
import EditMovie from './pages/EditMovie/EditMovie';

const App = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, []);

  return (
    <>
      {isAuth === true || isAuth === false ? (
        <>
          <Route exact path='/zero-molecule-cinema' component={Login} />
          <PrivateRoute path='/zero-molecule-cinema/main' component={Main} />
          <PrivateRoute
            path='/zero-molecule-cinema/newMovie'
            component={NewMovie}
          />
          <PrivateRoute
            path='/zero-molecule-cinema/movieList'
            component={MovieList}
          />
          <PrivateRoute
            path='/zero-molecule-cinema/editMovie'
            component={EditMovie}
          />
        </>
      ) : null}
    </>
  );
};

export default App;
