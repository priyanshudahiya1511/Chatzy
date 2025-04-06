import React, { useState } from 'react';
import GenderCheckBox from './GenderCheckBox';
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/useSignup';

const Signup = () => {
  const { loading, signup } = useSignup();

  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''
  });

  function handleCheckBoxChange(gender) {
    setInputs({ ...inputs, gender });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await signup(inputs);
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-900 text-white px-4'>
      <div className='w-full max-w-md p-6 rounded-lg shadow-md bg-gray-800 bg-opacity-60 backdrop-blur-md'>
        <h1 className='text-3xl font-semibold text-center mb-6'>
          Sign Up <span className='text-blue-500'>Chatzy</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block mb-1 text-sm'>Full Name</label>
            <input
              type='text'
              placeholder='Priyanshu Dahiya'
              className='input input-bordered w-full h-10 text-black'
              value={inputs.fullName}
              onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
            />
          </div>

          <div className='mb-4'>
            <label className='block mb-1 text-sm'>Username</label>
            <input
              type='text'
              placeholder='priyanshudahiya'
              className='input input-bordered w-full h-10 text-black'
              value={inputs.username}
              onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            />
          </div>

          <div className='mb-4'>
            <label className='block mb-1 text-sm'>Password</label>
            <input
              type='password'
              placeholder='Enter Password'
              className='input input-bordered w-full h-10 text-black'
              value={inputs.password}
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            />
          </div>

          <div className='mb-4'>
            <label className='block mb-1 text-sm'>Confirm Password</label>
            <input
              type='password'
              placeholder='Confirm Password'
              className='input input-bordered w-full h-10 text-black'
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
            />
          </div>

          <GenderCheckBox
            handleCheckBoxChange={handleCheckBoxChange}
            selectedGender={inputs.gender}
          />

          <div className='mt-4 text-sm text-right'>
            <Link to='/login' className='text-blue-400 hover:underline'>
              Already have an account?
            </Link>
          </div>

          <button
            type='submit'
            className='btn btn-block bg-blue-600 hover:bg-blue-700 text-white mt-4'
            disabled={loading}
          >
            {loading ? <span className='loading loading-spinner'></span> : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
