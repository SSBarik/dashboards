import React from 'react';
import ProgressBar from "./ProgressBar";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontWeight: 'bold',
  },
  value: {
    padding: theme.spacing(2),
    margin: 1,
    textAlign: 'center',
    color: "white",
    backgroundColor: '#3f51b5'
  },
  buttons: {
    padding: theme.spacing(2),
    textAlign: 'right',
  },
}));

const HourlyTable = ({mockData}) => {
  const classes = useStyles();

  const time = ["9a","10a","11a","12p","1p","2p","3p","4p"];

  const renderTable = mockData.table && mockData.table.map((data, key) => {
    return (
    <Grid container key={key} spacing={0}>
      <Grid item xs={2} sm={1}>
        <Paper className={classes.header} elevation={0}>{time[key]}</Paper>
      </Grid>
      
      {data.map( (item, key) => {
        return (
          <Grid item xs={2} key={key}>
            <Paper className={classes.value} elevation={0}>{item}</Paper>
          </Grid>
        );
      })}

    </Grid>
    );
  })

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={2} sm={1}>
          <Paper className={classes.header} elevation={0}></Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.header} elevation={0}>Mon</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.header} elevation={0}>Tue</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.header} elevation={0}>Wed</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.header} elevation={0}>Thus</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.header} elevation={0}>Fri</Paper>
        </Grid>
      </Grid>
        
      {renderTable}

      <Box className={classes.buttons}>
        <Button variant="outlined" color="primary">
          Export as CSV
        </Button>
        
        <Button variant="outlined" color="primary">
          Expand
        </Button>
      </Box>
    </div>
  );
}

export default HourlyTable;