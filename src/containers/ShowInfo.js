import React, {useState, useEffect} from 'react';
import Summary from '../components/Summary';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));


const Main = ({titleOne, titleTwo, mockData}) => {
  const classes = useStyles(); 

  

  return (
    <div className={classes.root}>
      {titleOne}
      <Summary mockData={mockData.summary} />
      <p>{titleTwo}</p>
      {mockData.learnings}
    </div>
  );
};

export default Main;
