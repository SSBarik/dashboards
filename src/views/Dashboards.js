import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { data } from '../components/data.js';
import Loading from '../components/Loading';
import Main from '../components/Main'
import ShowInfo from '../components/ShowInfo'
import Title from '../components/Title'

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
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  title:{
    marginTop: 20,
    marginBottom:20,
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
        const  res  = await axios.get('https://run.mocky.io/v3/1de2b4e0-6dda-422f-8642-a5bda3a68ff5');
        
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
        </Container>
      </div>
    );
  } else {
    return (
      <div><Loading /></div>
    );
  }
  
}
