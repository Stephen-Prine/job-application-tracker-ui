import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-800">
      <div className="h-16 pl-8 flex items-center">
        <p className="text-white font-bold">Job Application Tracker</p>
        <p
          onClick={() => navigate("/entryList")}
          className="text-white font-bold ml-5 border-left border-white-500 p-5 hover:bg-gray-600 hover:cursor-pointer"
        >
          Job Entries
        </p>
        <p className="text-white font-bold ml-5 border-left border-white-500 p-5 hover:bg-gray-600 hover:cursor-pointer">
          Links To Postings
        </p>
        <p
          onClick={() => navigate("/addEntry")}
          className="text-white font-bold ml-5 border-left border-white-500 p-5 hover:bg-gray-600 hover:cursor-pointer"
        >
          Add Application Entry
        </p>
      </div>
    </div>
  );
};

export default Navbar;
