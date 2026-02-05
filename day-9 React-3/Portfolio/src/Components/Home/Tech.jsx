import React from 'react'
import C from '/Users/sumitgupta/Desktop/B batch/day-9 React-3/Portfolio/src/Assets/tech/C.png'
import html from '/Users/sumitgupta/Desktop/B batch/day-9 React-3/Portfolio/src/Assets/tech/Html.png'
import css from '/Users/sumitgupta/Desktop/B batch/day-9 React-3/Portfolio/src/Assets/tech/Css.png'
import react from '/Users/sumitgupta/Desktop/B batch/day-9 React-3/Portfolio/src/Assets/tech/React.png'
import c from '/Users/sumitgupta/Desktop/B batch/day-9 React-3/Portfolio/src/Assets/tech/C++.png'
import javascript from '/Users/sumitgupta/Desktop/B batch/day-9 React-3/Portfolio/src/Assets/tech/Java.png'
import mysql from '/Users/sumitgupta/Desktop/B batch/day-9 React-3/Portfolio/src/Assets/tech/Mysql.png'
import php from '/Users/sumitgupta/Desktop/B batch/day-9 React-3/Portfolio/src/Assets/tech/PHP.png'
import python from '/Users/sumitgupta/Desktop/B batch/day-9 React-3/Portfolio/src/Assets/tech/Python.png'

function Tech() {
  return (
    <>
      <div className='flex justify-around items-center m-30 mt-50 w-auto'>
        <div className='flex flex-wrap justify-center items-center w-80 gap-3 mt-4'>
          <span className='w-auto h-12 px-3 items-center justify-center flex gap-2 bg-linear-to-r from-gray-700 to-gray-500 rounded-lg text-white text-lg'>
            <img className='h-8 w-8' src={react} alt="logo" />React</span>
          <span className='w-auto h-12 px-3 items-center justify-center flex gap-2 bg-linear-to-r from-gray-700 to-gray-500 rounded-lg text-white'>
            <img className='h-8 w-8' src={html} alt="logo" />HTML</span>
          <span className='w-auto h-12 px-3 items-center justify-center flex gap-2 bg-linear-to-r from-gray-700 to-gray-500 rounded-lg text-white'>
            <img className='h-8 w-8' src={css} alt="logo" />CSS</span>
          <span className='w-auto h-12 px-3 items-center justify-center flex gap-2 bg-linear-to-r from-gray-700 to-gray-500 rounded-lg text-white'>
            <img className='h-8 w-8' src={javascript} alt="logo" />Java Script</span>
          <span className='w-auto h-12 px-3 items-center justify-center flex gap-2 bg-linear-to-r from-gray-700 to-gray-500 rounded-lg text-white'>
            <img className='h-8 w-8' src={C} alt="logo" />C</span>
          <span className='w-auto h-12 px-3 items-center justify-center flex gap-2 bg-linear-to-r from-gray-700 to-gray-500 rounded-lg text-white'>
            <img className='h-8 w-8' src={c} alt="logo" />C++</span>
          <span className='w-auto h-12 px-3 items-center justify-center flex gap-2 bg-linear-to-r from-gray-700 to-gray-500 rounded-lg text-white'>
            <img className='h-8 w-8' src={python} alt="logo" />Python</span>
          <span className='w-auto h-12 px-3 items-center justify-center flex gap-2 bg-linear-to-r from-gray-700 to-gray-500 rounded-lg text-white'>
            <img className='h-8 w-8' src={mysql} alt="logo" />MySQL</span>
          <span className='w-auto h-12 px-3 items-center justify-center flex gap-2 bg-linear-to-r from-gray-700 to-gray-500 rounded-lg text-white'>
            <img className='h-8 w-8' src={php} alt="logo" />PHP</span>
        </div>

        <div className='flex flex-col gap-6'>
          <h1 className='font-bold text-2xl font-sans'>Technology</h1>
          <p className='h-auto w-150 text-lg'>I am a technology-driven student with hands-on experience in MERN stack development (MongoDB, Express.js, React.js, Node.js) and a strong interest in cybersecurity and intelligent systems. I build scalable web applications and explore solutions for phishing detection, malicious link analysis, and hardware-level security integration. I enjoy converting complex technical problems into efficient, real-world solutions.</p>
        </div>

      </div>
    </>
  )
}

export default Tech