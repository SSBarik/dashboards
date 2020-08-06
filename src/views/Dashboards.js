import React from 'react';
import { data } from '../components/data.js';
import ShowInfo from '../components/common/ShowInfo'
import Title from '../components/common/Title'
import Main from '../components/main/Main'
import Conference from '../components/conference/Conference'
import Occupancy from '../components/occupancy/Occupancy'
import Hourly from '../components/hourly/Hourly'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: 'left',
    paddingTop: 50,
    paddingBottom: 100,
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
}));


export default function PageNotFound() {
  const classes = useStyles();
 
  console.log(data);
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Title title="Albuquerque HQ Summary" />
        <Grid container spacing={3}>
          <Grid item md={6}>
            <Paper className={classes.paper}>
              <Main mockData={data.hq} />
            </Paper>
          </Grid>
          <Grid item md={6}>
              <ShowInfo titleOne="Sq ft. per person summary" titleTwo="Learnings" mockData={data.hq} />
          </Grid>
        </Grid>

        <Title title="Albuquerque Conferrence Room Summary" />
        <Grid container spacing={3}>
          <Grid item md={6}>
            <Paper className={classes.hourly}>
              <Conference mockData={data.conference_room.usage} />
            </Paper>
          </Grid>
          <Grid item md={6}>
              <ShowInfo titleOne="Density Insights" titleTwo="Learnings" mockData={data.conference_room.usage} />
          </Grid>
          
          <Grid item md={6}>
            <Paper className={classes.hourly}>
              <Occupancy mockData={data.conference_room.occupancy} />
            </Paper>
          </Grid>
          <Grid item md={6}>
              <ShowInfo titleOne="Meeting Size Insights" titleTwo="Learnings" mockData={data.conference_room.occupancy} />
          </Grid>

          <Grid item md={6}>
            <Paper className={classes.hourly}>
              <Hourly mockData={data.conference_room.hourly} />
            </Paper>
          </Grid>
          
        </Grid>
      </Container>
    </div>
  );
}   

