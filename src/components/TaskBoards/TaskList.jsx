import React from 'react';

const TaskList = () => {
  return (
    <>
      <table className="min-w-full overflow-y-scroll h-28 bg-white rounded-xl shadow border-separate border-spacing-y-2 text-sm md:text-base">
        <thead className="bg-gray-500 text-white">
          <tr>
            <th className="px-4 py-3 text-left">Task</th>
            <th className="px-4 py-3 text-left">Assignee</th>
            <th className="px-4 py-3 text-left">Status</th>
            <th className="px-4 py-3 text-left">Priority</th>
            <th className="px-4 py-3 text-left">Tags</th>
            <th className="px-4 py-3 text-left">Due Date</th>
            <th className="px-4 py-3 text-left">Action</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          <tr className="bg-gray-50 hover:bg-gray-100 transition">
            <td className="px-4 py-3 rounded-l-lg">Build dashboard layout</td>
            <td className="px-4 py-3">Sheila</td>
            <td className="px-4 py-3">
              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">
                In Review
              </span>
            </td>
            <td className="px-4 py-3 font-medium text-red-500">High</td>
            <td className="px-4 py-3">
              <span className="bg-cyan-100 text-cyan-600 px-2 py-1 rounded-full text-xs">
                Dashboard
              </span>
            </td>
            <td className="px-4 py-3">Apr 20, 2025</td>
            <td className="px-4 py-3 rounded-r-lg space-x-2">
              <button className="text-xs bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button className="text-xs bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </td>
          </tr>

          <tr className="bg-gray-50 hover:bg-gray-100 transition">
            <td className="px-4 py-3 rounded-l-lg">Build dashboard layout</td>
            <td className="px-4 py-3">Sheila</td>
            <td className="px-4 py-3">
              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">
                In Review
              </span>
            </td>
            <td className="px-4 py-3 font-medium text-red-500">High</td>
            <td className="px-4 py-3">
              <span className="bg-cyan-100 text-cyan-600 px-2 py-1 rounded-full text-xs">
                Dashboard
              </span>
            </td>
            <td className="px-4 py-3">Apr 20, 2025</td>
            <td className="px-4 py-3 rounded-r-lg space-x-2">
              <button className="text-xs bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button className="text-xs bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TaskList;