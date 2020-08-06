import React, {useState} from 'react';
import HourlyTable from '../hourly/HourlyTable'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const Expand = ({mockData}) => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('xl'));
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        
        <DialogActions>
          <Button autoFocus onClick={handleClose} variant="outlined" color="secondary">
            Close
          </Button>
        </DialogActions>
        
        <DialogTitle id="responsive-dialog-title">{"Hourly Table"}</DialogTitle>
          
        <DialogContent>
          <Grid container spacing={3}>
            <Grid item md={12}>
              <HourlyTable mockData={mockData.table} />
            </Grid>
          </Grid>
        </DialogContent>
        
      </Dialog>
  );
};

export default Expand;
