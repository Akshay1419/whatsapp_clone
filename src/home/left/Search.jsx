import React from "react";
import { IoSearch } from "react-icons/io5";
function Search() {
  return (
    <div className="px-6 py-4">
      <form action="">
        <div className="flex  space-x-3 ">
          <label className=" border-[1px]  rounded-lg  border-gray-700  bg-slate-900  flex items-center gap-2 w-[80%] p-1 ">
            <input
              type="text"
              className="grow bg-slate-900 outline-none"
              placeholder="Search"
            />
          </label>

          <button>
            <IoSearch
              className="
            text-2xl hover:bg-gray-600 rounded-full duration-300   "
            />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Search;
