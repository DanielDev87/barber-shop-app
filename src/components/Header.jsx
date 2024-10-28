const Header = () => {
  return (
    <header className="masthead bg-primary text-white text-center">
      <div className="container d-flex align-items-center flex-column">
        {/* Logo en el header */}
        <img className="masthead-avatar mb-5" src="assets/img/barber-logo.png" alt="Barbería Logo" />
        
        {/* Título principal */}
        <h1 className="masthead-heading text-uppercase mb-0">Bienvenido a Mi Barbería</h1>
        
        {/* Línea decorativa */}
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
          <div className="divider-custom-line"></div>
        </div>
        
        {/* Texto de subtítulo */}
        <p className="masthead-subheading font-weight-light mb-0">Servicio de calidad - Corte y Estilo Profesional</p>
      </div>
    </header>
  );
};

export default Header;
