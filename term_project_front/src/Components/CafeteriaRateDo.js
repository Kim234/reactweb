import React from 'react';
import request from '../lib/request';
import { Form, Button } from "react-bootstrap";
import { withRouter } from 'react-router-dom';

class CafeteriaRateDo extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            menuforrates:[],
        }
    }

    async componentDidMount(){
        if(this.props.location.query.id==""){
            let menuforrates = await request.getMenuforRate();
            this.setState({menuforrates:menuforrates})
        }else{
            const id=this.props.location.query.id;
            let addrate=await request.addMenuRate({id});
            let menuforrates = await request.getMenuforRate();
            this.setState({menuforrates:menuforrates})
        }
    }
    
    submit= _id => {
        let rating=0;
        
        var check_count = document.getElementsByName("rating").length;
 
        for (var i=0; i<check_count; i++) {
            if (document.getElementsByName("rating")[i].checked === true) {
                rating = document.getElementsByName("rating")[i].value;
            }
        }
        const echo_result = request.updateMenuRate({_id,rating});
        console.log(echo_result);
        this.props.history.push("/CafeteriaRate");
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
            this.state.menuforrates.map(list=>
                <div style={divStyle}>
                    <img style={imgStyle} src={list.url} class="img-responsive img-thumbnail"></img>
                    <span>
                        <p>{list.menu_name}</p>
                        <label>1</label>
                        <input type='radio' name='rating' value='1'></input>
                        <label>2</label>
                        <input type='radio' name='rating' value='2'></input>
                        <label>3</label>
                        <input type='radio' name='rating' value='3'></input>
                        <label>4</label>
                        <input type='radio' name='rating' value='4'></input>
                        <label>5</label>
                        <input type='radio' name='rating' value='5'></input>
                    </span>

                    <Button onClick={this.submit.bind(this,list._id)}>제출</Button>
                    
                </div>
            )
            return (
                <Form style={formStyle}>
                        <h2 style={h2Style}>메뉴 목록</h2>
                        <span>
                            {element}
                        </span>
                 </Form>
            );
            }
        }


export default withRouter(CafeteriaRateDo);