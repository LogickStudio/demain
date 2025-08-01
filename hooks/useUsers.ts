import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

export const useUsers = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUsers must be used within a UserProvider');
  }
  return context;
};