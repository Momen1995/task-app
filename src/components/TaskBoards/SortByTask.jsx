const SortByTask = () => {
  return (
    <>
      <select className="w-full md:w-3/12 border border-gray-300 p-2 rounded-md text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-red-400 transition">
        <option value="">Sort By</option>
        <option value="Newest">Newest</option>
        <option value="Oldest">Oldest</option>
        <option value="Priority">Priority</option>
      </select>
    </>
  );
};

export default SortByTask;