import React from 'react'

function Footer() {
  return (
   <div className='mx-43 flex justify-between mt-15  pb-8 border-t border-gray-400 border-solid pt-6'>
    <p>Copyright & Design by @Anushka</p>

    <div className='grid grid-cols-2 divide-x-2 divide-solid divide-gray-300 gap-2'>
      <p>Terms of use</p>
      <p>Privacy Policy</p>
    </div>
   </div>
  )
}

export default Footer