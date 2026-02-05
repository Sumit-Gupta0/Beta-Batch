import React from 'react'
import heroLogo from '../assets/heroLogo.png'
import indiaLogo from '../assets/indiaLogo.png'

function
    Navbar() {
    return (
        <>
            <nav className='fixed'>
                <div className='flex gap-14 justify-around items-center bg-white w-368 h-15 '>
                    <img src={heroLogo} className='max-w-22' alt="hero-logo" />
                    <div>
                        <ul className='flex gap-10 cursor-pointer'>
                            <li><a href="#">Premia</a></li>
                            <li><a href="#">Motorcycle</a></li>
                            <li><a href="#">Scooters</a></li>
                            <li><a href="#">VIDA</a></li>
                            <li><a href="#">Motorsports</a></li>
                            <li><a href="#">Explore</a></li>
                            <li><a href="#">Company</a></li>
                        </ul>
                    </div>
                    <div className='flex gap-7'>
                        <i><svg className='fill-black h-5 w-5' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 760" width="24px" fill="#e3e3e3"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg></i>
                        <img src={indiaLogo} className='w-auto rounded-lg h-6.5' alt="logo" />
                        <i><svg className='fill-black h-5 w-5' xmlns="http://www.w3.org/2000/svg" height="29px" viewBox="0 -960 960 560" width="24px" fill="#e3e3e3"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" /></svg></i>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar