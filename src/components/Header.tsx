import React from 'react';
import { FaUser } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';

function Header() {
  return (
    <div className='flex items-center justify-between bg-sky-600/80 px-4 py-4 text-white'>
      <h2>Dashboard</h2>
      <span>Admin Dashboard</span>
      <div className='flex items-center justify-end cursor-pointer'>
        <FaUser /> <IoMdArrowDropdown />
      </div>
    </div>
  );
}

export default Header;
