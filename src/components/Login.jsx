import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setUser }) {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUser = localStorage.getItem(credentials.username);
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      if (parsedUser.password === credentials.password) {
        setUser(credentials.username);
        navigate('/home');
      } else {
        setError('Contraseña incorrecta');
      }
    } else {
      setError('Usuario no encontrado');
    }
  };

  return (
    <div className="container text-center" style={{ marginTop: '100px' }}>
      <img src="/logo-barbershop.png" alt="Barber Shop Logo" style={{ width: '100px', marginBottom: '20px' }} />
      <h1 className="text-primary">Iniciar Sesión</h1>
      {error && <p className="text-danger">{error}</p>}
      <input
        type="text"
        placeholder="Usuario"
        className="form-control mt-3"
        value={credentials.username}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Contraseña"
        className="form-control mt-3"
        value={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      />
      <button className="btn btn-primary mt-3" onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
