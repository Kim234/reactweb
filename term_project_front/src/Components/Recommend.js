import React from 'react';
import { Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

class Recommend extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            spicy:"",
            soup:"",
            price:""
        }
  
    }

    handleChangespicy = e=>{
        this.setState({
            spicy:e.target.value
        });
    };

    handleChangesoup = e=>{
        this.setState({
            soup:e.target.value
        });
    };

    handleChangeprice = e=>{
        this.setState({
            price:e.target.value
        });
    };
    
    render() {

        const formStyle = {
            margin: 50,
            textAlign:'center'
          };

        return (
                <Form style={formStyle}>
                    
                    <p>
                        <Form.Label>맵기 여부: </Form.Label>
                        <select name="isSpicy" onChange={this.handleChangespicy} value={this.state.spicy}>
                            <option value="">Select</option>
                            <option value="true">매움</option>
                            <option value="false">맵지 않음</option>
                        </select>
                    </p>
                    
                    <p>
                        <Form.Label>국물 여부: </Form.Label>
                        <select name="hasSoup" onChange={this.handleChangesoup} value={this.state.soup}>
                            <option value="">Select</option>
                            <option value="true">국물 있음</option>
                            <option value="false">국물 없음</option>
                        </select>     
                    </p>
                    
                    <p>
                        <Form.Label>가격 상한가 입력: </Form.Label>
                        <input type='text' onChange={this.handleChangeprice}></input>
                    </p>
        
            
                    <NavLink
                        to={{
                            pathname: "/CafeteriaRecom",
                            query: {
                            spicy:this.state.spicy,
                            soup:this.state.soup,
                            price:this.state.price  
                            }
                        }}
                        >
                        <Button>
                            제출
                        </Button>
                    </NavLink>
                    
                </Form>
                
            
            );
            }
        }

export default Recommend;