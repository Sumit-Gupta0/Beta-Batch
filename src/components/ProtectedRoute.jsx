import React from 'react'
import UserLogin from './UserLogin'
import Dashboard from '../pages/Dashboard'

import {canLogin} from './auth.js'

function ProtectedRoute({children}) {

    // console.log("canLogin:", canLogin);

    if(!canLogin){
        return(
            <UserLogin />
        )
    }
    
  return(
    children
  )
}
export default ProtectedRoute