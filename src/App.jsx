import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppointmentProvider } from './utils/AppointmentContext'; // Importa el proveedor
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Calendar from './components/Calendar';
import AppoinmentForm from './components/AppoinmentForm'; // Corregido
import Profile from './components/Profile';
import Barberos from './components/Barberos';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WelcomePage from './pages/WelcomePage';
import About from './components/About';

function App() {
  return (
    <Router>
      <AppointmentProvider>
        <div className="d-flex">
          <Navbar />
          <div className="content w-100">
            <Header title="Bienvenido a Mi Barbería" />
            <MainContent>
              <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/appointments" element={<AppoinmentForm />} /> 
                <Route path="/barberos" element={<Barberos />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </MainContent>
            <Footer />
          </div>
        </div>
      </AppointmentProvider>
    </Router>
  );
}

export default App;
