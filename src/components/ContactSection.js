import React from 'react';

function ContactSection() {
  return (
    <section id="contact" className="p-8 bg-white text-center">
      <h2 className="text-3xl font-heading font-bold text-primary mb-4">Contact Us</h2>
      <p className="text-lg max-w-xl mx-auto mb-6">
        For inquiries and quotes, please fill out the form below or reach us at +91-96068 96388 / +91-9738469945.
      </p>
      <form className="max-w-md mx-auto space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-2 border border-gray-300 rounded"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full text-background py-2 rounded hover:bg-secondary bg-primary transition-colors duration-200"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default ContactSection;
