import React from 'react'
import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Home from '../pages/Home'
const Layout = () => {
  return (
    <div className='relative'>
         <Home />
        <main>
            <Outlet />

        </main>
         <Navbar />

    </div>
  )
}

export default Layout

