import React from 'react'

function Facilities() {
  return (
    <>
    
      <div className='flex justify-between border border-gray-300 mx-32 absolute top-145 left-5 bg-white rounded-md px-5 w-280 h-60 shadow-2xl'>
        {/* <div className='flex flex-col gap-30 px-25 relative'>
          <div className='flex justify-between mt-5 p-2'>
          <h3 className='text-2xl font-bold absolute left-7'>Facilities</h3>
          <p className='text-sm absolute right-18 top-10'>See More</p>
          </div>
          <div className='flex gap-7 relative'>
            <div className=''>
            <h3>Swimming</h3>
            </div>
            <div>
            <h3>Wi-Fi</h3>
            </div>
            <div>
            <h3>AC</h3>
            </div>
            <div>
            <h3>Dinner</h3>
            </div>
          </div>
        </div> */}

    <div className="flex flex-col gap-17 px-6 mt-8">

  <div className="flex justify-between items-center">
    <h3 className="text-3xl font-bold">Facilities</h3>
    <p className="text-md text-yellow-500">
      See More
    </p>
  </div>

  <div className="flex gap-7">

    <div className="flex flex-col items-center gap-2">
      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
        🏊
      </div>
      <h3 className="text-sm font-medium text-gray-700">Swimming</h3>
    </div>

    <div className="flex flex-col items-center gap-2">
      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
        📶
      </div>
      <h3 className="text-sm font-medium text-gray-700">Wi-Fi</h3>
    </div>

    <div className="flex flex-col items-center gap-2">
      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
        ❄️
      </div>
      <h3 className="text-sm font-medium text-gray-700">AC</h3>
    </div>

    <div className="flex flex-col items-center gap-2">
      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
        🍽️
      </div>
      <h3 className="text-sm font-medium text-gray-700">Dinner</h3>
    </div>

  </div>

</div>


        <div className='flex flex-col px-30 mt-2 relative'>
          <h3 className='absolute left-1 top-6 font-bold text-3xl'>Hotels For You</h3>
          <p className='absolute top-21 left-1 text-gray-500'>5 Days 6 Nights</p>
          <div className='flex gap-3 absolute bottom-10 left-1 border border-gray-200 p-2'>
          
            <svg className='h-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576zM320 112C205.1 112 112 205.1 112 320C112 434.9 205.1 528 320 528C434.9 528 528 434.9 528 320C528 205.1 434.9 112 320 112zM390.7 233.9C398.5 223.2 413.5 220.8 424.2 228.6C434.9 236.4 437.3 251.4 429.5 262.1L307.4 430.1C303.3 435.8 296.9 439.4 289.9 439.9C282.9 440.4 276 437.9 271.1 433L215.2 377.1C205.8 367.7 205.8 352.5 215.2 343.2C224.6 333.9 239.8 333.8 249.1 343.2L285.1 379.2L390.7 234z"/>
            </svg>
            <p className='text-lg'>USD $506.00</p>
          </div>
        </div>

        <div className='flex flex-col gap-17 mb-4 py-3 mt-5 mr-5'>
          <div className='flex justify-between items-center'>
          <h3 className='font-semibold text-2xl text-gray-400 bg-gray-100 rounded-md px-2 py-1'>150 Results</h3>
          <div className='flex gap-4 justify-between'>
          <svg className='h-10 bg-gray-100 rounded-md px-2 py-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M416.9 85.2L372 130.1L509.9 268L554.8 223.1C568.4 209.6 576 191.2 576 172C576 152.8 568.4 134.4 554.8 120.9L519.1 85.2C505.6 71.6 487.2 64 468 64C448.8 64 430.4 71.6 416.9 85.2zM338.1 164L122.9 379.1C112.2 389.8 104.4 403.2 100.3 417.8L64.9 545.6C62.6 553.9 64.9 562.9 71.1 569C77.3 575.1 86.2 577.5 94.5 575.2L222.3 539.7C236.9 535.6 250.2 527.9 261 517.1L476 301.9L338.1 164z"/></svg>
          <svg className='h-10  bg-gray-100 rounded-md px-2 py-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z"/></svg>

          </div>

          </div>

        <div className='flex gap-5'>
          <img className='h-15 w-15 object-cover rounded-full' src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V8ZW58MHx8MHx8fDA%3D" alt="1" />

          <img className='h-15 w-15 object-cover rounded-full' src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2V8ZW58MHx8MHx8fDA%3D" alt="2" />

          <img className='h-15 w-15 object-cover rounded-full' src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9tZXxlbnwwfHwwfHx8MA%3D%3D" alt="3" />

          <img className='h-15 w-15 object-cover rounded-full' src="https://images.unsplash.com/photo-1449844908441-8829872d2607?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvbWV8ZW58MHx8MHx8fDA%3D" alt="4" />

          <img className='h-15 w-15 object-cover rounded-full' src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8fDA%3D" alt="5" />
        </div>

        </div>
      </div>
    
    </>
  )
}

export default Facilities