import * as React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-blue-500 text-white p-4 flex justify-between items-center">
      <h1 className="text-lg font-bold">Chateer</h1>
      <button className="px-4 py-2 bg-blue-700 rounded-lg hover:bg-blue-800">
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
