import React from "react";
import Sidebar from "../sidebar/Sidebar";
import FindFriendsPage from "./pages/FindFriendsPage";

const HomeFeed: React.FC = () => {
  return (
    <div className="w-full">
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <FindFriendsPage />
        </div>
      </div>
    </div>
  );
};

export default HomeFeed;
