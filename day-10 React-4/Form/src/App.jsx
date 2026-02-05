import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Contact/>
      {/* <Form/> */}
    </>
  )
}

export default App
