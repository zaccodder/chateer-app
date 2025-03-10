import React from 'react'
import { HiOutlineDotsVertical } from "react-icons/hi";
import UserInfo from '../components/UserInfo';
import { useState } from 'react';

function Home() {
  const [isOpen, setIsOpen] = useState(false)

  function showSettings(){
      setIsOpen(prevSetting => !prevSetting)
  }
  return (
    <>
      <div className="fixed top-0  w-full bg-gray-200 flex items-center justify-between p-5">
        <h1 className='text-3xl'>Chats</h1>
        <button className='ml-50' onClick={showSettings}><HiOutlineDotsVertical  className='text-2xl '/></button>
      </div>
      {isOpen && <UserInfo />}
    </>
  )
}

export default Home

