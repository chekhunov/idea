import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './pages/header'
import Footer from './pages/footer'


import './assets/scss/index.scss';
import App from './App';
ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Header />
      <App />
              <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


