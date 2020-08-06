import React from 'react';
import ProgressBar from "../common/ProgressBar";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';


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
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    fontSize: 12,
    color: 'blue',
    backgroundColor: '#e9f3f7'
  },
}));

const ConferenceTable = ({mockData}) => {
  const classes = useStyles();

  const renderTable = mockData && mockData.map((data, key) => {
    return (
    <Grid container key={key} spacing={0}>
      <Grid item xs={3}>
          <Paper className={classes.paper} elevation={0}>
            {data.people} People
          </Paper>
      </Grid>
      <Grid item xs={9}>
          <Paper className={classes.paper} elevation={0}>
            <ProgressBar bgcolor={"#757ce8"} completed={data.occupancy} max={100} />
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