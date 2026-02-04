import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../context/UserContext'


function Login() {

  const navigate = useNavigate ()
  const user = useContext(UserContext)

  const username = user.username
  const password = user.password

  

  const handleSubmit = (e) => {
    e.preventDefault()
    if(username == "Sumit" && password == "Sum*123"){
      window.alert("Login Successful")
    }
    else{
      window.alert("Wrong combination of username and password")
    }
  }

  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
      <form className='flex flex-col items-center justify-center gap-4'>
        <input type="text" placeholder="Username" className='border border-gray-300 rounded ' />
        <input type="password" placeholder="Password" className='border border-gray-300 rounded ' />
        <button onClick={handleSubmit} className='bg-blue-500 text-white'>Login</button>
        <button onClick={() => navigate('/forgetpass')} className='mt-4 bg-green-500 text-white px-4 py-2 rounded'>Forget Password</button>
      </form>
      
    </div>
  )
}

export default Login