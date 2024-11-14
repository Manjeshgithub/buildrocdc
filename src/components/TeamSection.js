import React from 'react';

const teamMembers = [
  { name: 'Alice Johnson', role: 'Project Manager', image: 'https://via.placeholder.com/150' },
  { name: 'Mark Spencer', role: 'Lead Architect', image: 'https://via.placeholder.com/150' },
];

function TeamSection() {
  return (
    <section id="team" className="p-8 bg-background">
      <h2 className="text-3xl font-heading font-bold text-center text-primary mb-6">Our Team</h2>
      <div className="max-w-4xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center bg-white shadow-md rounded-lg p-4">
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-text">{member.name}</h3>
            <p className="text-secondary">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamSection;
