import React from 'react';
import Login from './pages/login'
import Signup from './pages/auth/signup'
import Home from './pages/home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
        <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/signup" exact component={Signup} />
                <Route path="/" exact component={Home} />
        </Switch>
      </>
  );
}

export default App;
