import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-bold text-blue-600">
          ALX Listing
        </h1>

        <input
          type="text"
          placeholder="Search destinations"
          className="border rounded-md px-4 py-2 w-full md:w-64"
        />

        <div className="flex gap-4 text-sm font-medium">
          <span className="cursor-pointer">Rooms</span>
          <span className="cursor-pointer">Mansion</span>
          <span className="cursor-pointer">Countryside</span>
        </div>

        <div className="flex gap-3">
          <button className="text-sm">Sign in</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm">
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
