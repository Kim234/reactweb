import React from 'react';
import request from '../lib/request';
import {Form, Button} from "react-bootstrap";
import { NavLink } from "react-router-dom";

class reserveList extends React.Component {
    constructor(props) {
        super(props);
        this.state={reserves:[]}
    }
    
    async componentDidMount(){
        let reserves = await request.getReserveCafeteria();
        console.log(reserves);
        this.setState({reserves:reserves})
    }

    submit= _id => {
        const echo_result = request.finishEat({_id});
        console.log(echo_result);
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

        const element= 
            this.state.reserves.map(reserve=>
                <>
                    <img style={imgStyle} src={reserve.url} class="img-responsive img-thumbnail"></img>
                    <div style={divStyle}>
                        <h3>{reserve.cafeterianame}</h3>
                        
                        <Form.Label>날짜</Form.Label>
                        <Form.Text className="text-muted">{reserve.time_come}</Form.Text>

                        <Form.Label>시간</Form.Label>
                        <Form.Text className="text-muted">{reserve.time}</Form.Text>
                        
                        
                        <Form.Label>인원</Form.Label>
                        <Form.Text className="text-muted">{reserve.people_come}</Form.Text>

                        
                        <NavLink to ={{
                                    pathname: "/CafeteriaRateDo",
                                    query: {
                                        id:reserve._id
                                    }
                                }}>
                            <Button onClick={this.submit.bind(this,reserve._id)}>
                                식사완료
                            </Button>
                        </NavLink>
                        
                    </div>
                </>
            
            )
        if(this.state.reserves.length===0){
            return(
                <Form style={formStyle}>
                    <h2 style={h2Style}>예약 목록</h2>
                </Form>
            )
        }

        else{
            return (
                <Form style={formStyle}>
                    <h2 style={h2Style}>예약 목록</h2>
                    <p>{element}</p>
                </Form>
            );
        }
    }
}

export default reserveList;