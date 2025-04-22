import { useState } from "react";

const AllTasks = () => {
  const [selectTasks, setSelectTasks] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      <select
        className="w-full md:w-3/12 border border-gray-300 p-2 rounded-md text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-red-400 transition"
        value={selectTasks}
        onChange={handleChange} 
      >
        <option value="">All Tasks</option>
        <option value="Todo">ToDo</option>
        <option value="Inprogress">Inprogress</option>
        <option value="Review">Review</option>
        <option value="Done">Done</option>
      </select>
    </>
  );
};

export default AllTasks;
