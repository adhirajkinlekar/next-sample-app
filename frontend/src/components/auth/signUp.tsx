/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import axiosInstance from '../../interceptors/axios';
import { SignupFormData } from './authTypes';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm<SignupFormData>();
  const [errorMessage, setErrorMessage] = useState("");
  
  const navigate = useNavigate();

  const onSubmit = async (data: SignupFormData) => {
    try {
      const res = await axiosInstance.post('/auth/signup', data);
      localStorage.setItem('token', res.data.data.token);
      navigate('/');
    } catch (error: any) {
      console.error('Error during sign-up:', error);
      setErrorMessage(error.response?.data?.message || 'Sign-up failed. Please try again.');
    }
  };

  const navigateToSignin = () => {
    navigate('/signin');
  };

  return (
    <div className="card shadow-sm p-4" style={{ width: "22rem" }}>
      <h2 className="text-center mb-3">Sign Up</h2>
      {errorMessage && <div className="alert alert-danger text-center">{errorMessage}</div>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            {...register("email", {
              required: 'Email is required',
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                message: 'Invalid email format'
              }
            })}
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            placeholder="Enter your email"
          />
          {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            {...register("name", {
              required: 'Name is required',
              minLength: {
                value: 3,
                message: 'Name must be at least 3 characters long'
              }
            })}
            type="text"
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            placeholder="Enter your name"
          />
          {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            {...register("password", {
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters long'
              },
              pattern: {
                value: /[a-zA-Z]/,
                message: 'Password must contain at least one letter'
              },
              validate: {
                number: (value) => /\d/.test(value) || 'Password must contain at least one number',
                specialChar: (value) => /[\W_]/.test(value) || 'Password must contain at least one special character'
              }
            })}
            type="password"
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            placeholder="Enter your password"
          />
          {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Sign Up
        </button>
      </form>

      <div className="text-center mt-3">
        <button
          onClick={navigateToSignin}
          className="btn btn-link text-muted w-100"
          style={{ fontSize: '0.9rem', textDecoration: 'underline' }}
        >
          Already have an account? Sign In Instead
        </button>
      </div>
    </div>
  );
}