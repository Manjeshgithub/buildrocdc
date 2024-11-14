import React from 'react';

function Home() {
  return (
    <div className="flex flex-col items-center text-center p-4 md:p-8 bg-background font-sans text-text">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
        Welcome to Our BUILDROC Design & Construction
      </h2>
      <p className="text-base md:text-lg mb-6 max-w-md lg:max-w-2xl">
        Explore our projects and get in touch to bring your vision to life.
      </p>
      <button className="bg-secondary text-background py-2 px-4 rounded hover:bg-primary transition-colors duration-200">
        View Projects
      </button>
    </div>
  );
}

export default Home;
