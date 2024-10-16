import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './components/Welcome';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import View1 from './components/View1';
import View2 from './components/View2';
import View3 from './components/View3';

function App() {
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        {/* Si el usuario no está autenticado, redirigir al login */}
        <Route path="/home" element={user ? <Home user={user} onLogout={handleLogout} /> : <Navigate to="/login" />} >
          {/* Rutas anidadas */}
          <Route path="view1" element={<View1 />} />
          <Route path="view2" element={<View2 />} />
          <Route path="view3" element={<View3 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
