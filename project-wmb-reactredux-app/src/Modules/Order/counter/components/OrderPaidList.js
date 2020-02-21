import React from 'react';
import '../../../../style/style.css';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import PaymentRoundedIcon from '@material-ui/icons/PaymentRounded';
import * as OrderService from '../service/OrderService';
import Card from '@material-ui/core/Card';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {
    Table, TableBody, TableCell, TableHead, TableRow, Paper, TextField,
    Fab
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from '@material-ui/icons/Delete';


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

const useStyle = makeStyles(theme => ({
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
        height:'900px',
        width:'1300px'

    }

}));



function OrderPaidList(props) {
    const classes = useStyle();
    console.log('List Order');
    const { dispatch, orders, loading } = props;
    console.log('props', props);
    if (props.loading) {
        OrderService.list()
            .then((orders) => {
                dispatch({ type: 'ORDER_LIST_DONE', loading: false, orders });
            })
            .catch((err) => {
                dispatch({ type: 'ORDER_LIST_DONE', loading: false, orders: [] });
            });
        console.log('dispatch: ', dispatch);
    }




    function renderOrderRows(orders) {
        console.log('render order', orders);
        return orders.map((order) => {
            if(order.statusTransaction == "paid")
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
                    <StyledTableCell>{order.payment}</StyledTableCell>
                    <StyledTableCell>{order.refund}</StyledTableCell>
                    <StyledTableCell>{order.statusTransaction}</StyledTableCell>
                </StyledTableRow>
            );
        });
    }
    console.log('RENDER ORDERS');
    let rows = (<TableRow><TableCell colSpan={4}>Loading...</TableCell></TableRow>);
    if (!loading) {
        rows = renderOrderRows(orders);
    }
    return (
        // <div>
        <Grid>
            <Card className={classes.card}>
                <h2>Order Paid List</h2>
                <Table className={classes.table} border={1} cellPadding={5} width="100%">
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell>Id</StyledTableCell>
                            <StyledTableCell>Customer Name</StyledTableCell>
                            <StyledTableCell>Table Name</StyledTableCell>
                            <StyledTableCell>Customer Quantity</StyledTableCell>
                            <StyledTableCell>Order Menu</StyledTableCell>
                            <StyledTableCell>Price Total</StyledTableCell>
                            <StyledTableCell>Payment</StyledTableCell>
                            <StyledTableCell>Refund</StyledTableCell>
                            <StyledTableCell>Order Status</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {rows}
                    </TableBody>
                </Table>
                </Card>
        </Grid>
        // </div>
    );
}

function mapStateToProps(state) {
    return { ...state.order}
}

export default connect(mapStateToProps)(OrderPaidList);