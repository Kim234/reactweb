import React from 'react';
import request from '../lib/request';
import { Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

class CafeteriaRecom extends React.Component {
    constructor(props) {
        super(props);
        this.state={cafeteriaRecom:[]}
    }

    async componentDidMount(){
        let spicy = this.props.location.query.spicy;
        let soup = this.props.location.query.soup;
        let price = this.props.location.query.price;

        let cafeteriaRecom = await request.getRecomCafeteria({spicy,soup,price});
        console.log(cafeteriaRecom)
        this.setState({cafeteriaRecom:cafeteriaRecom})
    }
    
    render() {

        const formStyle = {
            margin: 50,
            textAlign:'center'
          };

        const divStyle = {
            margin: 10
            
        };

        const imgStyle = {
            width: 500,
            height: 300
        };

        const h2Style={
            fontSize:60
        }

        const element=this.state.cafeteriaRecom.map(list=>
            <>
                <img style={imgStyle} src={list.url} class="img-responsive img-thumbnail"></img>
                <div style={divStyle}>
                    <p>{list.cafeterianame}</p>
                    <NavLink to ={{
                                    pathname: "/Reserve",
                                    query: {
                                        name:list.cafeterianame
                                    }
                                }}>
                        <Button>
                            예약
                        </Button>
                    </NavLink>
                </div>
            </>
            )
            return (
                <Form style={formStyle}>
                    <h2 style={h2Style}>식당 목록</h2>
                       
                    <span>
                        {element}
                    </span>
                </Form>
                
                );
            }
        }

export default CafeteriaRecom;