
import React from 'react';
import { Link } from 'react-router-dom';


const Navigation = () => {
    return (
        <>
            <nav className="flex gap-10 items-center justify-between
" >
                <div className="logo ml-2">
                    
                     <img src="/images/logo.png" alt="logo" />

                </div>
                <ul className="text-white-500  flex items-center justify-evenly gap-7
">
                    <Link to="/login">Login</Link>
                    <li href="#">Dashboard</li>
                    <li href="#">Scooters</li>
                    <li href="#">VIDA</li>
                    <li href="#">Motorsports</li>
                    <li href="#">Expolre</li>
                    <li href="#">Company</li>
                </ul>
                    <div className="icons flex items-center justify-evenly gap-5 ">
                        <img src="/images/shopping.png" alt="shopping" />
                        <img src="/images/flag.png" alt="flag" />
                        <img src="/images/profile.png" alt="profile" />
                    </div>
                
            </nav>
        </>
    );
};

export default Navigation