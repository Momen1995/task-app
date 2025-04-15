import React, { useContext } from 'react';
import { TaskContext } from '../../context';

const Anaylytic = () => {
  const {tasks} = useContext(TaskContext)
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white shadow rounded-xl p-5 hover:shadow-md transition duration-300">
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-lg font-medium text-gray-700">Total Tasks</h4>
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-2 rounded-full shadow-sm">
              <i className="fas fa-tasks"></i>
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900">{tasks.length}</p>
        </div>

        <div className="bg-white shadow rounded-xl p-5 hover:shadow-md transition duration-300">
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-lg font-medium text-gray-700">Completed</h4>
            <div className="bg-gradient-to-br from-green-400 to-emerald-600 text-white p-2 rounded-full shadow-sm">
              <i className="fas fa-check-circle"></i>
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900">0</p>
        </div>

        <div className="bg-white shadow rounded-xl p-5 hover:shadow-md transition duration-300">
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-lg font-medium text-gray-700">In Progress</h4>
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white p-2 rounded-full shadow-sm">
              <i className="fas fa-spinner animate-spin"></i>
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900">0</p>
        </div>

        <div className="bg-white shadow rounded-xl p-5 hover:shadow-md transition duration-300">
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-lg font-medium text-gray-700">Overdue</h4>
            <div className="bg-gradient-to-br from-red-500 to-pink-600 text-white p-2 rounded-full shadow-sm">
              <i className="fas fa-exclamation-triangle"></i>
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900">0</p>
        </div>
      </div>
    </>
  );
};

export default Anaylytic;