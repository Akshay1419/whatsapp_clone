import React from "react";

function User() {
  return (
    <div className="  cursor-pointer  flex  space-x-4 px-6 py-7  hover:bg-slate-600 duration-300  ">
      <div className="avatar online">
        <div className="w-10 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <div className="flex-col">
        <h2>Ankit</h2>
        <span>Ankit@gmail.com</span>
      </div>
    </div>
  );
}

export default User;
