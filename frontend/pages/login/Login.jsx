import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import useLogin from '../../hooks/useLogin';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-900 text-white px-4'>
      <div className='w-full max-w-md p-6 rounded-lg shadow-md bg-gray-800 bg-opacity-60 backdrop-blur-md'>
        <h1 className='text-3xl font-semibold text-center mb-6'>
          Login <span className='text-blue-500'>Chatzy</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block mb-1 text-sm'>Username</label>
            <input
              type='text'
              placeholder='Enter Username'
              className='input input-bordered w-full h-10 text-black'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className='mb-4'>
            <label className='block mb-1 text-sm'>Password</label>
            <input
              type='password'
              placeholder='Enter Password'
              className='input input-bordered w-full h-10 text-black'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className='mb-4 text-right'>
            <Link to="/signup" className='text-sm text-blue-400 hover:underline'>
              Don&apos;t have an account?
            </Link>
          </div>

          <button
            type='submit'
            className='btn btn-block bg-blue-600 hover:bg-blue-700 text-white'
            disabled={loading}
          >
            {loading ? <span className='loading loading-spinner'></span> : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
