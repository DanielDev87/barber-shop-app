import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="container text-center" style={{ marginTop: "100px" }}>
      <img
        src="/logo-barbershop.png"
        alt="Barber Shop Logo"
        style={{ width: "100px", marginBottom: "20px" }}
      />
      <h1 className="text-primary">Bienvenido</h1>
      <button
        className="btn btn-primary mt-3"
        onClick={() => navigate("/register")}
      >
        No tengo usuario
      </button>
      <button
        className="btn btn-outline-primary mt-3"
        onClick={() => navigate("/login")}
      >
        Ya tengo usuario
      </button>

      <section className="page-section" id="services">
        <div className="container px-4 px-lg-5">
          <h2 className="text-center mt-0">At Your Service</h2>
          <hr className="divider" />
          <div className="row gx-4 gx-lg-5">
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2">
                  <i className="bi-gem fs-1 text-primary" />
                </div>
                <h3 className="h4 mb-2">Sturdy Themes</h3>
                <p className="text-muted mb-0">
                  Our themes are updated regularly to keep them bug free!
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2">
                  <i className="bi-laptop fs-1 text-primary" />
                </div>
                <h3 className="h4 mb-2">Up to Date</h3>
                <p className="text-muted mb-0">
                  All dependencies are kept current to keep things fresh.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2">
                  <i className="bi-globe fs-1 text-primary" />
                </div>
                <h3 className="h4 mb-2">Ready to Publish</h3>
                <p className="text-muted mb-0">
                  You can use this design as is, or you can make changes!
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2">
                  <i className="bi-heart fs-1 text-primary" />
                </div>
                <h3 className="h4 mb-2">Made with Love</h3>
                <p className="text-muted mb-0">
                  Is it really open source if not made with love?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Welcome;
