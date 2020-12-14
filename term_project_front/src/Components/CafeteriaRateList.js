import React from 'react';
import * as function1 from '../lib/star'
import request from '../lib/request';
import { Form } from "react-bootstrap";

class CafeteriaRateList extends React.Component {
    constructor(props) {
        super(props);
        this.state={menuwithrates:[]}
    }

    async componentDidMount(){
        let menuwithrates = await request.getMenuwithRate();
        this.setState({menuwithrates:menuwithrates})
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

        const element=this.state.menuwithrates.map(list=>
            <>
                <img style={imgStyle} src={list.url} class="img-responsive img-thumbnail"></img>
                <div style={divStyle}>
                    <p>{list.menu_name}</p>
                    <p>{function1.stars(list.rating)}</p>
                </div>
            </>
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


export default CafeteriaRateList;