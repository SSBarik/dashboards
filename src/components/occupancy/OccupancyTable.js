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
  }
}));

const ConferenceTable = ({mockData}) => {
  const classes = useStyles();

  const renderTable = mockData.map((data, key) => {
    return (
    <Grid container key={key} spacing={0}>
      <Grid item sm={3} xs={5}>
          <Paper className={classes.paper} elevation={0}>
            {data.people} People
          </Paper>
      </Grid>
      <Grid item sm={9} xs={7}>
          <Paper className={classes.paper} elevation={0}>
            <ProgressBar bgcolor={"#757ce8"} completed={data.occupancy} postfix="%" max={100} />
          </Paper>
      </Grid>
    </Grid>
    );
  })

  return (
    <div className={classes.root}>
        
      {renderTable}
      
    </div>
  );
}

export default ConferenceTable;