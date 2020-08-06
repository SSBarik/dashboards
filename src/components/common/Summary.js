import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';


const useStyles = makeStyles((theme) => ({
  root: {
      width: '100%',
      maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
  },
  inline: {
      display: 'inline',
  },
}));


const Summary = ({mockData}) =>  {
  const classes = useStyles();

  const renderSummary =  (
    <List>
      {mockData && mockData.map((data, key) => {
        return (
          <ListItem key={key} elevation={1}>
            <ListItemIcon> <DoubleArrowIcon color="primary" /> </ListItemIcon>
            <ListItemText>
              <Typography variant="body2">{data}</Typography>
            </ListItemText>
          </ListItem>
        );
      })}
    </List>
  );

  return (
    <div>
      {renderSummary}
    </div> 
  );
}
export default Summary;
