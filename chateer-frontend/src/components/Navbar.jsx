import React from 'react'
import { Link } from "react-router-dom"
import { GoHome } from "react-icons/go";
import { IoChatbubbleOutline } from "react-icons/io5";
import { RiGroupLine } from "react-icons/ri";
function Navbar() {
  return (
    <footer >
        <nav className="fixed bottom-0 left-0 w-full bg-gray-200 flex justify-between p-2 text-3xl">
            <Link to="/"><GoHome /></Link>
            <Link to="chatroom"><IoChatbubbleOutline /></Link>
            <Link to="chatgroup"><RiGroupLine /></Link>
        </nav>
    </footer>
  )
}

export default Navbar

