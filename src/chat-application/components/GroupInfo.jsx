// src/components/GroupInfo.jsx
import {
  FaImage,
  FaVideo,
  FaFile,
  FaMusic,
  FaLink,
  FaMicrophone,
} from "react-icons/fa";
import profile1 from "../assets/profile1.jpg";
import profile2 from "../assets/profile2.jpg";
// import meeting from '../assets/meeting.jpg';

const members = [
  { name: "Tanisha Combs", role: "Admin", avatar: profile1 },
  { name: "Alex Hunt", role: "", avatar: profile2 },
  { name: "Jasmin Lowery", role: "", avatar: profile1 },
  { name: "Max Padilla", role: "", avatar: profile2 },
  { name: "Jessie Rollins", role: "", avatar: profile1 },
  { name: "Lukas Mcgowan", role: "", avatar: profile2 },
];

const GroupInfo = () => {
  return (
    <div className="w-80 bg-white border-l border-gray-200 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">Group Info</h2>
        <button className="text-gray-500">✕</button>
      </div>

      {/* Files Section */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">Files</h3>
        <div className="space-y-2 mt-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FaImage className="text-gray-500 mr-2" />
              <span>265 photos</span>
            </div>
            <button className="text-gray-500">↑</button>
          </div>
          <div className="flex items-center space-x-2">
            <img
              src={profile2}
              alt="Photo"
              className="w-12 h-12 rounded-lg object-cover"
            />
            <img
              src={profile2}
              alt="Photo"
              className="w-12 h-12 rounded-lg object-cover"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FaVideo className="text-gray-500 mr-2" />
              <span>13 videos</span>
            </div>
            <button className="text-gray-500">↓</button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FaFile className="text-gray-500 mr-2" />
              <span>378 files</span>
            </div>
            <button className="text-gray-500">↓</button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FaMusic className="text-gray-500 mr-2" />
              <span>21 audio files</span>
            </div>
            <button className="text-gray-500">↓</button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FaLink className="text-gray-500 mr-2" />
              <span>54 shared links</span>
            </div>
            <button className="text-gray-500">↓</button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FaMicrophone className="text-gray-500 mr-2" />
              <span>2,589 voice messages</span>
            </div>
            <button className="text-gray-500">↓</button>
          </div>
        </div>
      </div>

      {/* Members Section */}
      <div className="p-4 flex-1">
        <h3 className="text-lg font-semibold text-gray-800">23 members</h3>
        <div className="space-y-2 mt-2">
          {members.map((member) => (
            <div key={member.name} className="flex items-center">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-10 h-10 rounded-full mr-3 object-cover"
              />
              <div>
                <p className="font-semibold">{member.name}</p>
                {member.role && (
                  <p className="text-sm text-gray-500">{member.role}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GroupInfo;
