import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    // TODO: handle login logic

    // navigate to dashboard
    navigate('/');
  }

  return (
    <div className='bg-gray-100 h-screen w-full flex items-center justify-center p-4'>
      <div className='bg-white rounded-md px-6 py-10 w-full sm:w-96 shadow-lg'>
        <h3 className='text-center font-semibold font-serif text-xl'>Admin Login Panel</h3>
        <div className='grid gap-2 py-4'>
          <input type='text' className='rounded-md border-2 p-2' placeholder='Username' />
          <input type='password' className='rounded-md border-2 p-2' placeholder='Password' />
          <button
            className='my-2 rounded-md bg-sky-600/80 text-white px-4 py-2'
            type='button'
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
