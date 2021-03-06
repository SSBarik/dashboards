import React, { Component } from 'react';
import routes from './routes'
import { NavLink } from 'react-router-dom';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
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

class NavBAr extends Component{
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
                {routes.map((route, key) => {
                  return (
                    <NavLink
                      key={key}
                      exact 
                      to={route.path}
                      className={this.props.classes.nav}
                      activeClassName={this.props.classes.active}
                    >
                      <ListItem button  elevation={1}>
                        <ListItemIcon>{route.icon}</ListItemIcon>
                        <ListItemText primary={route.label} />
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
                {routes.map((route, key) => {
                  return (
                    <NavLink
                      key={key}
                      exact 
                      to={route.path}
                      className={classes.nav}
                      activeClassName={classes.active}
                    >
                    <Typography variant = "subtitle1" className = {classes.padding} color="inherit" >
                     {route.icon} {route.label}
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

NavBAr.propTypes = {
  classes : PropTypes.object.isRequired
};

export default withStyles(styleSheet)(NavBAr);