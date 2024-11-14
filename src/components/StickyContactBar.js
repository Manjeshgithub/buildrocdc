import React from 'react';

function StickyContactBar() {
  return (
    <div className="fixed bottom-8 right-4 flex flex-col space-y-4 z-50">
      {/* Phone Icon */}
      <a href="tel:+1234567890" className="bg-primary p-3 rounded-full shadow-lg hover:bg-secondary transition">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          className="w-6 h-6"
        >
          <path d="M6.62 10.79a15.054 15.054 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.11-.22c1.12.45 2.33.7 3.59.7a1 1 0 011 1v3.5a1 1 0 01-1 1A16 16 0 013 4.5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.26.25 2.47.7 3.59a1 1 0 01-.21 1.11l-2.2 2.2z" />
        </svg>
      </a>

      {/* Email Icon */}
      <a href="mailto:contact@company.com" className="bg-primary p-3 rounded-full shadow-lg hover:bg-secondary transition">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          className="w-6 h-6"
        >
          <path d="M20 4H4c-1.11 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      </a>
    </div>
  );
}

export default StickyContactBar;
