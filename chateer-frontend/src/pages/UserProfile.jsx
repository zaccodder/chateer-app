import React from 'react'
import Profile from "../assets/images/mk.jpeg"
function UserProfile({username, onlineTime}) {
  return (
    <div className="flex items-center gap-6">
      <img src={Profile} alt={`${username} profile`} className="rounded-full w-15 h-15"/>
      <div>
        <h1>{username}</h1>
      </div>
      <p className="ml-15">{onlineTime} </p>
    </div>
  )
}

export default UserProfile

