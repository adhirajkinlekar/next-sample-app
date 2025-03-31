import { useEffect, useState } from 'react';
import axiosInstance from './../../interceptors/axios'; // Import the Axios instance
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [reloadMessage, setReloadMessage] = useState(false); // Controls the message reload

  useEffect(() => {
    axiosInstance
      .get('/dashboard')
      .then((res) => setMessage(res.data.data.secretMessage))
  }, [navigate, reloadMessage]);  

  const handleReload = () => setReloadMessage((prev) => !prev); 
 
  return (
    <div className="container mt-5">
      <div className="card shadow-sm position-relative"> 
        <button
          className="btn btn-danger position-absolute top-0 end-0 m-3"
          onClick={() => {
            localStorage.removeItem('token');
            navigate('/signin');
          }}
        >
          Logout
        </button>

        <div className="card-body text-center mt-5">
          <h1 className="display-10 text-success">{message}</h1>
          <p className="lead">Welcome to the application.</p>
           
          <button
            className="btn btn-primary mt-3"
            onClick={handleReload}
          >
            Fetch New Message
          </button>
        </div>
      </div>
    </div>
  );
}
