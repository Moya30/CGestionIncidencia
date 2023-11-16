import React from "react";

export const Sidebaruser = ({user,nomb,fot}) => {
  return (
    <>
      <div className="w max-h-40 m-2 mt-3  border-gray-200 rounded-lg bg-sky-950">
        <div className="flex items-start pb-1">
          <div className="flex-none w-14 h-14 m-4">
            <img
              className=" w-14 h-14 rounded-full shadow-md"
              src={`data:image/png;base64,${fot}`}
              alt="Bonnie image"
            />
          </div>
          <div className="flex-none mt-3 mb-5 align-top">
            <h5 className=" text-2xl font-medium text-gray-50 font-sans pb-1">
              {user?.name}
            </h5>
            <span className="bg-amber-500 text-sm font-light pr-6 pl-2 text-gray-50 rounded-lg ">
              {nomb}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
