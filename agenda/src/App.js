import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Appointments from './components/Appointments'
import Grid from '@material-ui/core/Grid'
import { useState, useEffect } from 'react';


function App() {

  const initialAppointments = JSON.parse(localStorage.getItem('appointments') || '[]');
  const [appointments, setAppointments] = useState(initialAppointments);

  const handleCreateAppointment = (newAppointment) => {
    setAppointments([...appointments, newAppointment ]);
  };

  const handleDeleteAppointment = (deletedAppointment) => { 
    const newAppointments = appointments.filter((appointment) => appointment.uuid !== deletedAppointment.uuid)
    setAppointments(newAppointments);
  }

  useEffect(() => {
    localStorage.setItem('appointments', JSON.stringify(appointments))
  }, [appointments]);

  return (
    <div className="App">
      <Header />
      <Grid container spacing={3} style={{ width: 1200, margin: '0 auto', padding: 25 }}>
        <Grid item xs={6}>
          <Form 
            handleCreateAppointment={handleCreateAppointment}
          />
        </Grid>
        <Grid item xs={6}>
          <Appointments appointments={appointments} handleDeleteAppointment={handleDeleteAppointment} />
        </Grid>
      </Grid>  
    </div>
  );
}

export default App;
