import React from 'react';

const services = [
  { name: 'Residential Construction', description: 'We build quality homes tailored to your needs.' },
  { name: 'Commercial Buildings', description: 'High-rise buildings and offices with modern designs.' },
  { name: 'Renovations', description: 'Transform and update existing spaces efficiently.' },
];

function ServicesSection() {
  return (
    <section id="services" className="p-8 bg-background">
      <h2 className="text-3xl font-heading font-bold text-center text-primary mb-6">Our Services</h2>
      <div className="max-w-4xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-xl font-semibold text-text mb-2">{service.name}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
