"use client"
import React from 'react';

const Work = () => {
    // Mock data for work/project items (using the same content structure)
    // We'll expand this data slightly to fit the two-column grid layout
    const workItems = [
        {
            title: 'Project Alpha (2024)',
            date: 'November 24, 2024',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed aliquam sollicitudin rhoncus morbi. Tincidunt quam sem elit a convallis. Eget ipsum, velit vitae eu nunc, consequat, at.',
            // Placeholder image URL
            imageUrl: 'https://placehold.co/800x600/b8c0ff/03045E?text=Project+Alpha',
        },
        {
            title: 'Digital Portfolio Redesign (2023)',
            date: 'September 10, 2023',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed aliquam sollicitudin rhoncus morbi. Tincidunt quam sem elit a convallis. Eget ipsum, velit vitae eu nunc, consequat, at.',
            imageUrl: 'https://placehold.co/800x600/b8c0ff/03045E?text=Portfolio+Redesign',
        },
        {
            title: 'E-commerce Platform Integration (2022)',
            date: 'June 5, 2022',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed aliquam sollicitudin rhoncus morbi. Tincidunt quam sem elit a convallis. Eget ipsum, velit vitae eu nunc, consequat, at.',
            imageUrl: 'https://placehold.co/800x600/b8c0ff/03045E?text=E-commerce+Integration',
        },
        {
            title: 'Mobile App Development (2021)',
            date: 'January 1, 2021',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed aliquam sollicitudin rhoncus morbi. Tincidunt quam sem elit a convallis. Eget ipsum, velit vitae eu nunc, consequat, at.',
            imageUrl: 'https://placehold.co/800x600/b8c0ff/03045E?text=Mobile+App',
        },
    ];

    return (
        // Main container with the pale yellow background (bg-yellow-50) and dark navy text (text-blue-900)
        <div id='work' className={`min-h-screen p-8 md:p-16 lg:p-24 bg-yellow-50 text-blue-900`}>
            
            {/* Max-width container, centered on the page */}
            <div className="max-w-6xl mx-auto"> 
                
                {/* 1. Large Dark Navy Heading: "work." */}
                <h1 
                    className={`text-8xl sm:text-9xl font-extrabold mb-10 
                               text-blue-900 font-sans tracking-tight leading-none
                               drop-shadow-lg`}
                >
                    work.
                </h1>

                {/* 2. Top Introduction Paragraph (Full Width) */}
                <p className="mb-16 text-xl md:text-2xl font-medium leading-relaxed max-w-4xl">
                    Here are some of the projects and case studies I have led and contributed to over the past few years, demonstrating a passion for clean design and robust development.
                </p>

                {/* 3. Work/Projects Section - Responsive two-column grid layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                    {workItems.map((item, index) => (
                        <div 
                            key={index} 
                            className="flex flex-col group transition-all duration-500 hover:shadow-2xl hover:shadow-blue-200 rounded-xl overflow-hidden bg-white/50"
                        >
                            {/* Image Container */}
                            <div className="relative overflow-hidden h-64 md:h-72">
                                <img 
                                    src={item.imageUrl} 
                                    alt={`Image for ${item.title}`} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    // Fallback for image loading
                                    onError={(e) => {
                                        e.target.onerror = null; 
                                        e.target.src = "https://placehold.co/800x600/e6e6fa/03045E?text=Project+Image";
                                    }}
                                />
                            </div>
                            
                            {/* Text Content Area */}
                            <div className="p-6">
                                {/* Date */}
                                <p className="text-xs font-medium uppercase tracking-widest opacity-60 mb-2">
                                    {item.date}
                                </p>

                                {/* Project Title */}
                                <h2 className="font-extrabold text-2xl mb-3 leading-snug">
                                    {item.title}
                                </h2>
                                
                                {/* Project Description */}
                                <p className="leading-relaxed text-base opacity-80 mb-4">
                                    {item.description}
                                </p>
                                
                                {/* Call to Action Link */}
                                <p className={`mt-2 text-sm font-bold text-blue-900 opacity-90 hover:opacity-100 transition duration-300 cursor-pointer`}>
                                    View Case Study &rarr;
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Work;