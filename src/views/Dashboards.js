import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { data } from '../components/data.js';
import Loading from '../components/Loading';
import Main from '../components/Main'
import ShowInfo from '../components/ShowInfo'
import Title from '../components/Title'
import Hourly from '../components/Hourly'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

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
  // const [mocky, setMocky] = useState([]);
  // const [main, setMain] = useState([]);
  // const [conf, setConf] = useState([]);
  const [mocky, setMocky] = useState();
  const [main, setMain] = useState();
  const [conf, setConf] = useState();
  

  useEffect(() => {
      const search = async () => {
        const  res  = await axios.get('https://run.mocky.io/v3/5c2abc43-1255-4f57-a7e5-6d4b54dba00f');
        
        setMocky(res.data);
        setMain(res.data.hq);
        setConf(res.data.conf);

      };
      search();
  }, []);

  if(true){
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
                <Hourly mockData={data.conference_room.hourly} />
              </Paper>
            </Grid>
            <Grid item md={6}>
                <ShowInfo titleOne="Sq ft. per person summary" titleTwo="Learnings" mockData={data.hq} />
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  } else {
    return (
      <div><Loading /></div>
    );
  }
  
}
