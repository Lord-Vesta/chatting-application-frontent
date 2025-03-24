import React, { useState } from "react";
import ChatScreen from "../components/ChatScreen";
import ChatSidebar from "../components/ChatSidebar";
import { FaFolder } from "react-icons/fa";
const ChatApp = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  return (
    <div className="flex items-start justify-center h-screen bg-[#202022] p-2">
      <div className="mr-2">
        <div className="p-4 hover:bg-[#3a3a3a] rounded-2xl flex flex-col  justify-center items-center gap-1 group">
          <FaFolder className="text-[#929292] text-center text-2xl group-hover:text-white" />
          <p className="text-[#929292] text-xs group-hover:text-white">Work</p>
        </div>
        <div className="p-4 hover:bg-[#3a3a3a] rounded-2xl flex flex-col  justify-center items-center gap-1 group">
          <FaFolder className="text-[#929292] text-center text-2xl group-hover:text-white" />
          <p className="text-[#929292] text-xs group-hover:text-white">Work</p>
        </div>
        <div className="p-4 hover:bg-[#3a3a3a] rounded-2xl flex flex-col  justify-center items-center gap-1 group">
          <FaFolder className="text-[#929292] text-center text-2xl group-hover:text-white" />
          <p className="text-[#929292] text-xs group-hover:text-white">Work</p>
        </div>
        <div className="p-4 hover:bg-[#3a3a3a] rounded-2xl flex flex-col  justify-center items-center gap-1 group">
          <FaFolder className="text-[#929292] text-center text-2xl group-hover:text-white" />
          <p className="text-[#929292] text-xs group-hover:text-white">Work</p>
        </div>
        <div className="p-4 hover:bg-[#3a3a3a] rounded-2xl flex flex-col  justify-center items-center gap-1 group">
          <FaFolder className="text-[#929292] text-center text-2xl group-hover:text-white" />
          <p className="text-[#929292] text-xs group-hover:text-white">Work</p>
        </div>
      </div>
      <ChatSidebar />

      <ChatScreen />
    </div>
  );
};

export default ChatApp;
