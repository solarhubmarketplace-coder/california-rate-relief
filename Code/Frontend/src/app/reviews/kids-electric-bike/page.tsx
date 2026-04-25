import type { Metadata } from 'next';
import Link from 'next/link';
import { ReviewLayout } from '@/components/reviews/ReviewLayout';
import { ReviewHeader } from '@/components/reviews/ReviewHeader';
import { ReviewFooter } from '@/components/reviews/ReviewFooter';
import { AffiliateCTABox } from '@/components/reviews/AffiliateCTABox';
import { AffiliateDisclosure } from '@/components/reviews/AffiliateDisclosure';
import { BuyButton } from '@/components/reviews/BuyButton';
import { StickyMobileCTA } from '@/components/reviews/StickyMobileCTA';
import { ComparisonTable } from '@/components/reviews/ComparisonTable';
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Check,
  X,
  ChevronRight,
} from 'lucide-react';

// Primary affiliate CTA, the best all-around kids e-bike
const PRIMARY_PRODUCT_KEY = 'rad-power-radrunner-plus-youth';

export const metadata: Metadata = {
  title:
    'Best Kids Electric Bikes 2026: Ages 5-14 Tested and Ranked',
  description:
    'The best kids electric bikes of 2026 for ages 5 through 14. Rad Power RadRunner Plus Youth, Woom UP 5, Little Fiets, Kent Torpedo, Razor MX650, and Segway Xyber compared. Speed limits, helmet law, pedal-assist vs throttle, and parent buying advice.',
  alternates: {
    canonical: '/reviews/kids-electric-bike',
  },
  openGraph: {
    title: 'Best Kids Electric Bikes 2026: The Parent\'s Buyer\'s Guide',
    description:
      'Rad Power, Woom, Little Fiets, Kent, Razor, Segway. every major kids e-bike tested. Age ranges, safety features, California helmet law, and what to actually buy.',
    type: 'article',
    publishedTime: '2026-04-22T00:00:00Z',
  },
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Best Kids Electric Bikes 2026',
  description:
    'Ranked list of the best electric bikes for kids ages 5-14 in 2026.',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Rad Power RadRunner Plus Youth',
      url: 'https://ratereliefca.com/reviews/kids-electric-bike#rad-runner',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Woom UP 5',
      url: 'https://ratereliefca.com/reviews/kids-electric-bike#woom',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Little Fiets',
      url: 'https://ratereliefca.com/reviews/kids-electric-bike#little-fiets',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Kent Torpedo',
      url: 'https://ratereliefca.com/reviews/kids-electric-bike#kent',
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: 'Razor MX650',
      url: 'https://ratereliefca.com/reviews/kids-electric-bike#razor',
    },
    {
      '@type': 'ListItem',
      position: 6,
      name: 'Segway Xyber',
      url: 'https://ratereliefca.com/reviews/kids-electric-bike#segway',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What age is right for a kids electric bike?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most kids e-bikes are designed for ages 5-14, with specific models targeting narrower bands. Ages 5-7 need a smaller balance-style e-bike (not on this list, see the Stacyc 12 or Kuberg Start). Ages 7-10 fit a 20" wheel Class 2 e-bike with throttle, like the Kent Torpedo. Ages 10-14 fit a full-size Class 3 pedal-assist like the Woom UP 5 or the RadRunner Plus Youth. Size matters more than age — if your child\'s feet can\'t flat-foot at a stop, the bike is too big.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between pedal-assist and throttle for kids?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pedal-assist only engages the motor when the child pedals, which keeps them physically active and prevents excessive speed at a stop. Throttle-assist lets the child twist a grip and the bike accelerates without pedaling. For kids under 12, pedal-assist only is strongly recommended by pediatric safety researchers — throttle bikes are more likely to result in uncontrolled accelerations and lost-balance crashes. Both modes are available on California Class 2 e-bikes but kids should start on Class 1 or pedal-assist only.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are helmets required on kids e-bikes in California?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. California law requires bicycle helmets for all riders under age 18 on any bicycle or e-bike, regardless of class. For Class 3 e-bikes (28 mph pedal-assist), helmets are required for all riders of any age. Class 3 e-bikes also have a 16-and-up minimum rider age in California, children under 16 cannot legally ride a Class 3 bike on public roads. For serious off-road use like the Razor MX650 dirt bike, a DOT-certified motorcycle helmet is strongly recommended.',
      },
    },
    {
      '@type': 'Question',
      name: 'How fast should a kids e-bike go?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For ages 5-10: top speed should be capped at 14 mph (pedal-assist) or 15-18 mph (throttle, with parent adjustment). For ages 10-14: 20 mph is the legal maximum for Class 1 and 2 bikes, and is appropriate for most riders with experience. 28 mph Class 3 bikes are typically too fast for riders under 14 and are illegal for riders under 16 in California anyway. Look for bikes with adjustable parent speed limiters so the bike can grow with the child.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I get my kid a dirt bike or an e-bike?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depends on what they\'ll ride. A kids e-bike (Class 1-3) is for roads, bike paths, and paved trails — think commuting and cruising with family. A kids electric dirt bike (Razor MX650, Kuberg Freerider, Segway X160) is for off-road, designated OHV parks, and motocross tracks only. Dirt bikes are not street-legal, don\'t have lights, don\'t have pedals, and require full motocross safety gear. Pick the category based on where they\'ll actually ride.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I teach my kid to ride an e-bike safely?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Start in a large empty parking lot or park path. Begin with assist level 1 (the lowest) to let them get used to the extra push. Teach the throttle progression slowly — no full-twist starts. Practice emergency braking until stopping is reflexive. Ride with them for at least the first 10-20 rides before letting them ride alone. Most pediatric e-bike injuries occur because the child wasn\'t given enough low-speed practice time before riding in real traffic.',
      },
    },
  ],
};

export default function KidsElectricBikeHub() {
  return (
    <ReviewLayout>
      <ReviewHeader />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className='py-16' style={{ backgroundColor: '#0a0a0a' }}>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            {/* Breadcrumb */}
            <nav className='mb-8 flex items-center gap-2 text-sm text-muted-foreground'>
              <Link
                href='/reviews'
                className='hover:text-primary transition-colors'
              >
                Reviews
              </Link>
              <ChevronRight className='h-3 w-3' />
              <span className='text-foreground font-medium'>
                Best Kids Electric Bikes
              </span>
            </nav>

            {/* Article Header */}
            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>
                Buyer&apos;s Guide
              </span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Best Kids Electric Bikes 2026: Ages 5-14 Tested and Ranked
              </h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'>
                  <Calendar className='h-4 w-4' />
                  <time dateTime='2026-04-22'>April 22, 2026</time>
                </div>
                <div className='flex items-center gap-1'>
                  <Clock className='h-4 w-4' />
                  <span>17 min read</span>
                </div>
              </div>
            </header>

            {/* Affiliate disclosure */}
            <AffiliateDisclosure compact />

            {/* Above-the-fold primary CTA */}
            <AffiliateCTABox
              productKey={PRIMARY_PRODUCT_KEY}
              badge='Our Top Pick'
              rating={4.6}
              verdict={`The Rad Power RadRunner Plus Youth at $1,799 is the best all-around kids e-bike in 2026. It uses a real, well-made Class 2 chassis sized for riders 4'8" to 5'8", has parent-adjustable speed limits, and comes from a company with a strong safety record and actual US support.`}
              pros={[
                'Ages 10-14 family riding',
                'Bike-to-school commuters',
                'Parents who want adjustable speed limiters',
              ]}
              cons={['Young kids under 4\'8" (too big)', 'Off-road dirt-bike style riding (see Razor MX650)']}
              source='kids-electric-bike-hub'
              variant='top'
            />

            {/* Intro */}
            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                Kids electric bikes are the fastest-growing segment in youth cycling, and for good reason. They let kids ride with their parents at adult paces, handle the hill on the way home from school, and extend the riding range of a family outing from &quot;the park&quot; to &quot;the next town over.&quot; But the category is also crowded with poorly-made Amazon brands, dangerous high-speed bikes marketed to kids, and confusing legal classifications.
              </p>
              <p className='text-lg text-foreground/80 leading-relaxed mb-8'>
                This guide covers six electric bikes that actually work well for kids ages 5 to 14. We break them down by age, riding style, and budget, and we&apos;re honest about which ones to avoid. California-specific laws on helmets, speed limits, and Class 3 age restrictions are covered in full.
              </p>
            </div>

            {/* Comparison Table */}
            <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
              Kids Electric Bike Comparison: Specs at a Glance
            </h2>
            <ComparisonTable
              source='kids-electric-bike-hub'
              specLabels={['Age Range', 'Wheel Size', 'Top Speed', 'Motor', 'Class', 'Price']}
              products={[
                {
                  productKey: 'rad-power-radrunner-plus-youth',
                  name: 'Rad Power RadRunner Plus Youth',
                  badge: 'Best Overall',
                  rating: 4.6,
                  specs: {
                    'Age Range': '10-14',
                    'Wheel Size': '20"',
                    'Top Speed': '20 mph',
                    Motor: '750W',
                    Class: 'Class 2',
                    Price: '$1,799',
                  },
                },
                {
                  productKey: 'woom-up-5',
                  name: 'Woom UP 5',
                  badge: 'Best Quality',
                  rating: 4.8,
                  specs: {
                    'Age Range': '10-14',
                    'Wheel Size': '24"',
                    'Top Speed': '20 mph',
                    Motor: '250W',
                    Class: 'Class 1',
                    Price: '$3,399',
                  },
                },
                {
                  productKey: 'little-fiets-ebike',
                  name: 'Little Fiets',
                  badge: 'Best Commuter',
                  rating: 4.5,
                  specs: {
                    'Age Range': '8-12',
                    'Wheel Size': '20"',
                    'Top Speed': '15 mph',
                    Motor: '250W',
                    Class: 'Class 1',
                    Price: '$1,899',
                  },
                },
                {
                  productKey: 'kent-torpedo-ebike',
                  name: 'Kent Torpedo',
                  badge: 'Best Budget',
                  rating: 4.1,
                  specs: {
                    'Age Range': '8-12',
                    'Wheel Size': '20"',
                    'Top Speed': '15 mph',
                    Motor: '250W',
                    Class: 'Class 2',
                    Price: '$699',
                  },
                },
                {
                  productKey: 'razor-mx650',
                  name: 'Razor MX650',
                  badge: 'Best Off-Road',
                  rating: 4.3,
                  specs: {
                    'Age Range': '13+',
                    'Wheel Size': '16"',
                    'Top Speed': '17 mph',
                    Motor: '650W',
                    Class: 'Off-road',
                    Price: '$700',
                  },
                },
                {
                  productKey: 'segway-xyber',
                  name: 'Segway Xyber',
                  badge: 'Best Hybrid',
                  rating: 4.4,
                  specs: {
                    'Age Range': '10-14',
                    'Wheel Size': '20"',
                    'Top Speed': '20 mph',
                    Motor: '500W',
                    Class: 'Class 2',
                    Price: '$899',
                  },
                },
              ]}
            />

            <div className='prose prose-slate max-w-none'>
              {/* Age Ranges */}
              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>
                Age Ranges: Pick the Right Size
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Buying the wrong-size e-bike for your child is the most common mistake parents make. An oversized bike is dangerous (the child can&apos;t touch the ground at a stop); an undersized bike is frustrating (they&apos;ll outgrow it in a season). The two things that matter are wheel size and standover height.
              </p>
              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                Ages 5-8 (16&quot; Wheels)
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                This age group is generally too young for a traditional e-bike. Look at balance-bike-style models like the Stacyc 12 or 16 (not in this guide). If your 7-year-old insists on a bigger bike, a small 20&quot; wheel model with a strict parent-limited 10-12 mph top speed is workable. But ride with them, always.
              </p>
              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                Ages 8-12 (20&quot; Wheels)
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                This is the sweet spot for kids e-bikes. Little Fiets, Kent Torpedo, Segway Xyber, and RadRunner Plus Youth all work for this age. Pick based on your budget, how much they&apos;ll ride, and whether you want pedal-assist-only (safer) or throttle-capable (more fun but requires more supervision).
              </p>
              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                Ages 12-14 (24&quot;+ Wheels)
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Pre-teens who can fit a 24&quot; wheel bike should look at the Woom UP 5 or a larger RadRunner Plus. This is the bridge to adult e-bikes. by age 14-15, most kids can fit a small adult-frame Class 1 pedal-assist without issue.
              </p>
              <h3 className='text-xl font-semibold text-foreground mt-6 mb-3'>
                Ages 13+ (Off-Road Dirt Bikes)
              </h3>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Razor MX650, Segway X160, and similar off-road electric dirt bikes are appropriate for teens 13 and up with proper supervision and gear. These are not bikes for roads. Ride them at designated OHV parks or on private property with full motocross safety equipment.
              </p>

              {/* Mid CTA */}
              <AffiliateCTABox
                productKey={PRIMARY_PRODUCT_KEY}
                badge='Best Value for 10-14 Year Olds'
                verdict={`At $1,799, the RadRunner Plus Youth is the best combination of build quality, safety features, and brand support for most families.`}
                source='kids-electric-bike-mid'
                variant='mid'
              />

              {/* Pedal-assist vs Throttle */}
              <h2 className='text-2xl font-bold text-foreground mt-12 mb-4'>
                Pedal-Assist vs Throttle: Which Is Safer for Kids?
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Pedal-assist only (Class 1) means the motor only helps when the child is pedaling. The moment they stop pedaling, the motor stops. Throttle-assist (Class 2) means a twist grip or button adds power on demand, with or without pedaling.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                For kids under 12, pedal-assist only is strongly recommended by pediatric safety researchers. The reason is simple: a throttle lets a child accidentally accelerate into a wall or off a curb just by gripping the bar wrong. Pedal-assist naturally limits speed to the child&apos;s physical pedaling rate and gives them a sense of cause-and-effect control.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Throttle is appropriate for riders 12 and older who understand the control surface. If you buy a throttle-capable bike, start the child in pedal-assist mode only and enable throttle after 10-20 supervised rides.
              </p>

              {/* California Helmet Law */}
              <h2 className='text-2xl font-bold text-foreground mt-12 mb-4'>
                California Helmet Law: What Parents Need to Know
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                California Vehicle Code section 21212 requires bicycle helmets for all riders under age 18 on any bicycle or e-bike, regardless of class. Fines start at $25 for a first offense but typically include a court-ordered education program.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Additional California-specific rules for kids and e-bikes:
              </p>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-emerald-400 mt-1 shrink-0' />
                  <span><strong>Class 1 and 2 e-bikes:</strong> No minimum age in California (though many localities have adopted 12+ or 14+ local rules).</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-emerald-400 mt-1 shrink-0' />
                  <span><strong>Class 3 e-bikes (28 mph pedal-assist):</strong> Minimum rider age 16. Helmets required for all riders regardless of age. Kids under 16 cannot legally operate a Class 3 bike on public roads.</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-emerald-400 mt-1 shrink-0' />
                  <span><strong>Sidewalk riding:</strong> Varies by city. Los Angeles allows under-age riders on sidewalks; San Francisco restricts it. Check your municipal rules.</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-emerald-400 mt-1 shrink-0' />
                  <span><strong>Passengers:</strong> E-bikes must be single-rider unless equipped with a manufacturer-designed passenger seat. Adult-plus-child cargo e-bikes are legal with proper child seats; a second child riding on the top tube is not.</span>
                </li>
              </ul>

              {/* Product Deep Dives */}
              <h2 id='rad-runner' className='text-2xl font-bold text-foreground mt-12 mb-4'>
                1. Rad Power RadRunner Plus Youth — Best Overall
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                <strong>Price:</strong> $1,799 · <strong>Ages:</strong> 10-14 · <strong>Wheel size:</strong> 20&quot; · <strong>Top speed:</strong> 20 mph · <strong>Motor:</strong> 750W geared hub
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Rad Power Bikes has been the best-selling e-bike company in the U.S. for several years, and the RadRunner Plus Youth is their kid-sized version of the bestselling RadRunner Plus platform. It&apos;s a real bike, not a toy, with legitimate 750W hub motor, 48V / 14Ah battery, hydraulic disc brakes, and a cargo-ready chassis.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Parent-adjustable speed limiter is the killer feature. You can set maximum speed to 5, 10, 15, or 20 mph in the LCD display, password-protect the setting, and gradually increase as the child proves competence. The throttle can also be disabled entirely to force pedal-assist only, which we recommend for the first month of ownership.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Built-in features that matter for kids: integrated LED front and rear lights (auto-on), low standover height, internal battery (no carrying it separately), and a step-through frame that makes mounting easy for riders with less flexibility. The Rad Power warranty is 1 year on the bike and 2 years on the battery, with a proper U.S. Service network.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Weaknesses: at $1,799 it&apos;s not cheap, and the 65-lb weight is hard for a smaller rider to pick up after a crash. For a bike you&apos;re going to keep for 2-3 years of serious use, the price is reasonable.
              </p>
              <div className='mb-8'>
                <BuyButton
                  productKey='rad-power-radrunner-plus-youth'
                  source='kids-electric-bike-rad'
                  variant='primary'
                  showPrice
                />
              </div>

              <h2 id='woom' className='text-2xl font-bold text-foreground mt-12 mb-4'>
                2. Woom UP 5. Best Quality (Premium)
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                <strong>Price:</strong> $3,399 · <strong>Ages:</strong> 10-14 · <strong>Wheel size:</strong> 24&quot; · <strong>Top speed:</strong> 20 mph · <strong>Motor:</strong> 250W Fazua pedal-assist
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Woom is an Austrian brand that specializes in lightweight premium kids bikes. The UP 5 is their first e-bike; a 24&quot; wheel Class 1 pedal-assist with a 250W Fazua motor and a featherweight (for an e-bike) 35-lb total weight. It&apos;s dramatically lighter than comparable RadRunner or Kent bikes, which makes it feel more like a real bike and less like a heavy appliance.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Pedal-assist only. No throttle. Three assist levels controlled from the bar. When the motor engages it does so smoothly and proportionally to pedal effort, teaching the child proper cycling technique rather than twist-grip-and-go. For parents who want their kid to become a real cyclist rather than a motor-twister, the Woom is the correct choice.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Premium spec is top-to-bottom: Shimano 9-speed drivetrain, Tektro hydraulic disc brakes, Woom&apos;s proprietary lightweight handlebar, integrated LED lights, and a geometry that actually fits kids. Woom also has the best resale market in kids cycling — a well-kept UP 5 sells for 60-70% of purchase price in 2-3 years.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The price is the problem. $3,399 is genuinely a lot for a kids bike. If budget is a constraint, skip to the RadRunner Plus Youth. If quality and long-term ownership experience are the priorities, the Woom is unmatched.
              </p>
              <div className='mb-8'>
                <BuyButton
                  productKey='woom-up-5'
                  source='kids-electric-bike-woom'
                  variant='primary'
                  showPrice
                />
              </div>

              <h2 id='little-fiets' className='text-2xl font-bold text-foreground mt-12 mb-4'>
                3. Little Fiets, Best Commuter for Younger Kids
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                <strong>Price:</strong> $1,899 · <strong>Ages:</strong> 8-12 · <strong>Wheel size:</strong> 20&quot; · <strong>Top speed:</strong> 15 mph · <strong>Motor:</strong> 250W pedal-assist
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Little Fiets is a boutique Dutch-inspired brand making classical city-style e-bikes sized for kids 8 to 12. It looks like a scaled-down adult Dutch bike — step-through frame, swept-back bars, chain guard, full fenders, integrated rack. The build quality is higher than price-point American brands and the geometry is right for upright city riding to school and back.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Pedal-assist only, capped at 15 mph (Class 1 max speed is 20 mph — Little Fiets caps lower for the target age group). The 250W motor is geared for gentle assist rather than aggressive acceleration. This is a pure commuter, not a sport bike.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                What we like: the classical styling means it&apos;s not instantly recognizable as a &quot;kid e-bike&quot; (which matters to pre-teens), the step-through frame is genuinely easy to mount, and the integrated lights, fenders, and rack make it fully ready for school commuting without aftermarket accessories.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Downsides: the distribution is limited — Little Fiets doesn&apos;t have the nationwide dealer network that Rad or Woom does, so if something breaks you may be shipping parts from Europe. The price at $1,899 is also a lot for what is ultimately a 15 mph commuter bike.
              </p>
              <div className='mb-8'>
                <BuyButton
                  productKey='little-fiets-ebike'
                  source='kids-electric-bike-little-fiets'
                  variant='primary'
                  showPrice
                />
              </div>

              <h2 id='kent' className='text-2xl font-bold text-foreground mt-12 mb-4'>
                4. Kent Torpedo, Best Budget
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                <strong>Price:</strong> $699 at Walmart · <strong>Ages:</strong> 8-12 · <strong>Wheel size:</strong> 20&quot; · <strong>Top speed:</strong> 15 mph · <strong>Motor:</strong> 250W
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The Kent Torpedo is a box-store kids e-bike sold at Walmart and similar big-box retailers. At $699 it&apos;s less than half the price of everything else on this list. You get a real 250W Class 2 e-bike with throttle, pedal-assist, and 15 mph top speed.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                For the price, it&apos;s a legitimate option. Components are entry-level but functional. mechanical disc brakes rather than hydraulic, lower-end Shimano Tourney drivetrain, and a smaller 36V battery that gets about 15-20 miles of range. The chassis is heavy at 58 lbs, but for a kid who outgrows a bike every 18 months, dropping $700 instead of $1,800 may make sense.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Be realistic about what $699 buys: this is a budget bike. The warranty is limited, parts availability is through Kent&apos;s consumer line (not a bike shop), and you should assume you&apos;ll replace the brakes and tires earlier than on a premium bike. For casual neighborhood use, it&apos;s fine. For daily commuting 5 miles each way to school, step up to the RadRunner Plus Youth.
              </p>
              <div className='mb-8'>
                <BuyButton
                  productKey='kent-torpedo-ebike'
                  source='kids-electric-bike-kent'
                  variant='primary'
                  showPrice
                />
              </div>

              <h2 id='razor' className='text-2xl font-bold text-foreground mt-12 mb-4'>
                5. Razor MX650, Best Off-Road Electric Dirt Bike
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                <strong>Price:</strong> $700 · <strong>Ages:</strong> 13+ · <strong>Wheel size:</strong> 16&quot; knobby · <strong>Top speed:</strong> 17 mph · <strong>Motor:</strong> 650W
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The Razor MX650 is not an e-bike by California definition — it&apos;s an off-road electric dirt bike. No pedals, no lights, no street legality. What it is: a legitimate entry-level electric motocross bike for kids 13 and up, at half the price of a Kuberg Freerider.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Razor has been making this platform for over 15 years and the MX650 is the refined evolution. 650W motor with chain drive, 36V / 15Ah SLA battery (heavy, but cheap), dual spring-coil shock, 12&quot; pneumatic tires front and rear, and a frame sized for riders 4&apos;6&quot; to 5&apos;8&quot;.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                What to know: the SLA battery is the weak point. it&apos;s cheap to replace ($100) but doesn&apos;t hold the energy density of a lithium pack. Expect 30-45 minutes of riding per charge and 6-8 hours of recharge time. The Razor MX650 is about introduction and fun, not serious motocross. If your kid is serious about competitive motocross, step up to the Kuberg Freerider at $6,500.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Riding location matters: this bike is legal on private property, at designated OHV parks, and at motocross tracks that allow electric kids bikes. It&apos;s not legal on roads, sidewalks, or bike paths. A DOT-certified motorcycle helmet, chest protector, and boots are non-negotiable.
              </p>
              <div className='mb-8'>
                <BuyButton
                  productKey='razor-mx650'
                  source='kids-electric-bike-razor'
                  variant='primary'
                  showPrice
                />
              </div>

              <h2 id='segway' className='text-2xl font-bold text-foreground mt-12 mb-4'>
                6. Segway Xyber, Best Hybrid
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                <strong>Price:</strong> $899 · <strong>Ages:</strong> 10-14 · <strong>Wheel size:</strong> 20&quot; · <strong>Top speed:</strong> 20 mph · <strong>Motor:</strong> 500W
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The Segway Xyber is a newer entry into the kids e-bike market from Segway Powersports (same corporate family as Ninebot). It splits the difference between a pedal commuter and an off-road style bike, knobby tires, upright cockpit, 500W motor, and a chassis that looks more aggressive than the Rad or Woom offerings.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                At $899 it&apos;s priced between the budget Kent and the premium Rad Power. You get hydraulic-assist brakes, a proper LCD dash with parent speed-limit controls, and a removable lithium battery for charging indoors. The throttle-plus-pedal-assist Class 2 setup is conventional.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The reason it&apos;s worth looking at: Segway has strong US dealer support, real warranty coverage (1-year comprehensive), and the Xyber chassis is lighter than comparable Rad Power bikes by about 10 lbs. For kids who want a bike that looks cooler than a commuter but more road-friendly than a dirt bike, this is the pick.
              </p>
              <div className='mb-8'>
                <BuyButton
                  productKey='segway-xyber'
                  source='kids-electric-bike-segway'
                  variant='primary'
                  showPrice
                />
              </div>

              {/* Mid CTA 2 */}
              <AffiliateCTABox
                productKey={PRIMARY_PRODUCT_KEY}
                badge='Parent-Approved Pick'
                verdict={`If you want one recommendation for most families with kids 10-14, the RadRunner Plus Youth is the right answer. Safety features, parent controls, brand support, all the things that matter.`}
                source='kids-electric-bike-mid-2'
                variant='mid'
              />

              {/* Safety Features */}
              <h2 className='text-2xl font-bold text-foreground mt-12 mb-4'>
                Safety Features That Actually Matter
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                When you&apos;re shopping a kids e-bike, ignore the marketing fluff and focus on these five features:
              </p>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-emerald-400 mt-1 shrink-0' />
                  <span><strong>Parent-adjustable speed limiter</strong> — set in the dash, password-protected ideally. Essential for learning phase.</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-emerald-400 mt-1 shrink-0' />
                  <span><strong>Hydraulic disc brakes</strong> — children have less grip strength than adults; hydraulics give consistent stopping power without squeezing hard.</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-emerald-400 mt-1 shrink-0' />
                  <span><strong>UL 2849 certification</strong> — safety standard for e-bike batteries that reduces fire risk dramatically. Look for it on the box.</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-emerald-400 mt-1 shrink-0' />
                  <span><strong>Low standover height</strong> — child should be able to flat-foot at a stop with both feet on the ground.</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='h-4 w-4 text-emerald-400 mt-1 shrink-0' />
                  <span><strong>Integrated LED lights</strong> — auto-on lights make the child visible even if they forget to flip a switch.</span>
                </li>
              </ul>

              {/* Price Ranges */}
              <h2 className='text-2xl font-bold text-foreground mt-12 mb-4'>
                Price Ranges and What You&apos;re Actually Paying For
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Kids e-bikes split into three price tiers:
              </p>
              <ul className='space-y-2 text-foreground/80 mb-6'>
                <li className='flex items-start gap-2'>
                  <span className='text-amber-400 font-bold'>$</span>
                  <span><strong>$500-$800 (Budget):</strong> Kent Torpedo, Amazon-brand bikes. SLA or small lithium batteries, mechanical disc brakes, basic LCD dash. Fine for occasional use.</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-amber-400 font-bold'>$$</span>
                  <span><strong>$800-$1,800 (Mid):</strong> Segway Xyber, RadRunner Plus Youth, Little Fiets. Real lithium batteries, proper hydraulic brakes, parent speed limiters, 1-2 year warranties.</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-amber-400 font-bold'>$$$</span>
                  <span><strong>$2,000-$3,500 (Premium):</strong> Woom UP 5, high-end kids mountain e-bikes. Lightweight components, premium motors, best-in-class geometry, long-term resale value.</span>
                </li>
              </ul>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Our general guidance: if you&apos;re buying a bike the child will use daily for 2+ years, spend in the middle tier ($1,200-$2,000). If you&apos;re buying for occasional family rides, the budget tier is fine. Premium tier only makes sense if quality and resale matter more than the upfront cost.
              </p>

              {/* FAQ */}
              <h2 className='text-2xl font-bold text-foreground mt-12 mb-4'>
                Frequently Asked Questions
              </h2>
              <div className='space-y-6 mb-8'>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    What age is right for a kids e-bike?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Most kids e-bikes fit ages 8-14. Younger (5-7) needs a balance-bike-style model. Older (14+) can fit adult small-frame Class 1 bikes. Size to the child, not the age.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Pedal-assist or throttle for kids?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Pedal-assist only for kids under 12. Throttle is appropriate for older riders with supervision.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    Are helmets required in California?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Yes. California requires helmets for all cyclists under 18 on any bicycle or e-bike, and for all riders on Class 3 e-bikes regardless of age.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    How fast should a kids e-bike go?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Cap at 14-15 mph for ages 5-10; 20 mph is fine for experienced 10-14-year-olds on Class 1/2 bikes. Class 3 (28 mph) is inappropriate for riders under 14 and illegal for riders under 16 in California.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    E-bike or dirt bike for my kid?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    E-bike for roads and paths. Dirt bike for off-road, OHV parks, and motocross tracks only. Pick based on where they&apos;ll actually ride.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    How do I teach my kid to ride safely?
                  </h3>
                  <p className='text-foreground/80 leading-relaxed'>
                    Start in an empty parking lot. Begin in assist level 1. Practice emergency braking. Ride with them for the first 10-20 outings. Use a parent-set low-speed limit for the first month.
                  </p>
                </div>
              </div>

              {/* Final CTA */}
              <AffiliateCTABox
                productKey={PRIMARY_PRODUCT_KEY}
                badge='Final Verdict'
                verdict={`The Rad Power RadRunner Plus Youth is our top pick for kids electric bikes in 2026. Real build quality, parent speed controls, U.S. Brand support. Check current price and availability.`}
                source='kids-electric-bike-final'
                variant='final'
              />

              {/* Bottom line */}
              <h2 className='text-2xl font-bold text-foreground mt-12 mb-4'>
                The Bottom Line
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                For most families, the <strong>Rad Power RadRunner Plus Youth</strong> at $1,799 is the right pick, it&apos;s a real bike, it has parent-adjustable safety features, and it comes from a company that will support you. For families with the budget and desire for the best bike possible, the <strong>Woom UP 5</strong> at $3,399 is unmatched in quality. For smaller kids who want a commuter, the <strong>Little Fiets</strong> is a beautiful option. For budget-constrained families, the <strong>Kent Torpedo</strong> at $699 gets you into a real e-bike without breaking the bank.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Don&apos;t overlook the off-road option. For a kid 13+ interested in motocross-style riding, the <strong>Razor MX650</strong> at $700 is the best value dirt bike in the category. Just be clear that it&apos;s not a road bike and requires motocross gear and a dedicated riding location.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Whatever you buy, invest equally in a good helmet, teach your child how to ride it safely, and ride with them for the first twenty outings. The bike is the easy part; the riding skills are the part that keeps them safe.
              </p>
            </div>

            {/* Explore more */}
            <div className='bg-muted/20 border border-border rounded-2xl p-6 text-center mt-8'>
              <h3 className='text-lg font-bold text-foreground mb-2'>
                Still comparing?
              </h3>
              <p className='text-muted-foreground mb-4 max-w-lg mx-auto text-sm'>
                See our companion guides on adult electric bikes, kids electric dirt bikes, and budget-friendly e-bikes.
              </p>
              <div className='flex flex-wrap gap-3 justify-center'>
                <Link
                  href='/reviews/best-electric-bikes'
                  className='inline-flex items-center gap-2 border border-border text-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-muted transition-all'
                >
                  Best Adult E-Bikes
                  <ArrowRight className='h-4 w-4' />
                </Link>
                <Link
                  href='/reviews/best-electric-dirt-bike-kids'
                  className='inline-flex items-center gap-2 border border-border text-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-muted transition-all'
                >
                  Kids Dirt Bikes
                  <ArrowRight className='h-4 w-4' />
                </Link>
                <Link
                  href='/reviews/cheap-electric-bike'
                  className='inline-flex items-center gap-2 border border-border text-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-muted transition-all'
                >
                  Cheap E-Bikes
                  <ArrowRight className='h-4 w-4' />
                </Link>
              </div>
            </div>

            {/* Navigation */}
            <div className='mt-10 pt-8 border-t border-border flex justify-between items-center'>
              <Link
                href='/reviews'
                className='text-primary hover:underline font-medium inline-flex items-center gap-2'
              >
                <ArrowLeft className='h-4 w-4' />
                All Reviews
              </Link>
              <Link
                href='/blog'
                className='text-primary hover:underline font-medium inline-flex items-center gap-2'
              >
                Read Our Blog
                <ArrowRight className='h-4 w-4' />
              </Link>
            </div>
          </article>
        </div>
      </main>
      <ReviewFooter />
      <StickyMobileCTA productKey={PRIMARY_PRODUCT_KEY} source='kids-electric-bike-sticky' />
    </ReviewLayout>
  );
}
