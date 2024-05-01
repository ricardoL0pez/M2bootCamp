import { useState } from 'react'
import Count from './componentes/count/Counter'
import Cards from './componentes/cards/Cards'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Count/> */}
      <Cards/>
    </>
  )
}

export default App
