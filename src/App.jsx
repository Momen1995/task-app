import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import TaskBoards from "./components/TaskBoards/TaskBoards";

const App = () => {
  return (
    <>
      <Header />
      <main className="mt-2">
        <TaskBoards />
      </main>
      <Footer />
    </>
  );
};

export default App;
