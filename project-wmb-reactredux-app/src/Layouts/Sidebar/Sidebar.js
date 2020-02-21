import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import ViewListIcon from '@material-ui/icons/ViewList';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import Home from '../../Modules/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { Grid } from '@material-ui/core';
import Header from '../Header/Header';
import '../../style/style.css'
import Content from '../Content/Content';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,

    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

function Sidebar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Grid className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{backgroundColor:'#a35638'}}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            <Header />
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link className="" to="/home">
            <ListItem button >
              <ListItemIcon><HomeIcon></HomeIcon> </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItem>
          </Link>

          <Link className="" to="/pesanmakan">
            <ListItem button >
              <ListItemIcon><LocalGroceryStoreIcon></LocalGroceryStoreIcon> </ListItemIcon>
              <ListItemText>Order</ListItemText>
            </ListItem>
          </Link>

          <Link className="" to="/unpaid">
            <ListItem button >
              <ListItemIcon><LocalGroceryStoreIcon></LocalGroceryStoreIcon> </ListItemIcon>
              <ListItemText>Order Unpaid</ListItemText>
            </ListItem>
          </Link>

          <Link className="" to="/paid">
            <ListItem button >
              <ListItemIcon><LocalGroceryStoreIcon></LocalGroceryStoreIcon> </ListItemIcon>
              <ListItemText>Order Paid</ListItemText>
            </ListItem>
          </Link>

          <Link className="" to="/listmakan">
            <ListItem button >
              <ListItemIcon><MenuBookIcon /></ListItemIcon>
              <ListItemText>Menu List</ListItemText>
            </ListItem>
          </Link>

          <Link className="" to="/bookmeja">
            <ListItem button >
              <ListItemIcon><ViewListIcon /></ListItemIcon>
              <ListItemText>Table List</ListItemText>
            </ListItem>
          </Link>

        </List>
        <Divider />
      </Drawer>
{/* 
<main 
className={clsx(classes.content,{
  [classes.contentShift]:open,
})}
> */}
      <Switch>
        <Route path="/home"><Home/></Route>
        <Content/>
      </Switch>
        {/* </main> */}
    </Grid>
  );
}

export default Sidebar;