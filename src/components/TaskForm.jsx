import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex-grow relative">
          <i className="bi bi-pencil-fill absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a new task..."
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
        </div>
        <button
          type="submit"
          disabled={!task.trim()}
          className={`px-6 py-3 rounded-lg font-medium transition-all ${
            !task.trim()
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : 'bg-primary text-white hover:bg-primary/90 active:scale-95'
          }`}
        >
          <i className="bi bi-plus-lg mr-2"></i>
          Add Task
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
