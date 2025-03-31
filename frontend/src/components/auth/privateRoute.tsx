import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const token = localStorage.getItem('token');  // Check if token is present in localStorage

  if (!token) {
    // If no token, redirect to the Signin page
    return <Navigate to="/signin" />;
  }

  return <Outlet />;  // If token exists, render the protected route
};

export default PrivateRoute;
