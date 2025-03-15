import React from "react";
import UserProfile from "../pages/UserProfile";
import { Link } from "react-router-dom";

function ChatRoom() {
  const currentTime = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  // Simulated list of users
  const users = Array.from({ length: 5 }, (_, index) => ({
    id: index + 1,
    onlineTime: currentTime,
  }));

  return (
    <div className="w-screen h-[90vh] flex items-start justify-start">

      <div className="bg-gray-200 w-full p-3 flex flex-col gap-5 h-full min-h-0 overflow-y-auto pb-10">
        {users.map((user) => (
          <Link to="singleuser" key={user.id}>
            <UserProfile onlineTime={user.onlineTime} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ChatRoom;
