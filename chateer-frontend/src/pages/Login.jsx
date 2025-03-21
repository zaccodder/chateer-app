// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // To navigate after login

const Login = () => {
  // State for form inputs
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [error, setError] = useState('');

  // const navigate = useNavigate(); // For redirection after login

  // // Handle form submission
  // const handleLogin = async (e) => {
  //   e.preventDefault();

  //   try {
  //     // Send login request to the backend
  //     const response = await axios.post('/api/v1//auth/login', {
  //       email,
  //       password
  //     });

  //     // Save the JWT token to local storage
  //     const { token, userId } = response.data;
  //     localStorage.setItem('token', token);
  //     localStorage.setItem('userId', userId);

  //     // Redirect to the chat page or dashboard
  //     navigate('/chatroom');  // Change '/chat' to your desired route
  //   } catch (err) {
  //     // Handle errors (e.g., invalid credentials)
  //     console.log(err)
  //     setError('Invalid email or password');
  //   }
  // };

  return (
    <h1>Login</h1>
  );
};

export default Login;
