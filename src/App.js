import React from 'react';

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Header from './components/header/header';
import logo from './assets/images/logo.png';

import Landing from './components/landing/landing';

import Gallery from './components/gallery/gallery';
import Stores from './components/stores/stores';
import Contact from './components/contact/contact';

import './App.scss';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
{/*  */}
        <div className="content">

          <Route exact path="/" component={Landing} />
          <Route exact path="/gallery" component={Gallery} />
          <Route path="/stores" component={Stores} />
          <Route path="/contact" component={Contact} />

          {/* <Redirect to="/home" /> */}

        </div>



      </div>

      <footer>
        <div className="footer-content">
          <div className="left">
            <img className="mb-2" src={logo} alt="" />
            <small className="d-block mb-3 text-muted">© 2017-2019</small>

          </div>

          <div className="right">
            {/* <address>
              # 26 & 26/2, Near Laxshmi Convention Hall, Sarjapur Main Road , Attibelle, Bengaluru - 562107

    Phone: +91-944848777

    Email: thebigmarket.bmh@gmail.com
          </address> */}
          </div>
        </div>


      </footer>

    </Router>
  );
}
export default App;
