import React from 'react';

const testimonials = [
  {
    name: 'Jane Doe',
    feedback: 'The team was professional, and they delivered high-quality work on time.',
  },
  {
    name: 'John Smith',
    feedback: 'Impressive attention to detail and a seamless construction process.',
  },
];

function TestimonialsSection() {
  return (
    <section id="testimonials" className="p-8 bg-white text-center">
      <h2 className="text-3xl font-heading font-bold text-primary mb-4">Customer Reviews</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-4 bg-background rounded-lg shadow-md">
            <p className="italic text-lg">"{testimonial.feedback}"</p>
            <h4 className="mt-2 font-semibold text-secondary">{testimonial.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;
