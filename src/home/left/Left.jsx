import React from "react";
import Search from "./Search";
import User from "./User";
import Users from "./Users";

function Left() {
  return (
    <div className="  w-[30%]   bg-black text-white  ">
      <h1 className="font-bold text-2xl text-white  ">Chats </h1>
      <Search />
      <hr />
      <Users />
    </div>
  );
}

export default Left;
