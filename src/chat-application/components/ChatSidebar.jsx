import React from "react";
import profile1 from "../assets/profile1.jpg";
import profile2 from "../assets/profile2.jpg";
import profile3 from "../assets/profile3.jpg";
import profile4 from "../assets/profile4.jpg";
import profile5 from "../assets/profile5.jpg";
const ChatSidebar = () => {
  const chats = [
    {
      name: "Bill Kuphal",
      message: "The weather will be perfect for th...",
      time: "9:41 AM",
      avatar: profile1,
      unread: 0,
    },
    {
      name: "Photographers",
      message: "Here're my latest drone shots",
      time: "9:16 AM",
      avatar: profile2,
      unread: 80,
    },
    {
      name: "Daryl Bogisich, Ian Daniel, +1",
      message: "You: Store is out of stock",
      time: "Yesterday",
      avatar: profile3,
      unread: 0,
    },
    {
      name: "SpaceX Crew-16 Launch",
      message: "I've been there!",
      time: "Thursday",
      avatar: profile4,
      unread: 0,
    },
    {
      name: "Helen Flatley",
      message: "You: Ok",
      time: "12/13/21",
      avatar: profile5,
      unread: 0,
    },
  ];

  return (
    <div className="w-80 h-full bg-white shadow-md border-r">
      <div className="flex items-center p-3 border-b">
        <button className="p-2">
          <span className="material-icons">menu</span>
        </button>
        <input
          type="text"
          placeholder="Search"
          className="flex-1 p-2 border rounded-lg ml-2 focus:outline-none"
        />
      </div>

      <div className="overflow-y-auto">
        {chats.map((chat, index) => (
          <div
            key={index}
            className="flex items-center p-3 border-b hover:bg-gray-100 cursor-pointer"
          >
            <img
              src={chat.avatar}
              alt="avatar"
              className="w-12 h-12 rounded-full object-contain "
            />
            <div className="ml-3 flex-1">
              <div className="flex justify-between">
                <span className="font-semibold">{chat.name}</span>
                <span className="text-xs text-gray-500">{chat.time}</span>
              </div>
              <div className="text-gray-500 text-sm flex justify-between">
                <span className="truncate">{chat.message}</span>
                {chat.unread > 0 && (
                  <span className="bg-red-500 text-white text-xs px-2 rounded-full">
                    {chat.unread}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatSidebar;
