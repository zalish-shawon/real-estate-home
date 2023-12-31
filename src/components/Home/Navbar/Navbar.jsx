import React from 'react';
import logo from '../../../assets/Logo.png'

const Navbar = () => {
    return (
        <div className='max-w-[85%] mx-auto py-6'>
            <div className='flex justify-between items-center gap-3'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className='flex gap-24 items-center'>
                    <ul className='flex justify-center items-center gap-11 text-xl font-semibold'>
                        <li className='text-[#FF5017]'>Home</li>
                        <li>About Us</li>
                        <li>Property</li>
                        <div className='flex items-center gap-3'>
                            <li>Pages</li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 11 10" fill="none">
                                <path d="M5.23233 1C7.43733 1 9.23233 2.795 9.23233 5C9.23233 7.205 7.43733 9 5.23233 9C3.02733 9 1.23233 7.205 1.23233 5C1.23233 2.795 3.02733 1 5.23233 1ZM5.23233 0C2.47233 0 0.23233 2.24 0.23233 5C0.23233 7.76 2.47233 10 5.23233 10C7.99233 10 10.2323 7.76 10.2323 5C10.2323 2.24 7.99233 0 5.23233 0ZM5.73233 5V3H4.73233V5H3.23233L5.23233 7L7.23233 5H5.73233Z" fill="#010F58" />
                            </svg>
                        </div>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                    <div>
                        <button className='text-xl font-semibold'>Sign in</button>
                        <button className="btn bg-[#FF5017] text-white hover:bg-[#be6548] ml-4 text-xl font-semibold">Add Property</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;