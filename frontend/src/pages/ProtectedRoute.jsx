import AuthContext from '@/context/AuthContext';
import  { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {
  const authContext = useContext(AuthContext);

  const { user } = authContext;

  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
