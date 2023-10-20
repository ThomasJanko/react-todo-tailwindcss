// src/components/TodoList.js

import React, { useState } from 'react';
import useTasks from './useTasks';

const TodoList = () => {
  const { tasks, addTask, deleteTask, toggleComplete } = useTasks();
  const [todo, setTodo] = useState('');

  const handleAddTodo = () => {
    addTask(todo);
    setTodo('');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Todo List</h1>
        <div className="flex mb-4">
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="flex-1 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Ajouter une tâche"
          />
          <button
            onClick={handleAddTodo}
            className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Ajouter
          </button>
        </div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className="py-1">
              <div className={`flex justify-between items-center bg-gray-100 rounded-md p-2 mb-2 ${task.completed ? 'line-through' : ''}`}>
                <span onClick={() => toggleComplete(index)}>{task.task}</span>
                <div>
                  <button
                    onClick={() => deleteTask(index)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mr-2"
                  >
                    Supprimer
                  </button>
                  <button
                    onClick={() => toggleComplete(index)}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
                  >
                    {task.completed ? 'Rétablir' : 'Terminer'}
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
