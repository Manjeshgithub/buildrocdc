import React from 'react';

const projects = [
  {
    name: 'Modern Skyscraper',
    image: process.env.PUBLIC_URL + '/images/skyscraper.jpg',
  },
  {
    name: 'Construction Site',
    image: process.env.PUBLIC_URL + '/images/construction-site.jpg',
  },
  {
    name: 'Building Project',
    image: process.env.PUBLIC_URL + '/images/building-project.jpg',
  },
  {
    name: 'Urban Development',
    image: process.env.PUBLIC_URL + '/images/urban-development.jpg',
  },
];

function ProjectGallery() {
  return (
    <section id="project-gallery" className="p-8 bg-background">
      <h3 className="text-3xl font-heading font-bold text-center text-primary mb-6">Our Projects</h3>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-md rounded overflow-hidden">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-text">{project.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectGallery;
