import React from 'react'
import Profile from "../assets/images/mk.jpeg"
function UserProfile() {
  return (
    <div className="flex items-center gap-6">
      <img src={Profile} alt="keita profile" className="rounded-full w-15 h-15"/>
      <div>
        <h1>Keita Modibo</h1>
      </div>
    </div>
  )
}

export default UserProfile

