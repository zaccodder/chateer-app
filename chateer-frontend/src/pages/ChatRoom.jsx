import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserProfile from "../pages/UserProfile";
import axios from "axios";

function ChatRoom() {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/api/v1/auth/all-users");
        setAllUsers(response.data);
      } catch (error) {
        console.error("Error fetching all users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="w-screen h-[90vh] flex items-start justify-start">
      <div className="bg-gray-200 w-full p-3 flex flex-col gap-5 h-full min-h-0 overflow-y-auto pb-10">
        {allUsers.length === 0 ? (
          <p className="text-gray-600">No users found</p>
        ) : (
          allUsers.map((user) => (
            <Link to={`/singleuser/${user._id}`} key={user._id}>
              <UserProfile username={user.username} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default ChatRoom;
