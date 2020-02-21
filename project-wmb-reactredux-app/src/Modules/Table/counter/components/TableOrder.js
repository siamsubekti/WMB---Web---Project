import React, { Component } from 'react';
import '../../../../style/style.css';
import { Grid, Table, TableHead, TableRow, TableCell, TableBody, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import * as TableService from '../service/TableService';
import Button from '@material-ui/core/Button';


 class TableOrder extends Component {
     
    tableLoad(){
        const { dispatch, loading, tables } = this.props;
        console.log('loadmeja',tables);
        if (this.props.loading) {
        TableService.list()
            .then((tables) => {
                dispatch({ type: 'TABLES_LIST_DONE', loading: false, tables });
            })
            .catch((err) => {
                dispatch({ type: 'TABLES_LIST_DONE', loading: false, tables: [] });
            });
        }
    }

    componentDidMount() {
        if(this.props.loading){
        this.tableLoad();
        }
    }
        
    renderTableRows(rows) {
        console.log('ORDER',this.props.order)
        return rows.map((row) => {
            if(row.statusTable==="available")
            return (
                <Grid className="rows">
                <Grid>
                <Typography key={row.id} className="rows1">
                    <h4 style={{textAlign:'center'}}>{row.name}</h4>
                    <h4 style={{textAlign:'center'}}>Chairs Amount : {row.chairsAmount}</h4>
                    <h4 style={{textAlign:'center'}}>Status : {row.statusTable}</h4>
                    <Button style={{marginLeft:'90px'}} variant="contained" color="primary" onClick={()=> this.props.dispatch({ type: 'TABLE_ORDER_SAVE', table : row.id})} >Submit</Button>
                </Typography>
                </Grid>
                </Grid>
            );
        });
    }

    render(){
        const {loading,tables}= this.props;
        console.log('RENDER MEJA', tables);
        let rows = (<tr><td colSpan={4}>Loading...</td></tr>);
        if (!loading) {
            rows = this.renderTableRows(tables);
        }
        return (
            <Grid>
                <h2>Table List</h2>
                        {rows}
            </Grid>
        );
    }
}

function mapStateToProps(state) {
    return { ...state.order ,...state.table}
}

export default connect (mapStateToProps)(TableOrder);