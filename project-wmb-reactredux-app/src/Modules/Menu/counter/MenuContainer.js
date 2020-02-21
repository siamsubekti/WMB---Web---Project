import React, { Component } from 'react';
import MenuList from './components/MenuList';
import MenuForm from './components/MenuForm'
import { Grid } from '@material-ui/core';
import { Switch, Route } from "react-router-dom";

const style={
    display:{
        display:'flex',
        flexDirection:'row-reverse'
    }
}

class FoodContainer extends Component {
    render() {
        return (
            
                <Grid style={style.display}>
                    <MenuForm/>
                    <MenuList/>
                </Grid>
        );
    }
}

export default FoodContainer;