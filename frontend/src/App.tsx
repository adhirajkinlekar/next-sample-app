import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/auth/signUp';
import Signin from './components/auth/signIn';
import Dashboard from './components/dashboard/dashboard';
import PrivateRoute from './components/auth/privateRoute';

export default function App() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <Router>
        <Routes>
          <Route element={<PrivateRoute />}> 
            <Route path="/" element={<Dashboard />} />   
          </Route>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}
