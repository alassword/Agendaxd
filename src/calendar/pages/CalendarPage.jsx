import { Calendar } from 'react-big-calendar';
import { dateFnsLocalizer } from 'react-big-calendar';
import { addHours, format as formatDate, parse, startOfWeek, getDay } from 'date-fns';
import enUS from 'date-fns/locale/en-US';
import 'react-big-calendar/lib/css/react-big-calendar.css'; // Importa los estilos de react-big-calendar
// Importa Navbar de tu paquete de navegación
import { Navbar } from '../'; // Reemplaza 'tu-paquete-de-navegacion' con el nombre real del paquete

const locales = {
  'en-US': enUS
};

const localizer = dateFnsLocalizer({
  format: formatDate,
  parse,
  startOfWeek,
  getDay,
  locales
});

const events = [{
  title: 'Cumpleaños del team leader',
  notes: 'comprarle una taza de superman',
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: '#fafafa',
  user: {
    _id: '123',
    name: 'Nestor',
  }
}];

export const CalendarPage = () => {
  return (
    <>
      <Navbar /> {/* Asegúrate de que el componente Navbar esté importado y renderizado correctamente */}
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </>
  );
};
