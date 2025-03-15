import React, { useState } from 'react';
import { HiOutlineDotsVertical } from "react-icons/hi";
import UserInfo from '../components/UserInfo';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleSettings() {
        setIsOpen(prev => !prev);
      }
  return (
    <>
        <div className="fixed top-0 w-full bg-gray-200 flex items-center justify-between p-5 shadow-md">
                <h1 className="text-3xl">Chats</h1>
                <button onClick={toggleSettings}>
                  <HiOutlineDotsVertical className="text-2xl" />
                </button>
        </div>
        {isOpen && <UserInfo />}
    </>
  )
}

export default Header

