import React from 'react'
import Hero from '../Components/Home/Hero'
import Tech from '../Components/Home/Tech'
import Project from '../Components/Home/Project'
import Experience from '../Components/Home/Experience'
import Blogs from '../Components/Home/Blogs'

function Navbar() {
  return (
    <>
      <div className=''>
        <div className='flex gap-56 justify-center items-center border-spacing-0.5 h-17 mt-4 rounded-4xl mx-70 shadow-[0_1px_10px] hover:shadow-cyan-200'>
          <h2 className='bg-clip-text text-transparent bg-linear-to-r from-indigo-500 to-pink-600 font-bold'>Sumit Gupta</h2>

          <ul className='flex gap-10 justify-center items-center cursor-pointer '>
            <li><a className='hover:shadow-[0_0_3px] bg-none p-1.5 rounded-lg' href="#">Hero</a></li>
            <li><a className='hover:shadow-[0_0_3px] bg-none p-1.5 rounded-lg' href={Hero}>Tech</a></li>
            <li><a className='hover:shadow-[0_0_3px] bg-none p-1.5 rounded-lg' href={Tech}>Project</a></li>
            <li><a className='hover:shadow-[0_0_3px] bg-none p-1.5 rounded-lg' href={Project}>Experience</a></li>
            <li><a className='hover:shadow-[0_0_3px] bg-none p-1.5 rounded-lg' href={Experience}>Blogs</a></li>
            <li><a className='hover:shadow-[0_0_3px] bg-none p-1.5 rounded-lg' href={Blogs}>Contacts</a></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar