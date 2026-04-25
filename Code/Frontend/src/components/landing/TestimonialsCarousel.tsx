'use client';

import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

// REPLACE WITH REAL TESTIMONIALS — these are placeholder data only
const TESTIMONIALS = [
  { name: 'Maria R.', city: 'San Diego, CA', utility: 'SDG&E', savings: '52%', quote: "My SDG&E bill was $340 in summer. First month after the install it dropped to $158. The locked rate is what sold me.", img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop' },
  { name: 'James K.', city: 'Fresno, CA', utility: 'PG&E', savings: '48%', quote: "No money out of pocket, no loan paperwork, no credit hit. Crew was professional and the install took one day.", img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop' },
  { name: 'Theresa L.', city: 'Riverside, CA', utility: 'SCE', savings: '44%', quote: "After three PSPS shutoffs in one year, the battery alone was worth it. Lower bill is the bonus.", img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop' },
  { name: 'David M.', city: 'San Jose, CA', utility: 'PG&E', savings: '50%', quote: "I was skeptical of \"no catch\" — turns out there isn't one. They own the equipment, I just pay the lower rate.", img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop' },
  { name: 'Linda B.', city: 'Bakersfield, CA', utility: 'PG&E', savings: '41%', quote: "The 25-year warranty was the deciding factor. If anything ever breaks, they fix it. No service fee, no headache.", img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop' },
  { name: 'Carlos N.', city: 'Long Beach, CA', utility: 'SCE', savings: '46%', quote: "Bill went from $295 to $159 month one. The advisor walked me through every number on the eligibility call.", img: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=120&h=120&fit=crop' },
  { name: 'Susan W.', city: 'Sacramento, CA', utility: 'SMUD', savings: '38%', quote: "I've told four neighbors about the program. Three already qualified. Best rate decision I've made.", img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=120&h=120&fit=crop' },
  { name: 'Robert P.', city: 'Anaheim, CA', utility: 'SCE', savings: '49%', quote: "I sold my house last year — the new owners loved that the program transferred. It was a selling point.", img: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=120&h=120&fit=crop' },
];

export function TestimonialsCarousel() {
  const [idx, setIdx] = useState(0);
  const [perView, setPerView] = useState(3);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setPerView(w < 768 ? 1 : w < 1024 ? 2 : 3);
    };
    update();
    window.addEventListener('resize', update);
    const tick = setInterval(() => setIdx((i) => (i + 1) % TESTIMONIALS.length), 6000);
    return () => {
      window.removeEventListener('resize', update);
      clearInterval(tick);
    };
  }, []);

  const visible = Array.from({ length: perView }, (_, i) => TESTIMONIALS[(idx + i) % TESTIMONIALS.length]);

  return (
    <section className='py-16 md:py-24 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='text-center max-w-3xl mx-auto mb-12'>
          <div className='inline-block bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full mb-3 tracking-wide uppercase'>
            Homeowners on the program
          </div>
          <h2 className='text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-3'>
            Real California families. Real savings.
          </h2>
          <p className='text-lg text-gray-600'>
            Verified Rate Relief Program participants share what changed after switching.
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {visible.map((t, i) => (
            <div
              key={`${t.name}-${i}-${idx}`}
              className='bg-white rounded-2xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-all'
            >
              <div className='flex text-yellow-400 mb-3' aria-label='5 out of 5 stars'>
                {[...Array(5)].map((_, k) => (
                  <Star key={k} className='w-4 h-4 fill-current' />
                ))}
              </div>
              <p className='text-gray-700 leading-relaxed mb-5'>&ldquo;{t.quote}&rdquo;</p>
              <div className='flex items-center gap-3 pt-4 border-t border-gray-100'>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.img}
                  alt={t.name}
                  className='w-12 h-12 rounded-full object-cover'
                  loading='lazy'
                />
                <div>
                  <div className='font-bold text-gray-900 text-sm'>{t.name}</div>
                  <div className='text-xs text-gray-500'>
                    {t.city} · {t.utility}
                  </div>
                </div>
                <div className='ml-auto bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full'>
                  &minus;{t.savings}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='flex items-center justify-center gap-2 mt-8'>
          <button
            onClick={() => setIdx((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
            aria-label='Previous testimonials'
            className='w-11 h-11 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:border-green-700 hover:text-green-700'
          >
            <ChevronLeft className='w-5 h-5' />
          </button>
          <div className='flex gap-1.5'>
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === idx ? 'bg-green-700' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => setIdx((i) => (i + 1) % TESTIMONIALS.length)}
            aria-label='Next testimonials'
            className='w-11 h-11 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:border-green-700 hover:text-green-700'
          >
            <ChevronRight className='w-5 h-5' />
          </button>
        </div>
      </div>
    </section>
  );
}
