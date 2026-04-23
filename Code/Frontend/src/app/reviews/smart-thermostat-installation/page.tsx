import type { Metadata } from 'next';
import Link from 'next/link';
import { ReviewLayout } from '@/components/reviews/ReviewLayout';
import { ReviewHeader } from '@/components/reviews/ReviewHeader';
import { ReviewFooter } from '@/components/reviews/ReviewFooter';
import { AffiliateCTABox } from '@/components/reviews/AffiliateCTABox';
import { AffiliateDisclosure } from '@/components/reviews/AffiliateDisclosure';
import { BuyButton } from '@/components/reviews/BuyButton';
import { StickyMobileCTA } from '@/components/reviews/StickyMobileCTA';
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Check,
  X,
  Zap,
  Shield,
  ChevronRight,
  Home,
  DollarSign,
  Leaf,
} from 'lucide-react';

const PRODUCT_KEY = 'ecobee-thermostat';

export const metadata: Metadata = {
  title:
    'Smart Thermostat Installation Guide 2026: DIY in 30 Minutes or Hire a Pro?',
  description:
    'Step-by-step smart thermostat installation guide for 2026. Tools needed, wire identification (R, C, W, Y, G, RC, RH), C-wire workarounds, Nest Power Connector and Ecobee PEK options, millivolt/line-voltage compatibility, when to hire a pro ($75-$200), and California Title 24 part 6 compliance.',
  alternates: {
    canonical: '/reviews/smart-thermostat-installation',
  },
  openGraph: {
    title:
      'Smart Thermostat Installation Guide 2026: DIY in 30 Minutes or Hire a Pro?',
    description:
      'Full DIY smart thermostat install guide — wiring, C-wire workarounds, and Title 24 compliance.',
    type: 'article',
    publishedTime: '2026-04-22T00:00:00Z',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Smart Thermostat Installation Guide 2026: DIY in 30 Minutes or Hire a Pro?',
  description:
    'Complete smart thermostat installation guide for 2026. Covers required tools, turning off HVAC power at the breaker, labeling wires (R, C, W, Y, G, RC, RH), installing the backplate, mounting the thermostat, first boot and Wi-Fi setup, C-wire workarounds (Nest Power Connector, Ecobee PEK, Venstar Add-A-Wire), millivolt/line-voltage compatibility, when to hire an HVAC technician, and California Title 24 part 6 compliance.',
  datePublished: '2026-04-22',
  dateModified: '2026-04-22',
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
    '@id':
      'https://ratereliefca.com/reviews/smart-thermostat-installation',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does it take to install a smart thermostat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Plan 20-45 minutes for a first-time DIY install on a standard 24V system with an existing C-wire. That includes turning off power at the breaker, photographing and labeling the old wiring, mounting the new backplate, wiring the terminals, and walking through the in-app Wi-Fi and equipment setup. If you have to install a C-wire adapter (Ecobee PEK or Nest Power Connector) the install runs closer to 45-75 minutes because you have to open the HVAC air handler to land the adapter on the control board.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a C-wire for a smart thermostat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most modern smart thermostats — Ecobee, Nest Learning (4th gen), Honeywell T10, Emerson Sensi Touch — perform best with a dedicated C-wire (common wire) supplying continuous 24V power. Without one, the thermostat either relies on "power stealing" through the heating/cooling circuit (which can cause short-cycling, Wi-Fi dropouts, and erratic behavior) or requires a compatibility adapter. The new Nest Learning Thermostat (4th generation, released 2024) and Nest Thermostat (base model) are designed to work reliably without a C-wire on most systems, but Ecobee and Honeywell still strongly recommend one.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I install a smart thermostat myself?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, most homeowners can self-install a smart thermostat in under an hour if the existing system is a standard 24V low-voltage setup (forced air gas, electric heat pump, or central AC). The low voltage means there is no electrocution risk once the HVAC breaker is off. The hardest part for most DIYers is interpreting the existing wire labels when the previous installer used non-standard colors — in that case, photograph the old wiring before removing any wire and use the Ecobee or Nest compatibility checker before you start.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to hire someone to install a smart thermostat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A local HVAC technician or handyman typically charges $75-$200 for a basic smart thermostat install in California, including confirming compatibility and walking you through the app setup. Installing a C-wire from scratch (running a new 18/5 cable from the thermostat to the air handler) adds $150-$350. Some utilities — including SCE, PG&E, and SDG&E — partner with companies like Sealed or Franklin Energy to offer reduced-cost or free smart thermostat installs tied to demand-response enrollment. Check your utility\'s marketplace before paying full price.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if my system is millivolt or line-voltage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most smart thermostats do NOT work with millivolt systems (older floor/wall gas heaters powered by a gas pilot thermocouple — roughly 750 mV) or line-voltage systems (120V/240V electric baseboard heaters, radiant ceiling, and some wall heaters). For millivolt, you need a specialty thermostat like the Ecobee EB-STATE6-01 with a millivolt adapter or the Honeywell TH5220D. For line-voltage, look at Mysa, Stelpro Ki Z-Wave, or Sinope — these are purpose-built to switch 240V loads. A standard Ecobee or Nest will fail immediately (or pop the thermostat) if connected to line voltage.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does California Title 24 require a specific type of thermostat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'California Title 24, Part 6 (the Building Energy Efficiency Standards) requires a programmable setback thermostat on all new residential construction and most major retrofits with central HVAC. Any smart thermostat — Ecobee, Nest, Honeywell, Emerson — satisfies the programmable setback requirement. New construction projects also need the thermostat to support at least 4-period daily programming and hold a setpoint within ±2°F. If you are replacing the thermostat only (no other HVAC work), no permit is required in most California jurisdictions, but keep your install documentation for the home file.',
      },
    },
  ],
};

export default function SmartThermostatInstallationPage() {
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

      <main className="bg-[#0a0a0a] min-h-screen">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <article className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link href="/reviews" className="hover:text-foreground transition">
                Reviews
              </Link>
              <ChevronRight className="h-3 w-3" />
              <Link
                href="/reviews/best-smart-thermostat"
                className="hover:text-foreground transition"
              >
                Smart Thermostats
              </Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-foreground">Installation Guide</span>
            </nav>

            {/* Article header */}
            <header className="mb-10">
              <div className="inline-block px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-400 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
                Installation Guide
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                Smart Thermostat Installation Guide 2026: DIY in 30 Minutes or
                Hire a Pro?
              </h1>

              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                A step-by-step DIY install walk-through for Ecobee, Nest, and
                Honeywell smart thermostats — wire identification, C-wire
                workarounds, compatibility checks, and when it actually makes
                sense to hire a pro.
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-t border-border pt-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Published April 22, 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>14 min read</span>
                </div>
              </div>
            </header>

            {/* FTC Disclosure */}
            <AffiliateDisclosure variant="compact" />

            {/* Top CTA — Ecobee as go-to for self-install */}
            <AffiliateCTABox
              productKey={PRODUCT_KEY}
              variant="top"
              headline="Going the self-install route?"
              subline="The Ecobee Smart Thermostat Premium ships with the Power Extender Kit in the box — so you can self-install even if your system has no C-wire."
            />

            {/* Intro */}
            <section className="prose prose-invert prose-lg max-w-none">
              <p className="text-foreground leading-relaxed">
                Installing a smart thermostat is one of the highest-ROI DIY
                projects a California homeowner can knock out on a Saturday
                morning. A working Ecobee or Nest running a reasonable setback
                schedule and pre-cooling on hot days will trim 8-15% off your
                annual HVAC electricity use — and at 40-48¢/kWh peak TOU rates
                on PG&E or 47-70¢ on SDG&E, that pays back the $199-$299 unit
                cost in a single summer on most homes.
              </p>

              <p className="text-foreground leading-relaxed">
                The good news: for about 80% of California homes, the physical
                install takes 20-45 minutes, requires one Phillips screwdriver
                and a drill, and carries effectively zero electrocution risk
                because HVAC thermostats run on 24-volt low-voltage control
                wiring, not line voltage. The other 20% — older homes with
                millivolt wall furnaces, electric baseboards, or no C-wire and
                inaccessible air handlers — need either a C-wire workaround kit
                or a one-hour visit from an HVAC tech.
              </p>

              <p className="text-foreground leading-relaxed">
                This guide walks through the full process: tool list, turning
                off power at the breaker, labeling the existing wires, checking
                for a C-wire, mounting the new thermostat, Wi-Fi setup, and
                every workaround for the two or three edge cases that trip up
                first-time DIYers. It also covers when to just pay someone —
                and where to find discounted installs through your utility.
              </p>

              {/* Quick decision box */}
              <div className="not-prose my-10 rounded-xl border border-border bg-muted/30 p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Zap className="h-6 w-6 text-green-400" />
                  DIY or Hire? 60-Second Decision
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-green-400 font-bold mb-3 flex items-center gap-2">
                      <Check className="h-5 w-5" /> Safe to DIY
                    </h3>
                    <ul className="space-y-2 text-sm text-foreground">
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span>Existing thermostat is 24V low-voltage</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span>You see a C-wire (or have Ecobee PEK)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span>Central forced-air gas, heat pump, or AC</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span>Air handler is accessible (attic/closet/garage)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span>2.4 GHz Wi-Fi reaches the thermostat location</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-red-400 font-bold mb-3 flex items-center gap-2">
                      <X className="h-5 w-5" /> Hire an HVAC Tech
                    </h3>
                    <ul className="space-y-2 text-sm text-foreground">
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                        <span>Millivolt (old wall furnace, ~750 mV)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                        <span>Line-voltage 120V/240V baseboard heat</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                        <span>No C-wire and air handler is inaccessible</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                        <span>Dual-transformer system (separate RC + RH)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                        <span>Unusual wire colors and no labels</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Tools needed */}
              <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">
                Tools and Supplies You Need
              </h2>
              <p className="text-foreground leading-relaxed">
                The tool list for a smart thermostat swap is genuinely short —
                you probably own everything already. No specialty HVAC tools,
                no meter required (though a multimeter is nice for verifying
                the breaker is off).
              </p>

              <div className="not-prose my-6 rounded-xl border border-border overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left px-4 py-3 text-foreground font-semibold">
                        Item
                      </th>
                      <th className="text-left px-4 py-3 text-foreground font-semibold">
                        Why You Need It
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="px-4 py-3 text-foreground font-medium">
                        #2 Phillips screwdriver
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">
                        Backplate screws and wire terminals on most models
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-foreground font-medium">
                        Cordless drill + small bit
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">
                        Pre-drilling drywall anchors for new mounting screws
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-foreground font-medium">
                        Smartphone with camera
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">
                        Photograph existing wiring before removal — non-optional
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-foreground font-medium">
                        Masking tape + pen
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">
                        Flag each wire with its terminal letter as you remove
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-foreground font-medium">
                        Small level
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">
                        New backplate mounts straight (aesthetic, but worth it)
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-foreground font-medium">
                        Multimeter (optional)
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">
                        Confirm the HVAC breaker is actually off before work
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-foreground font-medium">
                        Wire nuts (optional)
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">
                        Cap any abandoned wires you are not reconnecting
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* STEP 1 */}
              <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">
                Step 1: Turn Off Power at the Breaker
              </h2>
              <p className="text-foreground leading-relaxed">
                Before you touch anything on the thermostat, kill the HVAC
                circuit at the main electrical panel. This is not about
                electrocution risk — 24V control wiring cannot hurt you — it is
                about not shorting the low-voltage transformer inside your air
                handler. Brushing two energized control wires together can pop
                the 3A control-circuit fuse on the furnace board, and
                replacing that fuse (ATC blade, usually 3 or 5 amp) means
                pulling the furnace access panel and making a trip to the auto
                parts store. Easier to flip the breaker.
              </p>

              <p className="text-foreground leading-relaxed">
                At the panel, find the breaker labeled &quot;Furnace,&quot;
                &quot;Air Handler,&quot; &quot;HVAC,&quot; or &quot;AC.&quot;
                Flip it off. On most California homes you are looking at a
                single 15A or 20A 120V breaker for the gas furnace blower and
                control board. Heat pumps will also have a separate 30-60A
                double-pole breaker for the outdoor condenser — you do not
                need to turn that one off for a thermostat swap. Verify the
                system is dead by raising or lowering the thermostat setpoint
                and confirming the blower does not kick on.
              </p>

              {/* STEP 2 */}
              <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">
                Step 2: Remove the Faceplate and Photograph the Wiring
              </h2>
              <p className="text-foreground leading-relaxed">
                Most older thermostats have a plastic faceplate that pops off
                or unscrews, revealing the wire terminals on the backplate.
                With the cover off you should see a handful of 18-gauge solid
                copper wires — usually 4 to 8 of them — each landed on a
                terminal marked with a single letter. Before you touch
                anything, take three photos from different angles with your
                phone. This is your insurance policy. If you get confused at
                the new thermostat, you can zoom into the photo and see
                exactly which color was on which letter.
              </p>

              <p className="text-foreground leading-relaxed">
                Here is the standard terminal key you will see on virtually
                every 24V residential control board. California HVAC
                installers largely follow the same convention, though some use
                non-standard wire colors, which is exactly why you photograph
                first instead of trusting the color.
              </p>

              <div className="not-prose my-6 rounded-xl border border-border overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left px-4 py-3 text-foreground font-semibold">
                        Terminal
                      </th>
                      <th className="text-left px-4 py-3 text-foreground font-semibold">
                        Typical Color
                      </th>
                      <th className="text-left px-4 py-3 text-foreground font-semibold">
                        What It Does
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="px-4 py-3 text-foreground font-medium">R</td>
                      <td className="px-4 py-3 text-muted-foreground">Red</td>
                      <td className="px-4 py-3 text-muted-foreground">
                        24V power from the HVAC transformer
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-foreground font-medium">RC</td>
                      <td className="px-4 py-3 text-muted-foreground">Red</td>
                      <td className="px-4 py-3 text-muted-foreground">
                        24V power for cooling (dual-transformer systems)
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-foreground font-medium">RH</td>
                      <td className="px-4 py-3 text-muted-foreground">Red</td>
                      <td className="px-4 py-3 text-muted-foreground">
                        24V power for heating (dual-transformer systems)
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-foreground font-medium">C</td>
                      <td className="px-4 py-3 text-muted-foreground">Blue</td>
                      <td className="px-4 py-3 text-muted-foreground">
                        24V common — the return leg, required by most smart
                        thermostats
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-foreground font-medium">W</td>
                      <td className="px-4 py-3 text-muted-foreground">White</td>
                      <td className="px-4 py-3 text-muted-foreground">
                        Heat call (first stage)
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-foreground font-medium">W2</td>
                      <td className="px-4 py-3 text-muted-foreground">Various</td>
                      <td className="px-4 py-3 text-muted-foreground">
                        Heat call (second stage, two-stage furnaces)
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-foreground font-medium">Y</td>
                      <td className="px-4 py-3 text-muted-foreground">Yellow</td>
                      <td className="px-4 py-3 text-muted-foreground">
                        Cool call (first stage compressor)
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-foreground font-medium">Y2</td>
                      <td className="px-4 py-3 text-muted-foreground">Various</td>
                      <td className="px-4 py-3 text-muted-foreground">
                        Cool call (second stage compressor)
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-foreground font-medium">G</td>
                      <td className="px-4 py-3 text-muted-foreground">Green</td>
                      <td className="px-4 py-3 text-muted-foreground">
                        Fan call (indoor blower)
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-foreground font-medium">O/B</td>
                      <td className="px-4 py-3 text-muted-foreground">
                        Orange/Blue
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">
                        Reversing valve (heat pump systems only)
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-foreground font-medium">Aux/E</td>
                      <td className="px-4 py-3 text-muted-foreground">Various</td>
                      <td className="px-4 py-3 text-muted-foreground">
                        Auxiliary/emergency heat (heat pump with electric
                        strip)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-foreground leading-relaxed">
                Three important gotchas to check before you disconnect
                anything. First, if you see a single &quot;R&quot; wire only,
                you are on a single-transformer system — the new thermostat
                will use the R terminal alone. If you see both RC and RH wires
                with a jumper between them on the old thermostat, pull the
                jumper, remove both wires, and land them on the appropriate R,
                RC, and RH terminals per the new thermostat&apos;s
                instructions (Ecobee and Nest handle this automatically with a
                built-in jumper behind the backplate). Second, note whether
                any wires are just coiled up in the wall and not connected to
                a terminal — these are your spare conductors, typically used
                to add a C-wire without running a new cable. Third,
                double-check there are no silver/black wires that look like a
                24VAC pair coming from a relay box — that is a sign of a zoned
                system with a zone control panel in the attic, which
                complicates the install.
              </p>

              {/* STEP 3 */}
              <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">
                Step 3: Check for a C-Wire
              </h2>
              <p className="text-foreground leading-relaxed">
                The C-wire (common) is the single most common source of smart
                thermostat install trouble. It is the 24V return path that lets
                the thermostat draw continuous power from the transformer to
                run its Wi-Fi radio, color screen, and occupancy sensor. On an
                older thermostat that just opens and closes a mercury switch,
                no C-wire is needed. On a smart thermostat, you almost always
                want one.
              </p>

              <p className="text-foreground leading-relaxed">
                Look at the old thermostat&apos;s terminals. If you see a wire
                landed on the &quot;C&quot; terminal, you are set — proceed to
                step 4. If no wire is on C but you see a blue (or unused
                colored) wire tucked into the wall behind the thermostat plate,
                that is probably a run already pulled from the air handler but
                never connected. Pull it forward — you will land it on C at
                the new thermostat and confirm the matching end is connected
                to C at the furnace control board in step 4.
              </p>

              <p className="text-foreground leading-relaxed">
                If no C-wire is present and no spare wires are tucked in the
                wall, you have three choices:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-foreground">
                <li>
                  <strong>Ecobee Power Extender Kit (PEK):</strong> Ships free
                  in the box with every Ecobee Premium and Smart Thermostat
                  Enhanced. The PEK is a small module you install at the
                  furnace control board — it converts a 4-wire system (R, W,
                  Y, G) into a 5-wire setup by running C over the existing G
                  wire and multiplexing the fan signal. Roughly 15 extra
                  minutes, requires opening the furnace panel.
                </li>
                <li>
                  <strong>Nest Power Connector:</strong> A $25 add-on sold by
                  Google. Similar concept to the Ecobee PEK but pairs with
                  Nest Learning and Nest (base model) thermostats. Lands at
                  the furnace control board.
                </li>
                <li>
                  <strong>Venstar Add-A-Wire:</strong> A generic third-party
                  adapter that works with any smart thermostat and supports
                  4-wire-to-5-wire conversion. Around $15-20, slightly more
                  universal than the brand-specific options.
                </li>
                <li>
                  <strong>Run a new C-wire:</strong> The cleanest long-term
                  solution — pull a new 18/5 or 18/6 thermostat cable from
                  the thermostat location to the air handler and use one of
                  the extra conductors for C. Easiest when the air handler is
                  in an attic or closet directly above the thermostat. Budget
                  1-3 hours or pay a handyman $150-250.
                </li>
              </ul>

              <p className="text-foreground leading-relaxed">
                One more option that works on simple systems: the newer Nest
                Learning Thermostat (4th generation, 2024) and Nest Thermostat
                (base model) are designed to run without a C-wire by power
                stealing through the Y or W call. Roughly 85% of homes work
                fine. If you buy a Nest, try the no-C-wire install first — if
                you get Wi-Fi dropouts or short-cycling after a week, install
                the Nest Power Connector.
              </p>

              {/* STEP 4 */}
              <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">
                Step 4: Install the New Backplate
              </h2>
              <p className="text-foreground leading-relaxed">
                With the old thermostat off the wall, you will see the wires
                sticking out of the wall through a hole in the drywall. Every
                smart thermostat ships with a mounting backplate (sometimes
                called the base plate or sub-base) that screws to the wall.
                Feed all the wires through the center hole of the new
                backplate, hold the backplate level, and mark the new screw
                locations through the backplate&apos;s mounting holes.
              </p>

              <p className="text-foreground leading-relaxed">
                If the old mounting holes line up with the new backplate, you
                can reuse them. If not, pre-drill the new holes, tap in the
                included drywall anchors, and screw the backplate to the wall.
                For plaster walls (common in California homes built before
                1960) swap the included plastic anchors for a #6 or #8 zinc
                togglebolt — plaster is brittle and plastic anchors often just
                spin out. Make sure the backplate is level — it does not
                matter electrically, but the display will look crooked forever
                if you skip this.
              </p>

              <p className="text-foreground leading-relaxed">
                Before final-tightening the screws, wrap a ball of plumber&apos;s
                putty or a piece of foam insulation loosely around the wires
                where they enter the wall hole. If the thermostat is on an
                exterior wall (common on California single-stories), cold
                outside air can travel through the wall cavity, hit the
                backside of the thermostat, and make the temp read 3-5°F too
                cold. Stuffing the hole eliminates that &quot;ghost draft&quot;
                — small detail that meaningfully improves comfort on older
                homes.
              </p>

              {/* STEP 5 */}
              <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">
                Step 5: Land the Wires at the Terminals
              </h2>
              <p className="text-foreground leading-relaxed">
                Now the payoff for photographing the old wiring. One at a
                time, take each wire, strip 5/16 inch of insulation if the end
                is nicked or oxidized (most smart thermostats include a small
                wire stripper in the box for this), and push the bare end into
                the matching terminal on the new backplate. Ecobee and Nest
                both use push-down spring terminals — press the white tab
                down, insert the wire, release. Honeywell T10 uses a screw
                terminal — insert the wire and tighten with the included
                screwdriver.
              </p>

              <p className="text-foreground leading-relaxed">
                Match letter to letter: R goes to R, C to C, W to W, Y to Y, G
                to G. If your system is a heat pump, the orange wire goes to
                O/B (the thermostat&apos;s setup routine will ask later whether
                you need O or B — virtually all California heat pumps are
                O-reversing). If you have a second-stage W2 or Y2 wire,
                landit on the W2/Y2 terminal. Leave any spare unused wires
                coiled behind the backplate with a wire nut on the stripped
                end so they cannot short to anything.
              </p>

              <p className="text-foreground leading-relaxed">
                If you installed a C-wire adapter (Ecobee PEK or Nest Power
                Connector) in step 3, now is when you also install the other
                end of that adapter. Open the furnace access panel, find the
                control board (the board with the R, C, W, Y, G terminals on
                the air handler — mirror image of your thermostat), remove
                the existing R/W/Y/G wires, and reland them on the PEK per
                the included diagram. PEK installs are fiddly but not
                electrically complex — another 10-15 minutes. Put the furnace
                panel back on when done.
              </p>

              {/* STEP 6 */}
              <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">
                Step 6: Mount the Thermostat and Flip the Breaker
              </h2>
              <p className="text-foreground leading-relaxed">
                With the wires terminated, push the thermostat body onto the
                backplate. Ecobee, Nest, and Honeywell all use a magnetic or
                snap-on connection — no screws, just align and press. You
                should feel and hear a satisfying click.
              </p>

              <p className="text-foreground leading-relaxed">
                Go back to the electrical panel and flip the HVAC breaker back
                on. Within 10-30 seconds, the thermostat&apos;s display will
                light up. If nothing happens: breaker wrong, C-wire missing or
                miswired, or a wire came loose. Pull the thermostat body off
                the backplate, check each terminal for a firmly seated wire,
                and try again.
              </p>

              {/* STEP 7 */}
              <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">
                Step 7: First-Boot Setup (Wi-Fi, Equipment, Schedule)
              </h2>
              <p className="text-foreground leading-relaxed">
                The on-screen setup wizard walks you through the configuration
                in 10-15 minutes. The order varies slightly by brand but the
                steps are always: language and region, Wi-Fi network (2.4 GHz
                only for Ecobee and Nest — 5 GHz is not supported on any
                current smart thermostat as of early 2026), account linking
                (Ecobee account, Google account, or Honeywell Resideo
                account), equipment type (gas furnace, heat pump, heat pump
                with aux, AC only, etc.), and finally, schedule setup.
              </p>

              <p className="text-foreground leading-relaxed">
                Two setup choices that matter. First, when asked about your
                equipment, be honest about staging — if you have a two-stage
                furnace or two-stage compressor, say so, because the
                thermostat&apos;s adaptive recovery and pre-heat algorithms
                work much better with the correct stage count. Second, on
                Ecobee and Nest, enable the &quot;demand response&quot; or
                &quot;energy programs&quot; option during setup if you are on
                SCE, PG&E, or SDG&E — you get a $50-100 enrollment bonus and a
                smaller per-event payment ($5-10) for letting the utility
                trim a few degrees during peak summer events. It is worth
                $75-200/year to most California homes and virtually
                unnoticeable in practice.
              </p>

              <p className="text-foreground leading-relaxed">
                Finally, set a sensible schedule. A good default for a
                California single-story with central AC is: 68°F heat / 78°F
                cool when home, 62°F heat / 82°F cool when away, 66°F heat /
                74°F cool at night. Let the thermostat&apos;s occupancy sensors
                or your phone&apos;s geofence auto-switch between home and
                away mode — that is where the real savings come from, not
                from the absolute temperatures.
              </p>

              {/* Mid-article CTA */}
              <AffiliateCTABox
                productKey={PRODUCT_KEY}
                variant="mid"
                headline="Ready to pick up the Ecobee Premium?"
                subline="The Premium ships with the Power Extender Kit in the box, the best built-in speaker in the category (Alexa and Siri both work hands-free), and full SmartSensor support for room-by-room temperature averaging."
              />

              {/* Total time */}
              <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">
                Realistic Total Install Time
              </h2>
              <p className="text-foreground leading-relaxed">
                Here is how the minutes actually break down on the three most
                common California scenarios.
              </p>

              <div className="not-prose my-6 rounded-xl border border-border overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left px-4 py-3 text-foreground font-semibold">
                        Scenario
                      </th>
                      <th className="text-left px-4 py-3 text-foreground font-semibold">
                        Install Time
                      </th>
                      <th className="text-left px-4 py-3 text-foreground font-semibold">
                        Skill Level
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="px-4 py-3 text-foreground font-medium">
                        5-wire (R, C, W, Y, G) already in place
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">
                        20-30 min
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">
                        First-time DIY fine
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-foreground font-medium">
                        4-wire, install PEK / Power Connector
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">
                        45-75 min
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">
                        First-time DIY fine
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-foreground font-medium">
                        Heat pump with aux heat (7-8 wires)
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">
                        30-50 min
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">
                        Intermediate DIY
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-foreground font-medium">
                        Run a new C-wire from scratch
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">
                        2-3 hours
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">
                        Advanced DIY
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-foreground font-medium">
                        Dual-transformer (separate RC + RH)
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">
                        30-60 min
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">
                        Intermediate DIY
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-foreground font-medium">
                        Millivolt wall furnace
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">
                        Hire a pro
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">
                        Wrong thermostat for job
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-foreground font-medium">
                        Line-voltage baseboard heat
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">
                        Hire a pro
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">
                        Wrong thermostat for job
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* C-wire workaround deep dive */}
              <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">
                The C-Wire Workaround: Deeper Look
              </h2>
              <p className="text-foreground leading-relaxed">
                Roughly 30-40% of California homes built before 2005 have
                4-wire thermostat cable (R, W, Y, G) with no C-wire, because
                the original builder-grade mechanical thermostats did not
                need one. If that is you, here is how the three main
                workaround approaches compare.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-10 mb-4">
                Ecobee Power Extender Kit (PEK)
              </h3>
              <p className="text-foreground leading-relaxed">
                Ships in the box with every Ecobee Premium and Ecobee Smart
                Thermostat Enhanced — zero additional cost. Installs at the
                furnace control board. The PEK uses signal multiplexing over
                the existing G wire to deliver both the fan call and the 24V
                common back to the thermostat. Works on virtually all
                single-transformer forced-air systems. Not compatible with
                dual-transformer systems or zoned systems with a zone
                controller. Install time: 15-20 minutes added to the
                thermostat swap. Best option if you already own or plan to
                buy an Ecobee.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-10 mb-4">
                Nest Power Connector
              </h3>
              <p className="text-foreground leading-relaxed">
                $25 add-on from Google, sold separately. Pairs with any Nest
                thermostat but particularly the Nest Learning Thermostat 4th
                generation. Same multiplexing concept as the Ecobee PEK but
                tuned for Nest&apos;s power requirements. Good choice if you
                already bought a Nest and the no-C-wire install is causing
                issues. Install time: 15-20 minutes at the furnace control
                board. Note that the newest Nest thermostats (2024+) are
                better at running without a C-wire than earlier models, so
                you may not need this at all.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-10 mb-4">
                Venstar Add-A-Wire
              </h3>
              <p className="text-foreground leading-relaxed">
                $15-20 generic adapter that works with any smart thermostat.
                Slightly more flexible than brand-specific options because
                you are not locked to one ecosystem. Same install process.
                Worth considering if you think you might switch brands later
                or have multiple thermostats in the house across different
                brands.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-10 mb-4">
                Just Run a New Cable
              </h3>
              <p className="text-foreground leading-relaxed">
                If the air handler is in an accessible attic, closet, or
                garage and you can route an 18/5 or 18/6 thermostat cable
                with reasonable effort, running a fresh cable is the
                cleanest permanent solution — no adapter to fail, full native
                5+ conductor setup, supports two-stage heat/cool and heat
                pumps with aux heat. Budget 1-3 hours for DIY. An electrician
                or handyman charges $150-350 for the same work.
              </p>

              {/* Millivolt and line-voltage */}
              <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">
                Millivolt and Line-Voltage Systems (Stop and Hire)
              </h2>
              <p className="text-foreground leading-relaxed">
                Two system types where a standard Ecobee or Nest will either
                not work at all or will physically damage itself: millivolt
                and line-voltage.
              </p>

              <p className="text-foreground leading-relaxed">
                <strong>Millivolt</strong> systems are older gas wall
                furnaces, floor furnaces, and gas fireplaces powered by a
                pilot-driven thermocouple generating roughly 750 millivolts —
                less than one volt. You will usually recognize them by the
                shape: a tall, narrow wall-mounted furnace in a hallway, or
                an in-floor furnace grill. The thermostat wire is typically
                just two conductors and the old thermostat is a simple
                mercury-switch unit. A standard smart thermostat will not
                detect enough voltage to boot. You need a dedicated millivolt
                thermostat like the Honeywell CT87N (mechanical) or a
                specialty smart option like the Ecobee EB-STATE6-01 with a
                millivolt adapter. This is &quot;call an HVAC tech&quot;
                territory unless you are very comfortable with wiring
                diagrams.
              </p>

              <p className="text-foreground leading-relaxed">
                <strong>Line-voltage</strong> systems are electric baseboard
                heaters, radiant ceiling heating, and some wall heaters
                powered directly by 120V or 240V. Common in older California
                mountain cabins, cottages, and rent-controlled apartments.
                The thermostat is switching full household voltage directly,
                not a low-voltage control signal. Connecting a standard
                Ecobee or Nest to a 240V circuit will instantly destroy the
                thermostat (and potentially trip the breaker hard enough to
                damage the panel). You need a purpose-built line-voltage
                smart thermostat — Mysa, Stelpro Ki Z-Wave, Sinope, or the
                line-voltage variant of Honeywell. Install is very similar
                but the wire gauge is heavier (12 or 14 AWG) and there is
                real electrocution risk, so hiring an electrician is common
                sense unless you have wiring experience.
              </p>

              {/* When to hire a pro */}
              <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">
                When to Hire an HVAC Tech
              </h2>
              <p className="text-foreground leading-relaxed">
                DIY is right for most California homes, but four situations
                tip the scale toward hiring out. First, millivolt or
                line-voltage — the thermostat itself is a specialty part and
                the wiring is not what most homeowners have seen. Second,
                zoned systems with a dedicated zone control panel (Honeywell
                TrueZONE, EWC, or Carrier Infinity). These systems need
                brand-matched thermostats and controllers that work together
                — a generic Ecobee or Nest will either not work or will
                fight the zone panel. Third, any situation where you have
                opened the furnace access panel and you cannot identify
                which terminals are which on the control board, or the wires
                are unlabeled and tangled. Pay the $75-150 service call
                rather than guessing. Fourth, if your insurance or warranty
                (new-construction builder warranty, home warranty plan) only
                honors coverage for licensed-contractor installs.
              </p>

              <p className="text-foreground leading-relaxed">
                Typical California rates for a basic smart thermostat swap
                range from $75-200 for just the swap, assuming the homeowner
                has already purchased the thermostat. Running a new C-wire
                adds $150-350. A full thermostat-plus-new-C-wire job
                typically lands at $250-500 through an independent HVAC tech
                or handyman. Large national HVAC chains — ARS, Service
                Experts, American Home Shield contractors — tend to run
                $50-150 higher for the same work.
              </p>

              <p className="text-foreground leading-relaxed">
                Cheaper option for many California homeowners: your utility.
                SCE, PG&E, and SDG&E all partner with third parties (Sealed,
                Franklin Energy, Simple Energy) to offer reduced-cost or
                free smart thermostat installs in exchange for enrolling in
                a demand-response program. The install is real, the
                thermostat is usually an Ecobee or Honeywell T6 Pro, and the
                demand-response commitment is typically 4-15 events per year
                with a 2-4°F temperature shift for 2 hours. Check your
                utility&apos;s online marketplace before paying full price
                out of pocket.
              </p>

              {/* California context */}
              <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">
                California Title 24 Part 6 Compliance
              </h2>
              <p className="text-foreground leading-relaxed">
                California&apos;s Title 24, Part 6 (the Building Energy
                Efficiency Standards, last major update 2022 cycle effective
                2023) requires a programmable setback thermostat on all new
                residential construction with central HVAC, and on most
                retrofits that involve replacing the furnace or air handler.
                Any modern smart thermostat — Ecobee, Nest, Honeywell T10,
                Emerson Sensi Touch — clears the programmable setback
                requirement automatically, because they all support at least
                4-period daily programming.
              </p>

              <p className="text-foreground leading-relaxed">
                For a standalone thermostat replacement — swapping an old
                mercury or digital stat for an Ecobee — no California
                jurisdiction requires a building permit. You are not
                modifying the mechanical system, not changing the
                transformer, and not altering any line-voltage wiring. The
                only exception is zoned systems where replacing the zone
                controller is considered a control-system modification — in
                Los Angeles County and San Diego County, some jurisdictions
                require a mechanical permit for that work.
              </p>

              <p className="text-foreground leading-relaxed">
                If you are doing a full HVAC replacement and upgrading to a
                smart thermostat as part of that job, the smart thermostat
                becomes part of the overall HERS verification and Title 24
                compliance paperwork the HVAC contractor files. In that case,
                you do not install the thermostat yourself — the contractor
                does, because their license is on the line for the permit.
              </p>

              <p className="text-foreground leading-relaxed">
                One other compliance note: Title 20 (California&apos;s
                appliance efficiency standards) requires smart thermostats
                sold in the state to meet certain Wi-Fi security and
                occupancy-sensing requirements. Every major brand — Ecobee,
                Nest, Honeywell, Emerson — is compliant by default. If you
                buy an off-brand thermostat online for $30-50, check the
                product listing for &quot;California Title 20 compliant&quot;
                before you buy — a handful of cheap Amazon-only brands do
                not meet the standard and are technically illegal to sell
                into California (though enforcement is effectively zero).
              </p>

              {/* Pros and Cons grid */}
              <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">
                Is It Worth Doing Yourself?
              </h2>

              <div className="not-prose my-6 grid md:grid-cols-2 gap-6">
                <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-6">
                  <h3 className="text-green-400 font-bold mb-4 flex items-center gap-2">
                    <Check className="h-5 w-5" /> DIY Advantages
                  </h3>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>
                        Save $75-200 on the swap, $150-500 if a new C-wire is
                        needed
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>
                        20-45 minutes on standard systems (less than a service
                        call&apos;s wait time)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>
                        Zero electrocution risk on 24V systems — this is
                        beginner-friendly work
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>
                        You learn your own HVAC wiring, useful for future
                        upgrades
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>
                        Full control of the app-side setup and demand-response
                        enrollment
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-6">
                  <h3 className="text-red-400 font-bold mb-4 flex items-center gap-2">
                    <X className="h-5 w-5" /> DIY Downsides
                  </h3>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li className="flex items-start gap-2">
                      <X className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>
                        No one to call if you accidentally pop the furnace 3A
                        fuse
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>
                        No pro to identify unusual configs (zoned, dual
                        transformer, heat pump with backup)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>
                        Running a new C-wire is genuinely 2-3 hours of attic
                        crawling
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>
                        No receipt for home warranty or builder-warranty
                        documentation
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>
                        Missing your utility&apos;s free-install program if
                        you qualify for one
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Troubleshooting */}
              <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">
                Troubleshooting: What to Do If Something Goes Wrong
              </h2>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">
                Display does not light up
              </h3>
              <p className="text-foreground leading-relaxed">
                Most common cause: R-wire loose at the new terminal, or the
                HVAC breaker was not the correct one. Pull the thermostat
                body off the backplate and check that each wire is firmly
                seated — push-down terminals should fully depress and hold
                the wire when pulled gently. Second most common: no C-wire
                and you bought a thermostat that strictly requires one
                (Honeywell T10, older Ecobee models). Install the PEK or
                Power Connector.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">
                Heating runs but AC does not (or vice versa)
              </h3>
              <p className="text-foreground leading-relaxed">
                Almost always a wire landed on the wrong terminal — W and Y
                swapped, or Y missing, or the orange O/B wire not connected
                on a heat pump. Pull your photo of the old wiring and
                double-check each color against the original terminal, then
                against the new terminal. On heat pump systems, also check
                that you selected &quot;heat pump&quot; (not &quot;gas
                furnace&quot;) during the in-app equipment setup — the
                thermostat will fire the wrong outputs if the equipment type
                is wrong.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">
                Short cycling (system turns on and off every 1-2 minutes)
              </h3>
              <p className="text-foreground leading-relaxed">
                Usually a no-C-wire install where the thermostat is trying to
                power-steal through the Y or W call. Install the PEK or
                Power Connector and it goes away immediately. Less commonly,
                the thermostat&apos;s &quot;minimum run time&quot; setting is
                set to zero — check the HVAC settings in the app and set
                minimum run time to 5 minutes for heat and 10 minutes for
                cool.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">
                Wi-Fi drops every few hours
              </h3>
              <p className="text-foreground leading-relaxed">
                Either insufficient power (install a C-wire adapter) or the
                thermostat is on the edge of your 2.4 GHz Wi-Fi coverage.
                Check the Wi-Fi signal strength in the app&apos;s diagnostics
                — anything below -70 dBm will cause issues. Move your router
                or add a mesh node.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">
                Thermostat reads 3-5°F low
              </h3>
              <p className="text-foreground leading-relaxed">
                Wall draft — common on exterior-wall mounts. Pull the
                thermostat off, stuff the wire hole with plumber&apos;s putty
                or foam insulation, and remount. You can also adjust the
                temperature offset in the app&apos;s settings by a matching
                amount, but fixing the draft is the better long-term
                solution.
              </p>

              {/* Final CTA */}
              <AffiliateCTABox
                productKey={PRODUCT_KEY}
                variant="final"
                headline="Our default recommendation: Ecobee Premium"
                subline="PEK in the box, room sensors, the best voice-assistant support in the category, and solid demand-response compatibility with SCE, PG&E, and SDG&E. The easiest smart thermostat to self-install on a standard California forced-air system."
              />

              {/* FAQ */}
              <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">
                FAQ
              </h2>

              <div className="not-prose space-y-4 my-8">
                <div className="rounded-xl border border-border bg-muted/20 p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    How long does it take to install a smart thermostat?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    20-45 minutes for a first-time DIY install on a standard
                    24V system with an existing C-wire. Add 15-20 minutes if
                    you need to install a C-wire adapter (Ecobee PEK, Nest
                    Power Connector, or Venstar Add-A-Wire) at the furnace
                    control board. Running a brand-new C-wire cable from
                    scratch runs 2-3 hours.
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-muted/20 p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    Do I need a C-wire for a smart thermostat?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Most modern smart thermostats perform best with a
                    dedicated C-wire. Without one they either power-steal
                    through the heat/cool call (risk of short-cycling and
                    Wi-Fi drops) or need a compatibility adapter. The Nest
                    Learning Thermostat 4th generation and Nest Thermostat
                    (base model) are designed to work without a C-wire on
                    most systems; Ecobee and Honeywell still strongly
                    recommend one.
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-muted/20 p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    Can I install a smart thermostat myself?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Yes — on a standard 24V low-voltage central HVAC system,
                    this is genuinely beginner-friendly DIY work. There is
                    no electrocution risk once the HVAC breaker is off. The
                    hardest parts are photographing the old wiring before
                    removal (non-optional) and deciding whether your system
                    has a C-wire or needs an adapter.
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-muted/20 p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    How much does it cost to hire a pro?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A local HVAC tech or handyman charges $75-$200 for a
                    basic California smart thermostat install. Running a
                    new C-wire adds $150-$350. Check your utility&apos;s
                    marketplace first — SCE, PG&E, and SDG&E all run
                    demand-response programs that offer reduced-cost or
                    free smart thermostats and installs.
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-muted/20 p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    What if my system is millivolt or line-voltage?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Most smart thermostats do NOT work with millivolt
                    (~750 mV, old gas wall/floor furnaces) or line-voltage
                    (120V/240V electric baseboard). Use a specialty stat —
                    Ecobee EB-STATE6-01 with millivolt adapter for millivolt;
                    Mysa, Stelpro, or Sinope for line-voltage. Hiring a
                    pro is usually the right call on these systems.
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-muted/20 p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    Does California Title 24 require a specific thermostat?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    California Title 24, Part 6 requires a programmable
                    setback thermostat on new construction and most major
                    HVAC retrofits. Any modern smart thermostat (Ecobee,
                    Nest, Honeywell, Emerson) satisfies the setback
                    requirement. No permit is required for a standalone
                    thermostat swap in California.
                  </p>
                </div>
              </div>

              {/* Bottom line */}
              <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">
                The Bottom Line
              </h2>
              <p className="text-foreground leading-relaxed">
                For about 80% of California homeowners, installing a smart
                thermostat is a 30-minute Saturday-morning project with a
                screwdriver, a phone camera, and a breaker flip. You save
                $75-$200 in labor, learn your own HVAC wiring, and end up
                with a unit running demand-response and pre-cooling on your
                own schedule instead of the installer&apos;s defaults.
              </p>

              <p className="text-foreground leading-relaxed">
                The exceptions are real but manageable. No C-wire? Ecobee
                ships the Power Extender Kit in the box free. Nest gives you
                the $25 Power Connector. Either turns a 4-wire system into a
                fully-powered 5-wire setup in 15-20 extra minutes at the
                furnace control board. Millivolt or line-voltage system?
                Different problem entirely — you need a specialty
                thermostat, and this is the one case where hiring an HVAC
                tech is usually the right answer.
              </p>

              <p className="text-foreground leading-relaxed">
                Our default recommendation for first-time self-installers
                remains the Ecobee Smart Thermostat Premium. The PEK in the
                box eliminates the most common install blocker, the color
                display and built-in speaker are best-in-class, and the
                demand-response integration with California utilities is
                rock solid. If you want the cheapest path to a working
                smart thermostat and you have a C-wire already, the base
                Nest Thermostat is $129-149 and installs in 20 minutes.
              </p>

              <p className="text-foreground leading-relaxed">
                Before you pay full price, always check your utility&apos;s
                marketplace. SCE, PG&E, and SDG&E all run demand-response
                programs that either discount the thermostat hardware or
                give it to you free in exchange for a few peak-event
                temperature shifts per summer. The math almost always works
                out in the homeowner&apos;s favor.
              </p>

              {/* Related nav */}
              <div className="not-prose my-10 rounded-xl border border-border bg-muted/30 p-6">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Home className="h-5 w-5 text-green-400" />
                  Still Picking a Smart Thermostat?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Compare the full 2026 shortlist before you commit to one
                  brand.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/reviews/best-smart-thermostat"
                    className="inline-flex items-center gap-1 text-sm text-green-400 hover:text-green-300 transition"
                  >
                    Best Smart Thermostat 2026{' '}
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                  <Link
                    href="/reviews/ecobee-thermostat-review"
                    className="inline-flex items-center gap-1 text-sm text-green-400 hover:text-green-300 transition"
                  >
                    Ecobee Premium Full Review{' '}
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                  <Link
                    href="/reviews/nest-thermostat-review"
                    className="inline-flex items-center gap-1 text-sm text-green-400 hover:text-green-300 transition"
                  >
                    Google Nest Thermostat Review{' '}
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                  <Link
                    href="/reviews/honeywell-smart-thermostat-review"
                    className="inline-flex items-center gap-1 text-sm text-green-400 hover:text-green-300 transition"
                  >
                    Honeywell T10 Pro Review{' '}
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>

              {/* Bottom nav */}
              <div className="not-prose flex items-center justify-between border-t border-border pt-6">
                <Link
                  href="/reviews"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
                >
                  <ArrowLeft className="h-4 w-4" /> All Reviews
                </Link>
                <Link
                  href="/reviews/best-smart-thermostat"
                  className="inline-flex items-center gap-2 text-sm text-green-400 hover:text-green-300 transition"
                >
                  Best Smart Thermostat 2026 <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </section>
          </article>
        </div>
      </main>

      <StickyMobileCTA productKey={PRODUCT_KEY} />
      <ReviewFooter />
    </ReviewLayout>
  );
}
