import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'
import Stars from './pages/stars'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Stars /> */}
      <Stars />
    </>
  )
}

export default App
