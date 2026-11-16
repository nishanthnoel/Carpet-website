export const MAIN_SERVICES = [
  {
    id: 'carpet-repair',
    title: 'Carpet Repair',
    category: 'Carpet Repair',
    shortDesc: 'Master seam weaving, pet tear fixes, moth damage restoration, burn & hole patch repairs without replacing whole room carpet.',
    fullDesc: 'Our specialized carpet repair techniques preserve your existing carpet by seamlessly inserting precision donor patches, re-tufting pulled fibers, and rebinding torn seams. Save up to 80% compared to full carpet replacement.',
    exactFormOption: 'Carpet Repair - Patch repair',
    features: [
      'Pet damage repair (chewed doorways, corner scratching)',
      'Invisible patch repair using spare carpet or closet donor pieces',
      'Moth damage re-tufting and anti-moth treatment',
      'Hole and iron/cigarette burn repair',
      'Carpet seam repair and heat-bond tape re-sealing'
    ],
    estimatedTime: '1 - 3 hours',
    priceFrom: '$150',
    iconName: 'Scissors',
    popular: true
  },
  {
    id: 'carpet-stretching',
    title: 'Carpet Stretching and Laying',
    category: 'Carpet Stretching',
    shortDesc: 'Power stretching to remove unsightly ripples, bumps, waves, and trip hazards for a tight, smooth, drum-like finish.',
    fullDesc: 'Carpet ripples develop over time due to improper initial installation, humidity shifts, or heavy furniture drag. We use high-grade power stretchers and knee kickers to re-tension your carpet, trim excess material, and re-anchor it securely to tack strips.',
    exactFormOption: 'Carpet Stretching and Laying',
    features: [
      'Heavy-duty power stretching across room dimensions',
      'Removal of dangerous trips, waves, and slack buckles',
      'Precision edge trimming and tack strip re-anchoring',
      'Transition bar fitting at doorways and tile junctions',
      'Restores carpet tension and extends carpet lifespan'
    ],
    estimatedTime: '2 - 4 hours',
    priceFrom: '$180',
    iconName: 'Layers',
    popular: true
  },
  {
    id: 'carpet-removal',
    title: 'Carpet Removal and Disposal',
    category: 'Carpet Removal',
    shortDesc: 'Fast, clean, eco-friendly carpet uplift, tack strip removal, underlay stripping, and responsible disposal.',
    fullDesc: 'Renovating or switching to timber/tiles? Our team handles the heavy lifting, cleanly lifting old carpet, underlay, smooth-edge tack strips, and staples. We ensure subfloors are left clean and ready for your next flooring install.',
    exactFormOption: 'Carpet Removal and Disposal',
    features: [
      'Complete carpet and underlay uplift and roll-up',
      'Removal of old tack strips, nails, and subfloor staples',
      'Subfloor vacuuming and glue scrape preparation',
      'Responsible recycling and municipal eco-disposal',
      'Ideal preparation for hardwood, tile, or new carpet installation'
    ],
    estimatedTime: '2 - 5 hours',
    priceFrom: '$160',
    iconName: 'Trash2'
  },
  {
    id: 'carpet-replacement',
    title: 'Carpet and Underlay Replacement',
    category: 'Carpet Replacement',
    shortDesc: 'Full supply and installation of premium carpet ranges and plush high-density rubber/foam underlays.',
    fullDesc: 'When repair is no longer feasible or you are upgrading your home interior, we offer professional measurement, premium carpet selection, moisture-barrier underlay supply, and expert installation tailored to your budget and style.',
    exactFormOption: 'Carpet and Underlay replacement',
    features: [
      'Expert room measurement and minimal-waste fitting',
      'High-density acoustic and thermal underlay supply',
      'Wide choice of stain-resistant nylon, wool blend, and triexta carpets',
      'Seamless joins and flawless perimeter tucking',
      'Comprehensive manufacturer warranty + workmanship guarantee'
    ],
    estimatedTime: 'Half day to full day',
    priceFrom: '$350',
    iconName: 'Sparkles'
  }
];

export const CARPET_REPAIR_SUBTYPES = [
  {
    title: 'Pet Damage Repair',
    exactFormOption: 'Carpet Repair - Pet damage repair',
    description: 'Dogs and cats often scratch at closed bedroom doors or chew near carpet transitions. We cut out damaged fibers and insert a matching carpet donor patch, invisible to the naked eye.',
    commonCauses: ['Anxious pet scratching', 'Doorway digging', 'Chewed edges near threshold'],
    repairMethod: 'Precision rectangular section cutout, seam sealing, pressure heat bond tape, pile blending.'
  },
  {
    title: 'Patch Repair',
    exactFormOption: 'Carpet Repair - Patch repair',
    description: 'For isolated stains, burns, bleaches, or localized wear. We harvest a clean matching patch from a closet corner or spare remnant and graft it directly into place.',
    commonCauses: ['Iron burns', 'Permanent bleach spills', 'Heavy localized wear', 'Chemical damage'],
    repairMethod: 'Pattern matching, micro-seam heat tape integration, directional pile alignment.'
  },
  {
    title: 'Moth Damage Repair',
    exactFormOption: 'Carpet Repair - Moth damage repair',
    description: 'Moth larvae feed on natural wool carpet fibers in dark, unvisited corners under heavy furniture. We replace destroyed wool sections and treat surrounding area.',
    commonCauses: ['Moth larvae infestation', 'Wool carpet fiber breakdown under heavy furniture'],
    repairMethod: 'Section replacement, re-tufting missing loops, protective fiber spray application.'
  },
  {
    title: 'Hole Repair',
    exactFormOption: 'Carpet Repair - Hole repair',
    description: 'Deep punctures, dropped hot embers, heavy furniture tears, or structural holes repaired smoothly without lumpiness.',
    commonCauses: ['Fireplace embers', 'Sharp furniture leg drops', 'Accidental subfloor punctures'],
    repairMethod: 'Subfloor patch reinforcement, underlay pad repair, flush pile donor insertion.'
  },
  {
    title: 'Carpet Seams Repair',
    exactFormOption: 'Carpet Repair - Carpet seams',
    description: 'Fraying, splitting, or raised carpet seams across room centers or doorways re-glued, re-taped, and stretched for a flat invisible join.',
    commonCauses: ['Low-quality seam tape failure', 'High foot-traffic breakdown', 'Vacuum cleaner snagging'],
    repairMethod: 'Thermal hot melt tape application, latex seam sealing, heavy roller compression.'
  }
];

export const SERVICE_EXACT_OPTIONS = [
  'Carpet Repair - Pet damage repair',
  'Carpet Repair - Patch repair',
  'Carpet Repair - Moth damage repair',
  'Carpet Repair - Hole repair',
  'Carpet Repair - Carpet seams',
  'Carpet Stretching and Laying',
  'Carpet Removal and Disposal',
  'Carpet and Underlay replacement'
];

export const BEFORE_AFTER_GALLERY = [
  {
    id: 'ba-pet',
    title: 'Pet Scratch Doorway Repair',
    subtitle: 'Restored shredded carpet pile at bedroom doorway',
    beforeImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    serviceType: 'Carpet Repair - Pet damage repair',
    beforeLabel: 'Severe Pet Damage',
    afterLabel: 'Invisible Repair'
  },
  {
    id: 'ba-stretch',
    title: 'Living Room Wave Stretching',
    subtitle: 'Eliminated 3 hazardous buckles across 25 sqm area',
    beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    serviceType: 'Carpet Stretching and Laying',
    beforeLabel: 'Slack Buckled Carpet',
    afterLabel: 'Power Stretched Flat'
  },
  {
    id: 'ba-seam',
    title: 'Hallway Split Seam Restoration',
    subtitle: 'Re-sealed frayed carpet join at high-traffic corridor',
    beforeImage: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=800&q=80',
    serviceType: 'Carpet Repair - Carpet seams',
    beforeLabel: 'Frayed Open Seam',
    afterLabel: 'Seamless Finish'
  }
];

export const FAQS = [
  {
    id: 'faq-1',
    category: 'Repair',
    question: 'Where do you get matching carpet for patch repairs?',
    answer: 'We harvest clean matching donor carpet from hidden areas like the back corner of a closet, under built-in wardrobes, or from leftover carpet remnants you may have stored in your garage or attic. If none exists, we can source near-identical pile samples.'
  },
  {
    id: 'faq-2',
    category: 'Repair',
    question: 'Will the repaired patch be visible?',
    answer: 'Our master technicians align carpet pile direction, match tuft density, and double-seal micro-seams with specialized heat-bond latex tape. On standard nylon or wool carpets, the repair is virtually invisible.'
  },
  {
    id: 'faq-3',
    category: 'Stretching',
    question: 'Why does carpet develop bumps and ripples?',
    answer: 'Ripples are usually caused by improper initial installation without a power stretcher, dragging heavy furniture across room surfaces, or extreme humidity fluctuations causing backing expansion.'
  },
  {
    id: 'faq-4',
    category: 'Stretching',
    question: 'Do I need to clear all furniture before carpet stretching?',
    answer: 'For optimal power stretching, clearing smaller items is recommended. We can easily slide larger items (sofas, tables) across to one side of the room during the stretching process.'
  },
  {
    id: 'faq-5',
    category: 'Pricing & Booking',
    question: 'How fast can Horizon Solutions perform the service?',
    answer: 'We offer same-day emergency inspection and standard 24 to 48-hour appointment slots across our service area. Call us or submit our contact form for immediate scheduling.'
  },
  {
    id: 'faq-6',
    category: 'Pricing & Booking',
    question: 'Is carpet repair cheaper than replacing the whole carpet?',
    answer: 'Yes! Repairing or stretching your carpet typically costs 70% to 85% less than buying new carpet and underlay for an entire room, making it the most cost-effective and eco-friendly choice.'
  }
];

export const TESTIMONIALS = [
  {
    id: 't-1',
    author: 'David Harrison',
    suburb: 'South Yarra, Melbourne',
    rating: 5,
    comment: 'Our puppy shredded the bedroom carpet near the door right before our end-of-lease inspection! Horizon Solutions came within 24 hours and made it look brand new. Saved our full bond refund!',
    serviceUsed: 'Carpet Repair - Pet damage repair',
    date: '2 weeks ago'
  },
  {
    id: 't-2',
    author: 'Sarah Jenkins',
    suburb: 'St Kilda, Melbourne',
    rating: 5,
    comment: 'We had dangerous ripples across our main living room floor. Horizon stretched the entire carpet, trimmed the excess, and re-tucked it. Fantastic craftsmanship and super polite service.',
    serviceUsed: 'Carpet Stretching and Laying',
    date: '1 month ago'
  },
  {
    id: 't-3',
    author: 'Michael Tan',
    suburb: 'Richmond, Melbourne',
    rating: 5,
    comment: 'Punctual, transparent quote, and flawless patch repair over an iron burn mark in our formal lounge. You honestly cannot see where the repair was done!',
    serviceUsed: 'Carpet Repair - Patch repair',
    date: '3 weeks ago'
  }
];

export const COVERED_SUBURBS = [
  'Melbourne CBD', 'South Yarra', 'Richmond', 'St Kilda', 'Carlton', 'Brunswick',
  'Fitzroy', 'Collingwood', 'Southbank', 'Docklands', 'Hawthorn', 'Camberwell',
  'Kew', 'Prahran', 'Brighton', 'Footscray', 'Essendon', 'Coburg',
  'Preston', 'Box Hill', 'Glen Waverley', 'Dandenong', 'Doncaster', 'Werribee'
];
