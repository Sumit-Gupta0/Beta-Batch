

import React from 'react'
import Home from './Pages/home';
import Login from './Pages/login';
import {  Route, Routes ,BrowserRouter} from 'react-router-dom';
// use/* to do the nested routing that to use parent routing and child 

function App() {
  return (
   <>    <browserRouter>
         <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
         {/* </Routes>
        <Home/> */}
        {/* <Login/> */}
       </Routes>
        </browserRouter>
    </>
  )
}

export default App