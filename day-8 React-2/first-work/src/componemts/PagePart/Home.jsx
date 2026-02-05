import React from 'react'
import heroBanner from '/Users/sumitgupta/Desktop/B batch/day-8 React-2/first-work/src/assets/heroBanner.png'
import url from '../PrimaryBtn'

function Home
  () {
  return (
    <div className='flex items-center justify-center'>
      <img className='w-367.5 h-165 object-bottom-right' src={heroBanner} alt="bgImage" />
      <div className='absolute'>
        <div className='flex flex-col gap-4.5 text-center items-center justify-center w-120 h-auto'>
          <p>My Family. My Safety.</p>
          <h1 className='font-bold text-5xl'>Shaping <span className='font-extrabold text-4xl text-white bg-red-600 p-2 px-2.5 mr-3'>Safer</span>Roads</h1>
          <p className='font-bold text-5xl'><span className='font-extrabold text-4xl text-white bg-red-600 p-2 px-2.5 mr-1'>One Child</span> at a time.</p>
          <p>A national-level road safety and traffic awareness drawing competition for students, encouraging families to pledge for safer roads and responsible behaviour.</p>
        </div>
      </div>
    </div>
  )
}

export default Home
