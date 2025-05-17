import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-50 border-t py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-600 text-sm">
          <span className="block sm:inline">TaskMaster - Organize your day efficiently.</span>
          <span className="block sm:inline mt-1 sm:mt-0 sm:ml-2">
            Designed by <a href="https://websparks.ai" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">WebSparks AI</a>
          </span>
        </p>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="#" className="text-gray-400 hover:text-primary transition-colors">
            <i className="bi bi-github text-xl"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-primary transition-colors">
            <i className="bi bi-twitter text-xl"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-primary transition-colors">
            <i className="bi bi-linkedin text-xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
