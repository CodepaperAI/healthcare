/** In-clinic products, all assessed, measured and fitted on site. */

export const products = [
  {
    name: 'Medical Compression Stockings',
    slug: 'medical-compression-stockings',
    tagline: 'Sigvaris graduated compression, professionally measured and fitted',
    icon: 'compression',
    accent: 'brand',
    image: '/images/product-compression.jpg',
    imageAlt: 'Sigvaris medical compression stockings in multiple colours and styles',
    body: 'We carry Sigvaris medical-grade compression stockings and provide the assessment and precise limb measurement they require. Compression may help with swelling and oedema, tired and achy legs, varicose veins, lymphedema, DVT prevention, and pregnancy or travel-related swelling. Our certified fitters measure you in clinic, recommend the right compression class and style, and make sure the fit is comfortable and correct. Compression stockings are covered by many extended health plans with the required documentation, and direct billing is available for many insurers.',
    tags: ['Swelling & oedema', 'Varicose veins', 'Lymphedema', 'DVT prevention', 'Pregnancy & travel'],
  },
  {
    name: 'Custom Orthotics',
    slug: 'custom-orthotics',
    tagline: 'Custom-made shoe inserts assessed and fitted by trained pedorthists',
    icon: 'compression',
    accent: 'brand',
    image: '/images/product-custom-orthotics.jpg',
    imageAlt: 'Certified pedorthist assessing a patient foot for custom orthotics at Planet Health Care',
    body: 'Custom orthotics are shoe inserts designed around your foot shape, gait and symptoms. They can support foot alignment, redistribute pressure, improve comfort, help with flat feet or high arches, and reduce stress through the feet, ankles, knees, hips and lower back. Your orthotic service includes an assessment, measurements or casting when needed, and a fitting appointment after the devices are made so your pedorthist can check comfort, support and any adjustments.',
    tags: ['Foot alignment', 'Arch support', 'Gait assessment', 'Plantar fasciitis', 'Fitting appointment'],
  },
  {
    name: 'Custom Orthopedic Bracing',
    slug: 'custom-orthopedic-bracing',
    tagline: 'Knee, ankle, wrist, shoulder, back and OA unloading braces, fitted in clinic',
    icon: 'brace',
    accent: 'brand',
    image: '/images/product-braces.jpg',
    imageAlt: 'Clinician adjusting the straps of an osteoarthritis unloading knee brace on a patient',
    body: 'From ligament injuries and instability to osteoarthritis, the right brace does its job only if it fits. We measure and fit custom and off-the-shelf braces for the knee, ankle, wrist, elbow, shoulder, hip, neck and spine, including OA unloading braces and posture support when clinically appropriate. Bracing can support stability, post-surgical recovery, pain management, alignment, injury prevention and return to activity. We quote pricing clearly and direct bill where your plan allows.',
    tags: ['Knee & OA braces', 'Ankle stability', 'Wrist & elbow', 'Spine support', 'Post-surgery support'],
  },
  {
    name: 'TENS Units',
    slug: 'tens-units',
    tagline: 'Drug-free pain relief you can use at home',
    icon: 'tens',
    accent: 'teal',
    image: '/images/product-tens.jpg',
    imageAlt: 'A portable TENS unit with lead wires and electrode pads',
    imageCredit: {
      label: 'Photo: Yeza via Wikimedia Commons (CC BY-SA)',
      href: 'https://commons.wikimedia.org/wiki/File:Tens.jpg',
    },
    body: 'Transcutaneous electrical nerve stimulation (TENS) units deliver gentle electrical pulses that may help interrupt pain signals and ease muscle tension. We help you choose a unit, set it up correctly and understand safe electrode placement so you can manage pain between clinic visits.',
    tags: ['Chronic pain', 'Muscle tension', 'At-home use'],
  },
  {
    name: 'Therapeutic Massage Gun',
    slug: 'therapeutic-massage-gun',
    tagline: 'Percussive therapy for recovery, warm-up and muscle tension',
    icon: 'percussion',
    accent: 'teal',
    image: '/images/product-massage-gun.jpg',
    imageAlt: 'Therapeutic massage gun with app-guided recovery settings',
    body: 'Therapeutic massage guns use percussive vibration to help loosen tight muscles, support warm-up and ease post-activity soreness. Ask our team which routine and attachment style suits your training, recovery or home-care goals.',
    tags: ['Recovery', 'Warm-up', 'Muscle tightness'],
  },
  {
    name: 'Biofreeze',
    slug: 'biofreeze',
    tagline: 'Fast topical relief for sore muscles and joints',
    icon: 'freeze',
    accent: 'teal',
    image: '/images/product-biofreeze.jpg',
    imageAlt: 'Biofreeze professional menthol pain relief gel bottle',
    body: 'Biofreeze is a menthol-based topical analgesic that provides cooling relief for sore muscles, joints and everyday aches. A convenient add-on to your treatment plan, available at the front desk in clinic.',
    tags: ['Sore muscles', 'Joint aches', 'Post-treatment relief'],
  },
];

export const productFaqs = [
  {
    q: 'Do I need an appointment for compression stockings, orthotics or bracing?',
    a: 'Yes. Compression, custom orthotics and custom bracing require an assessment and measurement so the fit, support and documentation are correct. Book online or call 226-721-8777.',
  },
  {
    q: 'Are compression stockings, custom orthotics and braces covered by insurance?',
    a: 'Many extended health plans cover medical compression stockings, custom orthotics and custom braces when the required documentation is in place. Coverage differs by plan, so check your limits with your insurer. We direct bill where your plan allows.',
  },
  {
    q: 'Do you carry Sigvaris compression?',
    a: 'Yes. We fit Sigvaris graduated compression and will recommend the right class, size and style for your needs.',
  },
  {
    q: 'How long does a custom orthotics appointment take?',
    a: 'The orthotic assessment is usually about 20-25 minutes. A separate fitting appointment, usually 15-20 minutes, is booked once your custom orthotics are ready.',
  },
];

/** Highlights used in the homepage products spotlight. */
export const productHighlights = [
  'Medical compression',
  'Custom orthotics',
  'Custom bracing',
  'Direct billing',
];
