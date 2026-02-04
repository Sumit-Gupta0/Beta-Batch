import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Heading() {
    const user = useContext(UserContext);
  return (
    <div>Good morning, {user.username}</div>
  )
}

export default Heading