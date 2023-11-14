import React from "react";

export const Sidebaruser = ({user,nomb}) => {
  return (
    <>
      <div className="w max-h-40 m-2 mt-3 bg-sky-900 border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-start pb-1">
          <div class="flex-none w-14 h-14 m-4">
            <img
              className=" w-14 h-14 rounded-full shadow-md"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Bonnie image"
            />
          </div>
          <div class="flex-none mt-3 mb-5 align-top">
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
