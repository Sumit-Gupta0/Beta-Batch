import React from 'react'

function Experience() {
  return (
    <>
      <div className='flex flex-col justify-center items-center gap-10 m-70'>
        <h1 className='font-extrabold text-2xl font-sans'>Experience</h1>
        <div className=' flex gap-20 mt-20'>
          <div className='w-120 h-auto border-2 p-6 flex flex-col gap-2 bg-linear-to-r from-gray-800 to-gray-500 rounded-lg text-white'>
            <h2 className='text-2xl font-bold font-sans'>Entangle</h2>
            <p>MERN Stack</p>
          </div>
          <div className='w-120 h-50 border-2 p-6 flex flex-col gap-2 bg-linear-to-r from-gray-800 to-gray-500 rounded-lg text-white'>
            <h2 className='text-2xl font-bold font-sans'>CodeAlpha</h2>
            <p>UI/UX design in figma</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Experience