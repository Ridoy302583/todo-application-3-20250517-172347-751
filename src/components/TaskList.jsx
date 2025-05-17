import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, deleteTask, toggleComplete, updateTaskPriority, editTask }) {
  if (tasks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <i className="bi bi-clipboard-check text-5xl text-gray-300 mb-3"></i>
        <h3 className="text-xl font-medium text-gray-500">No tasks yet</h3>
        <p className="text-gray-400 mt-1">Add a new task to get started</p>
      </div>
    );
  }

  return (
    <ul className="space-y-3 mt-4">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
          updateTaskPriority={updateTaskPriority}
          editTask={editTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
