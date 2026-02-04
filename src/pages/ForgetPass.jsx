import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function ForgetPass() {
    const user = useContext(UserContext);
  return (
    <div>
        <p>Forget Password Page</p>
        <p>Your username: {user.username}</p>
        <p>Your password: {user.password}</p>
    </div>
  )
}

export default ForgetPass