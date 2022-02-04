import { useState } from 'react';
import './App.css';
import NewTask from './components/NewTask';
import ShowTask from './components/ShowTask';

function App() {
  const [tasksList, setTasksList] = useState([]);

  const onAddTask = (text) => {
    setTasksList(prevTasks => {
      return [
        ...prevTasks,
        {taskText : text, id:Math.random().toString()}
      ]
    })
  }

  return (
    <div>
      <h1>ToDo List</h1>
      <NewTask onAddTask={onAddTask}/>
      <ShowTask tasks={tasksList}/>
    </div>
  );
}

export default App;
