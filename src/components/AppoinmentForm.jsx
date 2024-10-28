import React, { useState } from 'react';
import { useAppointments } from '../utils/AppointmentContext'; // Asegúrate de la ruta correcta

const AppointmentForm = () => {
  const { addAppointment } = useAppointments();
  const [selectedBarber, setSelectedBarber] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    const newAppointment = {
      barber: selectedBarber,
      date: appointmentDate,
      time: appointmentTime,
    };

    addAppointment(newAppointment); // Llama a addAppointment desde el contexto
    setMessage('Cita reservada exitosamente');
    setSelectedBarber('');
    setAppointmentDate('');
    setAppointmentTime('');
  };

  const generateTimeSlots = () => {
    const slots = [];
    let start = new Date();
    start.setHours(9, 0, 0);
    let end = new Date();
    end.setHours(21, 0, 0);

    while (start <= end) {
      const hour = start.getHours();
      const minutes = start.getMinutes();
      const timeLabel = `${hour.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
      slots.push(timeLabel);
      start.setMinutes(start.getMinutes() + 30);
    }

    return slots;
  };

  return (
    <div className="appointment-form mt-4">
      <h2 className="text-center">Reservar una Cita</h2>
      <form onSubmit={handleFormSubmit} className="w-50 mx-auto">
        {/* Campo para seleccionar el barbero */}
        <div className="form-group mt-3">
          <label htmlFor="barber">Barbero:</label>
          <select
            className="form-control"
            id="barber"
            value={selectedBarber}
            onChange={(e) => setSelectedBarber(e.target.value)}
            required
          >
            <option value="">Seleccionar barbero</option>
            <option value="Carlos García">Carlos García</option>
            <option value="Luis Fernández">Luis Fernández</option>
            <option value="Miguel Rodríguez">Miguel Rodríguez</option>
            <option value="Juan Pérez">Juan Pérez</option>
            
            {/* Aquí deberías agregar tus opciones de barberos */}
          </select>
        </div>

        {/* Campo para seleccionar la fecha */}
        <div className="form-group mt-3">
          <label htmlFor="date">Fecha:</label>
          <input
            type="date"
            className="form-control"
            id="date"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
            required
          />
        </div>

        {/* Campo para seleccionar la hora */}
        <div className="form-group mt-3">
          <label htmlFor="time">Hora:</label>
          <select
            className="form-control"
            id="time"
            value={appointmentTime}
            onChange={(e) => setAppointmentTime(e.target.value)}
            required
          >
            <option value="">Seleccionar hora</option>
            {generateTimeSlots().map((time, index) => (
              <option key={index} value={time}>{time}</option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary btn-block mt-4">
          Reservar
        </button>
        {message && <div className="alert alert-success mt-3">{message}</div>}
      </form>
    </div>
  );
};

export default AppointmentForm;
