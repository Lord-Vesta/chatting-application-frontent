import React from "react";
import ChatScreen from "../components/ChatScreen";
import ChatSidebar from "../components/ChatSidebar";

const ChatApp = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <ChatSidebar />

      {/* Chat Window */}
      <ChatScreen />
    </div>
  );
};

export default ChatApp;
