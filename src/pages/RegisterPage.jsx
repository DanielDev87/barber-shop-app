import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const userExists = users.some((u) => u.email === email);
    if (userExists) {
      setError('Este correo ya está registrado');
    } else {
      const newUser = { name, email, password };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('loggedInUser', JSON.stringify(newUser));
      navigate('/');  // Navega a la página de inicio o donde quieras después del registro
    }
  };

  return (
    <div className="container d-flex align-items-center flex-column">
      <h2 className="text-center text-uppercase mt-4">Registrarse</h2>
      <form onSubmit={handleRegister} className="w-50">
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group mt-3">
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
          Registrarse
        </button>
        <div className="mt-3">
          <p>
            ¿Ya tienes una cuenta? <span onClick={() => navigate('/login')} className="text-primary cursor-pointer">Inicia sesión aquí</span>
          </p>
          <p>
            <span onClick={() => navigate('/')} className="text-primary cursor-pointer">Volver a la página de bienvenida</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
