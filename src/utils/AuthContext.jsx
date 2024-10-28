// utils/AuthContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import { getCurrentUser } from './auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = getCurrentUser(); // Obtener el usuario logueado
    setCurrentUser(user);
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
