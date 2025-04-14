const AllTasks = () => {
  return (
    <>
      <select className="w-full md:w-3/12 border border-gray-300 p-2 rounded-md text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-red-400 transition">
        <option value="">All Tasks</option>
        <option value="Priority">Priority</option>
        <option value="Due Date">Due Date</option>
        <option value="Status">Status</option>
      </select>
    </>
  );
};

export default AllTasks;