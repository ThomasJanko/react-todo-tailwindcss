// src/components/useTasks.js

import { useState, useMemo, useEffect, useCallback } from 'react';

const useTasks = () => {
  const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const [tasks, setTasks] = useState(storedTasks);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = useCallback((task) => {
    if (task) {
      setTasks(prevTasks => [...prevTasks, { task, completed: false }]);
    }
  }, []);

  const deleteTask = useCallback((index) => {
    setTasks(prevTasks => {
      const newTasks = [...prevTasks];
      newTasks.splice(index, 1);
      return newTasks;
    });
  }, []);

  const toggleComplete = useCallback((index) => {
    setTasks(prevTasks => {
      const newTasks = [...prevTasks];
      newTasks[index] = { ...newTasks[index], completed: !newTasks[index].completed };
      return newTasks;
    });
  }, []);

  const filteredTasks = useMemo(() => {
    if (filter === 'all') return tasks;
    if (filter === 'completed') return tasks.filter(task => task.completed);
    if (filter === 'uncompleted') return tasks.filter(task => !task.completed);
    return tasks;
  }, [tasks, filter]);

  return { tasks: filteredTasks, addTask, deleteTask, toggleComplete, filter, setFilter };
};

export default useTasks;
