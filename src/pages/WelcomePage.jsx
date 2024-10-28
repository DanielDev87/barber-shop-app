import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div className="masthead bg-primary text-white text-center">
      <div className="container d-flex align-items-center flex-column">
        {/* Imagen del avatar o logo */}
        <img className="masthead-avatar mb-5" src="assets/img/avataaars.svg" alt="Avatar" />
        
        {/* Título principal */}
        <h1 className="masthead-heading text-uppercase mb-0">¡Bienvenido a la Barbería!</h1>
        
        {/* Icono divisor */}
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
          <div className="divider-custom-line"></div>
        </div>
        
        {/* Botones de Login y Register */}
        <div className="d-flex justify-content-center">
          <Link to="/login" className="btn btn-lg btn-outline-light mx-2">Login</Link>
          <Link to="/register" className="btn btn-lg btn-outline-light mx-2">Registrarse</Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
