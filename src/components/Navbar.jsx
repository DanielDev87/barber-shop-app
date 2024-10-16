import { Link } from 'react-router-dom';
import './Navbar.css'; // Asegúrate de que el archivo CSS esté presente y contenga los estilos personalizados.

function Navbar({ user, onLogout }) {
  return (
    <div className="d-flex flex-column vh-100 navbar-container">
      <div className="navbar-header">
        <img src="/logo-barbershop.png" alt="Logo" className="logo" />
        <h2 className="text-white">Barber Shop</h2>
      </div>
      <ul className="navbar-nav flex-column mt-4">
        <li className="nav-item">
          <Link to="view1" className="nav-link text-white">Barberos</Link>
        </li>
        <li className="nav-item">
          <Link to="view2" className="nav-link text-white">Vista 2</Link>
        </li>
        <li className="nav-item">
          <Link to="view3" className="nav-link text-white">Vista 3</Link>
        </li>
      </ul>
      <div className="mt-auto p-3 text-white">
        <p>Bienvenido, {user}</p>
        <button className="btn btn-outline-light" onClick={onLogout}>Cerrar sesión</button>
      </div>
    </div>
  );
}

export default Navbar;
