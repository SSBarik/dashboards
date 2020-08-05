import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Temp from './Temp';
import { data } from '../components/data.js';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


export default function PageNotFound() {
  const classes = useStyles();
  const [mocky, setMocky] = useState([]);
  const [main, setMain] = useState([]);
  const [conf, setConf] = useState([]);
  

  useEffect(() => {
      const search = async () => {
        const  res  = await axios.get('https://run.mocky.io/v3/1de2b4e0-6dda-422f-8642-a5bda3a68ff5');
        
        // console.log(typeof(res.data));
        setMocky(res.data);
        setMain(res.data.hq);
        setConf(res.data.conf);

      };
      search();
  }, []);

  // console.log(typeof(mockData));
  // console.log(typeof(data));
  // console.log(main.table);
  console.log("api", conf.table);
  console.log("mock", data.conf.table);
  

  return (
    <div className={classes.root}>
      <h1>Dashboards</h1>
      
      <Grid container spacing={3}>
        <Grid item md={6}>
          <Paper className={classes.paper}>Table: {main.table && main.table.map((data, key) => {
            return (
              <div key={key}>
                {data.company +
                  " , " +
                  data.ticker +
                  " ," +
                  data.stockPrice +
                  ", " +
                  data.timeElapsed}
              </div>
            );
          })}</Paper>
        </Grid>
        <Grid item md={6}>
          <Paper className={classes.paper}>Summary: {main.summary && main.summary.map((data, key) => {
            return (
              <div key={key}>
                <p>{data}</p>
              </div>
            );
          })}

          <p>Learnings: {main.learnings}</p>
          
          </Paper>
        
        </Grid>
        
        </Grid>
    </div>
  );
}
