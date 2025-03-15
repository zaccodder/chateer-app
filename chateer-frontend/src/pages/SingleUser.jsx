import React from "react";
import UserProfile from "./UserProfile";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
export default function SingleUser() {
  const [messages, setMessages] = useState([])

  function chandleClik(formData){

    const message = formData.get("message").trim();
    if (message){
      setMessages((prevMessages) => [...prevMessages, message])
    }

  }
  return (
    <div className="flex flex-col mt-20 h-[75vh] max-w-lg mx-auto p-4 rounded-lg shadow-md">
      <div className="flex items-center gap-5 mb-10">
        <Link to="/"><IoIosArrowBack className="text-2xl"/></Link>
      <UserProfile />
      </div>

      <div className="flex-grow overflow-y-auto p-4 space-y-2 bg-gray-100 rounded-md">
        {messages.length > 0 ? (
          messages.map((message, index) => (
            <p key={index} className="p-2 bg-white rounded-lg shadow">
              {message}
            </p>
          ))
        ) : (
          <p className="text-gray-500 text-center">No messages yet</p>
        )}
      </div>

      <form action={chandleClik} className="flex items-center space-x-2 p-2 ">
        <input
          type="text"
          placeholder="Type a message..."
          name="message"
          className="flex-grow p-2 border rounded-md"
        />
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
          Send
        </button>
      </form>
    </div>
  );
}
