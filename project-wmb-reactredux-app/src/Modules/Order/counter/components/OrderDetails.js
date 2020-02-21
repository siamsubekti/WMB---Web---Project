import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { connect } from 'react-redux';
import * as OrderService from '../service/OrderService'
import { TableSortLabel } from '@material-ui/core';


const style={
    card:{
        width:'500px',
        height:'500px',
        marginTop:'60px',
        marginBottom:'60px',
        marginLeft:'400px',
    }
}



class OrderForm extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit= this.handleSubmit.bind(this)
    }


    handleSubmit(e){
        e.preventDefault();
        const {order}= this.props;
        OrderService.save(order)
        .then(resp=>{
            alert("Save Success");
        })
        .catch(err=>alert("Save Error"))
    }


    render(){
        const{order, tables,id}= this.props;
        console.log("PROPS",this.order);


        return(
            <div>
                <Card style={style.card}>
                <h2>Order Details</h2>
                <form>
                    <TextField  id="name"
                    label="Consument Name"
                    name="customerName"
                    value={order.customerName}
                    margin="normal">
                    </TextField><br/>
                    <TextField  id="table"
                    label="Table"
                    name="id"
                    value={order.tables}
                    margin="normal">
                    </TextField><br/>
                    {this.props.order.orderDetails.map((detail)=>{
                        return(
                            <div>
                            <TextField  id="quantityCustomer"
                            label="Menu"
                            value={detail.menu}
                            margin="normal">
                            </TextField><br/>
                            <TextField  id="quantityCustomer"
                            label="Quantity Menu"
                            value={detail.quantity}
                            margin="normal">
                            </TextField>
                            </div>
                        )
                    })}
                    <br/>
                    <Button variant="contained" color="primary" type="submit" onClick={this.handleSubmit}>Submit</Button>
                </form>
                </Card>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { ...state.order, ...state.table}
}

export default connect(mapStateToProps)(OrderForm);