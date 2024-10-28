const Barberos = () => {
    const barberosData = [
      { id: 1, name: 'Carlos García', skill: 'Cortes Clásicos', image: 'assets/img/barber-1.jpg' },
      { id: 2, name: 'Luis Fernández', skill: 'Estilos Modernos', image: 'assets/img/barber-2.jpg' },
      { id: 3, name: 'Miguel Rodríguez', skill: 'Cortes a Navaja', image: 'assets/img/barber-3.jpg' },
      { id: 4, name: 'Juan Pérez', skill: 'Barbas y Bigotes', image: 'assets/img/barber-4.jpg' }
    ];
  
    return (
      <section className="page-section bg-light" id="barberos">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Nuestros Barberos</h2>
          
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
            <div className="divider-custom-line"></div>
          </div>
  
          <div className="row">
            {barberosData.map(barbero => (
              <div key={barbero.id} className="col-md-6 col-lg-4 mb-5">
                <div className="portfolio-item mx-auto">
                  <img className="img-fluid" src={barbero.image} alt={barbero.name} />
                  <h3 className="text-center mt-3">{barbero.name}</h3>
                  <p className="text-center">{barbero.skill}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Barberos;
  