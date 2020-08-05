import React, {useState, useEffect} from 'react';
// import axios from 'axios';
// import { data } from '../components/data.js';
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


 const Temp = (mocky) => {
  const classes = useStyles();
  
  
  // console.log(typeof(mockData));
  // console.log(typeof(data));
  // console.log(main.table);
  // console.log("api", conf.table);
  // console.log("mock", data.conf.table);

      const renderMocky = mocky.table && mocky.table.map((data, key) => {
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
      });

  return (
    <div>
      {renderMocky}    
    </div>
  );
}

export default Temp;
