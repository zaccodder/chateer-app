import React from 'react'
import { Link } from "react-router-dom"
function Navbar() {
  return (
    <footer>
        <nav>
            <Link to="/">Home</Link>
            <Link to="chatroom">chat</Link>
            <Link to="chatgroup">Group</Link>
        </nav>
    </footer>
  )
}

export default Navbar

