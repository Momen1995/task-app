import { useContext,  useEffect,  useState } from "react";
import { TaskContext } from "../../context";

const SearchTask = () => {
  const [searchText, setSearchText] = useState("");
  const { tasks, setTasks } = useContext(TaskContext);

  useEffect(() => {
    const filterTask = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchText.toLowerCase())
    );

    setTasks(filterTask);
  }, [searchText, tasks,setTasks]);

  return (
    <>
      <input
        type="text"
        placeholder="Search tasks..."
        className="w-full md:w-6/12 border border-gray-300 p-2 rounded-md text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-red-400 transition"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </>
  );
};

export default SearchTask;
