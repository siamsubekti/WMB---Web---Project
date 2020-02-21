import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { createStore } from "redux";
import { Provider } from "react-redux";
import BeverageReducer from "./reducer/BeverageReducer";
import BeverageList from './components/BeverageList';
import { Switch, Route } from "react-router-dom";

class BeverageContainer extends Component {
    render() {
        return (
                <Grid>
                    <Switch>
                        <Route path="/listminum" component={BeverageList} />
                    </Switch>
                </Grid>
        );
    }
}

export default BeverageContainer;