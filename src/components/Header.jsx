import React from 'react';

function Header() {
  // Simplified header without useEffect
  return (
    <header className="bg-gradient-to-r from-primary to-secondary text-white shadow-md">
      <div className="container mx-auto px-4 py-6 max-w-3xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <i className="bi bi-check2-circle text-3xl"></i>
            <h1 className="text-2xl font-bold">TaskMaster</h1>
          </div>
          <p className="text-sm md:text-base font-medium">Welcome!</p>
        </div>
        <p className="mt-2 text-sm md:text-base opacity-90">Organize your tasks efficiently</p>
      </div>
    </header>
  );
}

export default Header;
