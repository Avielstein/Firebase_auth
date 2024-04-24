import React from 'react';
import useAuth from '../hooks/useAuth';
import AuthStack from './AuthStack';
import UserStack from './UserStack';

const AppNavigator = () => {
  const { user } = useAuth();

  // Render user stack if authenticated, otherwise render auth stack
  return user ? <UserStack /> : <AuthStack />;
};

export default AppNavigator;
