import { Link, Outlet } from 'react-router-dom';

function Home({ user, onLogout }) {
  return (
    <div className="d-flex">
      <nav className="navbar navbar-dark bg-dark flex-column p-3 sidebar">
        <Link className="navbar-brand mb-4" to="/home">
          <img src="/logo-barbershop.png" alt="Barber Shop Logo" className="logo" /> Barber Shop
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item mb-2">
            <Link className="nav-link" to="view1">Vista 1</Link> {/* Notar que no necesitas /home/view1 */}
          </li>
          <li className="nav-item mb-2">
            <Link className="nav-link" to="view2">Vista 2</Link>
          </li>
          <li className="nav-item mb-2">
            <Link className="nav-link" to="view3">Vista 3</Link>
          </li>
        </ul>
        <div className="mt-auto navbar-text">
          <span>Bienvenido, {user}</span>
          <button className="btn btn-outline-danger mt-2" onClick={onLogout}>Cerrar sesión</button>
        </div>
      </nav>

      <div className="content p-4">
        <Outlet /> {/* Aquí es donde se cargarán las vistas anidadas */}
      </div>
    </div>
  );
}

export default Home;
