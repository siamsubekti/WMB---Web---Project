import React from 'react';
import '../../../../style/style.css';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import * as MenuService from '../service/MenuService';
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
        width:'900px',
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
        height:'1200px',
        width:'970px'

    }

}));



function MenuList(props) {
    const classes = useStyle();
    console.log('List makanan');
    const { dispatch, menus, loading } = props;
    console.log('props', props);
    if (props.loading) {
        console.log("LOADING", props.loading)
        MenuService.list()
            .then((menus) => {
                dispatch({ type: 'MENU_LIST_DONE', loading: false, menus });
            })
            .catch((err) => {
                dispatch({ type: 'MENU_LIST_DONE', loading: false, menus: [] });
            });
        console.log('dispatch: ', dispatch);
    }




    function renderFoodRows(menus) {
        console.log('renderfood', menus);
        return menus.map((menu) => {
            return (
                <StyledTableRow key={menu.id}>
                    <StyledTableCell>{menu.id}</StyledTableCell>
                    <StyledTableCell>{menu.name}</StyledTableCell>
                    <StyledTableCell>{menu.price}</StyledTableCell>
                    <StyledTableCell>{menu.menuType}</StyledTableCell>
                    <StyledTableCell>{menu.stock}</StyledTableCell>
                    <StyledTableCell>
                        <Fab color="secondary" aria-label="edit"
                            className={classes.fabedit}>
                            <EditIcon />
                        </Fab>
                        <Fab aria-label="delete" className={classes.fabdelete}>
                            <DeleteIcon />
                        </Fab></StyledTableCell>
                </StyledTableRow>
            );
        });
    }
    console.log('RENDER MAKANAN');
    let rows = (<TableRow><TableCell colSpan={4}>Loading...</TableCell></TableRow>);
    if (!loading) {
        rows = renderFoodRows(menus);
    }
    return (
        <div>
        <Grid>
            <Card className={classes.card}>
                <h2>Menu List</h2>
                <Table className={classes.table} border={1} cellPadding={5} width="100%">
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell>Id</StyledTableCell>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell>Price</StyledTableCell>
                            <StyledTableCell>Type</StyledTableCell>
                            <StyledTableCell>Stock</StyledTableCell>
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

function mapStateToProps(state) {
    return { ...state.menu}
}

export default connect(mapStateToProps)(MenuList);