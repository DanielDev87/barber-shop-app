import { Link, useNavigate, useLocation } from 'react-router-dom';
import { logout } from '../utils/auth';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Obtiene la ubicación actual

  const handleLogout = () => {
    logout(); // Llama a la función de logout
    navigate('/'); // Redirige a la página de bienvenida
  };

  // Verifica si la ruta actual es la página de bienvenida, login o registro
  const isHomePage = location.pathname === '/';
  const isLoginPage = location.pathname === '/login'; // Ruta de login
  const isRegisterPage = location.pathname === '/register'; // Ruta de registro

  // Si estamos en la página de bienvenida, login o registro, no mostramos la navbar
  if (isHomePage || isLoginPage || isRegisterPage) return null;

  return (
    <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
      <div className="container">
        <Link className="navbar-brand" to="/">Mi Barbería</Link>
        <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive">
          Menu
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            {/* <li className="nav-item mx-0 mx-lg-1">
              <Link className="nav-link py-3 px-0 px-lg-3 rounded" to="/">Inicio</Link>
            </li> */}
            <li className="nav-item mx-0 mx-lg-1">
              <Link className="nav-link py-3 px-0 px-lg-3 rounded" to="/profile">Perfil</Link>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <Link className="nav-link py-3 px-0 px-lg-3 rounded" to="/barberos">Barberos</Link>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <Link className="nav-link py-3 px-0 px-lg-3 rounded" to="/calendar">Calendario</Link>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <Link className="nav-link py-3 px-0 px-lg-3 rounded" to="/appointments">Reservar Cita</Link>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <Link className="nav-link py-3 px-0 px-lg-3 rounded" to="/about">Sobre nosotros</Link>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <Link className="nav-link py-3 px-0 px-lg-3 rounded" onClick={handleLogout}>Cerrar Sesión</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
