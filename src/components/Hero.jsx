import React from 'react'
import Facilities from './Facilities'

function Hero() {
  return (
    <>
    <section className='mx-17 relative'>
      <img className='h-160 w-600 rounded-md object-cover' src="https://plus.unsplash.com/premium_photo-1682377521697-bc598b52b08a?q=80&w=1515&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <div className='absolute top-0 h-160 w-200 bg-linear-to-r from-green-300 via-blue-200 opacity-97 rounded-md'>
        <div>
        <h1 className='font-semibold text-7xl absolute top-26 left-30'>Enjoy Your</h1>
        <h1 className='font-semibold text-7xl absolute top-45 left-30'>Dream Vacation</h1>
        <p className='font-semibold absolute top-72 left-30 mr-42'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, magnam! Lorem ipsum dolor sit amet. Lorem, ipsum dolor.</p>
        <div className='absolute top-95 left-30 flex gap-6'>
          <svg className='h-14' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M470.5 463.6C451.4 416.9 405.5 384 352 384L288 384C234.5 384 188.6 416.9 169.5 463.6C133.9 426.3 112 375.7 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320C528 375.7 506.1 426.2 470.5 463.6zM430.4 496.3C398.4 516.4 360.6 528 320 528C279.4 528 241.6 516.4 209.5 496.3C216.8 459.6 249.2 432 288 432L352 432C390.8 432 423.2 459.6 430.5 496.3zM320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM320 304C297.9 304 280 286.1 280 264C280 241.9 297.9 224 320 224C342.1 224 360 241.9 360 264C360 286.1 342.1 304 320 304zM232 264C232 312.6 271.4 352 320 352C368.6 352 408 312.6 408 264C408 215.4 368.6 176 320 176C271.4 176 232 215.4 232 264z"/></svg>
          <p className='text-green-700 font-bold mt-3 text-xl'>Warwick Hotel & Resorts</p>
        </div>
        
        </div>
        
      </div>
      
    </section>
    <Facilities />
    </>
  )
}

export default Hero

//<img className='h-160 w-600' src="https://plus.unsplash.com/premium_photo-1682377521697-bc598b52b08a?q=80&w=1515&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="house" />

//Enjoy Your Vacation

//Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, magnam! Lorem ipsum dolor sit amet.