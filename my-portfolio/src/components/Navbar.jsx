import React, { useState } from 'react';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b ${theme === 'dark' ? 'bg-gray-950/80 border-gray-800' : 'bg-white/80 border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo with Emoji */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            <a href="#home" className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Portfolio
            </a>
          </div>

          {/* Desktop Menu Links */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#home" className={`transition ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Home</a>
            <a href="#about" className={`transition ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>About</a>
            <a href="#projects" className={`transition ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Projects</a>
            <a href="#contact" className={`transition ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Contact</a>
            
            {/* Theme Toggle Button */}
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full border transition ${theme === 'dark' ? 'bg-gray-900 border-gray-700 text-yellow-400 hover:bg-gray-800' : 'bg-gray-100 border-gray-300 text-gray-800 hover:bg-gray-200'}`}
              title="Toggle Theme"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>

          {/* Mobile Menu & Theme Button */}
          <div className="md:hidden flex items-center gap-3">
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full border transition ${theme === 'dark' ? 'bg-gray-900 border-gray-700 text-yellow-400' : 'bg-gray-100 border-gray-300 text-gray-800'}`}
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className={`md:hidden border-b px-4 pt-2 pb-4 space-y-2 ${theme === 'dark' ? 'bg-gray-950 border-gray-800' : 'bg-white border-gray-200'}`}>
          <a href="#home" onClick={() => setIsOpen(false)} className={`block px-3 py-2 rounded-md text-base font-medium ${theme === 'dark' ? 'text-gray-300 hover:bg-gray-900' : 'text-gray-700 hover:bg-gray-100'}`}>Home</a>
          <a href="#about" onClick={() => setIsOpen(false)} className={`block px-3 py-2 rounded-md text-base font-medium ${theme === 'dark' ? 'text-gray-300 hover:bg-gray-900' : 'text-gray-700 hover:bg-gray-100'}`}>About</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className={`block px-3 py-2 rounded-md text-base font-medium ${theme === 'dark' ? 'text-gray-300 hover:bg-gray-900' : 'text-gray-700 hover:bg-gray-100'}`}>Projects</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className={`block px-3 py-2 rounded-md text-base font-medium ${theme === 'dark' ? 'text-gray-300 hover:bg-gray-900' : 'text-gray-700 hover:bg-gray-100'}`}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;