import React from 'react';
import { Route } from 'react-router-dom';

import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import NewMovie from './pages/NewMovie/NewMovie';
import MovieList from './pages/MovieList/MovieList';
import EditMovie from './pages/EditMovie/EditMovie';

function App() {
  return (
    <>
      <Route exact path='/' component={Login} />
      <Route path='/main' component={Main} />
      <Route path='/newMovie' component={NewMovie} />
      <Route path='/movieList' component={MovieList} />
      <Route path='/editMovie' component={EditMovie} />
    </>
  );
}

export default App;
