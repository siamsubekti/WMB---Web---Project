import React from 'react';
import '../../../../style/style.css';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import PaymentRoundedIcon from '@material-ui/icons/PaymentRounded';
import * as OrderService from '../service/OrderService';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import {
    Table, TableBody, TableCell, TableHead, TableRow, Paper, TextField,
    Fab
} from "@material-ui/core";


const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);

const useStyle ={
    root: {
        width: '100%',
        marginTop: '100px',
        overFlowX: 'auto',
        marginLeft: '20px',
        textAlign: "center"
    },
    table: {
        height:'500px',
        width:'1200px',
        marginRight:'100px',
        marginLeft:'30px',
        marginTop:'60px'
    },
    reet: {
        marginTop: '100px',
        marginLeft: '20px',
    },
    fabdelete: {
        marginLeft: '20px',
        color: 'primary'
    },
    harga: {
        marginLeft: '20px',
    },
    card:{
        marginTop:'99px',
        height:'800px',
        width:'1300px'

    }

};



class OrderList extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handlePayment=(pay)=>{
        console.log('PAYMENTTTT', pay)
        this.props.dispatch({type: 'PAYMENT', payment: pay})
    }

    handleSubmit(e, orderan, detailMenu){
        e.preventDefault();
        const {orderDetails, ...orderr} =this.props.order;
        // const {order}= orderr;
        console.log("orderrrr", orderr)
        this.props.dispatch({type: 'HANDLE_ORDERAN', orderan: orderan, detailMenu:detailMenu});
        OrderService.update(orderr)
        .then(resp=>{
            alert("Payment Successfully");
        })
        .catch(err=>alert("Payment Unsuccessfully"))
    }

    handleChange(event) {
        const value = event.target.value;
        this.props.dispatch({type: 'PAYMENT_ORDER_SAVE', order: {...this.props.order, paymentOrder : value } })
        console.log("PAYMENT",value);
    }


    orderLoad(){
    const { dispatch, orders, loading } =this.props;
    console.log('props', this.props.order);
    if (this.props.loading) {
        OrderService.list()
            .then((orders) => {
                dispatch({ type: 'ORDER_LIST_DONE', loading: false, orders });
            })
            .catch((err) => {
                dispatch({ type: 'ORDER_LIST_DONE', loading: false, orders: [] });
            });
        console.log('dispatch: ', dispatch);
    }
}


    componentDidMount() {
        if(this.props.loading){
        this.orderLoad();
        }
    }

    renderFoodRows(orders) {
        console.log('render order', orders);
        return orders.map((order) => {
            if(order.statusTransaction == "unpaid")
            return (
                <StyledTableRow key={order.id}>
                    <StyledTableCell>{order.id}</StyledTableCell>
                    <StyledTableCell>{order.customerName}</StyledTableCell>
                    <StyledTableCell>{order.tables.name}</StyledTableCell>
                    <StyledTableCell>{order.quantityCustomer}</StyledTableCell>
                    {order.orderDetails.map((detail)=> {
                        return(
                        <StyledTableRow key={detail.menu.id}>
                        <StyledTableCell>{detail.menu.name}</StyledTableCell>
                        <StyledTableCell>{detail.quantity}</StyledTableCell>
                        </StyledTableRow>
                    )})}
                    <StyledTableCell>{order.priceTotal}</StyledTableCell>
                    <StyledTableCell><input type="text " onChange={(e)=>this.handlePayment(e.target.value)}/></StyledTableCell>
                    <StyledTableCell>{order.statusTransaction}</StyledTableCell>
                    <StyledTableCell>
                        <button onClick={(e)=>this.handleSubmit(e, order)}>Submit</button>
                        </StyledTableCell>
                </StyledTableRow>
            );
        });
    }
    render(){
    console.log('RENDER ORDERS');
    let rows = (<TableRow><TableCell colSpan={4}>Loading...</TableCell></TableRow>);
    if (!this.loading) {
        rows = this.renderFoodRows(this.props.orders);
    }
    return (
        
        <div>
        <Grid>
            <Card style={{marginTop:'150px'}}>
                <h2>Order Unpaid List</h2>
                <Table  border={1} cellPadding={5} width="100%">
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell>Id</StyledTableCell>
                            <StyledTableCell>Customer Name</StyledTableCell>
                            <StyledTableCell>Table Name</StyledTableCell>
                            <StyledTableCell>Customer Quantity</StyledTableCell>
                            <StyledTableCell>Order Menu</StyledTableCell>
                            <StyledTableCell>Price Total</StyledTableCell>
                            <StyledTableCell>Payment</StyledTableCell>
                            <StyledTableCell>Order Status</StyledTableCell>
                            <StyledTableCell>Action</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {rows}
                    </TableBody>
                </Table>
                </Card>
        </Grid>
        </div>
    );
}
}

function mapStateToProps(state) {
    return { ...state.order}
}

export default connect(mapStateToProps)(OrderList);