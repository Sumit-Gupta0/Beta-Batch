import React from 'react'

function Welcome() {
  return (
    <>
    <div className='flex gap-35 mt-50 mx-20'>
      <div className='flex gap-6 mx-18 relative'>
        <img className='h-70 w-40 rounded-4xl object-cover shadow-md shadow-gray-500' src="https://images.unsplash.com/photo-1549294413-26f195200c16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bHV4dXJ5JTIwcmVzb3J0fGVufDB8fDB8fHww" />

        <img className='h-70 w-40 rounded-4xl shadow-md shadow-gray-500 mb-5' src="https://plus.unsplash.com/premium_photo-1683888725060-684307792076?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGx1eHVyeSUyMHJlc29ydHxlbnwwfHwwfHx8MA%3D%3D" />

        <img className='h-70 w-40 object-cover rounded-4xl shadow-md shadow-gray-500' src="https://images.unsplash.com/photo-1667987566780-3b31fa5485c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGx1eHVyeSUyMHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D" />

        
      </div>

      <div className='ml-70 mr-25'>
        <h1 className='text-red-500 mb-4 text-shadow-lg text-shadow-red-200 font-medium'>Welcome to MRstudio Resort</h1>
        <h1 className='text-5xl font-bold mb-6 text-shadow-gray-400 text-shadow-sm'>Relaxing Pleasure</h1>
        <p className='text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fuga ad error possimus sunt temporibus non corporis aspernatur placeat? Ea ex debitis labore id perferendis? Assumenda dolor harum sint voluptate!</p>
      </div>
    </div>
    </>
  )
}

export default Welcome