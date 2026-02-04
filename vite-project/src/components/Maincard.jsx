import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom';

function Maincard() {
    return (
        <><div className="flex gap-1 mt-20"> <div className='ml-8 mt-30   '>
            <p className='mt-5 font-semi text-2xl '>National Level Drawing Competition</p>
            <h2 className='mt-5 text-6xl font-bold ' >Get Your  <br /><span className='text-red-500'>Certificate</span></h2>
            <p className='mt-5 text-2xl'>All participants receive a digital participation certificate.</p>
             <div className='btn p-5'>
                <Link to="/login">
                <div className='btnCtr [clip-path:polygon(4%_0%,100%_0%,96%_100%,0%_100%,0%_40%)] bg-red-500 text-white w-75 h-10 text-center justify-center pt-2 ' >
                     DOWNLOAD YOUR CERTIFICATE
                </div>
                </Link>
             </div>


            {/* <div className=' bg-red-500 mt-5 mb-5 text-white w-75 h-10 text-center justify-center pt-2 ' >DOWNLOAD YOUR CERTIFICATE</div> */}
        </div>
            <Card />
        </div>
        </>
    )
}

export default Maincard