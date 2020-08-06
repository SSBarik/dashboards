import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
    position: 'absolute', left: '50%', top: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'red'
  },
}));

export default function ErrorMsg() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>  
        <h1>Sorry! Seems like there's some sever issues...</h1>
      </Container>
    </div>
  );
}
