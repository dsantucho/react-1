import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HeaderContext } from '../App';

const Login = () => {
    const { setShowHeader } = useContext(HeaderContext);
    setShowHeader(false);
  return (
    <div>Login</div>
  )
}

export default Login