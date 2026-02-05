import React from 'react'
import { BrowserRouter, Routes , Route , Switch } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Error from './pages/Error'
import Profile from './pages/Profile'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" />
            <Switch path='/profile' element={<Profile />}>
        </Routes>

        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/user/:username" element={<Profile />} /> */}
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App