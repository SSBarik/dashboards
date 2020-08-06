import React, { Component } from 'react';
import routes from './routes'
import { NavLink } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';


import PropTypes from 'prop-types';
import {
  AppBar, Toolbar, Typography, List, ListItem,
  withStyles, Grid, SwipeableDrawer
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const styleSheet = {
  root: {
    flexGrow: 1,
    textAlign: 'left',
  },
  list : {
    width : 200,
  },
  padding : {
    paddingRight : 20,
    cursor : "pointer",
  },
  icon : {
    padding : 5,
    marginTop: 20,
    cursor : "pointer",
  },

  sideBarIcon : {
    paddingRight : 5,
    color : "grey",
    cursor : "pointer",
  },
  nav: {
    color: "grey",
    textDecoration: "none",
  },
  active: {
    fontWeight: "bold",
    color: "blue"
  },
}

class NavBar extends Component{
  constructor(props){
    super(props);
    this.state = {drawerActivate:false, drawer:false};
    this.createDrawer = this.createDrawer.bind(this);
    this.destroyDrawer = this.destroyDrawer.bind(this);
  }

  componentWillMount(){
    if(window.innerWidth <= 600){
      this.setState({drawerActivate:true});
    }

    window.addEventListener('resize',()=>{
      if(window.innerWidth <= 600){
        this.setState({drawerActivate:true});
      }
      else{
        this.setState({drawerActivate:false})
      }
    });
  }

  //Small Screens
  createDrawer(){
    return (
      <div className={this.props.classes.root}>
        <AppBar position="fixed" color="default">
          <Toolbar>
            <Grid container direction = "row" justify = "space-between" alignItems="center">
              <MenuIcon
                className = {this.props.classes.sideBarIcon}
                onClick={()=>{this.setState({drawer:true})}} />

              <Typography color="inherit" variant = "h6" className = {this.props.classes.root}>WeTrack</Typography>
            </Grid>
          </Toolbar>
        </AppBar>

        <SwipeableDrawer
         open={this.state.drawer}
         onClose={()=>{this.setState({drawer:false})}}
         onOpen={()=>{this.setState({drawer:true})}}>

           <div
             tabIndex={0}
             role="button"
             onClick={()=>{this.setState({drawer:false})}}
             onKeyDown={()=>{this.setState({drawer:false})}}>

              <List>
                {routes.map((route) => {
                  const { label, icon, path } = route;
                  return (
                    <NavLink
                      exact 
                      to={path}
                      className={this.props.classes.nav}
                      activeClassName={this.props.classes.active}
                    >
                      <ListItem button key={label} elevation={1}>
                        <ListItemIcon>{icon}</ListItemIcon>
                        <ListItemText primary={label} />
                      </ListItem>
                    </NavLink>
                  );
                })}
              </List>
           

         </div>
       </SwipeableDrawer>

      </div>
    );
  }

  //Larger Screens
  destroyDrawer(){
    const {classes} = this.props
    return (
      <AppBar  position="fixed" color="default">
        <Toolbar  variant="dense">
          <Typography variant = "h6" className={classes.root} color="inherit" >WeTrack</Typography>
                {routes.map((route) => {
                  const { label, icon, path } = route;
                  return (
                    <NavLink
                      exact 
                      to={path}
                      className={classes.nav}
                      activeClassName={classes.active}
                    >
                    <Typography key={label} variant = "subtitle1" className = {classes.padding} color="inherit" >
                     {icon} {label}
                    </Typography>
                  </NavLink>
                  );
                })}
        </Toolbar>
      </AppBar>
    )
  }

  render(){
    return(
      <div>
        {this.state.drawerActivate ? this.createDrawer() : this.destroyDrawer()}
      </div>
    );
  }
}

NavBar.propTypes = {
  classes : PropTypes.object.isRequired
};



export default withStyles(styleSheet)(NavBar);