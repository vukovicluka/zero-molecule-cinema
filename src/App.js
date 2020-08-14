import React from 'react';
import { Route } from 'react-router-dom';

import Login from './pages/Login/Login';

function App() {
  return (
    <>
      <Route exact path='/' component={Login} />
    </>
  );
}

export default App;
