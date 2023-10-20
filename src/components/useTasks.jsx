// src/components/useTasks.js

import { useState, useMemo, useEffect } from 'react';

const useTasks = () => {
  const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const [tasks, setTasks] = useState(storedTasks);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

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
