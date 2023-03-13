import { useState } from 'react'
import './App.css'
import Catalog from './components/Catalog/Catalog'
import Distribution from './components/Distribution/Distribution'
import Header from './components/Header/Header'
import Slider from './components/Slider/Slider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Slider />
      <Catalog />
      <Distribution />
    </>
  )
}

export default App