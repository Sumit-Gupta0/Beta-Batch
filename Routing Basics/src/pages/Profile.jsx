import React from 'react'
import { useParams } from 'react-router-dom';

function Profile(props) {
    const { username } = useParams();
  return (
    <div>Hello, {username}</div>
  )
}

export default Profile