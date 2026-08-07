/**
 * SERVICE CONTENT
 *
 * Every service page at /services/[service] is generated from this array —
 * no per-service components, no duplicated markup. Add an object here and a
 * fully formed, SEO-ready page appears with a sitemap entry, breadcrumbs,
 * FAQ schema and menu links.
 *
 * Required fields: slug, name, icon, accent, menuNote, summary, headline,
 * intro, about, conditions, firstVisit, practitioner, faqs, pairsWith, seo.
 */

export const services = [
  {
    slug: 'physiotherapy',
    name: 'Physiotherapy',
    icon: 'physiotherapy',
    accent: 'brand',
    bookLabel: 'Book physiotherapy',
    image: '/images/service-physiotherapy.jpg',
    imageAlt:
      'Hiral Desai assessing a patient foot and ankle in a treatment room at Planet Health Care',

    menuNote: 'One-on-one assessment and hands-on rehab',
    summary:
      'One-on-one assessment and hands-on rehab for injury, post-surgical recovery and chronic pain.',
    headline: 'Physiotherapy in London, Ontario',
    intro:
      'Registered physiotherapy led by a clinician with more than 18 years of experience - a real assessment, a written plan, hands-on treatment and a customized home exercise program.',

    about: {
      heading: 'About physiotherapy at Planet Health Care',
      body: [
        'At Planet Health Care, physiotherapy in London, Ontario means one-on-one care - never a room full of patients handed to an assistant. Your first visit is a full assessment: your history, movement testing and a clear diagnosis explained in plain language. From there we build a written plan combining manual therapy, exercise, education and modalities such as shockwave, EMS/TENS, therapeutic ultrasound, heat and cold.',
        'Because our physiotherapists work alongside chiropractors, a registered massage therapist, a pelvic floor physiotherapy service and certified fitters under one roof at Sherwood Forest Mall, your plan is coordinated rather than contradicted. Whether you are recovering from surgery, rehabbing a sports injury, managing arthritis, improving posture or working through a motor vehicle accident claim, the goal is the same: restore how you move and help you return to daily life with confidence.',
        'Postural restoration programs are customized when posture, breathing mechanics or movement asymmetry are part of the problem. A plan may include breathing education, mobility work, stretching, core strengthening, ergonomic coaching, pain-management modalities, progress monitoring and, when clinically appropriate, custom orthotics or bracing. Home exercise programs can be sent by email so you can keep building progress between visits.',
      ],
    },

    conditions: [
      'Back and neck pain',
      'Whiplash and MVA injuries',
      'Post-surgical rehabilitation',
      'Sports and workplace injuries',
      'Posture-related pain',
      'Arthritis and foot issues',
      'Lower back pain and sciatica',
      'Repetitive strain injuries',
      'Postural restoration programs',
      'Active and passive rehab',
      'Manual therapy',
      'EMS/TENS and ultrasound therapy',
      'Pelvic floor concerns',
    ],

    firstVisit: [
      {
        title: 'Assessment',
        body: 'A 45-minute exam — history, movement testing and a clear diagnosis in plain language.',
      },
      {
        title: 'Your plan',
        body: 'A written treatment plan with an expected timeline and individualized home exercises we can send by email.',
      },
      {
        title: 'Treatment',
        body: 'Hands-on therapy begins the same visit — you leave with relief and a next step, not just paperwork.',
      },
    ],

    practitioner: {
      who: 'Hiral Desai, Registered Physiotherapist, supported by two physiotherapy assistants.',
      coverage:
        'Physiotherapy is covered by many extended health plans and motor vehicle accident (MVA) claims. We bill your insurer directly wherever possible.',
    },

    faqs: [
      {
        q: 'Do I need a doctor’s referral for physiotherapy?',
        a: 'No. You can book physiotherapy directly. A referral is only needed if your specific insurance plan requires one for reimbursement — call us and we’ll help you check.',
      },
      {
        q: 'Do you offer same-day physiotherapy appointments?',
        a: 'Yes, same-day appointments are often available at our Sherwood Forest Mall clinic. Book online or call 226-721-8777.',
      },
      {
        q: 'Will you bill my insurance directly?',
        a: 'Yes. We offer direct billing to many major insurers for physiotherapy, subject to your plan rules, limits and eligibility.',
      },
    ],

    pairsWith: [
      { slug: 'chiropractic', note: 'Joint care that complements your rehab plan.' },
      { slug: 'massage-therapy', note: 'Release soft tissue between treatment sessions.' },
      { slug: 'shockwave-therapy', note: 'Break through stubborn tendon pain.' },
    ],

    seo: {
      title: 'Physiotherapy in London, Ontario',
      description:
        'One-on-one physiotherapy in North London, Ontario. Evidence-based assessment and hands-on rehab for injury, post-surgical recovery and chronic pain at Sherwood Forest Mall. Direct billing, same-day appointments.',
      keywords: [
        'physiotherapy London Ontario',
        'physiotherapist North London',
        'postural restoration physiotherapy London',
        'post surgical rehab London Ontario',
        'sports injury physiotherapy',
      ],
    },
  },

  {
    slug: 'chiropractic',
    name: 'Chiropractic',
    icon: 'chiropractic',
    accent: 'brand',
    bookLabel: 'Book chiropractic care',
    image: '/images/service-chiropractic.jpg',
    imageAlt:
      'Dr. Tiffany Rose Lukas performing a spinal adjustment on a patient at Planet Health Care',

    menuNote: 'Evidence-based spinal and joint care',
    summary:
      'Evidence-based spinal and joint care from two licensed chiropractors, including pre/post-natal.',
    headline: 'Chiropractic Care in London, Ontario',
    intro:
      'Evidence-based, diversified chiropractic from two licensed chiropractors — assessment first, adjustment second, and a plan with a clear end point.',

    about: {
      heading: 'About chiropractic at Planet Health Care',
      body: [
        'Chiropractic care at Planet Health Care in London, Ontario begins with a proper orthopaedic and neurological assessment, not an immediate adjustment. Our two chiropractors practise evidence-based, diversified technique — joint mobilization and manipulation combined with soft-tissue therapy, shockwave and, where useful, custom orthotics.',
        'We treat everyday complaints like low back pain, neck pain and headaches, and we offer focused pre- and post-natal and paediatric care, including assessment for tongue-tie, lip-tie and paediatric TMJ concerns. What sets us apart is the team around you: if your back pain is being driven by your gait, our certified fitters are down the hall; if you need soft-tissue work, our RMT is too. You get a treatment schedule with clear goals — never open-ended maintenance you don’t need.',
      ],
    },

    conditions: [
      'Low back and neck pain',
      'Headaches and migraines',
      'Sciatica and disc-related pain',
      'Pre- and post-natal discomfort',
      'Paediatric assessment (tongue-tie, TMJ)',
      'Posture and joint dysfunction',
    ],

    firstVisit: [
      {
        title: 'Assessment',
        body: 'Orthopaedic and neurological examination to find the true source of your pain.',
      },
      {
        title: 'Your plan',
        body: 'A treatment schedule with clear goals and a defined end point — not endless visits.',
      },
      {
        title: 'Adjustment',
        body: 'Gentle, targeted treatment beginning on your first visit where appropriate.',
      },
    ],

    practitioner: {
      who: 'Dr. Tiffany Rose Lukas and Dr. Marcia Richards, Chiropractors.',
      coverage:
        'Chiropractic care is covered by most extended health plans. We bill your insurer directly wherever possible.',
    },

    faqs: [
      {
        q: 'Is chiropractic care safe during pregnancy?',
        a: 'Yes. Dr. Tiffany Rose Lukas has specialized training in pre- and post-natal care and adapts technique and positioning for every stage of pregnancy.',
      },
      {
        q: 'Do I need a referral to see a chiropractor?',
        a: 'No referral is needed to book. Some insurance plans require one for reimbursement, so it is worth checking your plan rules before submitting a claim.',
      },
      {
        q: 'Do you treat children?',
        a: 'Yes. We provide paediatric assessment and care, including for tongue-tie, lip-tie and paediatric TMJ function.',
      },
    ],

    pairsWith: [
      { slug: 'physiotherapy', note: 'Rehab and exercise alongside your adjustments.' },
      { slug: 'massage-therapy', note: 'Loosen soft tissue to hold your adjustments longer.' },
      { slug: 'acupuncture', note: 'Release trigger points driving joint pain.' },
    ],

    seo: {
      title: 'Chiropractic Care in London, Ontario',
      description:
        'Evidence-based chiropractic care in North London, Ontario from two licensed chiropractors, including pre/post-natal and paediatric care at Sherwood Forest Mall. Direct billing, same-day appointments.',
      keywords: [
        'chiropractor London Ontario',
        'prenatal chiropractor London',
        'paediatric chiropractic North London',
        'back pain chiropractor',
      ],
    },
  },

  {
    slug: 'massage-therapy',
    name: 'Massage Therapy',
    icon: 'massage',
    accent: 'teal',
    bookLabel: 'Book massage therapy',
    image: '/images/service-massage.jpg',
    imageAlt:
      'Registered massage therapist treating a patient’s shoulders in a softly lit treatment room at Planet Health Care',

    menuNote: 'RMT treatment, billed directly',
    summary:
      'RMT treatment for tension, injury recovery and lymphatic drainage — billed directly.',
    headline: 'Registered Massage Therapy in London, Ontario',
    intro:
      'Therapeutic and relaxation massage from a registered massage therapist with specialized training in lymphatic drainage and assisted stretching.',

    about: {
      heading: 'About massage therapy at Planet Health Care',
      body: [
        'Registered massage therapy at Planet Health Care in London, Ontario is delivered by an RMT with international training and a genuinely results-driven approach. Sessions are tailored to you - deep therapeutic work to unwind injury and chronic tension, gentle relaxation/swedish massage to manage stress, or specialized manual lymphatic drainage using the Dr. Vodder Method for swelling and lymphedema. We also offer Thai massage and assisted stretching to restore mobility and flexibility.',
        'Every appointment starts with a short check-in on your goals and pressure preference, so the hour is spent where your body needs it. Because your RMT works beside our physiotherapists and chiropractors, massage can slot neatly into a broader recovery plan — loosening tissue so an adjustment holds, or easing a muscle so an exercise program progresses faster.',
      ],
    },

    conditions: [
      'Muscle tension and stress',
      'Injury recovery',
      'Lymphedema and swelling',
      'Chronic tightness and headaches',
      'Pre- and post-event sport massage',
      'Mobility and flexibility',
    ],

    firstVisit: [
      {
        title: 'Intake',
        body: 'A short health history and a conversation about pressure preference and your goals.',
      },
      {
        title: 'Treatment',
        body: '30, 45 or 60 minutes of focused therapeutic or relaxation work.',
      },
      {
        title: 'Aftercare',
        body: 'Stretching and hydration guidance, plus a plan if follow-up will help.',
      },
    ],

    practitioner: {
      who: 'Roshel Jacob, Registered Massage Therapist.',
      coverage:
        'RMT receipts are eligible under many extended health plans. We offer direct billing where your insurer allows, subject to your plan rules and limits.',
    },

    faqs: [
      {
        q: 'Are your massage receipts covered by insurance?',
        a: 'Yes. Our massage therapy is provided by a Registered Massage Therapist (RMT), so receipts are eligible under most extended health plans. We also offer direct billing.',
      },
      {
        q: 'What is manual lymphatic drainage?',
        a: 'It’s a gentle, rhythmic technique (we use the Dr. Vodder Method) that encourages lymph flow to reduce swelling — helpful after surgery or for lymphedema.',
      },
      {
        q: 'How long are appointments?',
        a: 'You can book 30, 45 or 60-minute sessions depending on your needs.',
      },
    ],

    pairsWith: [
      { slug: 'physiotherapy', note: 'Pair soft-tissue work with active rehab.' },
      { slug: 'chiropractic', note: 'Loosen tissue so adjustments hold longer.' },
      { slug: 'acupuncture', note: 'Target stubborn trigger points.' },
    ],

    seo: {
      title: 'Registered Massage Therapy in London, Ontario',
      description:
        'Registered massage therapy (RMT) in North London, Ontario — therapeutic and relaxation massage, manual lymphatic drainage and assisted stretching at Sherwood Forest Mall. Direct billing available.',
      keywords: [
        'RMT London Ontario',
        'registered massage therapy North London',
        'manual lymphatic drainage London Ontario',
        'deep tissue massage London',
      ],
    },
  },

  {
    slug: 'psychology',
    name: 'Psychology',
    icon: 'psychology',
    accent: 'violet',
    bookLabel: 'Book a psychology appointment',
    image: '/images/service-psychology.jpg',
    imageAlt: 'Divya Nambiar, Psychologist at Planet Health Care',

    menuNote: 'CBT and trauma support in five languages',
    summary:
      'Registered psychological care and assessment — CBT and trauma support in five languages.',
    headline: 'Psychology Services in London, Ontario',
    intro:
      'Registered psychological assessment and treatment — including accident-related trauma — using CBT and other evidence-based approaches, offered in five languages.',

    about: {
      heading: 'About psychology at Planet Health Care',
      body: [
        'Psychology services at Planet Health Care in London, Ontario are provided by a registered member of the College of Psychologists of Ontario. We offer confidential psychological assessment and treatment for anxiety, depression, stress and burnout, sleep difficulties, life transitions and the psychological impact of injury and chronic pain. We also have particular experience supporting recovery from accident-related trauma, working within motor vehicle accident (MVA) claims.',
        'Treatment is grounded in evidence: cognitive-behavioural therapy (CBT) and other empirically supported approaches, paced with you rather than to a formula. Care is available in English, Hindi, Tamil, Malayalam and Bengali, so more of our North London community can be seen in the language they think and feel in. Bringing psychology into the same clinic as physiotherapy and chiropractic means the physical and mental sides of recovery can finally be treated together.',
      ],
    },

    conditions: [
      'Anxiety and depression',
      'Accident-related trauma (MVA)',
      'Chronic pain adjustment',
      'Stress and burnout',
      'Sleep difficulties',
      'Life transitions',
    ],

    firstVisit: [
      {
        title: 'Intake session',
        body: 'A confidential conversation about what brings you in and what you want to change.',
      },
      {
        title: 'Assessment',
        body: 'Structured psychological assessment where it is clinically helpful.',
      },
      {
        title: 'Therapy',
        body: 'Evidence-based treatment — typically CBT — at a pace set with you.',
      },
    ],

    practitioner: {
      who: 'Divya Nambiar, M.Phil., C. Psych. Assoc. — sessions in English, Hindi, Tamil, Malayalam and Bengali.',
      coverage:
        'Psychology services may be covered by extended health plans and MVA claims. Your insurer is the best source for exact limits, referrals and reimbursement rules.',
    },

    faqs: [
      {
        q: 'Is what I share confidential?',
        a: 'Yes. Sessions are confidential and governed by the standards of the College of Psychologists of Ontario, with limited legal exceptions we’ll explain at intake.',
      },
      {
        q: 'Do you offer sessions in languages other than English?',
        a: 'Yes — sessions are available in English, Hindi, Tamil, Malayalam and Bengali.',
      },
      {
        q: 'Can psychology be part of my accident (MVA) claim?',
        a: 'Yes. We have experience supporting accident-related trauma within motor vehicle accident claims and can bill accordingly.',
      },
    ],

    pairsWith: [
      { slug: 'physiotherapy', note: 'Treat the physical side of recovery.' },
      { slug: 'massage-therapy', note: 'Ease the body while you address the mind.' },
      { slug: 'chiropractic', note: 'Coordinated care under one roof.' },
    ],

    seo: {
      title: 'Psychology Services in London, Ontario',
      description:
        'Registered psychology in North London, Ontario — assessment and CBT for anxiety, depression, chronic pain and accident-related trauma, in five languages, at Sherwood Forest Mall.',
      keywords: [
        'psychologist London Ontario',
        'CBT therapy London Ontario',
        'MVA trauma psychology',
        'Hindi speaking psychologist London Ontario',
      ],
    },
  },

  {
    slug: 'shockwave-therapy',
    name: 'Shockwave Therapy',
    icon: 'shockwave',
    accent: 'teal',
    bookLabel: 'Book shockwave therapy',
    image: '/images/service-shockwave.jpg',
    imageAlt:
      'Hiral Desai applying radial shockwave therapy to a patient foot at Planet Health Care',

    menuNote: 'Radial shockwave for stubborn tendon pain',
    summary:
      'Radial shockwave for stubborn tendon pain — plantar fasciitis, tennis elbow and more.',
    headline: 'Shockwave Therapy in London, Ontario',
    intro:
      'Radial shockwave for the stubborn, chronic tendon and fascia pain that hasn’t responded to rest, stretching or standard treatment.',

    about: {
      heading: 'About shockwave therapy at Planet Health Care',
      body: [
        "Shockwave therapy at Planet Health Care in London, Ontario is for stubborn musculoskeletal pain - the plantar fasciitis you have limped on for months, the tennis elbow that outlasted every brace, the Achilles that flares every time you run. Radial shockwave delivers focused acoustic energy into the affected tendon, fascia or soft tissue to stimulate circulation and support the body's natural healing response.",
        'Treatments are short, done right in the clinic, and typically run three to five sessions about a week apart. We do not treat shockwave as a magic bullet: our physiotherapist or chiropractor confirms it is an appropriate option for your condition, then pairs it with a progressive loading or mobility plan so the tissue has a clear next step.',
      ],
    },

    conditions: [
      'Plantar fasciitis and heel spurs',
      "Tennis and golfer's elbow",
      'Achilles, patellar and hamstring tendinopathy',
      'Rotator cuff injuries',
      'Calcific shoulder tendinitis',
      'Jumper knee',
      'Shin splints',
      'Bursitis',
      'Scar tissue management',
      'Morton neuroma',
      'Trigger point pain',
      'Sports sprains and strains',
    ],

    firstVisit: [
      {
        title: 'Assessment',
        body: 'We confirm your condition is one shockwave genuinely helps before booking sessions.',
      },
      {
        title: 'Sessions',
        body: 'Short in-clinic treatments, typically 3–5 sessions about a week apart.',
      },
      {
        title: 'Loading plan',
        body: 'A progressive exercise program so the tissue heals stronger, not just quieter.',
      },
    ],

    practitioner: {
      who: 'Administered by our registered physiotherapist and chiropractors.',
      coverage:
        'Shockwave is billed under your physiotherapy or chiropractic coverage. Direct billing is available for most plans.',
    },

    faqs: [
      {
        q: 'Does shockwave therapy hurt?',
        a: 'Most patients feel a strong tapping sensation and some tenderness during treatment. Intensity is adjusted to your tolerance, and any soreness afterward usually settles within a day.',
      },
      {
        q: 'How many shockwave sessions will I need?',
        a: 'Most conditions respond to a course of 3–5 sessions, roughly one week apart, alongside a loading exercise program.',
      },
      {
        q: 'Is shockwave covered by insurance?',
        a: 'It’s billed under physiotherapy or chiropractic coverage on most extended health plans, and we offer direct billing.',
      },
    ],

    pairsWith: [
      { slug: 'physiotherapy', note: 'Pair shockwave with active loading rehab.' },
      { slug: 'acupuncture', note: 'Add needling for trigger-point pain.' },
      { slug: 'chiropractic', note: 'Address the joint mechanics involved.' },
    ],

    seo: {
      title: 'Shockwave Therapy in London, Ontario',
      description:
        'Radial shockwave therapy in North London, Ontario for chronic tendon pain — plantar fasciitis, tennis elbow, Achilles and more, at Sherwood Forest Mall. Direct billing available.',
      keywords: [
        'shockwave therapy London Ontario',
        'plantar fasciitis treatment London Ontario',
        'tennis elbow shockwave',
        'radial shockwave North London',
      ],
    },
  },

  {
    slug: 'acupuncture',
    name: 'Acupuncture',
    icon: 'acupuncture',
    accent: 'teal',
    bookLabel: 'Book acupuncture',
    image: '/images/service-acupuncture.jpg',
    imageAlt: 'Fine acupuncture needles placed along a patient arm during treatment',

    menuNote: 'Medical acupuncture and dry needling',
    summary: 'Medical acupuncture and dry needling for pain, muscle tension and recovery support.',
    headline: 'Acupuncture & Dry Needling in London, Ontario',
    intro:
      'Contemporary medical acupuncture and dry needling delivered by trained physiotherapy and chiropractic practitioners as part of a broader rehabilitation plan.',

    about: {
      heading: 'About acupuncture at Planet Health Care',
      body: [
        'Acupuncture and dry needling at Planet Health Care in London, Ontario use fine, sterile, single-use needles placed at specific points along muscles, nerves, tendons or fascia. The goal is to stimulate a local physiological response, improve circulation, calm irritated nerves and support the body recovery process.',
        'Treatment is delivered by our trained physiotherapy and chiropractic practitioners and is usually folded into a broader plan that may include exercise, manual therapy, massage or shockwave. That collaborative approach means we assess the whole picture, not just one sore spot, and adjust the plan to your specific needs.',
      ],
    },

    conditions: [
      'Low back and neck pain',
      'Rotator cuff injuries',
      "Tennis and golfer's elbow",
      'Chronic pain',
      'TMJ dysfunction',
      'Sciatica and nerve pain',
      'Stress and anxiety',
      "Women's health concerns",
      'Myofascial trigger points',
      'Osteoarthritis',
      'Carpal tunnel symptoms',
      'Migraines and tension headaches',
    ],

    firstVisit: [
      {
        title: 'Screening',
        body: 'A quick review of your condition and whether needling is right for you.',
      },
      {
        title: 'Treatment',
        body: 'Fine, sterile, single-use needles placed at precise points. Needles may rest for 10-30 minutes depending on your plan.',
      },
      {
        title: 'Integration',
        body: 'Needling is paired with exercise, manual therapy or another service when that supports your recovery plan.',
      },
    ],

    practitioner: {
      who: 'Delivered by our trained physiotherapy and chiropractic practitioners.',
      coverage:
        'Billed under your physiotherapy or chiropractic coverage, with direct billing available for most plans.',
    },

    faqs: [
      {
        q: 'What’s the difference between dry needling and acupuncture?',
        a: 'Dry needling targets muscular trigger points and painful tissue. Contemporary medical acupuncture uses specific points to influence pain, circulation and nervous-system response. We use the approach that suits your condition and provider scope.',
      },
      {
        q: 'Are the needles safe?',
        a: 'Yes. We use fine, sterile, single-use needles and dispose of them after every treatment.',
      },
      {
        q: 'Is needling covered by insurance?',
        a: 'When acupuncture is provided by a physiotherapist or chiropractor, it is billed under that service category. We can direct bill many insurance companies on your behalf.',
      },
    ],

    pairsWith: [
      { slug: 'physiotherapy', note: 'Fold needling into an active rehab plan.' },
      { slug: 'massage-therapy', note: 'Combine with soft-tissue release.' },
      { slug: 'shockwave-therapy', note: 'Add shockwave for chronic tendon pain.' },
    ],

    seo: {
      title: 'Acupuncture & Dry Needling in London, Ontario',
      description:
        'Medical acupuncture and dry needling in North London, Ontario for pain, trigger points, muscle tension and recovery support at Sherwood Forest Mall. Direct billing available.',
      keywords: [
        'acupuncture London Ontario',
        'dry needling London Ontario',
        'trigger point needling North London',
      ],
    },
  },

  {
    slug: 'pelvic-floor-physiotherapy',
    name: 'Pelvic Floor Physiotherapy',
    icon: 'pelvicFloor',
    accent: 'brand',
    bookLabel: 'Book pelvic floor physiotherapy',
    image: '/images/service-pelvic-floor-physiotherapy.jpg',
    imageAlt:
      'Hiral Desai guiding a patient through a mobility assessment at Planet Health Care',

    menuNote: 'Specialized pelvic health physiotherapy',
    summary:
      'Specialized physiotherapy for bladder, bowel, pelvic pain, pregnancy and postpartum concerns.',
    headline: 'Pelvic Floor Physiotherapy in London, Ontario',
    intro:
      'Specialized pelvic floor physiotherapy in North London for bladder, bowel, pelvic pain, pregnancy and postpartum concerns - delivered with privacy, consent and a clear treatment plan.',

    about: {
      heading: 'About pelvic floor physiotherapy at Planet Health Care',
      body: [
        'Pelvic floor physiotherapy assesses and treats the muscles, ligaments, nerves and connective tissue that support bladder, bowel, sexual and core function. At Planet Health Care, this specialty service is offered in a private, respectful setting at Sherwood Forest Mall, with time to understand your symptoms, explain what is happening and build a plan that fits your comfort level.',
        'Treatment may include education about pelvic floor function, bladder and bowel habits, pain management, breathing, posture, manual therapy for surrounding muscles and joints, and individualized exercises for the core, hips and pelvic floor. Any internal assessment or treatment is discussed first, requires your consent, and can be declined or stopped at any time.',
      ],
    },

    conditions: [
      'Urinary urgency and frequency',
      'Bladder leakage or incontinence',
      'Bowel dysfunction and constipation',
      'Pelvic organ prolapse symptoms',
      'Chronic pelvic pain',
      'Pain with intercourse',
      'Pregnancy and postpartum pelvic pain',
      'C-section or perineal scar concerns',
      'Diastasis recti',
      'Pubic symphysis or SI joint pain',
      'Endometriosis-related pelvic pain',
      'Overactive pelvic floor symptoms',
    ],

    firstVisit: [
      {
        title: 'Private conversation',
        body: 'Your visit starts with a confidential history and a clear explanation of what pelvic floor physiotherapy can involve.',
      },
      {
        title: 'Assessment with consent',
        body: 'Your physiotherapist assesses posture, movement, breathing, hips, core and pelvic floor function. Sensitive assessment is only done with your consent.',
      },
      {
        title: 'Your plan',
        body: 'You leave with education, practical strategies and a customized home exercise plan matched to your symptoms and goals.',
      },
    ],

    practitioner: {
      who: 'Hiral Desai, Registered Physiotherapist with continuing education in pelvic floor therapy.',
      coverage:
        'Pelvic floor physiotherapy is billed as physiotherapy and is covered by many extended health plans. Direct billing is available for many insurers.',
    },

    faqs: [
      {
        q: 'Do I need a doctor referral for pelvic floor physiotherapy?',
        a: 'No. You can book directly. Some insurance plans may require a referral for reimbursement, so check your plan details if you are unsure.',
      },
      {
        q: 'Will I need an internal pelvic exam?',
        a: 'Not necessarily. Your physiotherapist will explain every option first. Any internal assessment or treatment requires your consent and can be declined or stopped at any time.',
      },
      {
        q: 'Can pelvic floor physiotherapy help after pregnancy?',
        a: 'Yes. It can support postpartum recovery, pelvic pain, bladder leakage, diastasis recti, scar sensitivity and return to activity.',
      },
    ],

    pairsWith: [
      { slug: 'physiotherapy', note: 'Coordinate pelvic health with whole-body rehabilitation.' },
      { slug: 'massage-therapy', note: 'Ease surrounding muscle tension when appropriate.' },
      { slug: 'acupuncture', note: 'Support pain and muscle tension as part of a broader plan.' },
    ],

    seo: {
      title: 'Pelvic Floor Physiotherapy in London, Ontario',
      description:
        'Pelvic floor physiotherapy in North London, Ontario for bladder leakage, pelvic pain, pregnancy, postpartum recovery, bowel concerns and core function at Sherwood Forest Mall.',
      keywords: [
        'pelvic floor physiotherapy London Ontario',
        'pelvic health physiotherapist North London',
        'postpartum physiotherapy London Ontario',
        'bladder leakage physiotherapy London',
      ],
    },
  },
];

/** Lookup helpers used by pages, menus and schema builders. */
export const getService = (slug) => services.find((service) => service.slug === slug);

export const serviceSlugs = services.map((service) => service.slug);

export const getRelatedServices = (service) =>
  (service.pairsWith || [])
    .map(({ slug, note }) => {
      const related = getService(slug);
      return related ? { ...related, note } : null;
    })
    .filter(Boolean);

/** Options for the call-back request form. */
export const enquiryOptions = [
  ...services.map((service) => service.name),
  'Compression stockings / bracing',
  'Not sure — help me choose',
];
