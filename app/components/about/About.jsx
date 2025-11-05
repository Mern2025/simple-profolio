import React from 'react';

const About = () => {
    // Define the colors for clarity and easy maintenance
    const PALE_YELLOW = '#FBF8CC'; // Background color (similar to Tailwind's yellow-50)
    const LIGHT_YELLOW = '#F0FF90'; // Heading color (similar to Tailwind's yellow-200)
    const DARK_NAVY = '#03045E'; // Body text and bullet color (similar to Tailwind's indigo-900)

    const timelineData = [
        {
            years: '2014-2018',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis. Id phasellus dui orci vulputate consequat nulla proin. Id sit scelerisque neque, proin bibendum diam.',
        },
        {
            years: '2018-2020',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis. Id phasellus dui orci vulputate consequat nulla proin. Id sit scelerisque neque, proin bibendum diam.',
        },
        {
            years: '2020 - Present',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis. Id phasellus dui orci vulputate consequat nulla proin. Id sit scelerisque neque, proin bibendum diam.',
        },
    ];

    return (
        // Main container with the pale yellow background and dark navy text, spanning the full screen
        // Using arbitrary value syntax for custom colors
        <div id='home' className={`min-h-screen p-8 md:p-16 lg:p-24 bg-[${DARK_NAVY}] text-[${DARK_NAVY}]`}>
            
            {/* Max-width container, centered on the page */}
            <div className="max-w-4xl mx-auto"> 
                
                {/* 1. Large Light Yellow Heading: "about." */}
                <h1 
                    className={`text-8xl sm:text-9xl font-extrabold mb-10 
                               text-[${DARK_NAVY}] font-sans tracking-tight leading-none
                               drop-shadow-lg`}
                >
                    about.
                </h1>

                {/* 2. Top Introduction Paragraph (Full Width) */}
                <p className="mb-16 text-xl md:text-2xl font-medium leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate 
                    tristique quam felis. Id phasellus dui orci vulputate consequat nulla proin. 
                    Id sit scelerisque neque, proin bibendum diam.
                </p>

                {/* 3. Timeline/Experience Section - Pushed to the Right */}
                {/* On desktop (md), this uses a 2-column grid to push the content to the right */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                    
                    {/* Placeholder content for the left side on desktop */}
                    <div className="hidden md:block">
                        <h3 className="text-3xl font-extrabold mb-6">Experience</h3>
                        <p className="text-sm opacity-70">A brief summary of my professional journey.</p>
                    </div> 

                    {/* Timeline Content */}
                    {/* Added a left border on mobile for visual timeline effect */}
                    <div className="space-y-12 border-l-2 border-yellow-300 pl-6 md:pl-0 md:border-l-0"> 
                        {timelineData.map((item, index) => (
                            // Timeline Item Container
                            <div key={index} className="flex relative md:pl-6">
                                
                                {/* Bullet Point (Dark Navy color) */}
                                {/* Absolute positioning on mobile aligns it with the left border */}
                                <div className={`flex-shrink-0 w-4 h-4 rounded-full bg-[${DARK_NAVY}] absolute -left-[32px] md:static md:w-3 md:h-3 md:mt-1.5 md:mr-4`} />
                                
                                {/* Content */}
                                <div className="flex-grow">
                                    {/* Timeline Years: Bold text */}
                                    <p className="font-extrabold text-xl mb-1">
                                        {item.years}
                                    </p>
                                    {/* Description text */}
                                    <p className="leading-relaxed text-base opacity-90">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;