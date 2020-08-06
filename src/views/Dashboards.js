import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { data } from '../components/data.js';
import Loading from '../components/Loading';
import ErrorMsg from '../components/ErrorMsg';
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
  const [status, setStatus] = useState('loading');  

  useEffect(() => {
      const search = async () => {
        try {
          const  res  = await axios.get('https://run.mocky.io/v3/875eb504-4b39-4f10-b746-216d23abe07e');
          setMocky(res.data);
        } catch(error) {
          setStatus('error');
          console.log(error.message); 
        }

      };
      search();
  }, []);

  // console.log(mocky)
  // console.log(main)


  if(mocky){
    console.log(mocky)

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
                <Hourly mockData={mocky.conference_room.hourly} />
              </Paper>
            </Grid>
            <Grid item md={6}>
                <ShowInfo titleOne="Sq ft. per person summary" titleTwo="Learnings" mockData={mocky.hq} />
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
