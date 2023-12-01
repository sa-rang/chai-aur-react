
import { useState } from 'react';
import PassGen from './components/PassGen';


function App() {
  return (
    <div className='w-full h-screen duration-200 bg-gray-400' >
      <div className='flex flex-wrap justify-center pt-4'>
        <PassGen />
      </div>
    </div>
  )
}

export default App
