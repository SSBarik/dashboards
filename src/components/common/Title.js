import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  title:{
    marginTop: 50,
    marginBottom:30,
  },
}));


const Title = ({title}) => {
  const classes = useStyles();

  return (
    <div className={classes.title}>
      <Typography variant="h6">{title}</Typography>
      <Divider />
    </div>
  );
 
};

export default Title;
