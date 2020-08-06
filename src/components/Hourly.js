import React, {useState, useEffect} from 'react';
import TableHeader from './TableHeader';
import HourlyTable from '../components/HourlyTable'
import { CSVLink, CSVDownload } from "react-csv";
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

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
  buttons: {
    padding: theme.spacing(2),
    textAlign: 'right',
  },
  link: {
    textDecoration: 'none'
  },
}));


const Hourly = ({mockData}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TableHeader title="Hourly" count="" subtitle="Ames HQ" date={mockData.date} info={mockData.info} />

      <Grid container spacing={3}>
        <Grid item md={12}>
          <HourlyTable mockData={mockData.table} />
        </Grid>
      </Grid>
      <Box className={classes.buttons}>
        <CSVLink data={mockData.table} className={classes.link} target="_blank">
          <Button variant="outlined" color="primary">
            Export as CSV
          </Button>
        </CSVLink>
          
        <Button variant="outlined" color="primary">
          Expand
        </Button>
      </Box>
    </div>
  );
};

export default Hourly;
