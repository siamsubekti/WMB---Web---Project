import React, { Component } from 'react';
import { Grid, Table, TableHead, TableRow, TableCell, TableBody, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import * as MenuService from '../service/MenuService';
import* as OrderService from '../../../Order/counter/service/OrderService';
import Button from '@material-ui/core/Button';
import brown from '@material-ui/core/colors/brown';


const style={
    image:{
        width:'265px',
        height:'180px',
        borderRadius:'10px'
    },
    input:{
        marginTop:'50px',
        width:'500px',
        height:'50px',
        borderRadius:'15px',
        textAlign:'center',
        fontSize:'20px'
    },
    rows: {
        backgroundColor: 'white',
        marginLeft: '10%',
        display: 'inlineBlock',
        flexWrap: 'wrap',
        flexDirection: 'column',
        marginTop: '1%',
        width: '270px',
        height: '280px',
        textAlign: 'left',
        flexDirection: 'column',
        borderRadius: '5px',
        boxShadow: '5px 5px 5px 5px rgb(224, 222, 222)',
        border: '1px solid #cccccc'
    },
    text1:{
        marginTop:'-10px',
        textAlign:'center'
    },
    text2:{
        marginTop:'-15px',
        textAlign:'center'
    },
    text3:{
        marginTop:'-90px',
        textAlign:'center'
    },
    button:{
        alignItem:'center'
    }
}

class MenuOrder extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit= this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    handleSubmit(event){
        event.preventDefault();
        OrderService.save(this.props.order)
        .then(resp=>{
            alert("Save Success");
        })
        .catch(err=>alert("Save Error"))
    }

    handleChange(event) {
        const value = event.target.value;
        this.props.dispatch({type: 'MENU_QUANTITY_SAVE', quantityMenu: value })
        console.log("QUANTITY",value)
    }
    

    MenuLoad(){
    const { dispatch, loading, menus } = this.props;
    console.log('loadmenu', menus);
    MenuService.list()
        .then((menus) => {
            dispatch({ type: 'MENU_LIST_DONE', loading: false, menus });
        })
        .catch((err) => {
            dispatch({ type: 'MENU_LIST_DONE', loading: false, menus: [] });
        })
    }


componentDidMount() {
    if(this.props.loading){
    this.MenuLoad();
    }
}

renderMenuRows(menus) {
    console.log('rendermenu',menus);
    return menus.map((row) => {
        if(row.stock >= 1)
        return (
            <Grid className="rows">
            <Grid>
            <Typography key={row.id} className="rows1">
                <img style={style.image} src={row.image}/>
                <h4 style={style.text1}>{row.name}</h4>
                <h4 style={style.text1}>Rp.{row.price}</h4>
                <h5 style={style.text1}>Stock : {row.stock}</h5>
                <Button style={{marginLeft:'80px'}} variant="contained" color="primary" type="submit" onClick={()=> this.props.dispatch({ type: 'MENU_ORDER_SAVE', menuId : row.id})}>Choose</Button>
            </Typography>
            </Grid>
            </Grid>
        );
    });
}


    render() {
        const{loading, menus}= this.props;
        console.log('RENDER MENU');
        let rows = (<tr><td colSpan={4}>Loading...</td></tr>);
        if (!loading) {
            rows = this.renderMenuRows(menus);
        }
        return (
            <Grid>
                <h2>Menu List</h2>
                    {rows}
                <input type="number" onChange={this.handleChange} style={style.input} placeholder="Quantity"/>
            </Grid>
        );
    }
}


function mapStateToProps(state) {
    return {...state.order,...state.menu}
}

export default connect (mapStateToProps)(MenuOrder);