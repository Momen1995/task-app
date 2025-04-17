import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import TaskBoards from "./components/TaskBoards/TaskBoards";
import { initialTask } from "./data/data";
import ModalTask from "./components/TaskBoards/ModalTask";
import { TaskContext } from "./context";

const App = () => {
  const [tasks, setTasks] = useState([initialTask]);
  const [showModal, setShowModal] = useState(false);
  const [taskUpdate,setTaskUpdate] = useState(null);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () =>{
    setTaskUpdate(null)
    setShowModal(false);
  }
  
  const handleEditTask = (task) =>{
    setTaskUpdate(task)
    setShowModal(true)
  }

  return (
    <>
      <TaskContext.Provider
        value={{ tasks, setTasks, setShowModal, taskUpdate }}
      >
        <Header onShowModal={handleShowModal} />
        <main className="mt-2">
          {showModal && <ModalTask onCloseModal={handleCloseModal} />}
          <TaskBoards onEditTask={handleEditTask} />
        </main>
        <Footer />
      </TaskContext.Provider>
    </>
  );
};

export default App;
