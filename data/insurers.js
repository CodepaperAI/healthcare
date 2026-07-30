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
    body: 'Share your plan and member details at the front desk. We verify what’s covered before you’re treated.',
  },
  {
    title: 'We bill your insurer',
    body: 'After your visit we submit the claim directly to your provider — you pay only any portion your plan doesn’t cover.',
  },
];

export const billingFaqs = [
  {
    q: 'Which services can be direct billed?',
    a: 'Physiotherapy, chiropractic, registered massage therapy, psychology, shockwave and acupuncture can all be direct billed to most extended health plans, subject to your coverage.',
  },
  {
    q: 'Will I have to pay anything?',
    a: 'Only the portion your plan doesn’t cover (for example, a co-pay or an amount above your annual maximum). We verify your coverage before treatment so there are no surprises.',
  },
  {
    q: 'Do you direct bill for motor vehicle accident claims?',
    a: 'Yes. Approved MVA treatment is billed directly to your auto insurer — see our Special Programs page.',
  },
];
