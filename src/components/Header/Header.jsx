import React from 'react';
import profile from '../../assets/formal.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center px-10 pt-5 border-b-1'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img className='w-[50px] rounded-full' src={profile} alt="" />
        </header>
    );
};

export default Header;