import React from 'react'

function Helmet() {
  return (
    <>
    <div className='mt-30 w-full bg-[url("/images/helmet.png")] bg-cover bg-center h-screen flex items-center justify-center py-24'>
      <div className='justify-around flex text-white italic gap-150'>
        <div className='left flex flex-col  '>
          <h1 className=' text-4xl font-bold'>Our <span className='text-red-600'>Focus</span> </h1>
          <p className='mt-4'>To nurture a generation that <br />understands, respects, & <br /> practices road safety.
          </p>

          <p className='mt-4'>To introduce road safety <br />awareness at an early age <br /> through creative learning.</p>
        </div>

        <div className='right'>
          <h1 className='text-4xl font-bold'>Our <span className='text-red-600  '>Goal</span></h1>
          <p className='mt-4'>To encourage children to <br />express safety values through <br />art and imagination.</p>
          <p className='mt-4'>To actively involve parents, <br />teachers, and schools in the <br />learning process.</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Helmet