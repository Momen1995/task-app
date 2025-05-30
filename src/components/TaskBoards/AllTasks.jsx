import { useContext, useEffect } from "react";
import { useState } from "react";
import { TaskContext } from "../../context";

const AllTasks = () => {
  const [selectTasks, setSelectTasks] = useState("alltask");
  const { tasks, setTasks } = useContext(TaskContext);

  const handleChange = (e) => {
    setSelectTasks(e.target.value);
  };

  useEffect(() => {
    if (selectTasks === "alltask") {
      setTasks(tasks);
    } else {
      const filterTask = tasks.filter(
        (task) => task.status.toLowerCase() === selectTasks.toLowerCase()
      );

      setTasks(filterTask);
    }
  }, [selectTasks, tasks, setTasks]);

  // console.log(tasks)

  return (
    <>
      <select
        className="w-full md:w-3/12 border border-gray-300 p-2 rounded-md text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-red-400 transition"
        value={selectTasks}
        onChange={handleChange}
      >
        <option value="alltask">All Tasks</option>
        <option value="To do">ToDo</option>
        <option value="Inprogress">Inprogress</option>
        <option value="Review">Review</option>
        <option value="Done">Done</option>
      </select>
    </>
  );
};

export default AllTasks;
