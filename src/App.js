import { useState } from "react";
import "./App.css";
import NewTask from "./components/NewTask";
import ShowTask from "./components/ShowTask";

function App() {
  const [tasksList, setTasksList] = useState([]);

  const onAddTask = (text) => {
    setTasksList((prevTasks) => {
      return [...prevTasks, { taskText: text, id: Math.random().toString() }];
    });
  };

  const deleteHandler = (taskId) => {
    setTasksList((prevTasks) => {
      const updatedTasks = prevTasks.filter((task) => task.id !== taskId);
      return updatedTasks;
    });
    console.log("Delete!");
  };

  return (
    <div>
      <h1>ToDo List</h1>
      <NewTask onAddTask={onAddTask} />
      {tasksList.length > 0 && (
        <ShowTask tasks={tasksList} onDelete={deleteHandler} />
      )}
    </div>
  );
}

export default App;
