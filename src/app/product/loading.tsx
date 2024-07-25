import React from "react";

export default function Loading() {
  return (
    <div className="container px-5 mx-auto my-5">
      <h1></h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {/* {products.data.length > 0 && api local */}
        <div className="w-full max-w-sm bg-gray-400 rounded-lg shadow dark:bg-gray-800 h-96">
          <a href="#"></a>
          <div className="px-5 pb-5">
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate"></h5>
            </a>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white"></span>
            </div>
          </div>
        </div>
        <div className="w-full max-w-sm bg-gray-400 rounded-lg shadow dark:bg-gray-800 h-96">
          <a href="#"></a>
          <div className="px-5 pb-5">
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate"></h5>
            </a>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white"></span>
            </div>
          </div>
        </div>
        <div className="w-full max-w-sm bg-gray-400 rounded-lg shadow dark:bg-gray-800 h-96">
          <a href="#"></a>
          <div className="px-5 pb-5">
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate"></h5>
            </a>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white"></span>
            </div>
          </div>
        </div>
        <div className="w-full max-w-sm bg-gray-400 rounded-lg shadow dark:bg-gray-800 h-96">
          <a href="#"></a>
          <div className="px-5 pb-5">
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate"></h5>
            </a>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
