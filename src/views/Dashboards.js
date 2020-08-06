import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Loading from '../components/common/Loading';
import ErrorMsg from '../components/common/ErrorMsg';
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
  const [mocky, setMocky] = useState();  
  const [status, setStatus] = useState('loading');  

  const classes = useStyles();
  
  useEffect(() => {
      const search = async () => {
        try {
          const  res  = await axios.get('https://run.mocky.io/v3/0203918b-54e7-4807-a8ca-d67e17c69f5a');
          setMocky(res.data);
        } catch(error) {
          setStatus('error');
          console.log(error.message); 
        }

      };
      search();
  }, []);

  if(mocky){
    return (
      <div className={classes.root}>
        <Container maxWidth="lg">
          <Title title="Albuquerque HQ Summary" />
          <Grid container spacing={3}>
            <Grid item md={6}>
              <Paper className={classes.paper}>
                <Main mockData={mocky.hq} />
              </Paper>
            </Grid>
            <Grid item md={6}>
                <ShowInfo titleOne="Sq ft. per person summary" titleTwo="Learnings" mockData={mocky.hq} />
            </Grid>
          </Grid>

          <Title title="Albuquerque Conferrence Room Summary" />
          <Grid container spacing={3}>
            <Grid item md={6}>
              <Paper className={classes.hourly}>
                <Conference mockData={mocky.conference_room.usage} />
              </Paper>
            </Grid>
            <Grid item md={6}>
                <ShowInfo titleOne="Density Insights" titleTwo="Learnings" mockData={mocky.conference_room.usage} />
            </Grid>
            
            <Grid item md={6}>
              <Paper className={classes.hourly}>
                <Occupancy mockData={mocky.conference_room.occupancy} />
              </Paper>
            </Grid>
            <Grid item md={6}>
                <ShowInfo titleOne="Meeting Size Insights" titleTwo="Learnings" mockData={mocky.conference_room.occupancy} />
            </Grid>

            <Grid item md={6}>
              <Paper className={classes.hourly}>
                <Hourly mockData={mocky.conference_room.hourly} />
              </Paper>
            </Grid>
            
          </Grid>
        </Container>
      </div>
    );
  } else if(status === "error") {
    return (
      <div><ErrorMsg /></div>
    );
  } else {
    return (
      <div><Loading /></div>
    );
  } 
  
}
