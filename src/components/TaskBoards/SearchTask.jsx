const SearchTask = () => {
  return (
    <>
      <input
        type="text"
        placeholder="Search tasks..."
        className="w-full md:w-6/12 border border-gray-300 p-2 rounded-md text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-red-400 transition"
      />
    </>
  );
};

export default SearchTask;