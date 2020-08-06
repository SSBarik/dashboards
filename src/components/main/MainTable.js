import React from 'react';
import ProgressBar from "../common/ProgressBar";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  header: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    fontWeight: 'bold'
  },
}));

const MainTable = ({ mockData }) => {
  const classes = useStyles();

  const renderTable = mockData.map((data, key) => {
    return (
    <Grid container key={key} spacing={0}>
      <Grid item xs={3}>
          <Paper className={classes.paper} elevation={0}>{data.space}</Paper>
      </Grid>
      <Grid item xs={3}>
          <Paper className={classes.paper} elevation={0}>{data.area}</Paper>
      </Grid>
      <Grid item xs={6}>
          <Paper className={classes.paper} elevation={0}>
            <ProgressBar bgcolor={"#757ce8"} completed={data.density} postfix="sq.ft" max={200} />
          </Paper>
      </Grid>
    </Grid>
    );
  })

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={3}>
          <Paper className={classes.header} elevation={0}>Space</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.header} elevation={0}>Sq.ft</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.header} elevation={0}>Sq.ft/Person</Paper>
        </Grid>
      </Grid>
        
      {renderTable}

    </div>
  );
}

export default MainTable;