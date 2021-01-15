import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ListItem from '@material-ui/core/ListItem';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function Appointment({ appointment, handleDeleteAppointment }) {
  const classes = useStyles();

  return (
    <ListItem>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {appointment.owner.charAt(0).toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings" onClick={() => handleDeleteAppointment(appointment)}>
              <CloseIcon />
            </IconButton>
          }
          title={`${appointment.owner} (${appointment.petName})`}
          subheader={`${appointment.date} ${appointment.time}`}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {appointment.symptoms}
          </Typography>
        </CardContent>
      </Card>
    </ListItem>
  );
}

Appointment.propTypes = {
  handleDeleteAppointment: PropTypes.func,
};
export default Appointment;
