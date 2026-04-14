import { Home, Zap, Shield, ArrowRight } from 'lucide-react';

const programFeatures = [
  {
    icon: Home,
    step: '1',
    title: 'We Install Everything ($0 Cost)',
    subtitle: 'Panels & Batteries Included',
    description:
      "The program covers 100% of the cost for the solar panels, backup batteries, and installation. You pay $0 out of pocket. We invest in your home, so you don't have to.",
  },
  {
    icon: Zap,
    step: '2',
    title: 'We Become Your Power Provider',
    subtitle: 'Fire Your Utility Company',
    description:
      "Instead of paying the utility company's high rates, you simply pay us for the power at a locked-in rate that is up to 50% lower. We replace the utility company as your primary provider.",
  },
  {
    icon: Shield,
    step: '3',
    title: '25-Year "Bumper-to-Bumper" Warranty',
    subtitle: 'Total Peace of Mind',
    description:
      'If a panel breaks, we fix it. If an inverter fails, we replace it. For the next 25 years, we handle all maintenance and repairs at no cost to you.',
  },
];

export function ValueProps() {
  return (
    <section className='py-20 bg-gradient-to-b from-card to-muted/30'>
      <div className='container mx-auto px-4'>
        <div className='max-w-6xl mx-auto'>
          {/* Section Header */}
          <div className='text-center mb-14'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4 tracking-tight'>
              How the Rate Relief Program Works
            </h2>
            <p className='text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium'>
              We cover the costs. You get the savings.{' '}
              <span className='font-bold text-foreground'>
                It&apos;s that simple.
              </span>
            </p>
          </div>

          {/* Program Features Grid */}
          <div className='grid md:grid-cols-3 gap-6 mb-20'>
            {programFeatures.map((feature, index) => (
              <div
                key={index}
                className='bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 group relative'
              >
                {/* Step Number Badge */}
                <div className='absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg'>
                  {feature.step}
                </div>

                {/* Icon */}
                <div className='w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors'>
                  <feature.icon className='h-7 w-7 text-primary' />
                </div>

                {/* Content */}
                <h3 className='text-xl md:text-2xl font-bold text-foreground mb-2 tracking-tight'>
                  {feature.title}
                </h3>
                <p className='text-sm font-semibold text-primary mb-3 uppercase tracking-wide'>
                  {feature.subtitle}
                </p>
                <p className='text-foreground/80 leading-relaxed text-base font-medium'>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Savings Visual - Updated Layout */}
          <div className='bg-gradient-to-r from-primary/5 via-card to-primary/5 rounded-3xl p-8 md:p-12 border border-primary/20 shadow-lg'>
            <div className='flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10'>
              {/* Left Box - Unpredictable & High Rates */}
              <div className='flex flex-col items-center'>
                <div className='w-40 h-44 bg-gradient-to-b from-red-50 to-red-100 rounded-xl border-2 border-dashed border-red-300 flex flex-col items-center justify-center shadow-sm p-4'>
                  <div className='w-10 h-10 bg-red-200 rounded-full flex items-center justify-center mb-3'>
                    <svg
                      className='w-5 h-5 text-red-500'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M13 17h8m0 0V9m0 8l-8-8-4 4-6-6'
                      />
                    </svg>
                  </div>
                  <span className='text-center text-base font-bold text-red-600 leading-tight'>
                    Unpredictable
                    <br />& High Rates
                  </span>
                </div>
                <p className='mt-4 text-sm font-medium text-foreground/70'>
                  Utility Company
                </p>
              </div>

              {/* Arrow */}
              <div className='flex flex-col items-center py-4'>
                <div className='w-16 h-16 bg-card rounded-full border-2 border-border flex items-center justify-center shadow-md'>
                  <ArrowRight className='h-8 w-8 text-primary' />
                </div>
                <span className='mt-2 text-xs font-semibold text-foreground/70 uppercase tracking-wider'>
                  Switch
                </span>
              </div>

              {/* Right Box - Fixed & Lower Rates */}
              <div className='flex flex-col items-center'>
                <div className='w-40 h-44 bg-gradient-to-b from-status-success/10 to-status-success/20 rounded-xl border-2 border-status-success flex flex-col items-center justify-center shadow-lg p-4'>
                  <div className='w-10 h-10 bg-status-success/20 rounded-full flex items-center justify-center mb-3'>
                    <svg
                      className='w-5 h-5 text-status-success'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                  </div>
                  <span className='text-center text-base font-bold text-status-success leading-tight'>
                    Fixed &<br />
                    Lower Rates
                  </span>
                </div>
                <p className='mt-4 text-sm font-medium text-foreground/70'>
                  Rate Relief Program
                </p>
              </div>

              {/* Center Text - Savings */}
              <div className='flex flex-col items-center md:ml-6 md:pl-10 md:border-l-2 md:border-dashed md:border-border'>
                <div className='text-center'>
                  <span className='text-5xl md:text-6xl font-bold bg-gradient-to-r from-status-success to-primary bg-clip-text text-transparent'>
                    50%
                  </span>
                  <p className='text-lg font-semibold text-foreground mt-2'>
                    Average Savings
                  </p>
                  <p className='text-sm text-foreground/70 mt-1 max-w-xs'>
                    Program participants typically cut their rates by 50%.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
