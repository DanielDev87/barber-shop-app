import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../utils/auth'; // Importa la función de login

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const isLoggedIn = login(email, password); // Llama a la función de login

    if (isLoggedIn) {
      navigate('/calendar');  // Cambia esto a la ruta deseada después de iniciar sesión
    } else {
      setError('Credenciales incorrectas');
    }
  };

  return (
    <div className="container d-flex align-items-center flex-column">
      <h2 className="text-center text-uppercase mt-4">Iniciar sesión</h2>
      <form onSubmit={handleLogin} className="w-50">
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block mt-4">
          Iniciar Sesión
        </button>
        <div className="mt-3">
          <p>
            ¿No tienes una cuenta? <span onClick={() => navigate('/register')} className="text-primary cursor-pointer">Regístrate aquí</span>
          </p>
          <p>
            <span onClick={() => navigate('/')} className="text-primary cursor-pointer">Volver a la página de bienvenida</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
