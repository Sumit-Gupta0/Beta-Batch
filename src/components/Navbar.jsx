import React from 'react'

function Navbar() {
  return (
    <>
    <nav>
        <div className='flex justify-between items-center p-3 pb-4 mx-16'>
           <h2 className='pr-120 font-bold text-2xl'>MRstudio</h2>
           <ul className='flex gap-15 justify-end-safe items-center font-semibold'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Types of Houses</a></li>
            <li><a href="#">Contact</a></li>
           </ul>
           <button className='border rounded-md px-6 p-1 font-semibold'>Login</button>

        </div>
    </nav>
    </>
  )
}

export default Navbar