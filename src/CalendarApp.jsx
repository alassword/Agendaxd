import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router';

function CalendarApp() {
  return(
    <BrowserRouter>
    <AppRouter/>
    </BrowserRouter>
  )
}
export default CalendarApp
