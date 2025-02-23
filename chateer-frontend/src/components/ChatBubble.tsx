import * as React from "react";

interface ChatBubbleProps {
  message: string;
  sender: "me" | "other";
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message, sender }) => {
  const isMe = sender === "me";
  return (
    <div className={`flex ${isMe ? "justify-end" : "justify-start"} my-2`}>
      <div
        className={`px-4 py-2 max-w-xs rounded-lg ${
          isMe ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
        }`}
      >
        {message}
      </div>
    </div>
  );
};

export default ChatBubble;
