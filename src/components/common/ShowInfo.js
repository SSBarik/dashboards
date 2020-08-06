import React from 'react';
import Summary from './Summary';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.primary,
    backgroundColor: 'transparent',
  },
}));


const Main = ({titleOne, titleTwo, mockData}) => {
  const classes = useStyles(); 

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={0}>
        <Typography variant="h6">{titleOne}</Typography>
        <Summary mockData={mockData.summary} />
        <Typography variant="h6">{titleTwo}</Typography>
        <Typography variant="body2">{mockData.learnings}</Typography>
      </Paper> 
    </div>
  );
};

export default Main;
