import React from 'react';

import Login from './pages/login'
import Home from './pages/home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
        <Switch>
                <Route path="/login" exact component={Login} />
                <Route path="/" exact component={Home} />
        </Switch>
      </>
  );
}

export default App;
