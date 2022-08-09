import React from 'react';
import { BsFillCartFill, BsSearch } from 'react-icons/bs';

const Navbar = () => {
  return (
    <div className='bg-slate-600 text-white w-full p-4 flex justify-around items-center fixed'>
        <span className='uppercase font-extrabold text-4xl mr-4'>
            LOGO
        </span>
        <div className='bg-white text-black p-1 rounded flex gap-1 items-center'>
            <BsSearch />
            <input className='w-42 p-1' placeholder='Search Bar' />
        </div>
        <nav className='flex flex-1 justify-center'>
            <ul className='flex gap-8 uppercase text-xl'>
                <li>link1</li>
                <li>link2</li>
                <li>link3</li>
                <li>link4</li>
                <li>link5</li>
            </ul>
        </nav>
        <span className='text-slate-600 mr-4 cursor-pointer text-2xl bg-slate-200 p-2 rounded-full'>
            <BsFillCartFill />
        </span>
    </div>
  )
}

export default Navbar;