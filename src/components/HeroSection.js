import React from 'react';

function HeroSection() {
  const scrollToProjects = () => {
    const projectGallery = document.getElementById('project-gallery');
    if (projectGallery) {
      projectGallery.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={`${process.env.PUBLIC_URL}/videos/construction-demo.mp4`}
        autoPlay
        muted
        loop
        playsInline
      ></video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-2xl mx-auto text-white p-4">
        <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4 animate-fadeIn">
          Building the Future, Today
        </h1>
        <p className="text-lg md:text-xl mb-6 animate-fadeIn delay-150">
          Crafting high-quality structures with precision and expertise.
        </p>
        <button
          onClick={scrollToProjects}
          className="bg-primary text-white font-semibold py-3 px-8 rounded hover:bg-secondary hover:text-primary transition-colors duration-300"
        >
          View Projects
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
