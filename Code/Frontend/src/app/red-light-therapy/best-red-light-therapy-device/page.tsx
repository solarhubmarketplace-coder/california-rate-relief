import type { Metadata } from 'next';
import Link from 'next/link';
import { AHBLayout } from '@/components/ahb/AHBLayout';
import { AHBHeader } from '@/components/ahb/AHBHeader';
import { AHBFooter } from '@/components/ahb/AHBFooter';
import { ChevronRight, ExternalLink, CheckCircle2, XCircle } from 'lucide-react';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { LastReviewedStamp } from '@/components/shared/LastReviewedStamp';

export const metadata: Metadata = {
  title: 'Best Red Light Therapy Device 2026: Research-Backed Rankings',
  description:
    'Honest 2026 rankings of red light therapy panels, masks, and targeted devices. FDA-clearance status, real irradiance data, and which devices actually deliver therapeutic doses.',
  alternates: { canonical: 'https://athomebiohacking.com/red-light-therapy/best-red-light-therapy-device' },
  openGraph: {
    title: 'Best Red Light Therapy Device 2026',
    description: 'Research-backed rankings of red light therapy devices for face, body, and targeted use.',
    type: 'article',
    publishedTime: '2026-04-24T00:00:00Z',
    url: 'https://athomebiohacking.com/red-light-therapy/best-red-light-therapy-device',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Red Light Therapy Device 2026: Research-Backed Rankings',
  datePublished: '2026-04-24',
  dateModified: '2026-04-24',
  author: { '@type': 'Organization', name: 'At Home Biohacking', url: 'https://athomebiohacking.com' },
  publisher: { '@type': 'Organization', name: 'At Home Biohacking', url: 'https://athomebiohacking.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://athomebiohacking.com/red-light-therapy/best-red-light-therapy-device' },
};

const DEVICES = [
  {
    rank: 1,
    name: 'CurrentBody Skin LED Light Therapy Mask',
    category: 'Best Face Mask',
    price: '$399',
    wavelengths: '633 nm + 830 nm',
    pros: [
      'FDA-cleared Class II medical device for anti-aging',
      'Combined 633 nm + 830 nm — the exact wavelengths with strongest skin RCT evidence',
      'Flexible silicone fits most face shapes',
      '10-minute treatment time hits therapeutic dose',
    ],
    cons: [
      'Face-only; does not treat body or targeted areas',
      'Rechargeable battery means some charging logistics',
    ],
    bottomLine: 'The category-defining face mask. If your goal is collagen density, wrinkle depth, and skin elasticity, this is the device with the best evidence-aligned spec.',
  },
  {
    rank: 2,
    name: 'Kineon MOVE+ Pro',
    category: 'Best Portable / Targeted',
    price: '$899',
    wavelengths: '635 nm + 808 nm (laser + LED)',
    pros: [
      'Laser-class penetration (808 nm laser diodes) — deeper reach than LED-only panels',
      'Wrap design targets specific joints (knee, elbow, shoulder)',
      'FDA-cleared medical-grade device',
      'Strong RCT evidence in orthopedic indications',
    ],
    cons: [
      'Premium pricing',
      'Small treatment area per session, best for focal pain, not full-body',
    ],
    bottomLine: 'The serious choice for knee osteoarthritis, tendonitis, or any localized musculoskeletal pain. The laser + LED combination penetrates deeper than panel-only devices.',
  },
  {
    rank: 3,
    name: 'Hooga HG300 Red Light Therapy Panel',
    category: 'Best Full-Body Value',
    price: '$349',
    wavelengths: '660 nm + 850 nm',
    pros: [
      'Solid irradiance for the price (>100 mW/cm² at 6 inches)',
      'Combined red + near-infrared',
      'Solid build quality and 3-year warranty',
      'Third-party irradiance spec data published',
    ],
    cons: [
      'Smaller panel than premium options, more session time for full-body coverage',
      'Not FDA-cleared (marketed as wellness, not medical)',
    ],
    bottomLine: 'The honest value pick. Hooga delivers therapeutic irradiance at a price point that makes consistency practical.',
  },
  {
    rank: 4,
    name: 'Mito Red MitoMAX+',
    category: 'Best Premium Full-Body',
    price: '$1,499',
    wavelengths: '630/660 nm + 810/830/850 nm',
    pros: [
      'Four-wavelength array (two red + three near-IR)',
      'Large treatment area — full torso coverage',
      'Published third-party irradiance and spectral data',
      'Serious build quality, 3-year warranty',
    ],
    cons: [
      'Premium pricing',
      'Full-size panel needs mounting or stand',
    ],
    bottomLine: 'If you want the most complete wavelength coverage available in the home market and have the space and budget, this is the top tier.',
  },
];

export default function BestRedLightTherapyDevice() {
  return (
    <AHBLayout>
      <AHBHeader />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className='py-16' style={{ backgroundColor: '#0a1a14' }}>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <nav className='mb-8 text-sm flex items-center gap-2 flex-wrap' style={{ color: '#6ee7b7' }}>
              <Link href='/' style={{ color: '#a7f3d0' }}>Home</Link>
              <ChevronRight className='h-3 w-3' />
              <Link href='/red-light-therapy' style={{ color: '#a7f3d0' }}>Red Light Therapy</Link>
              <ChevronRight className='h-3 w-3' />
              <span style={{ color: '#f0fdf4' }}>Best Device</span>
            </nav>

            <header className='mb-10'>
              <span className='inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4' style={{ backgroundColor: '#34d39922', color: '#34d399' }}>
                Buying Guide · April 2026
              </span>
              <h1 className='text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight' style={{ color: '#f0fdf4' }}>
                Best Red Light Therapy Device 2026
              </h1>
              
              <LastReviewedStamp date="2026-04-24" variant="reviewed" palette={{ fg: '#f5f5f5', muted: '#a1a1aa', border: '#251a44', accent: '#ec4899' }} />
<p className='text-sm' style={{ color: '#a7f3d0' }}>
                Honest rankings. Real irradiance data. Devices with the strongest research-aligned specs — not the loudest marketing.
              </p>
            </header>

            <div className='space-y-6 leading-relaxed' style={{ color: '#a7f3d0' }}>
              <p className='text-lg'>
                The red light therapy market is noisy. Every &quot;best of&quot; list recommends whatever brand has the biggest affiliate program. Here is the honest version. Ranked by which devices actually deliver the wavelengths, irradiance, and dose that match the peer-reviewed research base summarized in our <Link href='/red-light-therapy/red-light-therapy-benefits' style={{ color: '#34d399' }} className='underline'>red light therapy benefits</Link> page.
              </p>

              <p className='p-4 rounded-lg border text-sm' style={{ backgroundColor: '#1a2a22', borderColor: '#2a3a30', color: '#6ee7b7' }}>
                <strong style={{ color: '#f0fdf4' }}>Quick answer:</strong> For skin: <strong style={{ color: '#f0fdf4' }}>CurrentBody Skin LED Mask</strong>. For targeted pain: <strong style={{ color: '#f0fdf4' }}>Kineon MOVE+ Pro</strong>. For full-body value: <strong style={{ color: '#f0fdf4' }}>Hooga HG300</strong>. For top-tier full-body: <strong style={{ color: '#f0fdf4' }}>Mito Red MitoMAX+</strong>.
              </p>

              {/* WHAT MATTERS */}
              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f0fdf4' }}>
                What Actually Matters in a Red Light Therapy Device
              </h2>
              <div className='space-y-3'>
                <div className='flex gap-3'>
                  <CheckCircle2 className='h-5 w-5 flex-shrink-0 mt-0.5' style={{ color: '#34d399' }} />
                  <div><strong style={{ color: '#f0fdf4' }}>Wavelength specs.</strong> Research supports 630–670 nm red + 810–850 nm near-infrared. Cheap panels often use LEDs that drift 20+ nm off these windows.</div>
                </div>
                <div className='flex gap-3'>
                  <CheckCircle2 className='h-5 w-5 flex-shrink-0 mt-0.5' style={{ color: '#34d399' }} />
                  <div><strong style={{ color: '#f0fdf4' }}>Irradiance.</strong> Look for ≥100 mW/cm² measured at the skin surface. Low-irradiance panels can still work but require longer sessions.</div>
                </div>
                <div className='flex gap-3'>
                  <CheckCircle2 className='h-5 w-5 flex-shrink-0 mt-0.5' style={{ color: '#34d399' }} />
                  <div><strong style={{ color: '#f0fdf4' }}>Third-party test data.</strong> Reputable brands publish independent irradiance and wavelength test results.</div>
                </div>
                <div className='flex gap-3'>
                  <CheckCircle2 className='h-5 w-5 flex-shrink-0 mt-0.5' style={{ color: '#34d399' }} />
                  <div><strong style={{ color: '#f0fdf4' }}>Treatment area.</strong> Match to your goal. Face-only work does not need a full-body panel. Joint pain needs a wrap, not a panel.</div>
                </div>
                <div className='flex gap-3'>
                  <XCircle className='h-5 w-5 flex-shrink-0 mt-0.5' style={{ color: '#ef4444' }} />
                  <div><strong style={{ color: '#f0fdf4' }}>Avoid:</strong> devices that do not publish wavelengths, irradiance data, or independent test results. If they will not disclose the specs, the specs are bad.</div>
                </div>
              </div>

              {/* RANKINGS */}
              <h2 className='text-2xl font-bold mt-10 mb-6' style={{ color: '#f0fdf4' }}>
                2026 Rankings
              </h2>

              {DEVICES.map((d) => (
                <div key={d.rank} className='p-6 rounded-xl border mb-6' style={{ backgroundColor: '#1a2a22', borderColor: '#2a3a30' }}>
                  <div className='flex items-start justify-between gap-4 mb-4 flex-wrap'>
                    <div>
                      <div className='text-xs font-bold uppercase tracking-wider mb-1' style={{ color: '#34d399' }}>#{d.rank} · {d.category}</div>
                      <h3 className='text-xl font-bold' style={{ color: '#f0fdf4' }}>{d.name}</h3>
                      <div className='text-sm mt-1' style={{ color: '#6ee7b7' }}>{d.wavelengths}</div>
                    </div>
                    <div className='text-right'>
                      <div className='text-2xl font-bold' style={{ color: '#34d399' }}>{d.price}</div>
                    </div>
                  </div>
                  <p className='mb-4'>{d.bottomLine}</p>
                  <div className='grid md:grid-cols-2 gap-4'>
                    <div>
                      <div className='text-xs font-bold uppercase tracking-wider mb-2' style={{ color: '#34d399' }}>Pros</div>
                      <ul className='space-y-1 text-sm'>
                        {d.pros.map((p, i) => (
                          <li key={i} className='flex gap-2'><CheckCircle2 className='h-4 w-4 flex-shrink-0 mt-0.5' style={{ color: '#34d399' }} /> <span>{p}</span></li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className='text-xs font-bold uppercase tracking-wider mb-2' style={{ color: '#f59e0b' }}>Cons</div>
                      <ul className='space-y-1 text-sm'>
                        {d.cons.map((c, i) => (
                          <li key={i} className='flex gap-2'><XCircle className='h-4 w-4 flex-shrink-0 mt-0.5' style={{ color: '#f59e0b' }} /> <span>{c}</span></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}

              {/* PROTOCOL */}
              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f0fdf4' }}>
                How to Use Any of These Devices
              </h2>
              <div className='grid md:grid-cols-2 gap-4 my-6'>
                <div className='p-5 rounded-xl border' style={{ backgroundColor: '#1a2a22', borderColor: '#2a3a30' }}>
                  <div className='text-xs font-bold uppercase tracking-wider mb-2' style={{ color: '#34d399' }}>Session</div>
                  <div className='text-2xl font-bold mb-1' style={{ color: '#f0fdf4' }}>10–20 min</div>
                  <div className='text-sm'>Higher-irradiance devices need less time. Mask/wrap timers are usually calibrated correctly.</div>
                </div>
                <div className='p-5 rounded-xl border' style={{ backgroundColor: '#1a2a22', borderColor: '#2a3a30' }}>
                  <div className='text-xs font-bold uppercase tracking-wider mb-2' style={{ color: '#34d399' }}>Frequency</div>
                  <div className='text-2xl font-bold mb-1' style={{ color: '#f0fdf4' }}>3–5×/week</div>
                  <div className='text-sm'>Effects are cumulative. Evaluate after 8–12 weeks of consistent use.</div>
                </div>
                <div className='p-5 rounded-xl border' style={{ backgroundColor: '#1a2a22', borderColor: '#2a3a30' }}>
                  <div className='text-xs font-bold uppercase tracking-wider mb-2' style={{ color: '#34d399' }}>Distance</div>
                  <div className='text-2xl font-bold mb-1' style={{ color: '#f0fdf4' }}>6–18 in</div>
                  <div className='text-sm'>Panels: 6–12 inches for body, 12–18 for face. Masks/wraps: direct contact.</div>
                </div>
                <div className='p-5 rounded-xl border' style={{ backgroundColor: '#1a2a22', borderColor: '#2a3a30' }}>
                  <div className='text-xs font-bold uppercase tracking-wider mb-2' style={{ color: '#34d399' }}>Skin prep</div>
                  <div className='text-2xl font-bold mb-1' style={{ color: '#f0fdf4' }}>Clean, dry</div>
                  <div className='text-sm'>No sunscreen, heavy moisturizer, or makeup during treatment, these block wavelength absorption.</div>
                </div>
              </div>

              {/* SAFETY */}
              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f0fdf4' }}>
                Safety Notes
              </h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li>Wear provided goggles for face/eye treatments to protect retina</li>
                <li>Photosensitizing medications (isotretinoin, tetracyclines, some diuretics) increase reaction risk, consult your physician</li>
                <li>Active skin cancer or suspicious lesions: clear with dermatologist first</li>
                <li>Pregnancy: conservative use; avoid direct abdominal treatment</li>
              </ul>

              {/* REFERENCES */}
              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f0fdf4' }}>Research Base</h2>
              <p className='text-sm mb-4'>
                Device rankings below are grounded in the peer-reviewed photobiomodulation literature. The most-cited foundational and clinical papers:
              </p>
              <ol className='space-y-3 list-decimal pl-6 text-sm'>
                <li>
                  Chung H, Dai T, Sharma SK, Huang YY, Carroll JD, Hamblin MR. The nuts and bolts of low-level laser (light) therapy. <em>Ann Biomed Eng.</em> 2012;40(2):516-33. PMID:{' '}
                  <a href='https://pubmed.ncbi.nlm.nih.gov/22045511/' style={{ color: '#34d399' }} className='underline' target='_blank' rel='noopener'>22045511</a>. Foundational review on dose, wavelength, and biphasic response — the basis for the &quot;irradiance &gt; 100 mW/cm²&quot; threshold used in device reviews.
                </li>
                <li>
                  Wunsch A, Matuschka K. A controlled trial to determine the efficacy of red and near-infrared light treatment in patient satisfaction, reduction of fine lines, wrinkles, skin roughness, and intradermal collagen density increase. <em>Photomed Laser Surg.</em> 2014;32(2):93-100. PMID:{' '}
                  <a href='https://pubmed.ncbi.nlm.nih.gov/24286286/' style={{ color: '#34d399' }} className='underline' target='_blank' rel='noopener'>24286286</a>. The skin/collagen trial that underpins face-mask and panel skin-rejuvenation claims.
                </li>
                <li>
                  Avci P, Gupta A, Sadasivam M, Vecchio D, Pam Z, Pam N, Hamblin MR. Low-level laser (light) therapy (LLLT) in skin: stimulating, healing, restoring. <em>Semin Cutan Med Surg.</em> 2013;32(1):41-52. PMID:{' '}
                  <a href='https://pubmed.ncbi.nlm.nih.gov/24049929/' style={{ color: '#34d399' }} className='underline' target='_blank' rel='noopener'>24049929</a>. Harvard / Wellman Center review of PBM on skin.
                </li>
                <li>
                  Lanzafame RJ, Blanche RR, Bodian AB, Chiacchierini RP, Fernandez-Obregon A, Kazmirek ER. The growth of human scalp hair mediated by visible red light laser and LED sources in males. <em>Lasers Surg Med.</em> 2013;45(8):487-95. PMID:{' '}
                  <a href='https://pubmed.ncbi.nlm.nih.gov/24078483/' style={{ color: '#34d399' }} className='underline' target='_blank' rel='noopener'>24078483</a>. RCT underpinning FDA 510(k) clearances for hair-growth devices.
                </li>
                <li>
                  Leal-Junior EC, Vanin AA, Miranda EF, de Carvalho PT, Dal Corso S, Bjordal JM. Effect of phototherapy on exercise performance and markers of exercise recovery: systematic review with meta-analysis. <em>Lasers Med Sci.</em> 2015;30(2):925-39. PMID:{' '}
                  <a href='https://pubmed.ncbi.nlm.nih.gov/23619627/' style={{ color: '#34d399' }} className='underline' target='_blank' rel='noopener'>23619627</a>. Basis for muscle-recovery protocol claims.
                </li>
              </ol>

              {/* RELATED */}
              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f0fdf4' }}>Related Reading</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li><Link href='/red-light-therapy/red-light-therapy-benefits' style={{ color: '#34d399' }} className='underline'>Red Light Therapy Benefits</Link> — the research base behind these rankings.</li>
                <li><Link href='/red-light-therapy' style={{ color: '#34d399' }} className='underline'>Red Light Therapy Hub</Link>; category overview.</li>
                <li><Link href='/infrared-sauna/best-sauna-blanket' style={{ color: '#34d399' }} className='underline'>Best Sauna Blanket</Link>, related wavelengths at sauna doses.</li>
              </ul>

              {/* DISCLAIMER */}
              <div className='p-5 rounded-xl border mt-10 text-sm' style={{ backgroundColor: '#1a2a22', borderColor: '#2a3a30' }}>
                <div className='font-bold mb-2' style={{ color: '#f0fdf4' }}>Medical Disclaimer &amp; Affiliate Disclosure</div>
                <p>
                  Informational only; not medical advice. FDA-cleared devices are cleared for specific indications, consult manufacturer documentation. We may earn commission on purchases through affiliate links at no additional cost to you; our rankings are editorial and based on evidence, not commission rates. See the full <Link href='/learn/medical-disclaimer' style={{ color: '#34d399' }} className='underline'>medical disclaimer</Link> and <Link href='/learn/affiliate-disclosure' style={{ color: '#34d399' }} className='underline'>affiliate disclosure</Link>.
                </p>
              </div>
            </div>
          </article>
        </div>
      </main>
      <AHBFooter />
      <div className="container mx-auto px-4 max-w-3xl">
        <AuthorBio domain="ahb" palette={{ fg: '#f5f5f5', muted: '#d4d4d8', mutedFg: '#71717a', accent: '#ec4899', cardBg: '#15102a', cardBorder: '#251a44' }} />
      </div>

    </AHBLayout>
  );
}
