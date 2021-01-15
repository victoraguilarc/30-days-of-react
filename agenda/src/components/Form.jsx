import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { v4 as uuidv4 } from 'uuid';


const useStyles = makeStyles((theme) => ({
  field: {
    marginBottom: theme.typography.pxToRem(12),
  },
}));

const Form = ({ handleCreateAppointment }) => {
  const classes = useStyles();
  const blankAppointment = { petName: '', owner: '', date: '', time: '', symptoms: '' };
  const [appointment, setNewAppointment] = useState(blankAppointment);
  const [errors, setErrors] = useState({ petName: null, owner: null, date: null, time: null, symptoms: null });
  
  const { petName, owner, date, time, symptoms } = appointment;

  const updateAppointment = (event) => { 
    //  [event.currentTarget.name] should be at last always
    setNewAppointment({
      ...appointment,
      [event.currentTarget.name]: event.currentTarget.value, 
    })
  }

  const submitAppointment = (event) => {
    event.preventDefault();
    const REQUIRED = 'Este campo es requerido';
    let hasError = false;
    let newErrors = { ...errors };
    
    if (petName.trim() === '') {
      newErrors.petName = REQUIRED;
      hasError = true;
    }

    if (owner.trim() === '') {
      newErrors.owner = REQUIRED;
      hasError = true;
    }

    if (date.trim() === '') {
      newErrors.date = REQUIRED;
      hasError = true;
    }

    if (time.trim() === '') {
      newErrors.time = REQUIRED;
      hasError = true;
    }

    if (symptoms.trim() === '') {
      newErrors.symptoms = REQUIRED;
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    const appointment = { petName, owner, date, time, symptoms, uuid: uuidv4() };
    handleCreateAppointment(appointment);
    setNewAppointment(blankAppointment);
  };

  return (
    <form onSubmit={submitAppointment} method="post">
      <Box className={classes.field}>
        <Typography align="left" variant="h5">New Appointment</Typography>
      </Box>
      <Box className={classes.field}>
        <Typography align="left" variant="body2">Pet Name</Typography>
        <TextField
          name="petName"
          fullWidth
          variant="outlined"
          error={Boolean(errors.petName)}
          helperText={errors.petName}
          value={petName}
          onChange={updateAppointment}
        />
      </Box>
      <Box className={classes.field}>
        <Typography align="left" variant="body2">Owner</Typography>
        <TextField
          name="owner"
          fullWidth
          variant="outlined"
          error={Boolean(errors.owner)}
          helperText={errors.owner}
          value={owner}
          onChange={updateAppointment}
        />
      </Box>
      <Box className={classes.field}>
        <Typography align="left" variant="body2">Date</Typography>
        <TextField
          name="date"
          fullWidth
          variant="outlined"
          error={Boolean(errors.date)}
          helperText={errors.date}
          type="date"
          value={date}
          onChange={updateAppointment}
        />
      </Box>
      <Box className={classes.field}>
        <Typography align="left" variant="body2">Time</Typography>
        <TextField
          name="time"
          fullWidth
          variant="outlined"
          error={Boolean(errors.time)}
          helperText={errors.time}
          type="time"
          value={time}
          onChange={updateAppointment}
        />
      </Box>
      <Box className={classes.field}>
        <Typography align="left" variant="body2">Symptoms</Typography>
        <TextField 
          name="symptoms"
          fullWidth 
          variant="outlined"
          error={Boolean(errors.symptoms)}
          helperText={errors.symptoms}
          multiline
          rows={4}
          value={symptoms}
          onChange={updateAppointment}
        />
      </Box>
      <Box>
        <Button color="primary" variant="contained" size="large" style={{ width: 300 }} type="submit"> 
          SCHEDULE
        </Button>
      </Box>
    </form>
  );
};

Form.propTypes = {
  handleCreateAppointment: PropTypes.func,
};

export default Form;