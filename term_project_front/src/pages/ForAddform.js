import React from 'react';
import request from '../lib/request';
import ForAdd from './ForAdd';

/*식당, 메뉴 db 만들기 용도1 */
class ForAddform extends React.Component {
    render() {
        return (
            <>
                <ForAdd onSubmit={request.createCafeteria}/>
            </>
        );
    }
}


export default ForAddform;