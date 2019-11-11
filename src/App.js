import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/header/header";
// import logo from "./assets/images/logo.png";

import Landing from "./components/landing/landing";
import Products from "./components/products/products";
import Pottery from "./components/pottery/pottery";
import Collaborate from "./components/collaborate/collaborate";
import Gallery from "./components/gallery/gallery";
import Stores from "./components/stores/stores";
import Contact from "./components/contact/contact";

import "./App.scss";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        {/*  */}
        <div className="content">
          <Route exact path="/" component={Landing} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/pottery" component={Pottery} />

          <Route exact path="/collaborate" component={Collaborate} />

          <Route exact path="/gallery" component={Gallery} />
          <Route path="/stores" component={Stores} />
          <Route path="/contact" component={Contact} />

          {/* <Redirect to="/home" /> */}
        </div>
      </div>

      <footer>
        <div className="footer-content">
          <div className="left">
            {/* <img className="mb-2" src={logo} alt="" /> */}
            <small className="d-block mb-3 text-muted">© 1993-2019</small>
          </div>
          {/* 
          <div className="right">
            <address>
              # 26 & 26/2, Near Laxshmi Convention Hall, Sarjapur Main Road , Attibelle, Bengaluru - 562107

    Phone: +91-944848777

    Email: thebigmarket.bmh@gmail.com
          </address>
          </div> */}
        </div>
      </footer>

      <div className="footer-end">
        <div className="content flex-80" flex="80">
          <p className="md-caption">
            Got any questions send us an{" "}
            <a href="mailto:ashique181@hotmail.com">email</a>
          </p>
          <div className="social">
            <h4 className="md-subhead">Call +91 7899205111</h4>
          </div>
          <p className="copyright">
            Copyright © 2019, Athikkal Bricks and Clay Works. Since 1993, All
            rights reserved.
          </p>
        </div>
      </div>
    </Router>
  );
}
export default App;
