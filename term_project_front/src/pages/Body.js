import React, { Component } from "react";
import LoginForm from "./LoginForm";
import reserveList from "./reserveList";
import forAddform from "./ForAddform";
import CafeteriaList from './CafeteriaList';
import CafeteriaRate from './CafeteriaRate';
import CafeteriaRateDo from '../Components/CafeteriaRateDo';
import CafeteriaRateList from '../Components/CafeteriaRateList';
import Recommend from '../Components/Recommend';
import Reserve from '../Components/Reserve';
import CafeteriaAll from '../Components/CafeteriaAll';
import CafeteriaRecom from '../Components/CafeteriaRecom';
import { Route } from "react-router-dom";
import $ from "jquery";
import {} from "jquery.cookie";

class Body extends Component {
  render() {
    let resultForm;
    function getResultForm() {
      // console.log($.cookie("login_id"));
      if ($.cookie("login_id")) {
        resultForm = <Route exact path="/" component={reserveList}></Route>;
        return resultForm;
      } else {
        resultForm = <Route exact path="/" component={LoginForm}></Route>;
        return resultForm;
      }
    }
    getResultForm();
    return (
      <div>
        <Route path="/CafeteriaList" component={CafeteriaList}></Route>
        <Route path="/CafeteriaRate" component={CafeteriaRate}></Route>
        <Route path="/CafeteriaRateDo" component={CafeteriaRateDo}></Route>
        <Route path="/CafeteriaRateList" component={CafeteriaRateList}></Route>
        <Route path="/Recommend" component={Recommend}></Route>
        <Route path="/CafeteriaRecom" component={CafeteriaRecom}></Route>
        <Route path="/CafeteriaAll" component={CafeteriaAll}></Route>
        <Route path="/Reserve" component={Reserve}></Route>
        {resultForm}
      </div>
    );
  }
}

export default Body;