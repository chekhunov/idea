import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {Provider} from 'react-redux';
import createStore from './store'
import Header from './pages/header'
import Footer from './pages/footer'


import './assets/scss/index.scss';
import App from './App';



const store = createStore();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={ createStore() }>
        <Header />
          <App />
        <Footer />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


