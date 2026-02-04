import React from 'react'

function Initiative() {
  return (
    <>
    <h1 className='text-4xl font-bold text-center mt-20'>WHO IS THIS <span className='text-red-600'>INITIATIVE </span>FOR</h1>


<div className='flex justify-evenly'>

    <div className="relative w-[350px]  overflow-hidden mt-15">
        <img src="https://csr.heromotocorp.com/my-family-my-safety/assets/parents-DjLdNXjg.png" alt="image" className='w-full h-full object-cover' />
            <div className='absolute bottom-0 left-0 w-full h-[28%] bg-black'>

            </div>

            <div className='absolute bottom-0 left-0 w-full p-5 text-white'>
                <h2 className='text-3xl font-semibold mb-2'>For Parents</h2>
                <p className='text-sm text-gray-300 mt-2 mb-2 '>Safety measures that every <br />parent should take.</p>
                {/* <div className='absolute bottom-5 right-5'>
                       
                </div> */}

            </div>
    </div>

     <div className="relative w-[350px]  overflow-hidden mt-15">
        <img src="https://csr.heromotocorp.com/my-family-my-safety/assets/students-gBT_RBzi.png" alt="image" className='w-full h-full object-cover' />
            <div className='absolute bottom-0 left-0 w-full h-[28%] bg-black'>

            </div>

            <div className='absolute bottom-0 left-0 w-full p-5 text-white'>
                <h2 className='text-3xl font-semibold mb-2'>For Students</h2>
                <p className='text-sm text-gray-300 mt-2 mb-2 '>Safety measures that every <br />student should take.</p>
                {/* <div className='absolute bottom-5 right-5'>
                       
                </div> */}

            </div>
    </div>


     <div className="relative w-[350px]  overflow-hidden mt-15">
        <img src="https://csr.heromotocorp.com/my-family-my-safety/assets/school-DlIJGUTz.png" alt="image" className='w-full h-full object-cover' />
            <div className='absolute bottom-0 left-0 w-full h-[28%] bg-black'>

            </div>

            <div className='absolute bottom-0 left-0 w-full p-5 text-white'>
                <h2 className='text-3xl font-semibold mb-2'>For Schools</h2>
                <p className='text-sm text-gray-300 mt-2 mb-2 '>Safety measures that every <br />school should take.</p>
                {/* <div className='absolute bottom-5 right-5'>
                       
                </div> */}

            </div>
    </div>
    </div>
    </>
  )
}

export default Initiative