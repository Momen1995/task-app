import React, { useContext } from 'react';
import { TaskContext } from '../../context';
import { formatDate } from '../../data/data';

const TaskList = () => {
  const {tasks} = useContext(TaskContext);

  return (
    <>
      <table className="min-w-full overflow-y-scroll h-28 bg-white rounded-xl shadow border-separate border-spacing-y-2 text-sm md:text-base">
        <thead className="bg-gray-500 text-white">
          <tr>
            <th className="px-4 py-3 text-left">Task</th>
            <th className="px-4 py-3 text-left">Status</th>
            <th className="px-4 py-3 text-left">Priority</th>
            <th className="px-4 py-3 text-left">Tags</th>
            <th className="px-4 py-3 text-left">Due Date</th>
            <th className="px-4 py-3 text-left">Action</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {tasks.map((task) => (
            <tr
              key={task.id}
              className="bg-gray-50 hover:bg-gray-100 transition"
            >
              <td className="px-4 py-3 rounded-l-lg">{task.title}</td>
              <td className="px-4 py-3">
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">
                  {task.status}
                </span>
              </td>
              <td className="px-4 py-3 font-medium text-red-500">High</td>
              <td className="px-4 py-3">
                {task.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-cyan-100 text-cyan-600 px-2 py-1 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </td>
              <td className="px-4 py-3">{formatDate(new Date(task.date))}</td>
              <td className="px-4 py-3 rounded-r-lg space-x-2">
                <button className="text-xs bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                  <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button className="text-xs bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TaskList;