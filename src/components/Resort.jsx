import React from 'react'

function Resort() {
  return (
    <>
    <div className='flex mt-40 justify-evenly'>
      <div>
      <div>
      <h1 className='text-6xl font-bold text-shadow-lg mt-5'>Resort Surprises</h1>
      <p className='mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione <br></br> ipsum voluptatibus architecto et.</p>
    </div>

    <div className='flex flex-col gap-3 mt-6'>
      <div className='flex gap-6 items-center'>
        <p className='bg-blue-300 p-2 text-2xl rounded-full'>🏊</p>
        <h1 className='text-3xl text-gray-500 text-shadow-gray-300 text-shadow-sm'>Infinity Pool</h1>
      </div>

      <div className='flex gap-6 items-center'>
        <p className='bg-blue-300 p-2 text-2xl rounded-full'>🏖️</p>
        <h1 className='text-3xl text-gray-500 text-shadow-gray-300 text-shadow-sm'>The Beach</h1>
      </div>

      <div className='flex gap-6 items-center'>
        <p className='bg-blue-300 p-2 text-2xl rounded-full'>🌴</p>
        <h1 className='text-3xl text-gray-500 text-shadow-gray-300 text-shadow-sm'>Beach Surprise</h1>
      </div>

      <div className='flex gap-6 items-center'>
        <p className='bg-blue-300 p-2 text-2xl rounded-full'>🌅</p>
        <h1 className='text-3xl text-gray-500 text-shadow-gray-300 text-shadow-sm'>Beach Activities</h1>
      </div>
    </div>
</div>
    <div>
      <img className='h-80 w-130 object-cover rounded-md border-3 border-gray-200 shadow-md ' src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJlc29ydHxlbnwwfHwwfHx8MA%3D%3D" />
    </div>

    </div>
    </>
  )
}

export default Resort