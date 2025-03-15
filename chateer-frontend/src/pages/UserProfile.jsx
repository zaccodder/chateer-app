import React from 'react'
import Profile from "../assets/images/mk.jpeg"
function UserProfile({onlineTime}) {
  return (
    <div className="flex items-center gap-6">
      <img src={Profile} alt="keita profile" className="rounded-full w-15 h-15"/>
      <div>
        <h1>Keita Modibo</h1>
      </div>
      <p className="ml-15">{onlineTime} </p>
    </div>
  )
}

export default UserProfile

