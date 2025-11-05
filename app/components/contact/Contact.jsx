'use client';
import React from 'react';

const App = () => {
  // Unifying the colors to match the established portfolio aesthetic (yellow-100 / indigo-900)
  const CONTACT_IMAGE_URL = 'https://placehold.co/400x400/fff6c6/1A237E?text=Mail+Image';

  return (
    // Main container with the pale yellow background (bg-yellow-100) and dark indigo text (text-indigo-900)
    <div id='contact' className={`min-h-screen p-8 md:p-16 lg:p-24 bg-yellow-100 text-indigo-900 font-['Inter']`}>
        
        {/* Max-width container, centered on the page */}
        <div className="max-w-6xl mx-auto"> 
            
            {/* 1. Large Light Heading: "contact." (Adjusted to yellow-200 for aesthetic consistency) */}
            <h1 
                className={`text-6xl sm:text-8xl font-extrabold mb-12 md:mb-16 
                          text-dark-blue-200 tracking-tight leading-none
                          drop-shadow-lg`}
            >
                contact.
            </h1>

            {/* 2. Content Grid: Image and Text/Links. The order is reversed on mobile for better flow. */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                
                {/* Right Column: Text and Links (Order 1 on mobile, Order 2 on tablet/desktop) */}
                <div className="flex flex-col space-y-8 order-1 md:order-2">
                    
                    {/* Introduction/Summary Paragraph */}
                    <p className="text-xl md:text-2xl font-medium leading-relaxed max-w-xl">
                        Ready to start a conversation about design, collaboration, or coffee? 
                        I'm currently accepting new projects and would love to hear from you. 
                        Let's build something impactful together.
                    </p>

                    {/* Contact Links Section */}
                    <div className="space-y-4 text-xl font-semibold">
                        {/* Email */}
                        <a 
                            href="mailto:johndoe@mail.com" 
                            className="block hover:text-indigo-700 transition duration-300 underline underline-offset-4"
                        >
                            merndeveloper2025@gmail.com
                        </a>
                        
                        {/* Twitter/X */}
                        <a 
                            href="https://twitter.com/johndoe" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="block hover:text-indigo-700 transition duration-300"
                        >
                            twitter.com/ruhul
                        </a>
                        
                        {/* Portfolio/Behance */}
                        <a 
                            href="https://behance.com/johndoe" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="block hover:text-indigo-700 transition duration-300"
                        >
                            behance.com/ruhul
                        </a>
                    </div>
                </div>

                {/* Left Column: Image (Order 2 on mobile, Order 1 on tablet/desktop) */}
                <div className="rounded-xl overflow-hidden shadow-2xl shadow-yellow-200/50 order-2 md:order-1">
                    <img 
                        src={CONTACT_IMAGE_URL} 
                        alt="Pen and envelopes for contact" 
                        className="w-full h-auto object-cover"
                        onError={(e) => {
                            e.target.onerror = null; 
                            e.target.src = "https://placehold.co/400x400/e6e6fa/1A237E?text=Contact+Image";
                        }}
                    />
                </div>
            </div>
        </div>
    </div>
  );
};

export default App;