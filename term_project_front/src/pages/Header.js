import React, { Component } from "react";
import { Navbar, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axios from "axios";
import $ from "jquery";
import {} from "jquery.cookie";
axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

class Header extends Component {
  state = {
    buttonDisplay: "none"
  };

  componentDidMount() {
    if ($.cookie("login_id")) {
      this.setState({
        buttonDisplay: "block"
      });
    } else {
      this.setState({
        buttonDisplay: "none"
      });
    }
  }

  logout = () => {
    axios
      .get("http://localhost:8080/member/logout", {
        headers
      })
      .then(returnData => {
        if (returnData.data.message) {
          $.removeCookie("login_id");
          alert("로그아웃 되었습니다!");
          window.location.href = "/";
        }
      });
  };
  render() {
    const buttonStyle = {
      margin: "0px 5px 0px 10px",
      display: this.state.buttonDisplay
    };

    const h1Style={
      fontSize:60
    };


    return (
      <>
        <div class="jumbotron text-center mb-0" style={{backgroundColor:"skyblue" ,color:"white"}}>
          <h1 style={h1Style}>오늘 점심 뭐먹지 Homepage</h1>
          <p>메뉴 결정을 하는 모든 사람들을 위한 웹 페이지</p>
        </div>

        <div>
          <Navbar bg="dark" variant="dark">
              <NavLink to="/" replace>
                <Button style={buttonStyle} variant="dark">
                  Home
                </Button>
              </NavLink>
              <NavLink to="/CafeteriaList" replace>
                <Button style={buttonStyle} variant="dark">
                  식당목록
                </Button>
              </NavLink>
              <NavLink to="/CafeteriaRate" replace>
                <Button style={buttonStyle} variant="dark">
                  메뉴평가
                </Button>
              </NavLink>
              <Button style={buttonStyle} onClick={this.logout} variant="dark">
                로그아웃
              </Button>
          </Navbar>
          
        </div>
      </>
     
    );
  }
}

export default Header;