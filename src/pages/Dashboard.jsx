import React, { useContext } from 'react'
import Heading from '../components/Heading'
import MyCourse from '../components/MyCourse'

function Dashboard({courses}) {
  
  return (
    <div>Welcome to the user dashboard!
      <Heading/>
      <MyCourse courses={courses} />
      <br />
      <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>Change the username</button>
      <br />
      <br />
      <button className='bg-yellow-500 text-white px-4 py-2 rounded hover:bg-blue-600'>Change the password</button>
    </div>
    
  )
}

export default Dashboard