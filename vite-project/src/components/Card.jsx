import React from 'react'

function Card() {
  return (
    <> <div className='flex flex-col gap-5'>
    <div className="bg-black h-70 w-130 inline-block text-white relative ml-50" >
        <div className='mt-8 ml-6 gap-10 '>
   <h1 className='school text-4xl font-bold italic'>School-Level <br /><span className='text-red-500 '> Awards </span></h1>
   <p className='mt-4'>Best drawing selected per school <br />per category</p>
   <div>
   <p className='mt-5'>Awards Include:</p>
   <ul>
    <li>Helmets</li>
   <li>Certificates and more</li>
   </ul>
   <img alt="" src="https://csr.heromotocorp.com/my-family-my-safety/assets/card1-Pu5k0c7E.png" className='absolute right-0 bottom-0 w-60 h-35'></img>
   </div>
   </div>
   </div>



<div className="bg-black h-70 w-130 inline-block text-white relative ml-50" >
        <div className='mt-8 ml-6 gap-10'>
   <h1 className='school text-4xl font-bold italic'>National-Level <br /><span className='text-red-500'>Awards</span></h1>
   <p className='mt-4'>Top entries across all schools</p>
   <div>
   <p className='mt-5'>Hero Safety Kit:</p>
   <ul>
    <li>Jackets</li>
   <li>Cash prizes <br />40,000</li>
   </ul>
   <img alt="" src="https://csr.heromotocorp.com/my-family-my-safety/assets/national-merch-BQy6sabf.png" className='absolute right-0 bottom-0 w-60 h-35'></img>
   </div>
   </div>
   </div>
</div>

    </>
  )
}

export default Card