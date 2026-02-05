import { useState } from 'react'
import './App.css'
import Navbar from '/Users/sumitgupta/Desktop/B batch/day-8 React-2/first-work/src/componemts/Navbar.jsx'
import PageView from '/Users/sumitgupta/Desktop/B batch/day-8 React-2/first-work/src/pages/PageView.jsx'
// import Footer from '/Users/sumitgupta/Desktop/B batch/day-8 React-2/first-work/src/componemts/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <PageView/>
     <Footer/>
    </>
  )
}

export default App
