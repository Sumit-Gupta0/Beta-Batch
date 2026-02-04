import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ForgetPass from './pages/ForgetPass'

import UserContext from './context/UserContext'

function App() {

  return (
      <UserContext.Provider value={UserContext._currentValue}>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login/>} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/forgetpass' element={<ForgetPass />} />
    </Routes>
      </UserContext.Provider>
  )
}

export default App