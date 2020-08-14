import React from 'react';
import { Route } from 'react-router-dom';

import Login from './pages/Login/Login';
import Main from './pages/Main/Main';

function App() {
  return (
    <>
      <Route exact path='/' component={Login} />
      <Route path='/main' component={Main} />
    </>
  );
}

export default App;
