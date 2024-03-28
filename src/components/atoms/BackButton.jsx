import React from "react";
import { useNavigate } from "react-router-dom";
import backButton from "../../assets/images/back.png";

const BackButton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="self-start mb-10">
      <button onClick={handleClick} className="text-white text-3xl">
        <img src={backButton} alt="" className="w-[40px]" />
      </button>
    </div>
  );
};

export default BackButton;
