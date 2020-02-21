import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import TableList from './components/TableList';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Switch, Route } from "react-router-dom";

class TableContainer extends Component {
    render() {
        return (
            <Grid>
                <Switch>
                    <Route path="/bookmeja" component={TableList} />
                </Switch>
            </Grid>
        );
    }
}

export default TableContainer;