import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/layout/header/header";
import Footer from './components/layout/footer/footer'
// import logo from "./assets/images/logo.png";

import { GlobalProvider } from './Store';


import Landing from "./components/landing/landing";

import ProductDetail from "./components/product-detail/product-detail";

import Pottery from "./components/pottery/pottery";
import Collaborate from "./components/collaborate/collaborate";
import Gallery from "./components/gallery/gallery";

import Contact from "./components/contact/contact";



import "./App.scss";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        {/*  */}
        <div className="content">

          {/* Global Provider  */}
          <GlobalProvider>

            <Route exact path="/" component={Landing} />

            <Route exact path="/product/:id" component={ProductDetail} />

            {/* <Route exact path="/products" component={Products} /> */}
            <Route exact path="/pottery" component={Pottery} />

            <Route exact path="/collaborate" component={Collaborate} />

            <Route exact path="/gallery" component={Gallery} />

            {/* <Route path="/stores" component={Stores} /> */}
            <Route path="/contact" component={Contact} />

            {/* <Redirect to="/home" /> */}

          </GlobalProvider>
          {/* Global Provider  Ends */}

        </div>
      </div>

      <Footer />

    </Router>
  );
}
export default App;
