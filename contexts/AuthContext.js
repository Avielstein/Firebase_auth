import React, { createContext, useContext } from 'react';
import useAuth from '../hooks/useAuth'; // adjust the path as necessary

// Creating the context
const AuthContext = createContext(null);

// Creating the provider component
export const AuthProvider = ({ children }) => {
  const { user } = useAuth();

  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the context
export const useAuthContext = () => useContext(AuthContext);
