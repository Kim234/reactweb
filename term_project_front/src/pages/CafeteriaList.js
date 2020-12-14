//식당 평가하기+ 식당 평가리스트 버튼
import React, { Component } from "react";
import {Button} from "react-bootstrap";
import { NavLink } from "react-router-dom";

class CafeteriaList extends Component {

  render() {
    const divStyle={
        margin:50,
        textAlign:'center'
    };

    const buttonStyle={
      width:300,
      height:200,
      fontSize:60,
      margin:50
  };


    return (
      <div style={divStyle} className="App">
        <NavLink to="/Recommend" replace>
          <Button style={buttonStyle}>
            식당추천
          </Button>
        </NavLink>

        <NavLink to="/CafeteriaAll" replace>
          <Button style={buttonStyle}>
            식당리스트
          </Button>
        </NavLink>
      </div>
    );
  }
}

export default CafeteriaList;