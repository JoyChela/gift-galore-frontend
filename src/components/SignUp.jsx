import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      passwordVerify: '',
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().required('Username is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      password: Yup.string().required('Password is required'),
      passwordVerify: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Password verification is required'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await fetch('https://backend-m0t6.onrender.com/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: values.username,
            email: values.email,
            password: values.password,
          }),
        });

        if (response.ok) {
          toast.success('Sign up successful!');
          navigate('/login');
        } else {
          const errorData = await response.json();
          toast.error(errorData.message || 'Sign up failed. Please try again.');
        }
      } catch (error) {
        toast.error('An error occurred. Please try again.');
        console.error('Sign up error:', error);
      }
    },
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <form onSubmit={formik.handleSubmit} className="mt-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Username:</label>
            <input
              type="text"
              id="username"
              {...formik.getFieldProps('username')}
              className={`mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200 ${formik.touched.username && formik.errors.username ? 'border-red-500' : ''}`}
            />
            {formik.touched.username && formik.errors.username && (
              <p className="text-red-500 text-sm">{formik.errors.username}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              {...formik.getFieldProps('email')}
              className={`mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200 ${formik.touched.email && formik.errors.email ? 'border-red-500' : ''}`}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm">{formik.errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password:</label>
            <input
              type="password"
              id="password"
              {...formik.getFieldProps('password')}
              className={`mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200 ${formik.touched.password && formik.errors.password ? 'border-red-500' : ''}`}
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-sm">{formik.errors.password}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password Verification:</label>
            <input
              type="password"
              id="passwordVerify"
              {...formik.getFieldProps('passwordVerify')}
              className={`mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200 ${formik.touched.passwordVerify && formik.errors.passwordVerify ? 'border-red-500' : ''}`}
            />
            {formik.touched.passwordVerify && formik.errors.passwordVerify && (
              <p className="text-red-500 text-sm">{formik.errors.passwordVerify}</p>
            )}
          </div>
          <button type="submit" className="w-full py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700">
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
