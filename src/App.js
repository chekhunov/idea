import React from 'react';
// import Login from './pages/login'
// import Signup from './pages/auth/signup'
import Home from './pages/home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./actions";

function App(props) {
  console.log(props)
  return (
    <>
        <Switch>
                {/* <Route path="/login" exact component={Login}/> */}
                {/* <Route path="/signup" exact component={Signup} /> */}
                <Route path="/" exact component={Home} />
        </Switch>
      </>
  );
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = state => state;

export default connect(mapStateToProps, mapDispatchToProps)(App);
