'use client';
import React from 'react';
import working from "@/public/workimg.jpg"

const App = () => {




  return (
    <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center font-['Inter'] p-4 md:p-8">
      {/* Hero Container with responsive padding and yellow-100 background */}
      <div 
        className="relative w-full max-w-7xl h-auto p-6 md:p-12 lg:p-20 rounded-3xl overflow-hidden shadow-2xl bg-yellow-100"
      >
        
        {/* Main Content Grid: Text on the left, Image on the right (responsive ordering) */}
        {/* Mobile (col-1) puts image first (order-1), then text (order-2). Desktop (lg:col-2) swaps them back. */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Right: Image & Decorations (Mobile Top, Desktop Right) */}
          <div className="relative flex items-center justify-center h-full min-h-[300px] lg:min-h-[500px] p-4 order-1 lg:order-2">
            
            {/* Large White Backdrop Circle (Responsive scaling) */}
            <div className="absolute w-full h-full bg-white rounded-full transform scale-150 sm:scale-125 lg:scale-125 opacity-70"></div>
            
            {/* Top Right Decorative Crosses (Hidden on small mobile screens) */}
            <div className="absolute top-4 right-4 z-10 transform rotate-12 hidden sm:block">
              <div className="grid grid-cols-2 gap-2">
                {/* Changed to indigo-900 for color consistency */}
                <span className="w-3 h-3 bg-indigo-900 rounded-sm shadow-md"></span>
                <span className="w-3 h-3 bg-indigo-900 rounded-sm shadow-md"></span>
                <span className="w-3 h-3 bg-indigo-900 rounded-sm shadow-md"></span>
                <span className="w-3 h-3 bg-indigo-900 rounded-sm shadow-md"></span>
              </div>
            </div>
            
            {/* Profile Image Circle Container (Responsive size) */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl z-20">
            <img
             src={working} 
             alt="Pen and envelopes for contact" 
              className="w-full h-auto object-cover"
              // ... onerror handler
            />
              
              {/* Decorative Dashes (Hidden on small mobile screens) */}
              <div className="absolute bottom-4 left-0 z-30 transform rotate-45 translate-x-[-70%] hidden sm:block">
                <div className="flex space-x-3">
                  <span className="w-5 h-1 bg-indigo-900 rounded-full shadow-md"></span>
                  <span className="w-5 h-1 bg-indigo-900 rounded-full shadow-md"></span>
                  <span className="w-5 h-1 bg-indigo-900 rounded-full shadow-md"></span>
                </div>
              </div>
            </div>
          </div>

          {/* Left: Text Content and Button (Mobile Bottom, Desktop Left) */}
          <div className="flex flex-col space-y-4 lg:space-y-6 z-20 order-2 lg:order-1 text-center lg:text-left">
            <p className="text-xl md:text-2xl text-gray-800">
              Hello, I'm Ruhul,
            </p>
            
            <h1 
              className="text-6xl md:text-8xl lg:text-9xl font-extrabold leading-tight tracking-tight text-indigo-900" 
            >
              Front-End<br/>Developer
            </h1>

            <p className="text-xl md:text-2xl text-gray-800 mt-2">
              based in Creative It Institute.
            </p>

            {/* Resume Button (Center on mobile, left on desktop) */}
            <div className='flex justify-center lg:justify-start'>
                <button 
                  className="mt-8 px-8 py-4 w-fit text-lg font-semibold rounded-lg border-2 border-indigo-900 shadow-lg transition duration-300 hover:shadow-xl hover:bg-yellow-200 bg-yellow-300 text-indigo-900"
                  onClick={() => console.log('Resume Clicked')}
                >
                  Resume
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;