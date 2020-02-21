import React from 'react';
import '../../../../style/style.css';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import * as MenuService from '../service/MenuService';
import {TextField} from "@material-ui/core";
import Button from '@material-ui/core/Button';



const style={
    card:{
        marginTop:'100px',
        height:'600px',
        width:'300px', 
        marginLeft:'50px'
    },
    button:{
        marginTop:'20px',
        marginBottom:'25px'
    },
    form:{
        marginBottom:'20px'
    }
}


class MenuForm extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit= this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    handleSubmit(e){
        e.preventDefault();
        const {menu}= this.props;
        console.log("menu", menu)
        MenuService.save(menu)
        .then(resp=>{
            alert("Save Success");
        })
        .catch(err=>alert("Save Error"))
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.props.dispatch({type: 'MENU_SAVE', menu: { ...this.props.menu, [name]: value } })
    }

    render(){
        const {menu}= this.props;
    return (
        <Grid style={style.card}>
            <Card>
            <h2>Add Menu</h2>
            <form>
                <TextField
                    required
                    id="standard-secondary"
                    name="name"
                    value={menu.name}
                    onChange={this.handleChange}
                    label="Input Menu Name"
                    color="secondary"
                    style={style.form}
                     />
                <TextField
                    required
                    id="standard-secondary"
                    name="price"
                    value={menu.price}
                    onChange={this.handleChange}
                    label="Input Price"
                    color="secondary"
                    style={style.form}
                     />
                <TextField
                    required
                    id="standard-secondary"
                    name="menuType"
                    value={menu.menuType}
                    onChange={this.handleChange}
                    label="Input Menu Type"
                    color="secondary"
                    style={style.form}
                     />
                <TextField
                    required
                    id="standard-secondary"
                    name="stock"
                    value={menu.stock}
                    onChange={this.handleChange}
                    label="Input Stock"
                    color="secondary"
                    style={style.form}
                     />
                    <div style={style.button}>
                        <Button variant="contained" color="primary" type="submit" onClick={this.handleSubmit}>Submit</Button>
                    </div>
            </form>
            </Card>
        </Grid>
        );
    }
}


function mapStateToProps(state) {
    return { ...state.menu}
}

export default connect(mapStateToProps)(MenuForm);