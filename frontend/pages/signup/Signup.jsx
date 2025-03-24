import React from 'react'
import GenderCheckBox from './GenderCheckBox'

const Signup = () => {
  return (
    <div className='flex flex-col justify-center items-center min-w-96 mx-auto'>
        <div className=' p-6 rounded-lg shadow-md h-full w-full bg-gray-0 bg-clip-padding 
         backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
                Sign Up
                <span className='text-blue-500'> Chatzy</span>
            </h1>

            <form>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Full Name</span>
                    </label>
                    <input type='text' placeholder='Priyanshu Dahiya' className='w-full input input-bordered h-10'/>
                </div>

                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input type='text' placeholder='priyanshudahiya' className='w-full input input-bordered h-10'/>
                </div>

                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-10'/>
                </div>

                <div className='mb-2'>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Confirm Password</span>
                    </label>
                    <input type='password' placeholder='Confirm Password' className='w-full input input-bordered h-10'/>
                </div>

                <GenderCheckBox/>

                <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                    Already have an account ?
                </a>

                <div>
                    <button className='btn btn-block bt-sm mt-2'>Sign Up</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Signup







