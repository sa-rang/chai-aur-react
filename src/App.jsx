import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from "./components/Hello"

function App() {
  const [count, setCount] = useState(0)

  console.log(Hello())
  return (
    <>
      <Hello />
    </>
  )
}

export default App
