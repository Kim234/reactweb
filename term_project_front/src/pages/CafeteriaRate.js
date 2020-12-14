//식당 평가하기+ 식당 평가리스트 버튼
import React, { Component } from "react";
import {Button} from "react-bootstrap";
import { NavLink } from "react-router-dom";


class CafeteriaRate extends Component {


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
        <NavLink to ={{
                        pathname: "/CafeteriaRateDo",
                        query: {
                            id:""
                        }
                      }}>
          <Button style={buttonStyle}>
            메뉴평가
          </Button>
        </NavLink>

        <NavLink to="/CafeteriaRateList">
          <Button style={buttonStyle}>
            평가리스트
          </Button>
        </NavLink>
      </div>
    );
  }
}

export default CafeteriaRate;