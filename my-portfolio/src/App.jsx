import React, { useState, useRef } from 'react';
import profileImg from './assets/portfolio.jpg';
import resturantImg from './assets/Resturant.jpeg';
import todoImg from './assets/Todo.jpeg';
import edulearnImg from './assets/Edulearn websit.jpg.jpeg';
import tictactoeImg from './assets/Tik Tac Toe.jpeg';

function App() {
  const [theme, setTheme] = useState('dark');
  const sliderRef = useRef(null);

  // States for contact form inputs
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [senderMessage, setSenderMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mnparzve", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: senderName,
          email: senderEmail,
          message: senderMessage
        })
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setSenderName('');
        setSenderEmail('');
        setSenderMessage('');
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        alert("Oops! Kuch masla ho gaya hai. Dobara try karein.");
      }
    } catch (error) {
      alert("Network error! Apna internet connection check karein.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={theme === 'dark' ? 'bg-[#0a0a0a] text-white min-h-screen font-sans pb-28 transition-colors duration-300' : 'bg-gray-100 text-gray-900 min-h-screen font-sans pb-28 transition-colors duration-300'}>
      
      {/* Custom Floating Animation & Hover Glow Styles */}
      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes floatDelay1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes floatDelay2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        .animate-float {
          animation: floatSlow 4s ease-in-out infinite;
        }
        .animate-float-1 {
          animation: floatDelay1 3.5s ease-in-out infinite;
        }
        .animate-float-2 {
          animation: floatDelay2 4.5s ease-in-out infinite;
        }

        /* Hover Glow Effect for Project Cards */
        .project-card-glow {
          position: relative;
          background: transparent;
          transition: all 0.4s ease-in-out;
        }
        .project-card-glow::before {
          content: '';
          position: absolute;
          inset: -2px;
          background: linear-gradient(45deg, #ff2e4a, #9333ea, #ff2e4a, #3b82f6);
          background-size: 400% 400%;
          z-index: -1;
          border-radius: 18px;
          opacity: 0;
          transition: opacity 0.4s ease-in-out;
          animation: glowingBorder 6s ease infinite;
        }
        .project-card-glow:hover::before {
          opacity: 0.8;
        }
        .project-card-glow:hover {
          background: ${theme === 'dark' ? 'rgba(20, 20, 20, 0.6)' : 'rgba(255, 255, 255, 0.6)'};
          backdrop-filter: blur(8px);
          transform: translateY(-5px);
        }
        @keyframes glowingBorder {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      {/* Hero Section */}
      <section id="home" className="flex flex-col items-center justify-center min-h-screen p-6 text-center pt-20">
        <div className="relative mb-8 animate-float">
          <div className="absolute -inset-2 bg-gradient-to-r from-[#ff2e4a] to-purple-600 rounded-full blur-xl opacity-40 animate-pulse"></div>
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full border-4 border-[#ff2e4a] overflow-hidden shadow-[0_0_50px_rgba(255,46,74,0.3)]">
            <img 
              src={profileImg} 
              alt="Quratulain Kalim" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-5xl sm:text-7xl font-bold mb-2">
          Hi, I'm <span className="text-[#ff2e4a]">Quratulain</span>
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

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a href="#skills" className="bg-[#ff2e4a] hover:bg-[#d6263e] text-white px-8 py-3 rounded-full font-semibold transition flex items-center gap-2 cursor-pointer shadow-lg shadow-[#ff2e4a]/30">
            My Expertise 
          </a>
          <a href="#contact" className={`border-2 border-[#ff2e4a] hover:bg-[#ff2e4a] hover:text-white px-8 py-3 rounded-full font-semibold transition flex items-center gap-2 cursor-pointer shadow-lg ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Hire Me 
          </a>
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
              Who I <span className="text-[#ff2e4a]">Am</span>
            </h2>
            <p className={`text-base sm:text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              I’m Quratulain Kalim, a Computer Science student and passionate Frontend Developer. I enjoy building modern, responsive, and user-friendly websites using HTML, CSS, JavaScript, React, and Tailwind CSS. I’m always learning and improving my skills through new projects.
            </p>
            <div className="pt-2">
              <a href="#contact" className="inline-block bg-[#ff2e4a] hover:bg-[#d6263e] text-white px-6 py-3 rounded-xl font-medium transition shadow-lg shadow-[#ff2e4a]/30">
                Let's Talk →
              </a>
            </div>
          </div>

          <div className="flex justify-center items-center relative animate-float">
            <div className="w-72 h-72 sm:w-96 sm:h-96 bg-[#ff2e4a] rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(255,46,74,0.4)] relative overflow-hidden">
              <div className="w-[90%] h-[90%] rounded-full overflow-hidden border-4 border-white/20">
                <img 
                  src={profileImg} 
                  alt="Quratulain Kalim" 
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
          
          <div className="flex flex-col items-center animate-float">
            <div className={`relative w-32 h-32 sm:w-40 sm:h-40 rounded-full border-8 border-[#ff2e4a]/20 flex items-center justify-center shadow-lg ${theme === 'dark' ? 'bg-[#141414]' : 'bg-white'}`}>
              <div className="absolute inset-0 rounded-full border-8 border-[#ff2e4a] border-t-transparent"></div>
              <span className="text-xl sm:text-2xl font-extrabold text-[#ff2e4a]">90%</span>
            </div>
            <h4 className={`mt-4 text-base sm:text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>React Js</h4>
          </div>

          <div className="flex flex-col items-center animate-float-1">
            <div className={`relative w-32 h-32 sm:w-40 sm:h-40 rounded-full border-8 border-yellow-500/20 flex items-center justify-center shadow-lg ${theme === 'dark' ? 'bg-[#141414]' : 'bg-white'}`}>
              <div className="absolute inset-0 rounded-full border-8 border-yellow-400 border-t-transparent"></div>
              <span className="text-xl sm:text-2xl font-extrabold text-yellow-400">98%</span>
            </div>
            <h4 className={`mt-4 text-base sm:text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Tailwind CSS</h4>
          </div>

          <div className="flex flex-col items-center animate-float-2">
            <div className={`relative w-32 h-32 sm:w-40 sm:h-40 rounded-full border-8 border-[#ff2e4a]/20 flex items-center justify-center shadow-lg ${theme === 'dark' ? 'bg-[#141414]' : 'bg-white'}`}>
              <div className="absolute inset-0 rounded-full border-8 border-[#ff2e4a] border-t-transparent"></div>
              <span className="text-xl sm:text-2xl font-extrabold text-[#ff2e4a]">85%</span>
            </div>
            <h4 className={`mt-4 text-base sm:text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>JavaScript</h4>
          </div>

          <div className="flex flex-col items-center animate-float">
            <div className={`relative w-32 h-32 sm:w-40 sm:h-40 rounded-full border-8 border-yellow-500/20 flex items-center justify-center shadow-lg ${theme === 'dark' ? 'bg-[#141414]' : 'bg-white'}`}>
              <div className="absolute inset-0 rounded-full border-8 border-yellow-400 border-t-transparent"></div>
              <span className="text-xl sm:text-2xl font-extrabold text-yellow-400">95%</span>
            </div>
            <h4 className={`mt-4 text-base sm:text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>HTML / CSS</h4>
          </div>

          <div className="flex flex-col items-center animate-float-1">
            <div className={`relative w-32 h-32 sm:w-40 sm:h-40 rounded-full border-8 border-purple-500/20 flex items-center justify-center shadow-lg ${theme === 'dark' ? 'bg-[#141414]' : 'bg-white'}`}>
              <div className="absolute inset-0 rounded-full border-8 border-purple-500 border-t-transparent"></div>
              <span className="text-xl sm:text-2xl font-extrabold text-purple-500">88%</span>
            </div>
            <h4 className={`mt-4 text-base sm:text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Bootstrap</h4>
          </div>

          <div className="flex flex-col items-center animate-float-2">
            <div className={`relative w-32 h-32 sm:w-40 sm:h-40 rounded-full border-8 border-orange-500/20 flex items-center justify-center shadow-lg ${theme === 'dark' ? 'bg-[#141414]' : 'bg-white'}`}>
              <div className="absolute inset-0 rounded-full border-8 border-orange-500 border-t-transparent"></div>
              <span className="text-xl sm:text-2xl font-extrabold text-orange-500">85%</span>
            </div>
            <h4 className={`mt-4 text-base sm:text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Git</h4>
          </div>

          <div className="flex flex-col items-center animate-float sm:col-span-3 md:col-span-1">
            <div className={`relative w-32 h-32 sm:w-40 sm:h-40 rounded-full border-8 border-green-500/20 flex items-center justify-center shadow-lg ${theme === 'dark' ? 'bg-[#141414]' : 'bg-white'}`}>
              <div className="absolute inset-0 rounded-full border-8 border-green-500 border-t-transparent"></div>
              <span className="text-xl sm:text-2xl font-extrabold text-green-500">90%</span>
            </div>
            <h4 className={`mt-4 text-base sm:text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>GitHub</h4>
          </div>

        </div>
      </section>

      {/* Projects Section */}
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

        {/* Scrollable Container with Hover Glow Effect */}
        <div 
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-6 pt-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Project 1: Urban Bite */}
          <div className="min-w-[320px] sm:min-w-[380px] p-5 rounded-2xl transition snap-start flex flex-col justify-between project-card-glow animate-float">
            <div>
              <div className="w-full h-52 rounded-xl overflow-hidden mb-4 border border-gray-800/50">
                <img src={resturantImg} alt="Urban Bite" className="w-full h-full object-cover hover:scale-105 transition duration-300" />
              </div>
              <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Urban Bite</h3>
              <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>A modern fast-food web application built with React.js featuring menu selection and table booking options.</p>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-gray-800/40">
              <span className="text-xs bg-[#ff2e4a]/10 text-[#ff2e4a] px-3 py-1 rounded-full font-semibold">React & Tailwind</span>
              <a href="https://github.com/aneekalim623-bot" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#ff2e4a] hover:underline flex items-center gap-1">
                GitHub →
              </a>
            </div>
          </div>

          {/* Project 2: ToDo App */}
          <div className="min-w-[320px] sm:min-w-[380px] p-5 rounded-2xl transition snap-start flex flex-col justify-between project-card-glow animate-float-1">
            <div>
              <div className="w-full h-52 rounded-xl overflow-hidden mb-4 border border-gray-800/50">
                <img src={todoImg} alt="ToDo App" className="w-full h-full object-cover hover:scale-105 transition duration-300" />
              </div>
              <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Interactive ToDo App</h3>
              <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>A sleek task manager application with smooth user interactions and persistent local storage.</p>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-gray-800/40">
              <span className="text-xs bg-yellow-500/10 text-yellow-400 px-3 py-1 rounded-full font-semibold">JavaScript</span>
              <a href="https://github.com/aneekalim623-bot" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-yellow-400 hover:underline flex items-center gap-1">
                GitHub →
              </a>
            </div>
          </div>

          {/* Project 3: EduLearn Website */}
          <div className="min-w-[320px] sm:min-w-[380px] p-5 rounded-2xl transition snap-start flex flex-col justify-between project-card-glow animate-float-2">
            <div>
              <div className="w-full h-52 rounded-xl overflow-hidden mb-4 border border-gray-800/50">
                <img src={edulearnImg} alt="EduLearn Website" className="w-full h-full object-cover hover:scale-105 transition duration-300" />
              </div>
              <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>EduLearn Platform</h3>
              <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>An educational web portal designed for students to explore courses and learning modules cleanly.</p>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-gray-800/40">
              <span className="text-xs bg-[#ff2e4a]/10 text-[#ff2e4a] px-3 py-1 rounded-full font-semibold">React.js</span>
              <a href="https://github.com/aneekalim623-bot" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#ff2e4a] hover:underline flex items-center gap-1">
                GitHub →
              </a>
            </div>
          </div>

          {/* Project 4: Tic Tac Toe */}
          <div className="min-w-[320px] sm:min-w-[380px] p-5 rounded-2xl transition snap-start flex flex-col justify-between project-card-glow animate-float">
            <div>
              <div className="w-full h-52 rounded-xl overflow-hidden mb-4 border border-gray-800/50">
                <img src={tictactoeImg} alt="Tic Tac Toe Game" className="w-full h-full object-cover hover:scale-105 transition duration-300" />
              </div>
              <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Tic Tac Toe Game</h3>
              <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>An interactive gaming application featuring turn tracking, win detection, and reset capabilities.</p>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-gray-800/40">
              <span className="text-xs bg-yellow-500/10 text-yellow-400 px-3 py-1 rounded-full font-semibold">JavaScript</span>
              <a href="https://github.com/aneekalim623-bot" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-yellow-400 hover:underline flex items-center gap-1">
                GitHub →
              </a>
            </div>
          </div>

        </div>

      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-6 max-w-xl mx-auto border-t text-center ${theme === 'dark' ? 'border-gray-900' : 'border-gray-200'}`}>
        <h2 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Get In <span className="text-[#ff2e4a]">Touch</span></h2>
        <p className={`mb-8 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Have a project or want to collaborate? Feel free to drop a message.</p>
        
        {submitSuccess && (
          <div className="mb-6 p-4 bg-green-500/20 border border-green-500 text-green-400 rounded-xl font-medium">
            Message successfully sent!
          </div>
        )}

        <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
          <input 
            type="text" 
            name="name"
            placeholder="Your Name" 
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
            required 
            className={`w-full border rounded-xl px-4 py-3 focus:outline-none focus:border-[#ff2e4a] ${theme === 'dark' ? 'bg-[#141414] border-gray-800 text-white' : 'bg-white border-gray-300 text-gray-900'}`} 
          />
          <input 
            type="email" 
            name="email"
            placeholder="Your Email" 
            value={senderEmail}
            onChange={(e) => setSenderEmail(e.target.value)}
            required 
            className={`w-full border rounded-xl px-4 py-3 focus:outline-none focus:border-[#ff2e4a] ${theme === 'dark' ? 'bg-[#141414] border-gray-800 text-white' : 'bg-white border-gray-300 text-gray-900'}`} 
          />
          <textarea 
            rows="4" 
            name="message"
            placeholder="Your Message" 
            value={senderMessage}
            onChange={(e) => setSenderMessage(e.target.value)}
            required 
            className={`w-full border rounded-xl px-4 py-3 focus:outline-none focus:border-[#ff2e4a] ${theme === 'dark' ? 'bg-[#141414] border-gray-800 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
          ></textarea>
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-[#ff2e4a] hover:bg-[#d6263e] text-white py-3 rounded-xl font-semibold transition cursor-pointer shadow-lg shadow-[#ff2e4a]/30 disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-[#ff2e4a] text-white py-6 px-6 shadow-[0_-10px_30px_rgba(255,46,74,0.3)]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          
          <div>
            <h3 className="text-lg font-bold tracking-wide">Portfolio</h3>
            <p className="text-xs text-white/90">Frontend Developer</p>
          </div>

          <div className="flex gap-4 items-center">
            <a 
              href="https://github.com/aneekalim623-bot" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition shadow-sm cursor-pointer"
              title="GitHub Profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>

            <a 
              href="https://www.linkedin.com/in/qurat-ul-ain-kalim-bbb79a353?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition shadow-sm cursor-pointer"
              title="LinkedIn Profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>

          <div className="text-xs text-white/90">
            2026 Made with ❤️ by Quratulain
          </div>

        </div>
      </footer>

      {/* Floating Bottom Nav */}
      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-[#ff2e4a] px-6 py-3 rounded-full flex items-center gap-4 sm:gap-8 shadow-[0_10px_30px_rgba(255,46,74,0.5)] z-50">
        <div className="flex gap-4 sm:gap-8 items-center">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-white hover:text-black transition font-semibold text-xs sm:text-base tracking-wide">
              {item}
            </a>
          ))}
        </div>

        <div className="w-[1px] h-5 bg-white/40"></div>

        <button 
          onClick={toggleTheme}
          className="bg-black/30 hover:bg-black/50 text-white px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition flex items-center gap-1.5 cursor-pointer"
          title="Toggle Theme"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </nav>

    </div>
  );
}

export default App;