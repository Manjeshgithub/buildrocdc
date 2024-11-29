import React from 'react';

function AboutSection() {
  return (
    <section id="about" className="p-8 bg-white text-center">
      <h2 className="text-3xl font-heading font-bold text-primary mb-6">About Us</h2>
      <p className="text-lg max-w-xl mx-auto mb-8">
        We are a trusted construction company dedicated to creating high-quality structures. With 12 years of experience, we’ve transformed ideas into reality, offering innovative solutions for residential and commercial projects.
      </p>

      {/* Statistics Section */}
      <div className="max-w-4xl mx-auto grid gap-6 grid-cols-2 sm:grid-cols-4">
        <div className="text-primary">
          <h3 className="text-4xl font-bold">12</h3>
          <p className="text-text">Years of Experience</p>
        </div>
        <div className="text-primary">
          <h3 className="text-4xl font-bold">122</h3>
          <p className="text-text">Projects Completed</p>
        </div>
        <div className="text-primary">
          <h3 className="text-4xl font-bold">19</h3>
          <p className="text-text">Ongoing Projects</p>
        </div>
        <div className="text-primary">
          <h3 className="text-4xl font-bold">172K</h3>
          <p className="text-text">Sq Ft Built So Far</p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
