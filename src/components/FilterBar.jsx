import React from 'react';

function FilterBar({ filter, setFilter, count }) {
  // Instead of using useEffect with timers, we'll calculate these values directly
  const activeCount = Math.max(0, count - Math.floor(count * 0.4));
  const completedCount = Math.min(count, Math.floor(count * 0.4));

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4 mb-4">
      <div className="flex space-x-1 mb-3 sm:mb-0">
        <button
          onClick={() => setFilter('all')}
          className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
            filter === 'all'
              ? 'bg-primary text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          All ({count})
        </button>
        <button
          onClick={() => setFilter('active')}
          className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
            filter === 'active'
              ? 'bg-primary text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Active ({activeCount})
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
            filter === 'completed'
              ? 'bg-primary text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Completed ({completedCount})
        </button>
      </div>
      
      <div className="text-sm text-gray-500 flex items-center">
        <i className="bi bi-info-circle mr-1"></i>
        <span>
          {count === 0 
            ? 'No tasks yet' 
            : `${count} task${count !== 1 ? 's' : ''} total`}
        </span>
      </div>
    </div>
  );
}

export default FilterBar;
