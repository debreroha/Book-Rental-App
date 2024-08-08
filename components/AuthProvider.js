import { createContext, useContext, useState, useEffect } from 'react';
import { verifyToken } from '../utils/auth';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = verifyToken(token);
      if (decoded) {
        setUser(decoded);
      }
    }
  }, []);

  const login = (token) => {
    const decoded = verifyToken(token);
    setUser(decoded);
    localStorage.setItem('token', token); // Store token in localStorage
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token'); // Remove token from localStorage
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
