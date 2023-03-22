import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState, useEffect } from 'react'
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTask = async () => {
      const tasksFromServer = await fetchTask()
      setTasks(tasksFromServer)
    }

    getTask()
  }, [])

const fetchTask = async () =>{
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }

const addTask = async (task) => {
  const res = await fetch('http://localhost:5000/tasks', {
    method: 'POST', 
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(task)
  })
  const data = await res.json()
  setTasks([...tasks, data])
}

//delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE'})
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header
        title='Task Tracker' 
        onAdd={() => setShowAddTask (!showAddTask)} 
        showAddTask={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ?
      <Tasks tasks={tasks} onDelete={deleteTask}
      onToggle={toggleReminder}
      />
      :
      "No more task"}
    </div>
  );
}

export default App;
