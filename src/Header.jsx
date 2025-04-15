const Header = ({ onShowModal }) => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center py-4">
      <div className="text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-semibold uppercase leading-tight">
          Tasks Management App
        </h1>
        <p className="text-lg text-gray-500 mt-2 md:mt-1">
          Manage your tasks and projects efficiently.
        </p>
      </div>
      <button
        onClick={onShowModal}
        className="mt-4 md:mt-0 bg-black text-white px-6 py-3 rounded-md text-lg md:text-xl hover:bg-gray-800 transition"
      >
        Add Task
      </button>
    </header>
  );
};

export default Header;
