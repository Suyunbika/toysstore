import { useState } from 'react'
import Catalog from '../components/Catalog/Catalog'
import Distribution from '../components/Distribution/Distribution'
import Footer from '../components/Footer/Footer'
import Slider from '../components/Slider/Slider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Slider />
      <Catalog />
      <section>
        <Distribution />
        <Footer />
      </section>
    </>
  )
}

export default App