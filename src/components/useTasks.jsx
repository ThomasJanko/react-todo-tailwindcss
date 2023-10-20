// src/components/useTasks.js

import { useState } from 'react';

const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task) {
      setTasks([...tasks, { task, completed: false }]);
    }
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return { tasks, addTask, deleteTask, toggleComplete };
};

export default useTasks;
