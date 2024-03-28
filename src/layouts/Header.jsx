import React from "react";
import logo from '../assets/images/logo.png'

const Header = () => {
  return (
    <div className="w-full border-b-2 border-gray-500 flex justify-between p-4">
      <div className="flex justify-center items-center gap-2">
        <img src={logo} width={40}/>
        <p className="text-xl font-bold">News Aggregator</p>
      </div>
    </div>
  );
};

export default Header;
