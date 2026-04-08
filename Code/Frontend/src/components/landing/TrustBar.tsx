'use client';

import Image from 'next/image';

const utilities = [
  { name: 'SCE', logo: '/images/SCE-new.png', alt: 'Southern California Edison' },
  { name: 'PG&E', logo: '/images/PG&E-new.png', alt: 'Pacific Gas & Electric' },
  { name: 'SDG&E', logo: '/images/SDGE-new.png', alt: 'San Diego Gas & Electric' },
  { name: 'LADWP', logo: '/images/LA-DWP-new.png', alt: 'Los Angeles Department of Water & Power' },
];

export function TrustBar() {
  return (
    <section className="py-8 bg-gradient-to-r from-slate-50 via-white to-slate-50 border-y border-slate-100">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Utility Logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 items-center justify-items-center">
            {utilities.map((utility) => (
              <div
                key={utility.name}
                className="flex items-center justify-center w-full h-20 md:h-32 grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all duration-300 px-2"
              >
                <Image
                  src={utility.logo}
                  alt={utility.alt}
                  width={300}
                  height={150}
                  className={`max-h-full max-w-full w-auto h-auto object-contain ${utility.name === 'SCE' || utility.name === 'LADWP' ? 'scale-110 md:scale-125' : ''
                    }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
