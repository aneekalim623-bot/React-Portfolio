import React, { useState, useRef } from 'react';
import profileImg from './assets/portfolio.jpg';
import resturantImg from './assets/Resturant.jpeg';
import todoImg from './assets/Todo.jpeg';
import edulearnImg from './assets/Edulearn websit.jpg.jpeg';
import tictactoeImg from './assets/Tik Tac Toe.jpeg';

function App() {
  const [theme, setTheme] = useState('dark');
  const sliderRef = useRef(null);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -380, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 380, behavior: 'smooth' });
    }
  };

  return (
    <div className={theme === 'dark' ? 'bg-[#0a0a0a] text-white min-h-screen font-sans pb-28 transition-colors duration-300' : 'bg-gray-100 text-gray-900 min-h-screen font-sans pb-28 transition-colors duration-300'}>
      
      {/* Top Header / Theme Toggle Button */}
      <header className="absolute top-4 right-6 z-50">
        <button 
          onClick={toggleTheme}
          className={`px-4 py-2 rounded-full font-medium text-sm flex items-center gap-2 border transition cursor-pointer shadow-md ${
            theme === 'dark' 
              ? 'bg-[#161616] border-gray-800 text-yellow-400 hover:border-[#ff2e4a]' 
              : 'bg-white border-gray-300 text-gray-800 hover:border-[#ff2e4a]'
          }`}
        >
          {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </header>

      {/* Hero Section */}
      <section id="home" className="flex flex-col items-center justify-center min-h-screen p-6 text-center pt-20">
        <div className="relative mb-8">
          <div className="absolute -inset-2 bg-gradient-to-r from-[#ff2e4a] to-purple-600 rounded-full blur-xl opacity-40 animate-pulse"></div>
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full border-4 border-[#ff2e4a] overflow-hidden shadow-[0_0_50px_rgba(255,46,74,0.3)]">
            <img 
              src={profileImg} 
              alt="QuratulAin Kalim" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-5xl sm:text-7xl font-bold mb-2">
          Hi, I'm <span className="text-[#ff2e4a]">QuratulAin</span>
        </h1>
        <p className={`text-xl sm:text-2xl mb-8 uppercase tracking-widest ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          &lt; Frontend Developer &gt;
        </p>

        <div className="flex gap-8 sm:gap-16 mb-10">
          <div className="text-center">
            <h3 className="text-3xl font-bold">2+</h3>
            <p className="text-sm text-gray-500">Years Experience</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold">15+</h3>
            <p className="text-sm text-gray-500">Projects Done</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold">10+</h3>
            <p className="text-sm text-gray-500">Happy Clients</p>
          </div>
        </div>

        <div className="flex gap-4 mb-12">
          <button className="bg-[#ff2e4a] hover:bg-[#d6263e] text-white px-8 py-3 rounded-full font-semibold transition flex items-center gap-2 cursor-pointer shadow-lg shadow-[#ff2e4a]/30">
            Download CV
          </button>
          <button className={`border px-8 py-3 rounded-full font-semibold transition cursor-pointer ${theme === 'dark' ? 'border-gray-600 hover:border-white text-white' : 'border-gray-400 hover:border-gray-900 text-gray-900'}`}>
            Hire Me
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-24 px-6 max-w-6xl mx-auto border-t ${theme === 'dark' ? 'border-gray-900' : 'border-gray-200'}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-4">
            <span className="text-xs font-bold tracking-widest text-[#ff2e4a] uppercase bg-[#ff2e4a]/10 px-3 py-1 rounded-md">
              ABOUT ME
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Turning Ideas Into <span className="text-[#ff2e4a]">Digital Reality</span>
            </h2>
            <p className={`text-base sm:text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              As a dedicated Frontend Developer, I specialize in building responsive, scalable, and visually captivating web applications using React.js and Tailwind CSS. I transform complex problems into clean, seamless user interfaces that deliver exceptional digital experiences.
            </p>
            <div className="pt-2">
              <a href="#contact" className="inline-block bg-[#ff2e4a] hover:bg-[#d6263e] text-white px-6 py-3 rounded-xl font-medium transition shadow-lg shadow-[#ff2e4a]/30">
                Let's Talk →
              </a>
            </div>
          </div>

          <div className="flex justify-center items-center relative">
            <div className="w-72 h-72 sm:w-96 sm:h-96 bg-[#ff2e4a] rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(255,46,74,0.4)] relative overflow-hidden">
              <div className="w-[90%] h-[90%] rounded-full overflow-hidden border-4 border-white/20">
                <img 
                  src={profileImg} 
                  alt="QuratulAin Kalim" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-24 px-6 max-w-6xl mx-auto border-t text-center ${theme === 'dark' ? 'border-gray-900' : 'border-gray-200'}`}>
        <span className="text-xs font-bold tracking-widest text-[#ff2e4a] uppercase bg-[#ff2e4a]/10 px-3 py-1 rounded-md">
          Expertise
        </span>
        <h2 className={`text-4xl sm:text-5xl font-extrabold mt-3 mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          My <span className="text-[#ff2e4a]">Skills</span>
        </h2>
        <p className={`mb-16 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          Here is a breakdown of my technical proficiency and core framework skills.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <div className={`relative w-36 h-36 sm:w-44 sm:h-44 rounded-full border-8 border-[#ff2e4a]/20 flex items-center justify-center shadow-lg ${theme === 'dark' ? 'bg-[#141414]' : 'bg-white'}`}>
              <div className="absolute inset-0 rounded-full border-8 border-[#ff2e4a] border-t-transparent"></div>
              <span className="text-2xl sm:text-3xl font-extrabold text-[#ff2e4a]">90%</span>
            </div>
            <h4 className={`mt-4 text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>React Js</h4>
          </div>

          <div className="flex flex-col items-center">
            <div className={`relative w-36 h-36 sm:w-44 sm:h-44 rounded-full border-8 border-yellow-500/20 flex items-center justify-center shadow-lg ${theme === 'dark' ? 'bg-[#141414]' : 'bg-white'}`}>
              <div className="absolute inset-0 rounded-full border-8 border-yellow-400 border-t-transparent"></div>
              <span className="text-2xl sm:text-3xl font-extrabold text-yellow-400">98%</span>
            </div>
            <h4 className={`mt-4 text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Tailwind CSS</h4>
          </div>

          <div className="flex flex-col items-center">
            <div className={`relative w-36 h-36 sm:w-44 sm:h-44 rounded-full border-8 border-[#ff2e4a]/20 flex items-center justify-center shadow-lg ${theme === 'dark' ? 'bg-[#141414]' : 'bg-white'}`}>
              <div className="absolute inset-0 rounded-full border-8 border-[#ff2e4a] border-t-transparent"></div>
              <span className="text-2xl sm:text-3xl font-extrabold text-[#ff2e4a]">85%</span>
            </div>
            <h4 className={`mt-4 text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>JavaScript</h4>
          </div>

          <div className="flex flex-col items-center">
            <div className={`relative w-36 h-36 sm:w-44 sm:h-44 rounded-full border-8 border-yellow-500/20 flex items-center justify-center shadow-lg ${theme === 'dark' ? 'bg-[#141414]' : 'bg-white'}`}>
              <div className="absolute inset-0 rounded-full border-8 border-yellow-400 border-t-transparent"></div>
              <span className="text-2xl sm:text-3xl font-extrabold text-yellow-400">95%</span>
            </div>
            <h4 className={`mt-4 text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>HTML / CSS</h4>
          </div>
        </div>
      </section>

      {/* Projects Section with Real Images & Slider Buttons */}
      <section id="projects" className={`py-24 px-6 max-w-6xl mx-auto border-t ${theme === 'dark' ? 'border-gray-900' : 'border-gray-200'}`}>
        
        <div className="flex justify-between items-center mb-10">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#ff2e4a] uppercase bg-[#ff2e4a]/10 px-3 py-1 rounded-md">
              Portfolio
            </span>
            <h2 className={`text-4xl sm:text-5xl font-extrabold mt-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              My <span className="text-[#ff2e4a]">Projects</span>
            </h2>
          </div>

          <div className="flex gap-3">
            <button 
              onClick={scrollLeft}
              className={`w-10 h-10 rounded-full border flex items-center justify-center font-bold text-lg transition cursor-pointer shadow-md ${
                theme === 'dark' 
                  ? 'bg-[#161616] border-gray-800 text-white hover:border-[#ff2e4a] hover:text-[#ff2e4a]' 
                  : 'bg-white border-gray-300 text-gray-800 hover:border-[#ff2e4a] hover:text-[#ff2e4a]'
              }`}
            >
              &lt;
            </button>
            <button 
              onClick={scrollRight}
              className={`w-10 h-10 rounded-full border flex items-center justify-center font-bold text-lg transition cursor-pointer shadow-md ${
                theme === 'dark' 
                  ? 'bg-[#161616] border-gray-800 text-white hover:border-[#ff2e4a] hover:text-[#ff2e4a]' 
                  : 'bg-white border-gray-300 text-gray-800 hover:border-[#ff2e4a] hover:text-[#ff2e4a]'
              }`}
            >
              &gt;
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div 
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Project 1: Urban Bite */}
          <div className={`min-w-[320px] sm:min-w-[380px] border p-5 rounded-2xl transition snap-start flex flex-col justify-between ${theme === 'dark' ? 'bg-[#141414] border-gray-800 hover:border-[#ff2e4a]' : 'bg-white border-gray-200 shadow-lg hover:border-[#ff2e4a]'}`}>
            <div>
              <div className="w-full h-52 rounded-xl overflow-hidden mb-4 border border-gray-800/50">
                <img src={resturantImg} alt="Urban Bite" className="w-full h-full object-cover" />
              </div>
              <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Urban Bite</h3>
              <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>A modern fast-food web application built with React.js featuring menu selection and table booking options.</p>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-gray-800/40">
              <span className="text-xs bg-[#ff2e4a]/10 text-[#ff2e4a] px-3 py-1 rounded-full font-semibold">React & Tailwind</span>
              <a href="#projects" className="text-sm font-semibold text-[#ff2e4a] hover:underline">Live Demo →</a>
            </div>
          </div>

          {/* Project 2: ToDo App */}
          <div className={`min-w-[320px] sm:min-w-[380px] border p-5 rounded-2xl transition snap-start flex flex-col justify-between ${theme === 'dark' ? 'bg-[#141414] border-gray-800 hover:border-[#ff2e4a]' : 'bg-white border-gray-200 shadow-lg hover:border-[#ff2e4a]'}`}>
            <div>
              <div className="w-full h-52 rounded-xl overflow-hidden mb-4 border border-gray-800/50">
                <img src={todoImg} alt="ToDo App" className="w-full h-full object-cover" />
              </div>
              <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Interactive ToDo App</h3>
              <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>A sleek task manager application with smooth user interactions and persistent local storage.</p>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-gray-800/40">
              <span className="text-xs bg-yellow-500/10 text-yellow-400 px-3 py-1 rounded-full font-semibold">JavaScript</span>
              <a href="#projects" className="text-sm font-semibold text-yellow-400 hover:underline">Live Demo →</a>
            </div>
          </div>

          {/* Project 3: EduLearn Website */}
          <div className={`min-w-[320px] sm:min-w-[380px] border p-5 rounded-2xl transition snap-start flex flex-col justify-between ${theme === 'dark' ? 'bg-[#141414] border-gray-800 hover:border-[#ff2e4a]' : 'bg-white border-gray-200 shadow-lg hover:border-[#ff2e4a]'}`}>
            <div>
              <div className="w-full h-52 rounded-xl overflow-hidden mb-4 border border-gray-800/50">
                <img src={edulearnImg} alt="EduLearn Website" className="w-full h-full object-cover" />
              </div>
              <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>EduLearn Platform</h3>
              <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>An educational web portal designed for students to explore courses and learning modules cleanly.</p>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-gray-800/40">
              <span className="text-xs bg-[#ff2e4a]/10 text-[#ff2e4a] px-3 py-1 rounded-full font-semibold">React.js</span>
              <a href="#projects" className="text-sm font-semibold text-[#ff2e4a] hover:underline">Live Demo →</a>
            </div>
          </div>

          {/* Project 4: Tic Tac Toe */}
          <div className={`min-w-[320px] sm:min-w-[380px] border p-5 rounded-2xl transition snap-start flex flex-col justify-between ${theme === 'dark' ? 'bg-[#141414] border-gray-800 hover:border-[#ff2e4a]' : 'bg-white border-gray-200 shadow-lg hover:border-[#ff2e4a]'}`}>
            <div>
              <div className="w-full h-52 rounded-xl overflow-hidden mb-4 border border-gray-800/50">
                <img src={tictactoeImg} alt="Tic Tac Toe Game" className="w-full h-full object-cover" />
              </div>
              <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Tic Tac Toe Game</h3>
              <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>An interactive gaming application featuring turn tracking, win detection, and reset capabilities.</p>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-gray-800/40">
              <span className="text-xs bg-yellow-500/10 text-yellow-400 px-3 py-1 rounded-full font-semibold">JavaScript</span>
              <a href="#projects" className="text-sm font-semibold text-yellow-400 hover:underline">Live Demo →</a>
            </div>
          </div>

        </div>

      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-6 max-w-xl mx-auto border-t text-center ${theme === 'dark' ? 'border-gray-900' : 'border-gray-200'}`}>
        <h2 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Get In <span className="text-[#ff2e4a]">Touch</span></h2>
        <p className={`mb-8 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Have a project or want to collaborate? Feel free to drop a message.</p>
        <form className="space-y-4 text-left">
          <input type="text" placeholder="Your Name" className={`w-full border rounded-xl px-4 py-3 focus:outline-none focus:border-[#ff2e4a] ${theme === 'dark' ? 'bg-[#141414] border-gray-800 text-white' : 'bg-white border-gray-300 text-gray-900'}`} />
          <input type="email" placeholder="Your Email" className={`w-full border rounded-xl px-4 py-3 focus:outline-none focus:border-[#ff2e4a] ${theme === 'dark' ? 'bg-[#141414] border-gray-800 text-white' : 'bg-white border-gray-300 text-gray-900'}`} />
          <textarea rows="4" placeholder="Your Message" className={`w-full border rounded-xl px-4 py-3 focus:outline-none focus:border-[#ff2e4a] ${theme === 'dark' ? 'bg-[#141414] border-gray-800 text-white' : 'bg-white border-gray-300 text-gray-900'}`}></textarea>
          <button type="submit" className="w-full bg-[#ff2e4a] hover:bg-[#d6263e] text-white py-3 rounded-xl font-semibold transition cursor-pointer shadow-lg shadow-[#ff2e4a]/30">
            Send Message
          </button>
        </form>
      </section>

      {/* Floating Bottom Nav */}
      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-[#ff2e4a] px-8 py-3.5 rounded-full flex gap-6 sm:gap-10 shadow-[0_10px_30px_rgba(255,46,74,0.5)] z-50">
        {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="text-white hover:text-black transition font-semibold text-sm sm:text-base tracking-wide">
            {item}
          </a>
        ))}
      </nav>

    </div>
  );
}

export default App;