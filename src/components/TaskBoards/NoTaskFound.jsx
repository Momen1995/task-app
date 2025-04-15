import React from "react";

const NoTaskFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-64 text-center p-4 bg-white rounded-xl shadow-sm">
      <img
        src="https://cdn-icons-png.flaticon.com/512/4076/4076501.png"
        alt="No tasks"
        className="w-24 h-24 mb-4 opacity-70"
      />
      <h2 className="text-xl font-semibold text-gray-700">No Tasks Found</h2>
      <p className="text-sm text-gray-500 mt-2">
        You're all caught up! Add a new task to get started.
      </p>
    </div>
  );
};

export default NoTaskFound;
