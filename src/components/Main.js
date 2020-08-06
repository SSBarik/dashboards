import React, {useState, useEffect} from 'react';
import TableHeader from './TableHeader';
import TableElement from './TableElement';

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


const Main = ({mockData}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TableHeader title="Sq ft. Per Person Summary" count={mockData.table.length} subtitle="selected spaces" date={mockData.date} info={mockData.info} />

      <Grid container spacing={3}>
        <Grid item md={12}>
          <TableElement mockData={mockData.table} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Main;
