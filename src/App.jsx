
import { useState } from 'react';
import BgOptions from "./components/BgOptions"

function App() {
  const [color, setColor] = useState("olive");

  const handleColorChange = (iData) => {
    console.log("ok", iData)
    setColor(iData)
  }

  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }} >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <BgOptions handleChange={handleColorChange} />
      </div>
    </div>
  )
}

export default App
