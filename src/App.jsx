import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Slider from './components/Slider/Slider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Slider />
    </>
  )
}

export default App