import React from "react";
import ReactDOM from "react-dom";
import {HashRouter} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./pages/Header";
import Body from "./pages/Body";
import Footer from "./pages/Footer";

ReactDOM.render(
  <HashRouter>
    <Header/>
    <Body/>
    <Footer/>
  </HashRouter>,
  document.querySelector("#container")
);