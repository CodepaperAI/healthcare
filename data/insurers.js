/** Extended health providers we bill directly. */
export const insurers = [
  'Sun Life',
  'Manulife',
  'Canada Life',
  'Green Shield',
  'Desjardins',
  'Blue Cross',
  'Equitable Life',
  'GMS',
  'ClaimSecure',
  'Johnston Group',
  'SSQ',
  'Chambers of Commerce',
];

/** The three-step direct billing flow shown on /direct-billing. */
export const billingSteps = [
  {
    title: 'Book your appointment',
    body: 'Book online through our portal or call 226-721-8777. Let us know you’d like to use direct billing.',
  },
  {
    title: 'Bring your insurance details',
    body: 'Share your insurer, member ID and any plan limits, referral rules or pre-authorization details your insurer has provided.',
  },
  {
    title: 'We bill your insurer',
    body: 'After your visit we submit the claim directly where your plan allows. You pay only any co-pay, deductible or remaining balance.',
  },
];

export const coverageNotes = [
  {
    title: 'Covered services',
    body: 'Many extended health plans include services such as physiotherapy, pelvic floor physiotherapy, chiropractic care, massage therapy, psychology, orthotics, braces and compression stockings.',
  },
  {
    title: 'Direct billing',
    body: 'For eligible services, we bill many insurance companies directly so you do not have to pay the full visit fee first and wait for reimbursement.',
  },
  {
    title: 'Claim support',
    body: 'If direct billing is not available, or if you have already paid, our team can help you understand the receipts and documentation usually needed for claim submission.',
  },
  {
    title: 'Plan limits',
    body: 'Coverage limits, referral requirements, pre-authorizations, co-payments and deductibles are set by your insurance plan. Please confirm those details with your insurer and share them with us.',
  },
  {
    title: 'Pre-authorization',
    body: 'Some products or treatment plans may need pre-authorization. When documentation is required, we help prepare the clinic information your insurer requests.',
  },
  {
    title: 'Keep your records',
    body: 'Keep copies of receipts, insurer messages and benefit details so claim questions can be resolved quickly.',
  },
];

export const billingFaqs = [
  {
    q: 'Which services can be direct billed?',
    a: 'Physiotherapy, pelvic floor physiotherapy, chiropractic, registered massage therapy, psychology, shockwave and acupuncture can all be direct billed to many extended health plans, subject to your plan rules.',
  },
  {
    q: 'Will I have to pay anything?',
    a: 'You may need to pay any co-pay, deductible, amount above your annual maximum, or service your plan does not cover. Your insurer is the best source for exact remaining coverage.',
  },
  {
    q: 'Do you direct bill for motor vehicle accident claims?',
    a: 'Yes. Approved MVA treatment is billed directly to your auto insurer — see our Special Programs page.',
  },
];
