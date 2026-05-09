/**
 * Peptide therapy catalog — drives /peptides and /peptides/[slug] pages.
 *
 * Consumer-focused content for peptides commonly stacked with GLP-1 medications
 * (BPC-157, TB-500, PT-141, Ipamorelin/CJC-1295, AOD-9604).
 *
 * Data verified by Gronk on 2026-05-08:
 *   - FDA Category 2 status updates from Feb 2026 (RFK Jr. announcement) and
 *     April 2026 removals from the restricted list.
 *   - July 23-24, 2026 PCAC review pending for several peptides.
 *   - Pricing pulled from telehealth provider sites (Desert Mobile Medical,
 *     BeyondMD, Sands Weight Loss, Aspire Health, Perfect B, Defy Medical,
 *     Evolved Medical, Hone Health, Boston Medical Group, TestDepot).
 *   - Reddit threads (r/Peptides, r/Semaglutide, r/Tirzepatide) May 2025-2026.
 *
 * IMPORTANT: No peptide listed here is FDA-approved for the off-label uses
 * consumers chase. Evidence base remains thin; pages must include disclaimers
 * and "consult your provider" CTAs.
 */

export interface PeptideProvider {
  name: string;
  pricingNote: string;
  /** Optional slug for buildGlp1AffiliateUrl if we have an affiliate link */
  slug?: string;
}

export interface Peptide {
  slug: string;
  name: string;
  fullName?: string;
  category: 'Repair / Recovery' | 'Hormonal / Anti-Aging' | 'Sexual Health' | 'Fat Loss';
  /** One-line marketing hook for hero */
  hook: string;
  /** Short consumer-friendly description */
  description: string;
  /** Mechanism of action (1-2 sentences, plain language) */
  mechanism: string;
  /** What consumers actually use it for (off-label, by goal) */
  consumerUses: string[];
  /** Legal/regulatory status as of May 2026 */
  legalStatus: string;
  /** Available telehealth providers + pricing */
  providers: PeptideProvider[];
  /** Brief evidence summary */
  evidenceSummary: string;
  /** Typical dosing protocol consumers follow */
  typicalDosing: string;
  /** Real user reports from Reddit/forums (May 2025-2026) */
  userReports: string;
  /** Safety concerns + contraindications */
  safety: string;
  /** Best reason a GLP-1 user would add this */
  bestReason: string;
  /** Biggest red flag */
  redFlag: string;
  /** Last-updated date for freshness */
  lastUpdated: string;
}

export const peptides: Peptide[] = [
  {
    slug: 'bpc-157',
    name: 'BPC-157',
    fullName: 'Body Protection Compound 157',
    category: 'Repair / Recovery',
    hook: 'The "Wolverine" peptide for gut healing and tissue repair — popular with GLP-1 users managing GI side effects and joint stress.',
    description:
      'BPC-157 is a synthetic 15-amino-acid peptide derived from a protein found in human gastric juice. It is the most widely discussed peptide on Reddit and in longevity circles, primarily for gut healing, joint repair, and post-injury recovery.',
    mechanism:
      'Promotes angiogenesis (new blood vessel growth), modulates inflammatory cytokines, and accelerates extracellular matrix repair. Most evidence is from rodent and in vitro studies showing strong tendon, gut, and wound-healing effects via VEGF pathways.',
    consumerUses: [
      'Gut healing — leaky gut, IBD-like symptoms, GI distress (popular with GLP-1 users experiencing nausea or constipation)',
      'Joint, tendon, and ligament repair after injury',
      'Muscle recovery and reduced post-exercise inflammation',
      'Post-surgical recovery support',
    ],
    legalStatus:
      'Not FDA-approved for any use. Removed from FDA Category 2 restricted list in April 2026; now eligible for patient-specific 503A compounding with a valid prescription. Still requires physician oversight via licensed telehealth — gray-market "research peptide" sales remain illegal for human use.',
    providers: [
      { name: 'Desert Mobile Medical', pricingNote: '~$399/mo (includes visits and supervision)' },
      { name: 'BeyondMD', pricingNote: 'BPC-157/TB-500 blend from $239/mo' },
      { name: 'Sands Weight Loss & Wellness', pricingNote: '$200/30-day supply (blend protocol)' },
      { name: 'Perfect B / Aspire Health', pricingNote: '$150-$495/mo single peptide or stack' },
    ],
    evidenceSummary:
      '35+ years of rodent and in vitro studies show strong tendon, gut, and wound-healing effects. Human data is extremely limited: one small retrospective knee-pain series (12 patients with reported pain relief), one 12-woman bladder-pain pilot, and small IV safety pilots. No large randomized controlled trials have been published. 2025 systematic reviews flag the gap as "promising preclinical but zero high-quality human trials."',
    typicalDosing:
      'Most consumer protocols use 250-500 mcg/day subcutaneously (injected near the injury site for joints, or abdominal for gut applications). Oral capsule formulations are also available but bioavailability is uncertain. Typical cycles run 4-8 weeks, often with a 5-days-on / 2-days-off pattern.',
    userReports:
      'Strong anecdotal reports of faster ACL/meniscus recovery, reduced arthritis pain, and improved GLP-1 GI tolerance. The "Wolverine stack" (BPC-157 + TB-500) is widely praised on Reddit for joint and soft-tissue repair. Some users report no effect; a minority report side effects including whole-body itch, anxiety, or anhedonia. Placebo effects and concurrent rest/activity changes likely contribute to perceived results.',
    safety:
      'Limited human long-term data. Potential immunogenicity or contamination risk from poor sourcing makes provider verification critical. Theoretical concerns about angiogenesis effects in patients with cancer history. Avoid during pregnancy. Monitor for injection-site reactions. Verify pharmacy is licensed 503A with documented sourcing.',
    bestReason:
      'Counters the most common GLP-1 side effects (GI distress, joint stress from rapid weight loss) with a peptide that has decades of preclinical safety data and a strong recovery-focused mechanism.',
    redFlag:
      'Near-total absence of large controlled human trials means consumers are essentially self-experimenting on unproven long-term safety and efficacy. The animal data does not automatically translate.',
    lastUpdated: '2026-05-08',
  },
  {
    slug: 'ipamorelin-cjc-1295',
    name: 'Ipamorelin + CJC-1295',
    fullName: 'GH Secretagogue Stack',
    category: 'Hormonal / Anti-Aging',
    hook: 'The growth-hormone-pulse stack: paired peptides that mimic natural GH release without cortisol or prolactin spikes.',
    description:
      'Ipamorelin and CJC-1295 are almost always stacked together. CJC-1295 is a growth-hormone-releasing hormone (GHRH) analog that extends the GH release window; Ipamorelin is a ghrelin mimetic that triggers clean GH pulses without the cortisol or prolactin elevation seen with older secretagogues.',
    mechanism:
      'Complementary mechanisms create synergistic, more "natural" growth hormone elevation than either peptide alone. The stack increases IGF-1 and may improve sleep depth, body composition, and recovery in some studies.',
    consumerUses: [
      'Anti-aging support (skin, hair, body composition)',
      'Deeper sleep and improved sleep architecture',
      'Lean muscle preservation during calorie deficit (especially relevant for GLP-1 users)',
      'Exercise recovery and reduced training fatigue',
    ],
    legalStatus:
      'Not FDA-approved. Removed from FDA Category 2 restricted list (some via 2024-2026 settlements). Now compoundable under prescription in compliant 503A pharmacies pending July 2026 PCAC finalization. Telehealth oversight required.',
    providers: [
      { name: 'Evolved Medical', pricingNote: '$249/mo subscription (includes vials, labs, visits)' },
      { name: 'InjectCo / Texas clinics', pricingNote: '$200-$450/mo' },
      { name: 'Perfect B', pricingNote: '$445 per cycle (single-stack)' },
      { name: 'Aspire / Defy Medical', pricingNote: '$300-$600 blended multi-peptide protocols' },
    ],
    evidenceSummary:
      'Modest clinical data on growth hormone secretagogues for body composition and sleep in older adults. The specific CJC-1295 + Ipamorelin combination lacks large RCTs but small studies show measurable IGF-1 increases. Critics note limited long-term safety data and a theoretical concern about insulin resistance with chronic use.',
    typicalDosing:
      '100-300 mcg of each peptide nightly subcutaneously (typically at bedtime to mimic natural GH pulse). Most protocols run 8-12 week cycles with 4-week breaks between cycles to avoid receptor desensitization.',
    userReports:
      'Reddit threads in 2025-2026 highlight noticeably better sleep, improved recovery, and subtle fat-loss synergy when stacked with GLP-1 medications ("energy without jitters"). Common complaints center on injection fatigue (5-7 nights per week is a lot), cost, and inconsistent results when dosing is off. Some users report water retention or carpal tunnel symptoms — classic GH-elevation signs.',
    safety:
      'Modulating the GH/IGF-1 axis without long-term human data carries unknown risks. Theoretical concerns include insulin resistance, acromegaly-like changes with chronic high-dose use, and unknown long-term effects on cancer risk. Avoid in patients with active malignancy. Lab monitoring (IGF-1, fasting glucose, HbA1c) is prudent.',
    bestReason:
      'Helps preserve or build lean muscle and counters the metabolic slowdown and fatigue that many GLP-1 users experience during sustained calorie deficit.',
    redFlag:
      'Modulating the GH/IGF-1 axis without long-term human data carries unknown hormonal disruption risks. Chronic use may produce dependency or insulin sensitivity issues that are hard to walk back.',
    lastUpdated: '2026-05-08',
  },
  {
    slug: 'pt-141',
    name: 'PT-141',
    fullName: 'Bremelanotide',
    category: 'Sexual Health',
    hook: 'The brain-driven libido peptide — counters GLP-1 induced sexual side effects via central mechanism, not blood flow.',
    description:
      'PT-141 (bremelanotide) is a melanocortin receptor agonist that acts centrally in the brain to boost sexual desire and arousal. It works fundamentally differently from PDE5 inhibitors like Viagra or Cialis (which target peripheral blood flow). The branded version, Vyleesi, is FDA-approved for premenopausal hypoactive sexual desire disorder (HSDD) in women.',
    mechanism:
      'Activates melanocortin receptors (primarily MC4R) in the central nervous system, which influence sexual desire pathways. Effect is on "wanting" sex rather than mechanical arousal or erection — meaningfully different from PDE5 inhibitor mechanism.',
    consumerUses: [
      'Restoring libido drop in women on GLP-1 medications (rapid weight loss can affect sexual desire)',
      'Premenopausal HSDD (the FDA-approved Vyleesi indication)',
      'Off-label use in men with desire-side issues that PDE5 inhibitors do not address',
    ],
    legalStatus:
      'Vyleesi (branded bremelanotide) is FDA-approved for premenopausal HSDD in women. Compounded PT-141 is offered off-label via licensed telehealth with prescription. Off-label use in men is common but not FDA-approved.',
    providers: [
      { name: 'Boston Medical Group', pricingNote: 'Bremetide compounded via telehealth Rx' },
      { name: 'Hone Health', pricingNote: '~$130/mo (men-focused)' },
      { name: 'SynergenX clinics', pricingNote: 'Compounded protocols, varies by location' },
      { name: 'TestDepot', pricingNote: '$459 for 8-week supply' },
      { name: 'Vyleesi (branded)', pricingNote: '$0-$99 for 4 doses with savings card; $290/dose cash' },
    ],
    evidenceSummary:
      'Phase 3 trials supported Vyleesi FDA approval in women — increases in satisfying sexual events vs placebo. Smaller off-label studies in men show libido improvement. Notably, this is a desire drug, not a performance drug — it does not produce erections directly.',
    typicalDosing:
      'Subcutaneous injection 1-2 mg taken approximately 45 minutes before anticipated activity. Vyleesi caps at 8 doses per month. Nasal spray formats exist but are less effective due to absorption variability. Most consumer protocols are as-needed rather than daily.',
    userReports:
      'Reddit users in 2025-2026 frequently report restored "mental wanting" — particularly women on GLP-1 medications who experienced libido drop with rapid weight loss. The most common complaint is nausea, which can be severe enough to ruin the timing for some users. A minority report skin darkening at injection sites or flushing.',
    safety:
      'Common side effects: nausea (notable), flushing, headache, temporary skin darkening or hyperpigmentation. Avoid in patients with uncontrolled hypertension or cardiovascular disease. Black box warning for blood pressure elevation. Not for use during pregnancy.',
    bestReason:
      'Directly counters GLP-1-induced libido drop via central brain pathways that PDE5 inhibitors do not affect. For users experiencing desire-side effects (especially women), this is one of the only options.',
    redFlag:
      'Nausea side effects can be severe enough to derail the timing for many users. Not a quick-fix like PDE5 inhibitors and requires precise pre-activity dosing. Skin darkening can be persistent.',
    lastUpdated: '2026-05-08',
  },
  {
    slug: 'tb-500',
    name: 'TB-500',
    fullName: 'Thymosin Beta-4 Fragment',
    category: 'Repair / Recovery',
    hook: 'The systemic recovery peptide — paired with BPC-157 in the "Wolverine stack" for soft-tissue repair after rapid weight loss stresses joints.',
    description:
      'TB-500 is a synthetic fragment of naturally occurring Thymosin Beta-4. It promotes cell migration, reduces inflammation, and supports tissue remodeling. It is most commonly stacked with BPC-157 — a combination Reddit calls the "Wolverine stack" for its tissue-repair focus.',
    mechanism:
      'Sequesters actin to promote cell migration and support tissue remodeling. Reduces inflammatory signaling and supports new blood vessel formation. The mechanism is complementary to BPC-157, which is why the two are stacked.',
    consumerUses: [
      'Acute injury recovery (sprains, strains, tendon issues)',
      'Chronic flexibility and joint mobility issues',
      'Recovery from old injuries that flare during rapid GLP-1 weight loss',
      'Stacked with BPC-157 for systemic + localized tissue repair',
    ],
    legalStatus:
      'Same Category 2-to-503A-compounding pathway as BPC-157 (removed from restricted list April 2026, July 2026 PCAC review pending). Prescription required via licensed telehealth.',
    providers: [
      { name: 'BeyondMD (Wolverine blend)', pricingNote: '$239+/mo BPC-157 + TB-500 stack' },
      { name: 'Sands Weight Loss', pricingNote: '$200/30 days (blend protocol)' },
      { name: 'Perfect B (Wolverine cycle)', pricingNote: '$795 for full 2-peptide cycle' },
      { name: 'Aspire / Desert Mobile-style clinics', pricingNote: '$200-$600/mo standalone' },
    ],
    evidenceSummary:
      'Almost entirely animal studies on wound healing and tendon repair. Human data is scant — small case series at best. WADA-banned for athletes (a notable signal that performance-enhancing effects are believed real even without large human trials).',
    typicalDosing:
      'Typical consumer protocols: 2-2.5 mg twice weekly for 4-6 weeks (loading phase), then 2 mg weekly maintenance. Subcutaneous injection. Often stacked with daily BPC-157 in Wolverine-style protocols.',
    userReports:
      'Strong anecdotal support on Reddit for the BPC-157 + TB-500 combination, especially for soft-tissue and joint recovery. Users report subjective improvements in flexibility and reduced pain in old injury sites. Some report no measurable benefit. Cost is the most common complaint along with injection fatigue.',
    safety:
      'Almost zero human safety trials. WADA-banned for athletes — taken seriously by pro sports despite limited human data, suggesting real biological activity. Avoid in patients with active malignancy due to angiogenesis concerns. Monitor for injection-site reactions.',
    bestReason:
      'Accelerates soft-tissue and joint recovery when rapid GLP-1 weight loss stresses ligaments, reactivates old injuries, or reduces training capacity. Stacked with BPC-157 it is the most-discussed recovery protocol in the peptide community.',
    redFlag:
      'Almost zero human safety trials. WADA-banned status signals real biological activity but does not validate safety for off-label consumer use. Decades of preclinical work but the human evidence gap is real.',
    lastUpdated: '2026-05-08',
  },
  {
    slug: 'aod-9604',
    name: 'AOD-9604',
    fullName: 'Anti-Obesity Drug 9604',
    category: 'Fat Loss',
    hook: 'The "fat fragment" peptide — marketed as targeted lipolysis without muscle loss, but the evidence is weak and clinical trials failed.',
    description:
      'AOD-9604 is a 16-amino-acid fragment of human growth hormone (residues 177-191). It was originally developed as an anti-obesity drug claiming to produce targeted fat loss without the broader effects of full HGH. Clinical trials failed and the manufacturer abandoned development. It now exists primarily as a peptide-clinic offering.',
    mechanism:
      'Designed to mimic the lipolytic (fat-burning) portion of growth hormone without affecting glucose or growth. In theory, this would produce targeted lipolysis (especially of visceral and abdominal fat) without HGH side effects.',
    consumerUses: [
      'Stubborn visceral or abdominal fat (especially when GLP-1 users hit a plateau)',
      'Body recomposition without muscle loss claims',
      'Used as an "add-on" to GLP-1 therapy in some peptide-clinic protocols',
    ],
    legalStatus:
      'Reclassified after Category 2 list updates and now offered via licensed telehealth longevity clinics with prescription. Not FDA-approved for any use; the manufacturer abandoned development after failed obesity trials.',
    providers: [
      { name: 'Telehealth longevity clinics (general)', pricingNote: '$150-$400/mo as add-on; often bundled lower' },
    ],
    evidenceSummary:
      'Early obesity trials showed modest fat reduction but failed to meet endpoints. The manufacturer (Metabolic Pharmaceuticals) abandoned development around 2007. No strong human data has emerged since beyond small studies. The marketing significantly outpaces the clinical evidence — this is the weakest evidence base of the peptides on this list.',
    typicalDosing:
      'Typical consumer protocols: 250-500 mcg daily subcutaneous, often in the morning or pre-workout. Cycles of 8-12 weeks. Frequently bundled with other peptides (BPC-157, lipotropic injections) at peptide clinics.',
    userReports:
      'Reddit reports are mixed-to-skeptical. Some users report subjective fat loss in target areas, but most acknowledge the effects are far less dramatic than GLP-1 medications alone. Users often describe AOD-9604 as an "optional plateau-buster" rather than a primary tool. Many reports suggest results are placebo or minor.',
    safety:
      'Generally well-tolerated in trials (one of its few proven properties). No major safety signals beyond standard injection-site reactions. The bigger concern is opportunity cost — money and effort spent on a poorly-evidenced peptide instead of optimizing your GLP-1 protocol.',
    bestReason:
      'May help with stubborn visceral fat once you have already optimized your GLP-1 dose and lifestyle. Best positioned as a low-priority experiment after the basics are dialed.',
    redFlag:
      'Weak clinical evidence and abandoned-by-manufacturer status. Marketing significantly outpaces the data. For most users, the money is better spent on a higher GLP-1 dose, better protein intake, or resistance training than on AOD-9604.',
    lastUpdated: '2026-05-08',
  },
];

export const getPeptideBySlug = (slug: string): Peptide | undefined =>
  peptides.find((p) => p.slug === slug);
