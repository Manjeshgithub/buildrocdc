import React from 'react';

const packages = [
  {
    name: 'Basic Package',
    price: '₹1700/sqft',
    features: ['Initial consultation', 'Basic design', 'Site visit'],
  },
  {
    name: 'Standard Package',
    price: '₹1850/sqft',
    features: [
      'Consultation and planning',
      'Intermediate design',
      'Project management',
      'Regular site visits',
    ],
  },
  {
    name: 'Premium Package',
    price: '₹2000/sqft',
    features: [
      'Complete turnkey solutions',
      'Advanced architectural design',
      'Project management with updates',
      'Unlimited site visits',
    ],
  },
];

function PackagesSection() {
  return (
    <section id="packages" className="p-8 bg-white">
      <h2 className="text-3xl font-heading font-bold text-center text-primary mb-6">Our Packages</h2>
      <div className="max-w-5xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {packages.map((pkg, index) => (
          <div key={index} className="bg-background shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-text mb-4">{pkg.name}</h3>
            <p className="text-lg font-bold text-secondary mb-4">{pkg.price}</p>
            <ul className="list-disc pl-6 space-y-2">
              {pkg.features.map((feature, idx) => (
                <li key={idx} className="text-text">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PackagesSection;
