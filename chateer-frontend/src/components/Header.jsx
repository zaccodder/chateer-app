<<<<<<< HEAD
import React, { useState } from 'react';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import UserInfo from './UserInfo';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleSettings() {
    setIsOpen((prev) => !prev);
  }
  return (
    <>
      <div className='fixed top-0 w-full bg-gray-200 flex items-center justify-between p-5 shadow-md'>
        <h1 className='text-3xl'>Chats</h1>
        <button onClick={toggleSettings}>
          <HiOutlineDotsVertical className='text-2xl' />
        </button>
      </div>
      {isOpen && <UserInfo />}
=======
import React, { useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import UserInfo from "../components/UserInfo";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleSettings() {
    setIsOpen((prev) => !prev);
  }

  return (
    <>
      <div className="fixed top-0 w-full bg-gray-200 flex items-center justify-between p-5 shadow-md relative">
        <h1 className="text-3xl">Chats</h1>
        <button onClick={toggleSettings} className="relative">
          <HiOutlineDotsVertical className="text-2xl" />
        </button>
      </div>

      {/* UserInfo as an overlay */}
      {isOpen && (
        <div className="absolute top-19 right-5 bg-white shadow-lg  rounded-md z-50">
          <UserInfo />
        </div>
      )}
>>>>>>> 44964f8d44b91774e787eb2911072abc1967f5ea
    </>
  );
}

export default Header;
<<<<<<< HEAD
=======


>>>>>>> 44964f8d44b91774e787eb2911072abc1967f5ea
