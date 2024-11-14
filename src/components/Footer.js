import React from 'react';

function Footer() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-background p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Contact Information */}
        <div>
          <h4 className="text-lg font-heading font-bold mb-4">Contact Us</h4>
          <p>Phone: (123) 456-7890</p>
          <p>Email: contact@construction.com</p>
          <p>Address: 123 Construction Ave, City, Country</p>
        </div>
        
        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-heading font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li className="cursor-pointer hover:text-secondary" onClick={() => scrollToSection('about')}>About</li>
            <li className="cursor-pointer hover:text-secondary" onClick={() => scrollToSection('services')}>Services</li>
            <li className="cursor-pointer hover:text-secondary" onClick={() => scrollToSection('project-gallery')}>Projects</li>
            <li className="cursor-pointer hover:text-secondary" onClick={() => scrollToSection('contact')}>Contact</li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div>
          <h4 className="text-lg font-heading font-bold mb-4">Follow Us</h4>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={`${process.env.PUBLIC_URL}/icons/facebook.svg`} alt="Facebook" className="w-6 h-6 hover:opacity-75 filter invert" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={`${process.env.PUBLIC_URL}/icons/twitter.svg`} alt="Twitter" className="w-6 h-6 hover:opacity-75 filter invert" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={`${process.env.PUBLIC_URL}/icons/linkedin.svg`} alt="LinkedIn" className="w-6 h-6 hover:opacity-75 filter invert" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={`${process.env.PUBLIC_URL}/icons/instagram.svg`} alt="Instagram" className="w-6 h-6 hover:opacity-75 filter invert" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="text-center mt-8">
        <p>&copy; {new Date().getFullYear()} BUILDROC Design & Construction. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
