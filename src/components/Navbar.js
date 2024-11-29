import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close menu after clicking a link
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto p-4 flex items-center justify-between">
        
        {/* Logo/Title */}
        <div className="flex items-center">
          <img
            src={`${process.env.PUBLIC_URL}/images/Company_Logo.jpeg`}
            alt="Company Logo"
            className="h-16 w-auto" // Adjust height for prominence
          />
          <h1 className="ml-4 text-2xl font-heading text-white">BUILDROC</h1>
        </div>


        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              ></path>
            </svg>
          </button>
        </div>

        {/* Background Overlay */}
        {isOpen && (
          <div
            onClick={toggleMenu} // Close the drawer if the overlay is clicked
            className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          ></div>
        )}

        {/* Navigation Links with Sliding Animation */}
        <ul
          className={`fixed top-0 right-0 h-full transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } md:static md:flex md:space-x-6 md:translate-x-0 w-2/3 md:w-auto p-6 md:p-0 z-50`}
        >
          {/* Close Button inside Drawer */}
          <div className="flex justify-end mb-4 md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <li onClick={() => scrollToSection('about')} className="hover:text-secondary text-white cursor-pointer px-4 py-2 md:px-0">
            About
          </li>
          <li onClick={() => scrollToSection('services')} className="hover:text-secondary text-white cursor-pointer px-4 py-2 md:px-0">
            Services
          </li>
          <li onClick={() => scrollToSection('project-gallery')} className="hover:text-secondary text-white cursor-pointer px-4 py-2 md:px-0">
            Projects
          </li>
          <li onClick={() => scrollToSection('packages')} className="hover:text-secondary text-white cursor-pointer px-4 py-2 md:px-0">
            Packages
          </li>
          <li onClick={() => scrollToSection('testimonials')} className="hover:text-secondary text-white cursor-pointer px-4 py-2 md:px-0">
            Testimonials
          </li>
          <li onClick={() => scrollToSection('team')} className="hover:text-secondary text-white cursor-pointer px-4 py-2 md:px-0">
            Team
          </li>
          <li onClick={() => scrollToSection('contact')} className="hover:text-secondary text-white cursor-pointer px-4 py-2 md:px-0">
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
