import { createContext, useState, ReactNode } from "react";

interface Message {
  id: string;
  sender: string;
  content: string;
  timestamp: string;
}

interface ChatContextType {
  messages: Message[];
  sendMessage: (content: string, sender: string) => void;
  clearChat: () => void;
}

// 🛠️ Provide a default empty object to avoid null issues
export const ChatContext = createContext<ChatContextType>({
  messages: [],
  sendMessage: () => {},
  clearChat: () => {},
});

const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = (content: string, sender: string) => {
    const newMessage: Message = {
      id: Math.random().toString(36).substr(2, 9),
      sender,
      content,
      timestamp: new Date().toISOString(),
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const clearChat = () => {
    setMessages([]);
  };

  return (
    <ChatContext.Provider value={{ messages, sendMessage, clearChat }}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
