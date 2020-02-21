import React from 'react';
import { connect } from 'react-redux';

const style={
    input:{
        borderRadius:'15px',
        height:'70px',
        width:'500px',
        borderColor:'#a35638',
        marginTop:'20px',
        marginBottom:'100px',
        fontSize:'20px',
        alignContent:'center',
        textAlign:"center"
    },
    input2:{
        borderRadius:'15px',
        height:'50px',
        width:'500px',
        borderColor:'#a35638',
        marginTop:'-200px',
        marginBottom:'100px',
        fontSize:'20px',
        alignContent:'center',
        textAlign:"center"

    },
    h2:{
        marginTop:'70px'
    }
}

class CustomerForm extends React.Component{
    constructor(props){
        super(props);
        this.handleChangeCustomer=this.handleChangeCustomer.bind(this);
    }

    handleChangeCustomer(event) {
        console.log("CUSTOMER",event)
        const value = event.target.value;
        console.log("value",value)
        this.props.dispatch({type: 'ORDER_SAVE', order : {...this.props.order, customerName : value }});
        console.log("name", this.props.dispatch({type: 'ORDER_SAVE', order : {...this.props.order, customerName : value }}))
    }

    handleChangeQuantityCustomer = (event)=> {

        console.log("QTY",event.target.value)
        const quantity = event.target.value;
        this.props.dispatch({type: 'ORDER_SAVE', order : {...this.props.order, quantityCustomer : quantity }});
        console.log("name", this.props.dispatch({type: 'ORDER_SAVE', order : {...this.props.order, quantityCustomer : quantity }}))
    }

    render(){
        return(
            <div>
                <h1 style={style.h2}>Form Customer</h1>
                <input onChange={this.handleChangeCustomer} style={style.input} placeholder="Input Customer Name"/><br/>
                <input type="number" onChange={this.handleChangeQuantityCustomer} style={style.input2} placeholder="Input Customer Quantity"/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { ...state.order}
}

export default connect(mapStateToProps)(CustomerForm);