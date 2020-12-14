import React from 'react';
import request from '../lib/request';
import { Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

class Reserve extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            time_come:"",
            time:"",
            people:""
        }
  
    }

    handleChangetimecome = e=>{
        this.setState({
            time_come:e.target.value
        });
    };

    handleChangetime = e=>{
        this.setState({
            time:e.target.value
        });
    };

    handleChangepeople = e=>{
        this.setState({
            people:e.target.value
        });
    };

    async reseveCafeteria(name,time_come,time,people){
        let echo_result=await request.ReserveCafeteria({name,time_come,time,people})
    }
    
    render() {
        const formStyle = {
            margin: 50,
            textAlign:'center'
          };

            return (
                    <Form style={formStyle}>
                        <p>
                            <Form.Label>날짜 입력: </Form.Label>
                            <input type='date' onChange={this.handleChangetimecome}></input>
                        </p>

                        <p>
                            <Form.Label>시간 입력: </Form.Label>
                            <input type='time' onChange={this.handleChangetime}></input>
                        </p>

                        <p>
                            <Form.Label>인원 입력: </Form.Label>
                            <input type='text' onChange={this.handleChangepeople}></input>
                        </p>

                        <NavLink
                            to={{
                                pathname: "/CafeteriaList",
                                query: {
                                    name:this.props.location.query.name,
                                    time_come:this.state.time_come,
                                    time:this.state.time,
                                    people:this.state.people
                                }
                            }}
                            >
                            <Button onClick={this.reseveCafeteria.bind(this,this.props.location.query.name,this.state.time_come,this.state.time,this.state.people)}>
                                제출
                            </Button>
                        </NavLink>
                        
                    </Form>
                    
                
                );
            }
        }

export default Reserve;