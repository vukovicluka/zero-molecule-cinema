import React from 'react';
import { Route } from 'react-router-dom';

import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import NewMovie from './pages/NewMovie/NewMovie';
import MovieList from './pages/MovieList/MovieList';

function App() {
  return (
    <>
      <Route exact path='/' component={Login} />
      <Route path='/main' component={Main} />
      <Route path='/newMovie' component={NewMovie} />
      <Route path='/movieList' component={MovieList} />
    </>
  );
}

export default App;
