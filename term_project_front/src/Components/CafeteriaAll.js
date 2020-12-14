import React from 'react';
import request from '../lib/request';
import { Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

class CafeteriaAll extends React.Component {
    constructor(props) {
        super(props);
        this.state={cafeterialist:[]}
    }

    async componentDidMount(){
        let cafeterialist = await request.getAllCafeteria();
        this.setState({cafeterialist:cafeterialist})
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

        const element=this.state.cafeterialist.map(list=>
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
                        <span>{element}</span>
                    </Form>
                
                );
            }
        }


export default CafeteriaAll;