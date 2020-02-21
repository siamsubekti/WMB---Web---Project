import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import OrderSteppers from './components/OrderSteppers'

const style={
    card:{
        marginTop:'100px',
        height:'4000px',
        width:'1300px',

    }
}

class OrderContainer extends Component {
    render() {
        return (
            <div>
                <Card style={style.card}>
                <OrderSteppers/>
                </Card>
            </div>
        );
    }
}

export default OrderContainer;