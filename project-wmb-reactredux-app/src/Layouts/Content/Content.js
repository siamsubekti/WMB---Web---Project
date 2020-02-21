import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import MenuContainer from '../../Modules/Menu/counter/MenuContainer';
import OrderUnpaid from '../../Modules/Order/counter/components/OrderUnpaidList';
import OrderPaid from '../../Modules/Order/counter/components/OrderPaidList';
import TableContainer from '../../Modules/Table/counter/TableContainer';
import OrderContainer from '../../Modules/Order/counter/OrderContainer'
import CombineReducer from '../../Modules/CombineReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";

class Content extends Component {
    render() {
        return (
            <Grid>
                <Provider store={createStore(CombineReducer)}>
                <Switch>
                    <Route path="/home"></Route>
                    <Route path="/pesanmakan"><OrderContainer/></Route>
                    <Route path="/listmakan"><MenuContainer/></Route>
                    <Route path="/unpaid"><OrderUnpaid/></Route>
                    <Route path="/paid"><OrderPaid/></Route>
                    <Route path="/bookmeja"><TableContainer /></Route>
                    <Route path="/order"><OrderPaid/></Route>
                </Switch>
                </Provider>
            </Grid>
        );
    }
}

export default Content;