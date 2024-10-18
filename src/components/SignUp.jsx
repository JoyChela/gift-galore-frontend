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
