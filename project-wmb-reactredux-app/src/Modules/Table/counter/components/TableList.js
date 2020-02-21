import React, { Component } from 'react';
import '../../../../style/style.css';
import { Grid, Table, TableHead, TableRow, TableCell, TableBody, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import * as TableService from '../service/TableService';


function TableList (props) {
        const { dispatch, loading, tables } = props;
        console.log('loadmeja');
        if (props.loading) {
        TableService.list()
            .then((tables) => {
                dispatch({ type: 'TABLES_LIST_DONE', loading: false, tables });
            })
            .catch((err) => {
                dispatch({ type: 'TABLES_LIST_DONE', loading: false, tables: [] });
            });
        }
        
    function renderTableRows(rows) {    
        console.log('renderfood', rows);
        return rows.map((row) => {
            return (
                <Grid className="rows">
                <Grid>
                <Typography key={row.id} className="rows1">
                    <h4 style={{textAlign:'center'}}>{row.name}</h4>
                    <h4 style={{textAlign:'center'}}>Chairs Amount : {row.chairsAmount}</h4>
                    <h4 style={{textAlign:'center'}}>Status : {row.statusTable}</h4>
                </Typography>
                </Grid>
                </Grid>
            );
        });
    }
        console.log('RENDER MEJA');
        let rows = (<tr><td colSpan={4}>Loading...</td></tr>);
        if (!loading) {
            rows = renderTableRows(tables);
        }
        return (
            <Grid>
                <h2>Table List</h2>
                {/* <Table className="table" border={1} cellPadding={5} width="100%">
                    <TableHead>
                        <TableRow> */}
                            {/* <TableCell>id</TableCell>
                            <TableCell>nama</TableCell>
                            <TableCell>total kursi</TableCell> */}
                        {/* </TableRow>
                    </TableHead>
                    <TableBody> */}
                        {rows}
                    {/* </TableBody>
                </Table> */}
            </Grid>
        );
    }


function mapStateToProps(state) {
    return {...state.table}
}

export default connect (mapStateToProps)(TableList);