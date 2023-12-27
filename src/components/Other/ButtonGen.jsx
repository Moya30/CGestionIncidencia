import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";


export const ButtonGen = ({ link, name}) => {
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => navigate(link)}
        className="bg-sky-900 border-sky-900 text-gray-100 px-3 py-2 mt-5 mb-4 rounded-lg  text-sm flex gap-2 items-center"
      >
        <div>
          <FontAwesomeIcon icon={name} />
        </div>
       
      </button>
      
    </>
  );
};
