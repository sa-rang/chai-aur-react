
import { useState } from 'react';
import UserContextProvider from './context/UserContextProvider';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {

  return (
    <UserContextProvider>
      <div className='w-full h-screen duration-200' >
        <div className='flex flex-wrap justify-center px-2'>
          <Login />
          <Profile />

        </div>
      </div>
    </UserContextProvider>
  )
}

export default App
