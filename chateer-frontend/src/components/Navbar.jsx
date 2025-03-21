import React from 'react';
import { Link } from 'react-router-dom';
import { LuPlus } from "react-icons/lu";
import { IoChatbubbleOutline } from 'react-icons/io5';
import { RiGroupLine } from 'react-icons/ri';

function Navbar() {
  return (
    <footer>
      <nav className="fixed bottom-0 left-0 w-full bg-gray-200 flex justify-around p-4 text-3xl shadow-md">
        <Link to="uploadfile"><LuPlus /></Link>
        <Link to="chatroom"><IoChatbubbleOutline /></Link>
        <Link to="chatgroup"><RiGroupLine /></Link>
      </nav>
    </footer>
  );
}

export default Navbar;
