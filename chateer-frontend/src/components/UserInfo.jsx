import React from 'react'
import UserProfile from '../pages/UserProfile'
import Settings from '../pages/Settings'
function UserInfo() {
  return (
    <div className="bg-gray-200 p-5 mb-0 mt-20 w-3xs flex flex-col text-center border-current rounded-sm shadow-sm ml-auto">
        <UserProfile />
        <Settings />

    </div>
  )
}

export default UserInfo

