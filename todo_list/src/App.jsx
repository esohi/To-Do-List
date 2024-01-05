import React, { useState, useEffect } from 'react';
import TaskItem from './components/TaskItem'
import TaskInput from './components/TaskInput';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState(() => {
    //loads tasks from local storage if they exist, otherwise loads default value
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks
      ? JSON.parse(storedTasks)
      : [
          { id: 1, text: 'Task 1', completed: false },
          { id: 2, text: 'Task 2', completed: false },
          { id: 3, text: 'Task 3', completed: false },
        ];
  });

  useEffect(() => {
    //saves tasks to local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleToggleComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : { ...task }
      )
    );
  };

  const handleRemoveTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleAddTask = (newTaskText) => {
    const newTask = {
      id: tasks.length + 1,
      text: newTaskText,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div>
      <h1>Task List</h1>
      <TaskInput onAddTask={handleAddTask} />
      <ol>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleComplete={handleToggleComplete}
            onRemoveTask={handleRemoveTask}
          />
        ))}
      </ol>
    </div>
  );
};

export default App;

