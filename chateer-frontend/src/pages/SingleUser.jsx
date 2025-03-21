import React, { useEffect, useState, useCallback, useRef } from "react";
import UserProfile from "./UserProfile";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function SingleUser() {
  const { userId } = useParams();
  const senderId = localStorage.getItem("userId");

  const [messages, setMessages] = useState([]);
  const [receiverName, setReceiverName] = useState("");
  const messageInputRef = useRef(null);

  // Fetch receiver's details
  useEffect(() => {
    const fetchReceiverDetails = async () => {
      try {
        const response = await axios.get(`/api/v1/auth/user/${userId}`);
        if (response.data?.username) {
          setReceiverName(response.data.username);
        } else {
          console.error("Unexpected response structure:", response.data);
        }
      } catch (error) {
        console.error("Error fetching receiver details:", error.response?.data || error);
      }
    };

    if (userId) fetchReceiverDetails();
  }, [userId]);

  // Send Message
  const handleSendMessage = useCallback(
    async (e) => {
      e.preventDefault();
      const messageText = messageInputRef.current.value.trim();
      if (!messageText) return;

      // Check if authToken exists before sending
      const authToken = localStorage.getItem("token");
      if (!authToken) {
        console.error("No authorization token found!");
        return;
      }

      try {
        const response = await axios.post(
          "/api/v1/messages/receiverId",
          { senderId, receiverId: userId, message: messageText },
          { headers: { Authorization: `Bearer ${authToken}` } }
        );

        setMessages((prevMessages) => [...prevMessages, response.data.message]);
        messageInputRef.current.value = ""; // Reset input without re-rendering
      } catch (error) {
        console.error("Error sending message:", error.response?.data || error);
      }
    },
    [senderId, userId]
  );

  return (
    <div className="flex flex-col mt-5 h-[75vh] max-w-lg mx-auto p-4 rounded-lg shadow-md">
      {/* Header */}
      <div className="flex items-center gap-5 mb-10">
        <Link to="/chatroom">
          <IoIosArrowBack className="text-2xl" />
        </Link>
        <UserProfile username={receiverName || "Unknown"} />
      </div>

      {/* Messages */}
      <div className="flex-grow overflow-y-auto p-4 space-y-2 bg-gray-100 rounded-md">
        {messages.length > 0 ? (
          messages.map((msg, index) => (
            <p
              key={index}
              className={`p-2 rounded-lg shadow ${
                msg.senderId === senderId ? "bg-blue-500 text-white self-end" : "bg-white"
              }`}
            >
              {msg.message}
            </p>
          ))
        ) : (
          <p className="text-gray-500 text-center">No messages yet</p>
        )}
      </div>

      {/* Message Input */}
      <form onSubmit={handleSendMessage} className="flex items-center space-x-2 p-2">
        <input
          type="text"
          placeholder="Type a message..."
          name="message"
          className="flex-grow p-2 border rounded-md"
          ref={messageInputRef}
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
          Send
        </button>
      </form>
    </div>
  );
}
