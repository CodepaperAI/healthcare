/**
 * Practitioner profiles. `image` paths point at /public/images — drop a real
 * headshot in with the same filename and it appears automatically.
 * `featured: true` selects who appears in the homepage team preview.
 */

export const team = [
  {
    name: 'Hiral Desai',
    role: 'Registered Physiotherapist',
    slug: 'hiral-desai',
    image: '/images/team-hiral-desai.jpg',
    bio: 'A physiotherapist with 18+ years of experience across two continents, practising evidence-based, one-on-one manual therapy with exercise rehabilitation and modalities including shockwave. Continuing education in Mulligan concepts, pelvic floor therapy and Kinesio taping.',
  },
  {
    name: 'Dr. Tiffany Rose Lukas',
    role: 'Chiropractor',
    slug: 'tiffany-rose-lukas',
    image: '/images/team-tiffany-rose-lukas.jpg',
    featured: true,
    bio: 'A graduate of the Canadian Memorial Chiropractic College with a focus on pre- and post-natal, paediatric and intra-oral function. Treatment blends soft-tissue therapy, mobilization, shockwave and custom orthotics.',
  },
  {
    name: 'Dr. Marcia Richards',
    role: 'Chiropractor',
    slug: 'marcia-richards',
    image: '/images/team-marcia-richards.jpg',
    bio: 'Evidence-based chiropractic assessment and treatment, working alongside the physiotherapy and fitting team so patients with overlapping joint, spine and gait issues get one coordinated plan.',
  },
  {
    name: 'Sean Deroo',
    role: 'Certified Pedorthist (C. Ped. C)',
    slug: 'sean-deroo',
    image: '/images/team-sean-deroo.jpg',
    bio: 'A Brock University Kinesiology graduate and Western-trained Certified Canadian Pedorthist. Sean handles gait assessment and translates it into custom orthotic and compression design in clinic.',
  },
  {
    name: 'Jeff Lewis',
    role: 'Certified Pedorthist',
    slug: 'jeff-lewis',
    image: '/images/team-jeff-lewis.jpg',
    bio: 'A Certified Pedorthist with 18+ years in custom orthotic and bracing care, passionate about reducing pain and improving mobility through expert biomechanical assessment.',
  },
  {
    name: 'Roshel Jacob',
    role: 'Registered Massage Therapist',
    slug: 'roshel-jacob',
    image: '/images/team-roshel-jacob.jpg',
    bio: 'Therapeutic and relaxation care with specialized training in manual lymphatic drainage (Dr. Vodder Method), Thai massage and assisted stretching.',
  },
  {
    name: 'Divya Nambiar',
    role: 'Psychologist (C. Psych. Assoc.)',
    slug: 'divya-nambiar',
    image: '/images/team-divya-nambiar.jpg',
    featured: true,
    bio: 'A registered member of the College of Psychologists of Ontario providing assessment and CBT — including accident-related trauma — in English, Hindi, Tamil, Malayalam and Bengali.',
  },
  {
    name: 'Shreya',
    role: 'Physiotherapy Assistant',
    slug: 'shreya',
    image: '/images/team-shreya.jpg',
    featured: true,
    bio: 'Supports the physiotherapy team, guiding patients through supervised exercise programs and keeping treatment sessions running smoothly.',
  },
  {
    name: 'Shravika Gandhi',
    role: 'Physiotherapy Assistant',
    slug: 'shravika-gandhi',
    image: '/images/team-shravika-gandhi.jpg',
    bio: 'Works alongside the registered physiotherapists, assisting with exercise rehabilitation and patient care throughout your plan.',
  },
  {
    name: 'Mehak Taneja',
    role: 'Clinic Administrator',
    slug: 'mehak-taneja',
    image: '/images/team-mehak-taneja.jpg',
    featured: true,
    bio: 'Runs the front desk — booking, insurance direct billing and intake — and is the first voice you hear when you call 226-721-8777.',
  },
];

export const featuredTeam = team.filter((member) => member.featured);

/** How the clinic works — used on the homepage and the About page. */
export const principles = [
  {
    title: 'One roof, one plan',
    body: 'Physio, chiro, massage, psychology and fitting share notes about your care — so your plan is coordinated, not contradicted.',
    icon: 'roof',
  },
  {
    title: 'Assessment before treatment',
    body: 'Every service starts with a real assessment and a diagnosis explained in plain language — never a template.',
    icon: 'clipboard',
  },
  {
    title: 'No forms, no friction',
    body: 'Direct billing to all insurers, same-day appointments and free parking at the door. We handle the paperwork.',
    icon: 'shield',
  },
];

/**
 * Clinic figures shown in the stats band. These are editable content, not
 * hardcoded markup — update the value and label together.
 */
export const clinicStats = [
  {
    value: 10,
    suffix: '',
    label: 'Practitioners on staff',
    note: 'Physio, chiro, RMT, psychology & fitting',
  },
  {
    value: 6,
    suffix: '',
    label: 'Clinical services',
    note: 'Coordinated in one shared plan',
  },
  {
    value: 6,
    suffix: '+',
    label: 'Years in North London',
    note: 'At Sherwood Forest Mall since 2020',
  },
  {
    value: 100,
    suffix: '%',
    label: 'Direct billing',
    note: 'To all major insurers — no forms for you',
  },
];
