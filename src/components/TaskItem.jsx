import React, { useState } from 'react';

function TaskItem({ task, deleteTask, toggleComplete, updateTaskPriority, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);
  const [showOptions, setShowOptions] = useState(false);

  const priorityColors = {
    low: 'bg-blue-100 text-blue-800',
    medium: 'bg-yellow-100 text-yellow-800',
    high: 'bg-red-100 text-red-800'
  };

  const handleEdit = () => {
    if (editedText.trim() !== '') {
      editTask(task.id, editedText);
      setIsEditing(false);
    }
  };

  // Simple date formatter without using Date API
  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString();
    } catch (e) {
      return "Date unavailable";
    }
  };

  return (
    <li className={`bg-white border rounded-lg shadow-sm transition-all duration-300 ${
      task.completed ? 'opacity-70' : ''
    }`}>
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-3 flex-grow">
            <button
              onClick={() => toggleComplete(task.id)}
              className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                task.completed 
                  ? 'bg-success border-success text-white' 
                  : 'border-gray-300 hover:border-primary'
              }`}
            >
              {task.completed && <i className="bi bi-check text-xs"></i>}
            </button>
            
            {isEditing ? (
              <input
                type="text"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
                onBlur={handleEdit}
                onKeyDown={(e) => e.key === 'Enter' && handleEdit()}
                autoFocus
                className="flex-grow p-1 border-b border-primary outline-none"
              />
            ) : (
              <div className="flex-grow">
                <p className={`text-gray-800 break-words ${
                  task.completed ? 'line-through text-gray-500' : ''
                }`}>
                  {task.text}
                </p>
                <div className="flex items-center mt-2 text-xs text-gray-500">
                  <span className="flex items-center">
                    <i className="bi bi-calendar-event mr-1"></i>
                    {formatDate(task.createdAt)}
                  </span>
                  <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${priorityColors[task.priority]}`}>
                    {task.priority}
                  </span>
                </div>
              </div>
            )}
          </div>
          
          <div className="relative ml-2">
            <button 
              onClick={() => setShowOptions(!showOptions)}
              className="text-gray-400 hover:text-gray-600 p-1"
            >
              <i className="bi bi-three-dots-vertical"></i>
            </button>
            
            {showOptions && (
              <div className="absolute right-0 mt-1 w-48 bg-white rounded-md shadow-lg z-10 py-1 border">
                <button 
                  onClick={() => {
                    setIsEditing(true);
                    setShowOptions(false);
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                >
                  <i className="bi bi-pencil mr-2"></i> Edit
                </button>
                
                <div className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <p className="mb-1 font-medium">Priority:</p>
                  <div className="flex space-x-2">
                    {['low', 'medium', 'high'].map(priority => (
                      <button
                        key={priority}
                        onClick={() => {
                          updateTaskPriority(task.id, priority);
                          setShowOptions(false);
                        }}
                        className={`px-2 py-1 rounded text-xs ${
                          task.priority === priority 
                            ? priorityColors[priority] 
                            : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {priority.charAt(0).toUpperCase() + priority.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
                
                <button 
                  onClick={() => {
                    deleteTask(task.id);
                    setShowOptions(false);
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center"
                >
                  <i className="bi bi-trash mr-2"></i> Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

export default TaskItem;
