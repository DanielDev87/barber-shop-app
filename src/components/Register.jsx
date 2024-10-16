import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [user, setUser] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleRegister = () => {
    // Simulamos almacenar en un objeto JSON
    localStorage.setItem(user.username, JSON.stringify(user));
    navigate('/login');
  };

  return (
    <div className="container text-center" style={{ marginTop: '100px' }}>
      <img src="/logo-barbershop.png" alt="Barber Shop Logo" style={{ width: '100px', marginBottom: '20px' }} />
      <h1 className="text-primary">Regístrate</h1>
      <input
        type="text"
        placeholder="Usuario"
        className="form-control mt-3"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Contraseña"
        className="form-control mt-3"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button className="btn btn-primary mt-3" onClick={handleRegister}>Registrarse</button>
    </div>
  );
}

export default Register;
