import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';


const Summary = ({mockData}) =>  {
  
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
