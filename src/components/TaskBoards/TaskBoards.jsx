import AllTasks from "./AllTasks";
import Anaylytic from "./Anaylytic";
import SearchTask from "./SearchTask";
import SortByTask from "./SortByTask";
import TaskList from "./TaskList";

import ModalTask from "./ModalTask";

const TaskBoards = () => {
  return (
    <>
      {/* {showModal && <ModalTask />} */}
      <section className="flex flex-col md:flex-row gap-4 justify-between mt-6">
        <SearchTask />
        <AllTasks />
        <SortByTask />
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Analytics</h2>
        <Anaylytic />
      </section>

      <section className="overflow-x-auto mt-5">
        <TaskList />
      </section>
    </>
  );
};

export default TaskBoards;
