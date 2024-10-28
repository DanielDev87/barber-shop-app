// components/Calendar.js
import { useAppointments } from '../utils/AppointmentContext';

const Calendar = () => {
  const { appointments } = useAppointments();
  const user = JSON.parse(localStorage.getItem('loggedInUser')) || {};

  return (
    <div className="calendar-container mt-4">
      <h2 className="text-center">Calendario de Citas</h2>
      <div>
        {appointments.length > 0 ? (
          <ul className="list-group">
            {appointments.map((appointment, index) => (
              <li key={index} className="list-group-item">
                {`Usuario: ${user.name}, Barbero: ${appointment.barber}, Fecha: ${appointment.date}, Hora: ${appointment.time}`}
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay citas reservadas.</p>
        )}
      </div>
    </div>
  );
};

export default Calendar;
