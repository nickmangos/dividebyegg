import React from 'react'
import { Recipe } from './Recipe'
import { Navbar } from './Navbar'
import '../styles/main.scss'

const App = () => {
  // const [count, setCount] = useState(12)

  return (
    <>
      <Navbar />
      <Recipe />
    </>
  )
}

export default App
