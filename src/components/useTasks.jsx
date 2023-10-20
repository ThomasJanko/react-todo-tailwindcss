// src/components/useTasks.js

import { useState, useMemo } from 'react';

const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

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

  const filteredTasks = useMemo(() => {
    if (filter === 'all') return tasks;
    if (filter === 'completed') return tasks.filter(task => task.completed);
    if (filter === 'uncompleted') return tasks.filter(task => !task.completed);
    return tasks;
  }, [tasks, filter]);

  return { tasks: filteredTasks, addTask, deleteTask, toggleComplete, filter, setFilter };
};

export default useTasks;
