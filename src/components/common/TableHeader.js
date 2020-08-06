import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import DateRangeIcon from '@material-ui/icons/DateRange';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    marginBottom: 10,
  },
  date: {
    textAlign: 'right',
    marginBottom: 5,
    color: theme.palette.text.secondary,
  },
  info: {
    marginTop: 10,
    marginBottom: 5,
    color: theme.palette.text.secondary,
  },
}));


const TableHeader = ({title, count, subtitle, date, info}) => {
  const classes = useStyles(); 

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={3}>
        <Typography variant = "h6" color="primary" >{title}</Typography>
        <Typography variant = "subtitle2">{count} {subtitle}</Typography>
        <Box className={classes.date}>
          <Typography variant="caption">
            <DateRangeIcon fontSize="small" />
            {date.start} - {date.end} 
          </Typography>
        </Box>
        <Divider />
        <Box className={classes.info}>
          <Typography variant="body2">{info}</Typography>
        </Box>
      </Paper>
    </div>
  );
};

export default TableHeader;
