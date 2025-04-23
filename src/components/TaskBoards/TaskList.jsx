import React, { useContext } from "react";
import { TaskContext } from "../../context";
import { formatDate } from "../../data/data";

const TaskList = ({ onEditTask }) => {
  const { tasks, setTasks } = useContext(TaskContext);

  function handleTaskDone(e, taskId) {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, isDone: e.target.checked } : task
    );
    setTasks(updatedTasks);
  }


  //delete tasks
  function handleDeleteTask(taskId) {
    const filterTask = tasks.filter((task) => task.id !== taskId);
    setTasks(filterTask);
  }

  console.log(tasks)
  return (
    <>
      <table className="min-w-full overflow-y-scroll h-32 bg-white rounded-xl shadow border-separate border-spacing-y-2 text-sm md:text-base">
        <thead className="bg-gray-500 text-white">
          <tr>
            <th className="px-4 py-3 text-left">Task</th>
            <th className="px-4 py-3 text-left">Description</th>
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
              <td className="px-4 py-3 rounded-l-lg text-[15px] flex items-center gap-2">
                <input
                  type="checkbox"
                  value={task.isDone}
                  onChange={(e) => handleTaskDone(e, task.id)}
                />
                {task.title}
              </td>

              <td className="px-4 py-3 max-w-xs md:max-w-sm lg:max-w-md">
                <p className="truncate md:whitespace-normal text-gray-800 text-sm leading-relaxed">
                  {task.description}
                </p>
              </td>

              <td className="px-4 py-3">
                <span className="bg-yellow-100 text-yellow-800 px-4 py-1 rounded-full text-xs">
                  {task.isDone ? "Done" : task.status}
                </span>
              </td>
              <td className="px-4 py-3 font-medium text-red-500">
                {task.priority}
              </td>
              <td className="px-4 py-3">
                {task.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`${
                      i % 2 !== 0 ? "bg-cyan-100" : "bg-yellow-100"
                    } text-black ml-1 px-4 py-1 rounded-full text-xs`}
                  >
                    {tag}
                  </span>
                ))}
              </td>
              <td className="px-4 py-3">{formatDate(new Date(task.date))}</td>
              <td className="px-4 py-3 rounded-r-lg space-x-2">
                <button
                  onClick={() => onEditTask(task)}
                  className="text-xs bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
                >
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button
                  onClick={() => handleDeleteTask(task.id)}
                  className="text-xs bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                >
                  <i className="fa-solid fa-trash-can"></i>
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
