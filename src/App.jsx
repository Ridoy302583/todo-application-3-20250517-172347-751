import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  
  // Load tasks from localStorage on initial render only
  useEffect(() => {
    try {
      const savedTasks = localStorage.getItem('tasks');
      if (savedTasks) {
        setTasks(JSON.parse(savedTasks));
      }
    } catch (error) {
      console.error("Failed to load tasks from localStorage:", error);
    }
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    try {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (error) {
      console.error("Failed to save tasks to localStorage:", error);
    }
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { 
      id: Date.now(), 
      text: task, 
      completed: false, 
      createdAt: new Date().toISOString(),
      priority: 'medium'
    }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const updateTaskPriority = (id, priority) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, priority } : task
    ));
  };

  const editTask = (id, newText) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, text: newText } : task
    ));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 max-w-3xl">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <TaskForm addTask={addTask} />
            
            {/* Simple Filter Buttons */}
            <div className="flex space-x-2 border-b pb-4 mb-4">
              <button
                onClick={() => setFilter('all')}
                className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                  filter === 'all'
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter('active')}
                className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                  filter === 'active'
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Active
              </button>
              <button
                onClick={() => setFilter('completed')}
                className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                  filter === 'completed'
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Completed
              </button>
            </div>
            
            <TaskList 
              tasks={filteredTasks} 
              deleteTask={deleteTask} 
              toggleComplete={toggleComplete}
              updateTaskPriority={updateTaskPriority}
              editTask={editTask}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
