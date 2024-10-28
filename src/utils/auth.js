// utils/auth.js

export const login = (email, password) => {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find((u) => u.email === email && u.password === password);
  
  if (user) {
    localStorage.setItem('loggedInUser', JSON.stringify(user));
    return true; // Devuelve true si el login fue exitoso
  }
  return false; // Devuelve false si las credenciales son incorrectas
};

export const logout = () => {
  localStorage.removeItem('loggedInUser'); // Elimina el usuario logueado de localStorage
};

// Nueva función para obtener el usuario logueado
export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('loggedInUser')); // Devuelve el usuario logueado o null
};
