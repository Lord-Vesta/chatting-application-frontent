import React, { useEffect, useState } from "react";
import { FaRegPaperPlane } from "react-icons/fa";
import profile1 from "../assets/profile1.jpg";
import profile2 from "../assets/profile2.jpg";
import { io } from "socket.io-client";

const ChatScreen = () => {
  const [socket, setSocket] = useState(null);
  const senderChats = [
    {
      name: "Bill Kuphal",
      message: "The weather will be perfect for th...",
      time: "9:41 AM",
      avatar: profile1,
    },
    {
      name: "Photographers",
      message: "Here're my latest drone shots",
      time: "9:16 AM",
      avatar: profile2,
    },
    {
      name: "Bill Kuphal",
      message: "The weather will be perfect for th...",
      time: "9:41 AM",
      avatar: profile1,
    },
    {
      name: "Photographers",
      message: "Here're my latest drone shots",
      time: "9:16 AM",
      avatar: profile2,
    },
    {
      name: "Bill Kuphal",
      message: "The weather will be perfect for th...",
      time: "9:41 AM",
      avatar: profile1,
    },
    {
      name: "Photographers",
      message: "Here're my latest drone shots",
      time: "9:16 AM",
      avatar: profile2,
    },
    {
      name: "Bill Kuphal",
      message: "The weather will be perfect for th...",
      time: "9:41 AM",
      avatar: profile1,
    },
    {
      name: "Photographers",
      message: "Here're my latest drone shots",
      time: "9:16 AM",
      avatar: profile2,
    },
    {
      name: "Photographers",
      message: "Here're my latest drone shots",
      time: "9:16 AM",
      avatar: profile2,
    },
    {
      name: "Bill Kuphal",
      message: "The weather will be perfect for th...",
      time: "9:41 AM",
      avatar: profile1,
    },
  ];

  const createConnection = () => {
    const newSocket = io.connect("http://localhost:3001");
    setSocket(newSocket);
    console.log("Socket connected:", newSocket);
  };

  //   useEffect(() => {
  //     const newSocket = io("http://localhost:9000", {
  //       transports: ["websocket", "polling"], // Ensures proper transport method
  //     });

  //     setSocket(newSocket);

  //     newSocket.on("connect", () => {
  //       console.log("Connected to WebSocket server");
  //     });

  //     // newSocket.on("disconnect", () => {
  //     //   console.log("Disconnected from WebSocket server");
  //     // });

  //     // return () => {
  //     //   newSocket.disconnect();
  //     // };
  //   }, []);

  return (
    <div className="flex flex-col h-screen bg-gray-100 w-full">
      <div className="flex items-center p-4 bg-white shadow-md">
        <img
          src={profile1}
          alt="User"
          className="w-12 h-12 rounded-full mr-3 object-contain"
        />
        <div>
          <h2 className="text-lg font-semibold">Bill Kuphal</h2>
          <p className="text-sm text-gray-500">Online for 10 mins</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {senderChats.map((chat, index) =>
          chat?.name === "Bill Kuphal" ? (
            <div className="flex items-start mb-4" key={index}>
              <img
                src={chat.avatar}
                alt="User"
                className="w-8 h-8 rounded-full mr-2 object-cover"
              />
              <div className="bg-gray-200 p-3 rounded-lg max-w-xs">
                <p>Who was that philosopher you shared with me recently?</p>
                <p className="text-xs text-gray-500 mt-1">2:14 PM</p>
              </div>
            </div>
          ) : (
            <div className="flex justify-end mb-4" key={index}>
              <div className="bg-blue-500 text-white p-3 rounded-lg max-w-xs">
                <p>Roland Barthes</p>
                <p className="text-xs text-white mt-1">2:16 PM ✓✓</p>
              </div>
            </div>
          )
        )}
      </div>

      <div className="p-4 bg-white shadow-md flex items-center">
        <input
          type="text"
          placeholder="Type your message"
          className="flex-1 p-3 border rounded-lg outline-none"
        />
        <button
          className="ml-2 bg-blue-500 text-white p-3 rounded-lg"
          onClick={createConnection}
        >
          <FaRegPaperPlane />
        </button>
      </div>
    </div>
  );
};

export default ChatScreen;
