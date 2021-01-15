import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Appointment from './Appointment';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

function Appointments({ appointments, handleDeleteAppointment }) {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.field}>
        <Typography align="left" variant="h5">
          { appointments.length > 0 ? "Appointments" : "Add Appointments"}
        </Typography>
      </Box>
      <List className={classes.root}>
        {appointments.map((appointment) => (
          <Appointment appointment={appointment} key={appointment.uuid} handleDeleteAppointment={handleDeleteAppointment} />
        ))}
      </List>
    </>
  );
}

Appointments.propTypes = {
  appointments: PropTypes.array,
  handleDeleteAppointment: PropTypes.func,
};

export default Appointments;