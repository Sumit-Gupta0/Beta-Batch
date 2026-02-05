import React from 'react'

function Project() {
  return (
    <>
      <div className='flex flex-col justify-center items-center gap-10 mt-50'>
        <h1 className='font-extrabold text-2xl font-sans'>Projects</h1>
        <div className='grid-rows-2 grid grid-cols-2 gap-6'>
          <div className='w-90 border-2 rounded-2xl h-46 flex justify-center items-center p-10 bg-linear-to-r from-gray-700 to-gray-500 text-white'>
            <h2 className='font-semibold'>Student Database Management System</h2>
          </div>
          <div className='w-90 border-2 rounded-2xl h-46 flex justify-center items-center p-10 bg-linear-to-r from-gray-700 to-gray-500 text-white'>
            <h2 className='font-semibold'>Food Delivery</h2>
          </div>
          <div className='w-90 border-2 rounded-2xl h-46 flex justify-center items-center p-10 bg-linear-to-r from-gray-700 to-gray-500 text-white'>
            <h2 className='font-semibold'>Digital </h2>
          </div>
          <div className='w-90 border-2 rounded-2xl h-46 flex justify-center items-center p-10 bg-linear-to-r from-gray-700 to-gray-500 text-white'>
            <h2 className='font-semibold'>Intellegus</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project