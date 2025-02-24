import useChat from "../hooks/useChat";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";

const Chat = () => {
    const { messages, sendMessage } = useChat();
    const { user } = useAuth();
    const [message, setMessage] = useState("");
  
    const handleSendMessage = () => {
      if (message.trim()) {
        sendMessage(message, user?.name || "Guest");
        setMessage("");
      }
    };
  
    return (
      <div className="flex flex-col h-screen bg-gray-100">
        <div className="flex-1 overflow-y-auto p-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`p-2 ${msg.sender === user?.name ? "text-right" : "text-left"}`}>
              <span className="inline-block px-3 py-1 bg-blue-500 text-white rounded-md">{msg.content}</span>
            </div>
          ))}
        </div>
        <div className="p-4 bg-white border-t flex">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 p-2 border rounded-l"
            placeholder="Type a message..."
          />
          <button onClick={handleSendMessage} className="bg-blue-500 text-white px-4 rounded-r">Send</button>
        </div>
      </div>
    );
  };
  export default Chat;
  