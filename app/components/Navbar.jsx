'use client'; 
import React, { useState } from 'react';
// Assuming 'Link' is a placeholder for a routing component (e.g., Next.js Link or similar)
// For this example, we'll treat it as a standard anchor tag for simplicity in a non-Next.js environment.

// Using React Icons for the menu toggle, substituting for actual import here
const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
);
const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Classes
    const linkClasses = "text-base font-medium opacity-80 hover:opacity-100 transition-opacity";
    const socialIconClasses = "text-xl font-bold hover:opacity-70 transition-colors";

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        // Header with light yellow background and dark navy text (using standard Tailwind classes)
        <header className="bg-yellow-50 text-blue-900 shadow-sm">
            <div className="flex justify-between items-center px-6 md:px-12 py-4 min-h-[80px] max-w-7xl mx-auto">
                
                {/* Logo / Brand Name */}
                <div className="text-xl font-bold">
                    <a 
                        href="/" 
                        className="hover:opacity-80 transition-colors"
                    >
                        John Doe
                    </a>
                </div>
                
                {/* Desktop Main Navigation Links */}
                {/* Hidden on mobile, shown on md and larger screens */}
                <nav className="hidden md:flex space-x-10 ">
                    {/* Replaced Link with standard <a> tags for a runnable component */}
                    <a href="/" className={linkClasses}>Home</a>
                    <a href="#about" className={linkClasses}>About</a>
                    <a href="#work" className={linkClasses}>Work</a>
                    <a href="#contact" className={linkClasses}>Contact</a>
                </nav>
                
                {/* Desktop Social Media Icons (Hidden on mobile, shown on md and larger screens) */}
                <div className="hidden md:flex space-x-6 items-center">
                    <a href="https://dribbble.com" aria-label="Dribbble" className={socialIconClasses} target="_blank" rel="noopener noreferrer">🏀</a> 
                    <a href="https://behance.net" aria-label="Behance" className={socialIconClasses} target="_blank" rel="noopener noreferrer">Bē</a> 
                    <a href="https://twitter.com" aria-label="Twitter" className={socialIconClasses} target="_blank" rel="noopener noreferrer">
                        {/* Placeholder for FaTwitter */}
                        T
                    </a>
                </div>

                {/* Mobile Menu Button (Shown on mobile, hidden on md and larger screens) */}
                <div className="md:hidden flex items-center">
                    <button 
                        onClick={toggleMenu} 
                        className="text-blue-900 p-2 focus:outline-none"
                        aria-label="Toggle navigation"
                    >
                        {isOpen ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>

            </div>
            
            {/* Mobile Menu Content (Toggles based on 'isOpen' state) */}
            {/* Full width, dark background for contrast, applies text-blue-900 for consistency */}
            {isOpen && (
                <div className="md:hidden bg-yellow-50 border-t border-yellow-200 py-4 px-6 absolute w-full z-10">
                    <nav className="flex flex-col space-y-4 items-start pb-4">
                        {/* Mobile Links */}
                        <a href="/" className={linkClasses + " text-xl w-full"} onClick={toggleMenu}>Home</a>
                        <a href="#about" className={linkClasses + " text-xl w-full"} onClick={toggleMenu}>About</a>
                        <a href="#work" className={linkClasses + " text-xl w-full"} onClick={toggleMenu}>Work</a>
                        <a href="#contact" className={linkClasses + " text-xl w-full"} onClick={toggleMenu}>Contact</a>
                    </nav>

                    {/* Mobile Social Icons */}
                    <div className="flex space-x-6 pt-4 border-t border-yellow-200">
                        <a href="https://dribbble.com" aria-label="Dribbble" className={socialIconClasses} target="_blank" rel="noopener noreferrer">🏀</a> 
                        <a href="https://behance.net" aria-label="Behance" className={socialIconClasses} target="_blank" rel="noopener noreferrer">Bē</a> 
                        <a href="https://twitter.com" aria-label="Twitter" className={socialIconClasses} target="_blank" rel="noopener noreferrer">T</a>
                    </div>
                </div>
            )}
        </header>
    );
}
 
export default Navbar;