import React from "react";
import { User } from "./types";
import Flag from "react-flagkit";

interface UserProfileProps {
  user: User;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="max-w-xl mx-auto bg-white rounded-md shadow-md overflow-hidden">
        <div className="flex items-center justify-between bg-gray-200 p-4">
          <div className="flex items-center">
            <img
              src={user.picture.large}
              alt="User Picture"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <p className="text-lg font-semibold">{`${user.name.title} ${user.name.first} ${user.name.last}`}</p>
              <p className="text-gray-500">{user.gender}</p>
            </div>
          </div>
          <div className="flex items-center">
            <Flag country={user.nat} />
            <p className="ml-2">{user.nat}</p>
          </div>
        </div>
        <div className="p-4">
          <p>
            <span className="font-semibold">Email:</span> {user.email}
          </p>
          <p>
            <span className="font-semibold">Location:</span>{" "}
            {`${user.location.city}, ${user.location.country}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
