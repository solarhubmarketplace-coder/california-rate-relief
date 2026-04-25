import type { Metadata } from 'next';
import Link from 'next/link';
import { ReviewLayout } from '@/components/reviews/ReviewLayout';
import { ReviewHeader } from '@/components/reviews/ReviewHeader';
import { ReviewFooter } from '@/components/reviews/ReviewFooter';
import { BuyButton } from '@/components/reviews/BuyButton';
import { AffiliateDisclosure } from '@/components/reviews/AffiliateDisclosure';
import {
  ArrowLeft,
  Check,
  ChevronRight,
  DollarSign,
  Shield,
  Star,
  X,
  Zap,
} from 'lucide-react';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { LastReviewedStamp } from '@/components/shared/LastReviewedStamp';
import { TrustedSources } from '@/components/shared/TrustedSources';

export const metadata: Metadata = {
  title:
    'Best Dehumidifiers (2026): Top 6 Picks for Basements, Bedrooms & Whole Homes',
  description:
    'Compare the best dehumidifiers in 2026. In-depth reviews of Frigidaire FFAD5033W1, hOmeLabs HME020031N, GE ADEW50LW, LG PuriCare UD501KOG5, Midea MAD50S1QWT, and Tosot 50-pint. Sizing guide, drainage options, noise levels, and Energy Star ratings.',
  alternates: {
    canonical: '/reviews/best-dehumidifier',
  },
  openGraph: {
    title: 'Best Dehumidifiers (2026): Top 6 Reviewed',
    description:
      'Frigidaire vs hOmeLabs vs GE vs LG vs Midea vs Tosot. Full specs, pros/cons, sizing guide, and buyer tips.',
    type: 'article',
    publishedTime: '2026-04-21T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Best Dehumidifiers (2026): Top 6 Picks for Basements, Bedrooms & Whole Homes',
  description:
    'Compare the best dehumidifiers in 2026. In-depth reviews covering Frigidaire FFAD5033W1, hOmeLabs HME020031N, GE ADEW50LW, LG PuriCare UD501KOG5, Midea MAD50S1QWT, and Tosot 50-pint with sizing guide and drainage options.',
  datePublished: '2026-04-21',
  dateModified: '2026-04-21',
  author: {
    '@type': 'Organization',
    name: 'GreenReviewsHub',
    url: 'https://ratereliefca.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'GreenReviewsHub',
    url: 'https://ratereliefca.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://ratereliefca.com/img/logo.svg',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://ratereliefca.com/reviews/best-dehumidifier',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What size dehumidifier do I need for my basement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For a damp basement up to 1,500 sq ft, a 50-pint dehumidifier is the standard recommendation. If your basement is very wet (puddles, visible moisture on walls) or larger than 1,500 sq ft, consider a 70-pint unit. For smaller spaces under 500 sq ft with mild dampness, a 30-pint model will suffice. Pint ratings refer to moisture removed per 24 hours under DOE 2020 testing standards.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I get a dehumidifier with a built-in pump?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A built-in pump is highly recommended for basements where the drain is above the unit or there is no floor drain nearby. Without a pump, you are limited to gravity drainage (hose running downhill) or manually emptying the bucket every few hours. A pump can push water vertically up to 15 feet and through a hose to a sink, utility drain, or window.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to run a dehumidifier?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An Energy Star-rated 50-pint dehumidifier running 12 hours per day costs roughly $4-8 per month in electricity depending on your local utility rate. Non-Energy Star units can cost 15-20% more to operate. Look for models with integrated energy factor (IEF) ratings above 1.8 L/kWh for the best efficiency. Running costs are lower if you set a target humidity level and let the unit cycle on and off automatically.',
      },
    },
    {
      '@type': 'Question',
      name: 'What humidity level should I set my dehumidifier to?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The ideal indoor humidity level is between 30% and 50%. For basements, aim for 50% or slightly below. Setting the target too low (under 30%) wastes energy and can cause dry skin and respiratory irritation. Most dehumidifiers have a built-in humidistat that lets you set a target percentage and the unit cycles automatically to maintain it.',
      },
    },
    {
      '@type': 'Question',
      name: 'How loud are dehumidifiers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most 50-pint dehumidifiers operate between 48-56 dB on their highest fan speed, comparable to a quiet conversation or a running dishwasher. On low speed, many models drop to 44-50 dB. The LG PuriCare is among the quietest at roughly 44 dB on low, while budget models can hit 56 dB or more. If the unit will be near a bedroom or living area, look for models rated under 50 dB.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do dehumidifiers help with mold?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Mold requires moisture levels above 60% relative humidity to grow. By keeping your basement or crawlspace at 50% or below, a dehumidifier removes the conditions mold needs to thrive. However, a dehumidifier cannot kill or remove existing mold; you will need to clean or remediate existing mold growth separately and then use the dehumidifier to prevent it from returning.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use a dehumidifier in a crawlspace?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, but you need a model designed for low-clearance, unattended operation. Key features for crawlspace use include a built-in pump (since gravity drainage is often impossible), auto-restart after power outages, continuous drain capability, and a washable filter. The Midea MAD50S1QWT and GE ADEW50LW are both solid crawlspace options when paired with continuous drainage. Ensure the crawlspace is encapsulated with a vapor barrier for best results.',
      },
    },
  ],
};

interface Product {
  name: string;
  badge: string;
  price: string;
  capacity: string;
  coverage: string;
  noise: string;
  drainage: string;
  energyStar: string;
  weight: string;
  affiliateLink: string;
}

const products: Product[] = [
  {
    name: 'Frigidaire FFAD5033W1',
    badge: 'Best Overall',
    price: '$260',
    capacity: '50-pint',
    coverage: 'Up to 1,500 sq ft',
    noise: '51 dB',
    drainage: 'Bucket + Gravity + Pump',
    energyStar: 'Yes',
    weight: '44.4 lbs',
    affiliateLink: '#',
  },
  {
    name: 'hOmeLabs HME020031N',
    badge: 'Best Budget',
    price: '$190',
    capacity: '50-pint',
    coverage: 'Up to 1,500 sq ft',
    noise: '52 dB',
    drainage: 'Bucket + Gravity',
    energyStar: 'Yes',
    weight: '40.7 lbs',
    affiliateLink: '#',
  },
  {
    name: 'GE ADEW50LW',
    badge: 'Best Smart Features',
    price: '$300',
    capacity: '50-pint',
    coverage: 'Up to 1,500 sq ft',
    noise: '50 dB',
    drainage: 'Bucket + Gravity + Pump',
    energyStar: 'Yes',
    weight: '44 lbs',
    affiliateLink: '#',
  },
  {
    name: 'LG PuriCare UD501KOG5',
    badge: 'Quietest',
    price: '$340',
    capacity: '50-pint',
    coverage: 'Up to 1,500 sq ft',
    noise: '44 dB',
    drainage: 'Bucket + Gravity + Pump',
    energyStar: 'Yes',
    weight: '46 lbs',
    affiliateLink: '#',
  },
  {
    name: 'Midea MAD50S1QWT',
    badge: 'Best for Basements',
    price: '$235',
    capacity: '50-pint',
    coverage: 'Up to 1,500 sq ft',
    noise: '51 dB',
    drainage: 'Bucket + Gravity + Pump',
    energyStar: 'Yes',
    weight: '42.6 lbs',
    affiliateLink: '#',
  },
  {
    name: 'Tosot 50-Pint',
    badge: 'Best Compact',
    price: '$210',
    capacity: '50-pint',
    coverage: 'Up to 1,500 sq ft',
    noise: '48 dB',
    drainage: 'Bucket + Gravity',
    energyStar: 'Yes',
    weight: '37.5 lbs',
    affiliateLink: '#',
  },
];

export default function BestDehumidifier() {
  return (
    <ReviewLayout>
      <ReviewHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="container mx-auto px-4 py-16">
          <article className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <Link
                href="/reviews"
                className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Reviews
              </Link>
            </nav>

            {/* Article Header */}
            <header className="mb-10">
              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide">
                Product Reviews
              </span>
              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-4 mb-4 tracking-tight leading-tight"
                style={{ color: '#f5f5f5' }}
              >
                Best Dehumidifiers (2026): Top 6 Picks for Basements, Bedrooms &amp; Whole Homes
              </h1>
              
              <LastReviewedStamp date="2026-04-24" variant="reviewed" palette={{ fg: '#f5f5f5', muted: '#a1a1aa', border: 'hsl(150, 10%, 18%)', accent: '#22c55e' }} />
<div
                className="flex items-center gap-4 text-sm"
                style={{ color: '#a1a1aa' }}
              >
                <div className="flex items-center gap-1">
                  <Shield className="h-4 w-4" />
                  <time dateTime="2026-04-21">April 21, 2026</time>
                </div>
                <div className="flex items-center gap-1">
                  <Zap className="h-4 w-4" />
                  <span>18 min read</span>
                </div>
              </div>
            </header>

            <div className='mb-8 rounded-xl overflow-hidden border' style={{ borderColor: '#1e293b' }}>
              <img src='https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80&auto=format&fit=crop' alt='Dehumidifier in home' className='w-full h-auto max-h-96 object-contain' loading='lazy' />
            </div>

            <AffiliateDisclosure compact />

            {/* Intro */}
            <div className="prose prose-slate max-w-none">
              <p
                className="text-lg leading-relaxed mb-6"
                style={{ color: '#a1a1aa' }}
              >
                Excess humidity in your home does more than fog up mirrors. It breeds mold, warps
                wood, triggers allergies, and makes your air conditioner work overtime. Whether
                you&apos;re fighting a damp basement, a muggy crawlspace, or just trying to keep
                your living area comfortable, the right dehumidifier can dramatically improve your
                indoor air quality and protect your home from moisture damage.
              </p>
              <p
                className="text-lg leading-relaxed mb-8"
                style={{ color: '#a1a1aa' }}
              >
                We researched over 30 dehumidifiers and narrowed it down to six standout models
                for 2026. This guide covers everything you need: head-to-head specs, noise
                levels, drainage options, energy costs, a sizing guide by room size, and honest
                pros and cons for every pick.
              </p>
            </div>

            {/* Quick Verdict Box */}
            <div
              className="rounded-xl p-6 md:p-8 mb-12 border"
              style={{ backgroundColor: '#171717', borderColor: '#27272a' }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <h2 className="text-xl font-bold" style={{ color: '#f5f5f5' }}>
                  Quick Verdict: Our Top 3 Picks
                </h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-yellow-400 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    1
                  </span>
                  <div>
                    <p className="font-semibold" style={{ color: '#f5f5f5' }}>
                      Frigidaire FFAD5033W1, Best Overall
                    </p>
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>
                      The gold standard 50-pint dehumidifier. Built-in pump, Energy Star
                      certified, reliable humidity control, and a proven track record. Handles
                      basements, bedrooms, and whole floors with ease.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-gray-400 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    2
                  </span>
                  <div>
                    <p className="font-semibold" style={{ color: '#f5f5f5' }}>
                      hOmeLabs HME020031N, Best Budget
                    </p>
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>
                      Under $200 with 50-pint capacity and Energy Star certification. No pump,
                      but gravity drain and a generous bucket make it the best value for
                      price-conscious buyers.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-amber-700 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    3
                  </span>
                  <div>
                    <p className="font-semibold" style={{ color: '#f5f5f5' }}>
                      LG PuriCare UD501KOG5. Quietest
                    </p>
                    <p className="text-sm" style={{ color: '#a1a1aa' }}>
                      At just 44 dB on low, the LG PuriCare is whisper-quiet. Built-in pump,
                      Wi-Fi connectivity via LG ThinQ, and premium build quality justify
                      the higher price tag.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison Table */}
            <section className="mb-16">
              <h2
                className="text-2xl font-bold mb-6 flex items-center gap-2"
                style={{ color: '#f5f5f5' }}
              >
                <Shield className="h-6 w-6 text-primary" />
                Head-to-Head Comparison
              </h2>
              <div className="overflow-x-auto -mx-4 px-4">
                <table className="w-full min-w-[800px] border-collapse text-sm">
                  <thead>
                    <tr style={{ backgroundColor: '#171717' }}>
                      <th
                        className="text-left p-3 font-semibold border-b-2"
                        style={{ color: '#f5f5f5', borderColor: '#27272a' }}
                      >
                        Spec
                      </th>
                      {products.map((p) => (
                        <th
                          key={p.name}
                          className="text-left p-3 font-semibold border-b-2"
                          style={{ color: '#f5f5f5', borderColor: '#27272a' }}
                        >
                          <div>{p.name}</div>
                          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                            {p.badge}
                          </span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b" style={{ borderColor: '#27272a' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>
                        Price
                      </td>
                      {products.map((p) => (
                        <td key={p.name} className="p-3" style={{ color: '#a1a1aa' }}>
                          {p.price}
                        </td>
                      ))}
                    </tr>
                    <tr
                      className="border-b"
                      style={{ borderColor: '#27272a', backgroundColor: '#171717' }}
                    >
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>
                        Capacity
                      </td>
                      {products.map((p) => (
                        <td key={p.name} className="p-3" style={{ color: '#a1a1aa' }}>
                          {p.capacity}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b" style={{ borderColor: '#27272a' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>
                        Coverage
                      </td>
                      {products.map((p) => (
                        <td key={p.name} className="p-3" style={{ color: '#a1a1aa' }}>
                          {p.coverage}
                        </td>
                      ))}
                    </tr>
                    <tr
                      className="border-b"
                      style={{ borderColor: '#27272a', backgroundColor: '#171717' }}
                    >
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>
                        Noise Level
                      </td>
                      {products.map((p) => (
                        <td key={p.name} className="p-3" style={{ color: '#a1a1aa' }}>
                          {p.noise}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b" style={{ borderColor: '#27272a' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>
                        Drainage
                      </td>
                      {products.map((p) => (
                        <td key={p.name} className="p-3" style={{ color: '#a1a1aa' }}>
                          {p.drainage}
                        </td>
                      ))}
                    </tr>
                    <tr
                      className="border-b"
                      style={{ borderColor: '#27272a', backgroundColor: '#171717' }}
                    >
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>
                        Energy Star
                      </td>
                      {products.map((p) => (
                        <td key={p.name} className="p-3" style={{ color: '#a1a1aa' }}>
                          {p.energyStar}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b" style={{ borderColor: '#27272a' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>
                        Weight
                      </td>
                      {products.map((p) => (
                        <td key={p.name} className="p-3" style={{ color: '#a1a1aa' }}>
                          {p.weight}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* ========== INDIVIDUAL REVIEWS ========== */}

            {/* 1. Frigidaire FFAD5033W1 */}
            <section className="mb-14">
              <div className="border-l-4 border-yellow-500 pl-6 mb-6">
                <span className="text-xs font-semibold text-yellow-300 bg-yellow-500/15 px-3 py-1 rounded-full uppercase tracking-wide">
                  Best Overall
                </span>
                <h2 className="text-2xl font-bold mt-3" style={{ color: '#f5f5f5' }}>
                  1. Frigidaire FFAD5033W1
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Price</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>$260</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Capacity</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>50-pint</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Noise</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>51 dB</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Weight</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>44.4 lbs</p>
                </div>
              </div>

              <div className="prose prose-slate max-w-none mb-6">
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The Frigidaire FFAD5033W1 has earned its reputation as the go-to 50-pint
                  dehumidifier for good reason. It pulls moisture efficiently, maintains your
                  target humidity level with minimal overshoot, and includes a built-in pump
                  that can push water up to 15 feet vertically. That pump alone makes it the
                  ideal choice for basements where a floor drain is not accessible.
                </p>
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The controls are straightforward: a digital humidistat lets you dial in your
                  target percentage (35%-85%), and the unit cycles on and off to maintain it.
                  The 13.1-pint bucket is large enough that you will not be emptying it
                  constantly if you cannot set up continuous drainage right away. A full-bucket
                  indicator and auto-shutoff prevent overflows.
                </p>
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  Build quality is solid, with caster wheels for easy repositioning and a
                  washable filter that pops out without tools. Frigidaire backs it with a
                  1-year parts and labor warranty. At $260, it hits the sweet spot between
                  performance and value.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="border rounded-lg p-4" style={{ backgroundColor: '#0a1f0a', borderColor: '#22c55e44' }}>
                  <h4 className="font-semibold mb-2 flex items-center gap-1" style={{ color: '#4ade80' }}>
                    <Check className="h-4 w-4" /> Pros
                  </h4>
                  <ul className="space-y-1 text-sm" style={{ color: '#86efac' }}>
                    <li>Built-in pump for upward drainage</li>
                    <li>Accurate digital humidistat</li>
                    <li>Energy Star certified — low running costs</li>
                    <li>Large 13.1-pint bucket with auto-shutoff</li>
                    <li>Caster wheels for easy repositioning</li>
                    <li>Proven reliability across thousands of reviews</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4" style={{ backgroundColor: '#1f0a0a', borderColor: '#ef444444' }}>
                  <h4 className="font-semibold mb-2 flex items-center gap-1" style={{ color: '#f87171' }}>
                    <X className="h-4 w-4" /> Cons
                  </h4>
                  <ul className="space-y-1 text-sm" style={{ color: '#fca5a5' }}>
                    <li>No Wi-Fi or smart home connectivity</li>
                    <li>51 dB is audible in quiet rooms</li>
                    <li>No auto-restart after power outages on older units</li>
                    <li>Pump hose sold separately on some retailers</li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-lg p-4 mb-4" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                <p className="text-sm mb-1" style={{ color: '#a1a1aa' }}>Best for</p>
                <p className="font-medium" style={{ color: '#f5f5f5' }}>
                  Homeowners who want a reliable, pump-equipped 50-pint dehumidifier without
                  paying a premium for smart features. The default choice for basement
                  moisture control.
                </p>
              </div>

              <BuyButton
                productKey="frigidaire-ffad5033w1"
                source="dehumidifier-hub"
                variant="primary"
                label="Check Price — Frigidaire FFAD5033W1"
                showPrice
              />
            </section>

            {/* 2. hOmeLabs HME020031N */}
            <section className="mb-14">
              <div className="border-l-4 border-green-500 pl-6 mb-6">
                <span className="text-xs font-semibold text-green-300 bg-green-500/15 px-3 py-1 rounded-full uppercase tracking-wide">
                  Best Budget
                </span>
                <h2 className="text-2xl font-bold mt-3" style={{ color: '#f5f5f5' }}>
                  2. HOmeLabs HME020031N
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Price</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>$190</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Capacity</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>50-pint</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Noise</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>52 dB</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Weight</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>40.7 lbs</p>
                </div>
              </div>

              <div className="prose prose-slate max-w-none mb-6">
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The hOmeLabs HME020031N is one of the best-selling dehumidifiers on the
                  market, and for good reason. It delivers full 50-pint capacity with Energy
                  Star certification at under $200. If you do not need a built-in pump and have
                  access to a floor drain or do not mind emptying the bucket, it is hard to beat
                  this value.
                </p>
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The turbo mode pulls moisture aggressively when you first start it up,
                  and then the unit settles into a quieter maintenance cycle. The continuous
                  gravity drain option uses a standard garden hose connection on the back, so
                  you can route water directly to a drain without ever touching the bucket.
                  Controls are simple: a digital display, humidity target buttons, fan speed
                  toggle, and a timer.
                </p>
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The trade-off for the low price is no pump, slightly louder operation at
                  52 dB, and no smart features. But for straightforward dehumidification in
                  a basement, garage, or laundry room, it gets the job done without fuss.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="border rounded-lg p-4" style={{ backgroundColor: '#0a1f0a', borderColor: '#22c55e44' }}>
                  <h4 className="font-semibold mb-2 flex items-center gap-1" style={{ color: '#4ade80' }}>
                    <Check className="h-4 w-4" /> Pros
                  </h4>
                  <ul className="space-y-1 text-sm" style={{ color: '#86efac' }}>
                    <li>Best price for a 50-pint unit</li>
                    <li>Energy Star certified</li>
                    <li>Turbo mode for fast initial dehumidification</li>
                    <li>Gravity drain hose connection included</li>
                    <li>Simple, intuitive controls</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4" style={{ backgroundColor: '#1f0a0a', borderColor: '#ef444444' }}>
                  <h4 className="font-semibold mb-2 flex items-center gap-1" style={{ color: '#f87171' }}>
                    <X className="h-4 w-4" /> Cons
                  </h4>
                  <ul className="space-y-1 text-sm" style={{ color: '#fca5a5' }}>
                    <li>No built-in pump. Gravity drain or bucket only</li>
                    <li>52 dB is the loudest on this list</li>
                    <li>No Wi-Fi or app control</li>
                    <li>Bucket is smaller than Frigidaire at 10.5 pints</li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-lg p-4 mb-4" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                <p className="text-sm mb-1" style={{ color: '#a1a1aa' }}>Best for</p>
                <p className="font-medium" style={{ color: '#f5f5f5' }}>
                  Budget buyers who have access to a floor drain or do not mind emptying a
                  bucket. Ideal for basements, garages, and laundry rooms where noise is not
                  a concern.
                </p>
              </div>

              <BuyButton
                productKey="homelabs-hme020031n"
                source="dehumidifier-hub"
                variant="primary"
                label="Check Price. HOmeLabs HME020031N"
                showPrice
              />
            </section>

            {/* 3. GE ADEW50LW */}
            <section className="mb-14">
              <div className="border-l-4 border-blue-500 pl-6 mb-6">
                <span className="text-xs font-semibold text-blue-300 bg-blue-500/15 px-3 py-1 rounded-full uppercase tracking-wide">
                  Best Smart Features
                </span>
                <h2 className="text-2xl font-bold mt-3" style={{ color: '#f5f5f5' }}>
                  3. GE ADEW50LW
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Price</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>$300</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Capacity</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>50-pint</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Noise</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>50 dB</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Weight</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>44 lbs</p>
                </div>
              </div>

              <div className="prose prose-slate max-w-none mb-6">
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The GE ADEW50LW brings Wi-Fi connectivity and smart home integration to
                  the dehumidifier category without compromising on fundamentals. It connects
                  to the SmartHQ app, giving you remote control over humidity targets, fan
                  speed, scheduling, and real-time humidity monitoring from your phone. It
                  also works with Alexa and Google Assistant for voice control.
                </p>
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  Beyond smart features, it is a strong 50-pint performer. The built-in pump
                  pushes water up to 15 feet, the digital humidistat is accurate, and the
                  unit includes auto-restart after power outages, a critical feature for
                  basements and crawlspaces that run unattended. The washable filter slides
                  out from the front for easy cleaning.
                </p>
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The premium over a basic Frigidaire is about $40, and for that you get app
                  control, smart home integration, and push notifications when the bucket is
                  full or the filter needs cleaning. If you already use a smart home ecosystem,
                  the GE fits right in.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="border rounded-lg p-4" style={{ backgroundColor: '#0a1f0a', borderColor: '#22c55e44' }}>
                  <h4 className="font-semibold mb-2 flex items-center gap-1" style={{ color: '#4ade80' }}>
                    <Check className="h-4 w-4" /> Pros
                  </h4>
                  <ul className="space-y-1 text-sm" style={{ color: '#86efac' }}>
                    <li>Wi-Fi + SmartHQ app for remote monitoring</li>
                    <li>Alexa and Google Assistant compatible</li>
                    <li>Built-in pump with 15-foot vertical lift</li>
                    <li>Auto-restart after power outages</li>
                    <li>Push notifications for bucket full / filter dirty</li>
                    <li>Energy Star certified</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4" style={{ backgroundColor: '#1f0a0a', borderColor: '#ef444444' }}>
                  <h4 className="font-semibold mb-2 flex items-center gap-1" style={{ color: '#f87171' }}>
                    <X className="h-4 w-4" /> Cons
                  </h4>
                  <ul className="space-y-1 text-sm" style={{ color: '#fca5a5' }}>
                    <li>$40 premium over Frigidaire for smart features</li>
                    <li>App requires account creation and setup</li>
                    <li>Wi-Fi is 2.4 GHz only. No 5 GHz support</li>
                    <li>Occasional app connectivity hiccups reported</li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-lg p-4 mb-4" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                <p className="text-sm mb-1" style={{ color: '#a1a1aa' }}>Best for</p>
                <p className="font-medium" style={{ color: '#f5f5f5' }}>
                  Smart home enthusiasts who want to monitor and control their dehumidifier
                  remotely. Excellent for unattended basements and crawlspaces where push
                  notifications are genuinely useful.
                </p>
              </div>

              <BuyButton
                productKey="ge-adew50lw"
                source="dehumidifier-hub"
                variant="primary"
                label="Check Price — GE ADEW50LW"
                showPrice
              />
            </section>

            {/* 4. LG PuriCare UD501KOG5 */}
            <section className="mb-14">
              <div className="border-l-4 border-purple-500 pl-6 mb-6">
                <span className="text-xs font-semibold text-purple-300 bg-purple-500/15 px-3 py-1 rounded-full uppercase tracking-wide">
                  Quietest
                </span>
                <h2 className="text-2xl font-bold mt-3" style={{ color: '#f5f5f5' }}>
                  4. LG PuriCare UD501KOG5
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Price</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>$340</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Capacity</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>50-pint</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Noise</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>44 dB</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Weight</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>46 lbs</p>
                </div>
              </div>

              <div className="prose prose-slate max-w-none mb-6">
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  If noise is your primary concern, the LG PuriCare UD501KOG5 is the clear
                  winner. At 44 dB on its lowest setting, it is quieter than a library and
                  nearly silent in a room with any background noise. This makes it the only
                  model on this list you could comfortably run in a bedroom overnight without
                  it waking you up.
                </p>
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  LG accomplishes this with an inverter compressor that ramps up and down
                  instead of cycling hard on and off. This also improves energy efficiency
                  and reduces temperature swings in the room. The LG ThinQ app provides
                  remote control, humidity monitoring, and scheduling — similar to the GE
                  but with LG&apos;s more polished interface.
                </p>
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The built-in pump, auto-restart, and front-access washable filter round
                  out a premium package. At $340, it is the priciest on this list, but the
                  noise reduction alone justifies the cost if the dehumidifier will be
                  anywhere near living or sleeping areas.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="border rounded-lg p-4" style={{ backgroundColor: '#0a1f0a', borderColor: '#22c55e44' }}>
                  <h4 className="font-semibold mb-2 flex items-center gap-1" style={{ color: '#4ade80' }}>
                    <Check className="h-4 w-4" /> Pros
                  </h4>
                  <ul className="space-y-1 text-sm" style={{ color: '#86efac' }}>
                    <li>Quietest on this list at 44 dB</li>
                    <li>Inverter compressor for smooth, efficient operation</li>
                    <li>LG ThinQ app with Wi-Fi control</li>
                    <li>Built-in pump with auto-restart</li>
                    <li>Sleek design that blends into living spaces</li>
                    <li>Energy Star certified</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4" style={{ backgroundColor: '#1f0a0a', borderColor: '#ef444444' }}>
                  <h4 className="font-semibold mb-2 flex items-center gap-1" style={{ color: '#f87171' }}>
                    <X className="h-4 w-4" /> Cons
                  </h4>
                  <ul className="space-y-1 text-sm" style={{ color: '#fca5a5' }}>
                    <li>Most expensive unit on this list at $340</li>
                    <li>Heavier at 46 lbs</li>
                    <li>LG ThinQ app has mixed reviews on Android</li>
                    <li>Replacement filters are pricier than competitors</li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-lg p-4 mb-4" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                <p className="text-sm mb-1" style={{ color: '#a1a1aa' }}>Best for</p>
                <p className="font-medium" style={{ color: '#f5f5f5' }}>
                  Anyone placing a dehumidifier near bedrooms, nurseries, or home offices
                  where noise matters. Also a strong pick for open-plan homes where the unit
                  will be visible.
                </p>
              </div>

              <BuyButton
                productKey="lg-puricare-ud501kog5"
                source="dehumidifier-hub"
                variant="primary"
                label="Check Price, LG PuriCare UD501KOG5"
                showPrice
              />
            </section>

            {/* 5. Midea MAD50S1QWT */}
            <section className="mb-14">
              <div className="border-l-4 border-orange-500 pl-6 mb-6">
                <span className="text-xs font-semibold text-orange-300 bg-orange-500/15 px-3 py-1 rounded-full uppercase tracking-wide">
                  Best for Basements
                </span>
                <h2 className="text-2xl font-bold mt-3" style={{ color: '#f5f5f5' }}>
                  5. Midea MAD50S1QWT
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Price</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>$235</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Capacity</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>50-pint</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Noise</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>51 dB</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Weight</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>42.6 lbs</p>
                </div>
              </div>

              <div className="prose prose-slate max-w-none mb-6">
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The Midea MAD50S1QWT is specifically designed for basement and crawlspace
                  use. It includes a built-in pump, auto-restart after power outages, and
                  continuous drain capability right out of the box. The pump pushes water up
                  to 16 feet vertically, edging out even the Frigidaire.
                </p>
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  Midea is actually one of the world&apos;s largest appliance manufacturers
                  (they own the Toshiba home appliance brand and make components for many
                  name-brand units). Their dehumidifier engineering is solid: the compressor
                  is reliable, the humidity sensor is accurate, and the unit handles
                  temperature drops down to 41 degrees F before the auto-defrost kicks in, important for unheated basements in winter.
                </p>
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  At $235, it sits right between the budget hOmeLabs and the feature-packed
                  Frigidaire, delivering the basement-critical features (pump, auto-restart,
                  low-temp operation) at a fair price. The 1.6-gallon bucket and front-access
                  filter keep maintenance simple.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="border rounded-lg p-4" style={{ backgroundColor: '#0a1f0a', borderColor: '#22c55e44' }}>
                  <h4 className="font-semibold mb-2 flex items-center gap-1" style={{ color: '#4ade80' }}>
                    <Check className="h-4 w-4" /> Pros
                  </h4>
                  <ul className="space-y-1 text-sm" style={{ color: '#86efac' }}>
                    <li>Built-in pump with 16-foot vertical lift</li>
                    <li>Auto-restart after power outages</li>
                    <li>Operates down to 41 degrees F with auto-defrost</li>
                    <li>Energy Star certified</li>
                    <li>Strong value at $235 with pump included</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4" style={{ backgroundColor: '#1f0a0a', borderColor: '#ef444444' }}>
                  <h4 className="font-semibold mb-2 flex items-center gap-1" style={{ color: '#f87171' }}>
                    <X className="h-4 w-4" /> Cons
                  </h4>
                  <ul className="space-y-1 text-sm" style={{ color: '#fca5a5' }}>
                    <li>No Wi-Fi or smart features</li>
                    <li>51 dB noise level; not bedroom-friendly</li>
                    <li>Brand less recognized than Frigidaire or GE</li>
                    <li>Slightly smaller bucket than Frigidaire</li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-lg p-4 mb-4" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                <p className="text-sm mb-1" style={{ color: '#a1a1aa' }}>Best for</p>
                <p className="font-medium" style={{ color: '#f5f5f5' }}>
                  Basement and crawlspace owners who need a pump, auto-restart, and
                  low-temperature operation at a competitive price. Set it and forget it.
                </p>
              </div>

              <BuyButton
                productKey="midea-mad50s1qwt"
                source="dehumidifier-hub"
                variant="primary"
                label="Check Price — Midea MAD50S1QWT"
                showPrice
              />
            </section>

            {/* 6. Tosot 50-Pint */}
            <section className="mb-14">
              <div className="border-l-4 border-teal-500 pl-6 mb-6">
                <span className="text-xs font-semibold text-teal-300 bg-teal-500/15 px-3 py-1 rounded-full uppercase tracking-wide">
                  Best Compact
                </span>
                <h2 className="text-2xl font-bold mt-3" style={{ color: '#f5f5f5' }}>
                  6. Tosot 50-Pint
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Price</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>$210</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Capacity</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>50-pint</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Noise</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>48 dB</p>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#171717' }}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: '#a1a1aa' }}>Weight</p>
                  <p className="text-lg font-bold" style={{ color: '#f5f5f5' }}>37.5 lbs</p>
                </div>
              </div>

              <div className="prose prose-slate max-w-none mb-6">
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  Tosot is a sub-brand of Gree, the world&apos;s largest manufacturer of
                  air conditioning equipment. Their 50-pint dehumidifier is the lightest and
                  most compact on this list at just 37.5 lbs, making it easy to move between
                  rooms or carry up and down stairs. Despite the smaller footprint, it still
                  delivers full 50-pint capacity.
                </p>
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  At 48 dB, it is the second-quietest model here, behind only the LG
                  PuriCare. The internal bucket holds roughly 10 pints, and a continuous
                  gravity drain outlet is included. Controls are clean and simple: digital
                  display with humidity target, 2-speed fan, timer, and a clean-filter
                  reminder light.
                </p>
                <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                  The main trade-off is no built-in pump and no Wi-Fi. But at $210 with
                  Energy Star certification, quiet operation, and a compact form factor, the
                  Tosot is an excellent pick for anyone who needs to move the unit around or
                  is tight on floor space.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="border rounded-lg p-4" style={{ backgroundColor: '#0a1f0a', borderColor: '#22c55e44' }}>
                  <h4 className="font-semibold mb-2 flex items-center gap-1" style={{ color: '#4ade80' }}>
                    <Check className="h-4 w-4" /> Pros
                  </h4>
                  <ul className="space-y-1 text-sm" style={{ color: '#86efac' }}>
                    <li>Lightest at 37.5 lbs. Easy to carry</li>
                    <li>Quiet at 48 dB — second only to LG</li>
                    <li>Compact footprint saves floor space</li>
                    <li>Energy Star certified</li>
                    <li>Backed by Gree (world leader in HVAC)</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4" style={{ backgroundColor: '#1f0a0a', borderColor: '#ef444444' }}>
                  <h4 className="font-semibold mb-2 flex items-center gap-1" style={{ color: '#f87171' }}>
                    <X className="h-4 w-4" /> Cons
                  </h4>
                  <ul className="space-y-1 text-sm" style={{ color: '#fca5a5' }}>
                    <li>No built-in pump</li>
                    <li>No Wi-Fi or smart features</li>
                    <li>Smaller bucket requires more frequent emptying</li>
                    <li>Fewer retail availability channels</li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-lg p-4 mb-4" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                <p className="text-sm mb-1" style={{ color: '#a1a1aa' }}>Best for</p>
                <p className="font-medium" style={{ color: '#f5f5f5' }}>
                  People who need to move their dehumidifier between rooms or up and down
                  stairs. Also great for apartments and tight spaces where a smaller
                  footprint matters.
                </p>
              </div>

              <BuyButton
                productKey="tosot-50-pint"
                source="dehumidifier-hub"
                variant="primary"
                label="Check Price — Tosot 50-Pint"
                showPrice
              />
            </section>

            {/* ========== SIZING GUIDE ========== */}
            <section className="mb-16">
              <h2
                className="text-2xl font-bold mb-6 flex items-center gap-2"
                style={{ color: '#f5f5f5' }}
              >
                <DollarSign className="h-6 w-6 text-primary" />
                Dehumidifier Sizing Guide: What Pint Capacity Do You Need?
              </h2>

              <p className="leading-relaxed mb-6" style={{ color: '#a1a1aa' }}>
                Dehumidifier capacity is measured in pints of moisture removed per 24 hours
                under DOE 2020 testing standards. Choosing the right size depends on your
                room size and how damp the space is. Oversizing is generally fine (the unit
                will just cycle less often), but undersizing means the dehumidifier will run
                constantly and still struggle to reach your target humidity.
              </p>

              <div className="overflow-x-auto -mx-4 px-4 mb-6">
                <table className="w-full min-w-[600px] border-collapse text-sm">
                  <thead>
                    <tr style={{ backgroundColor: '#171717' }}>
                      <th className="text-left p-3 font-semibold border-b-2" style={{ color: '#f5f5f5', borderColor: '#27272a' }}>
                        Room Size
                      </th>
                      <th className="text-left p-3 font-semibold border-b-2" style={{ color: '#f5f5f5', borderColor: '#27272a' }}>
                        Slightly Damp
                      </th>
                      <th className="text-left p-3 font-semibold border-b-2" style={{ color: '#f5f5f5', borderColor: '#27272a' }}>
                        Moderately Damp
                      </th>
                      <th className="text-left p-3 font-semibold border-b-2" style={{ color: '#f5f5f5', borderColor: '#27272a' }}>
                        Very Damp / Wet
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b" style={{ borderColor: '#27272a' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>Up to 500 sq ft</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>20-pint</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>30-pint</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>30-pint</td>
                    </tr>
                    <tr className="border-b" style={{ borderColor: '#27272a', backgroundColor: '#171717' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>500 - 1,000 sq ft</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>30-pint</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>30-pint</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>50-pint</td>
                    </tr>
                    <tr className="border-b" style={{ borderColor: '#27272a' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>1,000 - 1,500 sq ft</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>30-pint</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>50-pint</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>50-pint</td>
                    </tr>
                    <tr className="border-b" style={{ borderColor: '#27272a', backgroundColor: '#171717' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>1,500 - 2,500 sq ft</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>50-pint</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>50-pint</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>70-pint</td>
                    </tr>
                    <tr className="border-b" style={{ borderColor: '#27272a' }}>
                      <td className="p-3 font-medium" style={{ color: '#f5f5f5' }}>2,500+ sq ft</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>50-pint</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>70-pint</td>
                      <td className="p-3" style={{ color: '#a1a1aa' }}>70-pint or two units</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div
                className="rounded-lg p-4 border text-sm"
                style={{ backgroundColor: '#141414', borderColor: '#27272a' }}
              >
                <p className="font-semibold mb-1" style={{ color: '#f5f5f5' }}>
                  How to gauge your dampness level:
                </p>
                <ul className="space-y-1" style={{ color: '#a1a1aa' }}>
                  <li><strong style={{ color: '#d4d4d8' }}>Slightly damp:</strong> Musty smell only in humid weather. No visible moisture.</li>
                  <li><strong style={{ color: '#d4d4d8' }}>Moderately damp:</strong> Musty smell year-round. Damp spots on walls or floor. Condensation on windows or pipes.</li>
                  <li><strong style={{ color: '#d4d4d8' }}>Very damp / wet:</strong> Visible standing water, seeping walls, or active water intrusion. Mold growth present.</li>
                </ul>
              </div>
            </section>

            {/* ========== BUYER'S GUIDE ========== */}
            <section className="mb-16">
              <h2
                className="text-2xl font-bold mb-6 flex items-center gap-2"
                style={{ color: '#f5f5f5' }}
              >
                <Zap className="h-6 w-6 text-primary" />
                What to Look for in a Dehumidifier
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-5" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#f5f5f5' }}>
                    1. Drainage Options
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                    There are three ways to remove collected water: manually emptying the
                    bucket (every 4-12 hours depending on humidity), gravity drain via a
                    hose running downhill to a floor drain, or a built-in pump that can push
                    water uphill to a sink or out a window. If your drain is above the unit,
                    you need a pump.
                  </p>
                </div>

                <div className="border rounded-lg p-5" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#f5f5f5' }}>
                    2. Energy Star Rating
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                    All six models on this list are Energy Star certified, meaning they
                    meet EPA efficiency standards. Look for the integrated energy factor
                    (IEF) measured in liters per kWh. Higher is better. An IEF above 1.8
                    L/kWh means you are getting excellent moisture removal per watt. Energy
                    Star models typically save 15-20% on operating costs vs. non-certified
                    units.
                  </p>
                </div>

                <div className="border rounded-lg p-5" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#f5f5f5' }}>
                    3. Noise Level
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                    Noise ranges from 44 dB (LG PuriCare) to 52 dB (hOmeLabs) on this
                    list. For reference, 44 dB is a quiet library, 50 dB is a running
                    refrigerator, and 55 dB is a normal conversation. If the unit will be
                    near sleeping or working areas, prioritize models under 50 dB. In a
                    basement with the door closed, noise is usually not a factor.
                  </p>
                </div>

                <div className="border rounded-lg p-5" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#f5f5f5' }}>
                    4. Auto-Restart
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                    If you lose power and the unit does not have auto-restart, it stays off
                    when power returns. This is a problem for unattended spaces like
                    basements, crawlspaces, and vacation homes where you cannot manually
                    turn it back on. The GE, LG, and Midea all include auto-restart. The
                    Frigidaire added it on newer production runs.
                  </p>
                </div>

                <div className="border rounded-lg p-5" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#f5f5f5' }}>
                    5. Low-Temperature Operation
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                    Standard dehumidifiers lose efficiency below 60 degrees F and can frost
                    up below 50 degrees F. For unheated basements or garages, look for
                    models with auto-defrost and rated operation down to 41 degrees F. The
                    Midea MAD50S1QWT is particularly strong here. In truly cold spaces
                    (below 40 degrees F), you may need a desiccant dehumidifier instead.
                  </p>
                </div>

                <div className="border rounded-lg p-5" style={{ backgroundColor: '#171717', borderColor: '#27272a' }}>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#f5f5f5' }}>
                    6. Smart Features
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#a1a1aa' }}>
                    Wi-Fi-connected dehumidifiers let you monitor humidity, change settings,
                    and receive alerts from your phone. This is genuinely useful for
                    basements and crawlspaces you do not visit daily. The GE (SmartHQ) and
                    LG (ThinQ) both offer strong app experiences. The remaining models rely
                    on on-unit controls only.
                  </p>
                </div>
              </div>
            </section>

            {/* ========== FAQ SECTION ========== */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                <details className="border rounded-lg group" style={{ borderColor: '#27272a' }} open>
                  <summary className="p-4 font-semibold cursor-pointer transition-colors rounded-lg" style={{ color: '#f5f5f5' }}>
                    What size dehumidifier do I need for my basement?
                  </summary>
                  <div className="px-4 pb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                    For a damp basement up to 1,500 sq ft, a 50-pint dehumidifier is the
                    standard recommendation. If your basement is very wet (puddles, visible
                    moisture on walls) or larger than 1,500 sq ft, consider a 70-pint unit.
                    For smaller spaces under 500 sq ft with mild dampness, a 30-pint model
                    will suffice. All six models on this list are 50-pint units, which covers
                    the vast majority of residential basements.
                  </div>
                </details>

                <details className="border rounded-lg group" style={{ borderColor: '#27272a' }}>
                  <summary className="p-4 font-semibold cursor-pointer transition-colors rounded-lg" style={{ color: '#f5f5f5' }}>
                    Should I get a dehumidifier with a built-in pump?
                  </summary>
                  <div className="px-4 pb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                    A built-in pump is highly recommended for basements where the drain is
                    above the unit or there is no floor drain nearby. Without a pump, you
                    are limited to gravity drainage (hose running downhill) or manually
                    emptying the bucket every few hours. The Frigidaire, GE, LG, and Midea
                    all include built-in pumps. The hOmeLabs and Tosot do not.
                  </div>
                </details>

                <details className="border rounded-lg group" style={{ borderColor: '#27272a' }}>
                  <summary className="p-4 font-semibold cursor-pointer transition-colors rounded-lg" style={{ color: '#f5f5f5' }}>
                    How much does it cost to run a dehumidifier?
                  </summary>
                  <div className="px-4 pb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                    An Energy Star-rated 50-pint dehumidifier running 12 hours per day costs
                    roughly $4-8 per month in electricity depending on your local utility
                    rate. Non-Energy Star units can cost 15-20% more to operate. Running costs
                    drop if you set a target humidity level and let the unit cycle on and off
                    automatically rather than running continuously.
                  </div>
                </details>

                <details className="border rounded-lg group" style={{ borderColor: '#27272a' }}>
                  <summary className="p-4 font-semibold cursor-pointer transition-colors rounded-lg" style={{ color: '#f5f5f5' }}>
                    What humidity level should I set my dehumidifier to?
                  </summary>
                  <div className="px-4 pb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                    The ideal indoor humidity level is between 30% and 50%. For basements,
                    aim for 50% or slightly below. Setting the target too low (under 30%)
                    wastes energy and can cause dry skin and respiratory irritation. Most
                    dehumidifiers have a built-in humidistat that lets you set a target
                    percentage and the unit cycles automatically to maintain it.
                  </div>
                </details>

                <details className="border rounded-lg group" style={{ borderColor: '#27272a' }}>
                  <summary className="p-4 font-semibold cursor-pointer transition-colors rounded-lg" style={{ color: '#f5f5f5' }}>
                    How loud are dehumidifiers?
                  </summary>
                  <div className="px-4 pb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                    Most 50-pint dehumidifiers operate between 48-56 dB on their highest fan
                    speed. On this list, noise ranges from 44 dB (LG PuriCare) to 52 dB
                    (hOmeLabs). For reference, 44 dB is a quiet library, 50 dB is a running
                    refrigerator, and 55 dB is normal conversation volume. If the unit will
                    be near a bedroom or living area, prioritize models rated under 50 dB.
                  </div>
                </details>

                <details className="border rounded-lg group" style={{ borderColor: '#27272a' }}>
                  <summary className="p-4 font-semibold cursor-pointer transition-colors rounded-lg" style={{ color: '#f5f5f5' }}>
                    Do dehumidifiers help with mold?
                  </summary>
                  <div className="px-4 pb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                    Yes. Mold requires moisture levels above 60% relative humidity to grow.
                    By keeping your basement or crawlspace at 50% or below, a dehumidifier
                    removes the conditions mold needs to thrive. However, a dehumidifier
                    cannot kill or remove existing mold. You will need to clean or remediate
                    existing mold growth separately and then use the dehumidifier to prevent
                    it from returning.
                  </div>
                </details>

                <details className="border rounded-lg group" style={{ borderColor: '#27272a' }}>
                  <summary className="p-4 font-semibold cursor-pointer transition-colors rounded-lg" style={{ color: '#f5f5f5' }}>
                    Can I use a dehumidifier in a crawlspace?
                  </summary>
                  <div className="px-4 pb-4 leading-relaxed" style={{ color: '#a1a1aa' }}>
                    Yes, but you need a model designed for low-clearance, unattended operation.
                    Key features for crawlspace use include a built-in pump (since gravity
                    drainage is often impossible), auto-restart after power outages, continuous
                    drain capability, and a washable filter. The Midea MAD50S1QWT and GE
                    ADEW50LW are both solid crawlspace options. Ensure the crawlspace is
                    encapsulated with a vapor barrier for best results.
                  </div>
                </details>
              </div>
            </section>

            {/* ========== FINAL CTA ========== */}
            <section className="mb-8">
              <div
                style={{ backgroundColor: '#132a15', borderColor: '#22c55e33' }}
                className="border rounded-xl p-6 md:p-8 text-center"
              >
                <Zap className="h-10 w-10 mx-auto mb-4" style={{ color: '#22c55e' }} />
                <h2 className="text-2xl font-bold mb-3" style={{ color: '#f5f5f5' }}>
                  Breathe Easier at Home
                </h2>
                <p
                  className="max-w-2xl mx-auto mb-6 leading-relaxed"
                  style={{ color: '#a1a1aa' }}
                >
                  See our full lineup of home comfort reviews, including mini splits,
                  smart thermostats, and air quality products.
                </p>
                <Link
                  href="/reviews"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-lg transition-colors hover:opacity-90"
                  style={{ backgroundColor: '#22c55e', color: '#0a0a0a' }}
                >
                  Browse All Reviews
                  <ChevronRight className="h-5 w-5" />
                </Link>
              </div>
            </section>

          </article>
        </div>
      </main>
      <ReviewFooter />
      <div className="container mx-auto px-4 max-w-3xl">
        <AuthorBio domain="grh" palette={{ fg: '#f5f5f5', muted: '#d4d4d8', mutedFg: '#71717a', accent: '#22c55e', cardBg: 'hsl(150, 15%, 9%)', cardBorder: 'hsl(150, 10%, 18%)' }} />
      </div>

    <div className="container mx-auto px-4 max-w-3xl"><TrustedSources domain="grh" variant="compact" palette={{ fg: '#f5f5f5', muted: '#d4d4d8', mutedFg: '#71717a', accent: '#22c55e', cardBg: 'hsl(150, 15%, 9%)', cardBorder: 'hsl(150, 10%, 18%)' }} /></div>

    </ReviewLayout>
  );
}
