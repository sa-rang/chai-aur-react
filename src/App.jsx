
import { useState } from 'react';
import { Header, Footer } from './components';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className='w-full h-screen duration-200'  >
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
