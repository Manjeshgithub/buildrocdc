import React from 'react';

const inProgressProjects = [
  {
    name: 'Modern Skyscraper',
    image: process.env.PUBLIC_URL + '/images/construction_1.jpeg',
  },
  {
    name: 'Construction Site',
    image: process.env.PUBLIC_URL + '/images/construction_2.jpeg',
  },
  {
    name: 'Building Project',
    image: process.env.PUBLIC_URL + '/images/construction_3.jpeg',
  },
  {
    name: 'Urban Development',
    image: process.env.PUBLIC_URL + '/images/construction_4.jpeg',
  },{
    name: 'Modern Skyscraper',
    image: process.env.PUBLIC_URL + '/images/construction_5.jpeg',
  },
  {
    name: 'Construction Site',
    image: process.env.PUBLIC_URL + '/images/construction_6.jpeg',
  },
  {
    name: 'Building Project',
    image: process.env.PUBLIC_URL + '/images/construction_7.jpeg',
  },
];

const completedProjects = [
  {
    name: 'Urban Development',
    image: process.env.PUBLIC_URL + '/images/construction_8.jpeg',
  },{
    name: 'Modern Skyscraper',
    image: process.env.PUBLIC_URL + '/images/construction_9.jpeg',
  },
  {
    name: 'Construction Site',
    image: process.env.PUBLIC_URL + '/images/construction_10.jpeg',
  },
  {
    name: 'Building Project',
    image: process.env.PUBLIC_URL + '/images/construction_11.jpeg',
  },
  {
    name: 'Urban Development',
    image: process.env.PUBLIC_URL + '/images/construction_12.jpeg',
  },
  {
    name: 'Urban Development',
    image: process.env.PUBLIC_URL + '/images/construction_13.jpeg',
  }
];

function ProjectGallery() {
  return (
    <section id="project-gallery" className="p-8 bg-background">
      <h2 className="text-3xl font-heading font-bold text-center text-primary mb-6">Our Projects</h2>

      {/* Completed Projects */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-primary mb-4">Completed Projects</h3>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {completedProjects.map((project, index) => (
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
      </div>

      {/* In Progress Projects */}
      <div>
        <h3 className="text-2xl font-semibold text-primary mb-4">In Progress Projects</h3>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {inProgressProjects.map((project, index) => (
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
      </div>
    </section>
  );
}

export default ProjectGallery;
