// import { io } from "socket.io-client";

// const socket = io("http://localhost:3001");

export const joinChat = (socket, userId, roomId) => {
  socket.emit("joinRoom", { userId, roomId });
  socket.on("userJoined", (message) => {
    console.log(message);
  });
};

export const sendMessage = (socket, messageData) => {
  socket.emit("sendMessage", messageData);
};

export const receiveMessage = (socket,callback) => {
  socket.on("receiveMessage", callback);
};

// export default socket;
