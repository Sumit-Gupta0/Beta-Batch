import React from 'react'
import HeroImg from '/Users/sumitgupta/Desktop/B batch/day-9 React-3/Portfolio/src/Assets/HeroImg.png'
import img_1 from '/Users/sumitgupta/Desktop/B batch/day-9 React-3/Portfolio/src/Assets/facebook.png'
import img_2 from '/Users/sumitgupta/Desktop/B batch/day-9 React-3/Portfolio/src/Assets/github.png'
import img_3 from '/Users/sumitgupta/Desktop/B batch/day-9 React-3/Portfolio/src/Assets/instagram.png'
import img_4 from '/Users/sumitgupta/Desktop/B batch/day-9 React-3/Portfolio/src/Assets/linkedin.png'
import background from '/Users/sumitgupta/Desktop/B batch/day-9 React-3/Portfolio/src/Assets/tech/Background.avif'
import PrimaryBtn from '../PrimaryBtn'

function Hero() {
  return (
    <>
      <div className='flex justify-around items-center w-auto h-screen bg-cover bg-center'>
        <div className='flex flex-col w-130 '>
          <h1 className='text-4xl mb-4 font-extrabold bg-clip-text text-transparent bg-linear-to-r from-indigo-500 to-pink-600'>Sumit Gupta <br />
            MERN Stack Developer
          </h1>
          <p className=' text-xl'>I am a technology-driven student with hands-on experience in MERN stack development
            and a strong interest in cybersecurity and intelligent systems.
            I build scalable web applications and
            I enjoy converting complex technical problems into efficient, real-world solutions.</p>
          <div className='flex justify-center items-center h-12 w-36 mt-1 gap-3'>
            <a href=""><img src={img_1} alt="img-1" /></a>
            <a href="https://github.com/Sumit-coder-1"><img src={img_2} alt="img-1" /></a>
            <a href="https://www.instagram.com/sumit____gupta00?igsh=dGVja2s2MmJsbWx0"><img src={img_3} alt="img-1" /></a>
            <a href="https://www.linkedin.com/in/sumit-gupta-7a832833b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src={img_4} alt="img-1" /></a>
          </div>
          <PrimaryBtn />
        </div>
        <img src={HeroImg} className='h-130 w-130 rounded-[50%] object-contain grayscale' alt="hero-img" />
      </div>

      {/* <div
        className="w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <h1 className="text-white text-4xl">Hello</h1>
      </div> */}
    </>
  )
}

export default Hero