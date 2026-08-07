/**
 * Inline SVG icon set.
 *
 * Kept as a local component rather than an icon package: it ships only the
 * paths actually used, inherits currentColor, and works in server components.
 * All icons share a 24x24 grid and a 1.6 stroke so they sit together evenly.
 */

const STROKE = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

const paths = {
  /* ---------- Clinical services ---------- */
  physiotherapy: (
    <>
      <circle cx="12" cy="4.4" r="2.2" />
      <path d="M12 6.6v5.2m0 0-3.4 3.4m3.4-3.4 3.4 3.4M8.6 15.2 6.5 20m8.9-4.8 2.1 4.8M8.2 9.1 4.6 7.9m11.2 1.2 3.6-1.2" />
    </>
  ),
  chiropractic: (
    <>
      <path d="M12 2.6c-1.7 1.3-1.7 2.7 0 4s1.7 2.7 0 4-1.7 2.7 0 4 1.7 2.7 0 4.8" />
      <path d="M9.2 4.6h5.6M9.2 8.6h5.6M9.2 12.6h5.6M9.2 16.6h5.6" />
    </>
  ),
  massage: (
    <>
      <path d="M4.4 16.8c2.7-2.6 6.3-3.9 10-3.7 2.1.1 4 .8 5.6 1.9" />
      <path d="M8.2 8.2v3.4M12 6.6v4.6m3.8-3v3.4" />
    </>
  ),
  psychology: (
    <>
      <path d="M12 5.2a3.2 3.2 0 0 0-3.2 3.1 3 3 0 0 0-1.3 5.5v.7a3 3 0 0 0 3 3H12z" />
      <path d="M12 5.2a3.2 3.2 0 0 1 3.2 3.1 3 3 0 0 1 1.3 5.5v.7a3 3 0 0 1-3 3H12z" />
      <path d="M12 17.5V21" />
    </>
  ),
  shockwave: (
    <>
      <circle cx="17.6" cy="12" r="1.7" />
      <path d="M12.6 8.4a6 6 0 0 0 0 7.2M9.4 6.1a10 10 0 0 0 0 11.8M6.2 3.8a14 14 0 0 0 0 16.4" />
    </>
  ),
  acupuncture: (
    <>
      <path d="M20.2 3.8 10.4 13.6M17.6 4 20 6.4" />
      <circle cx="7.2" cy="16.8" r="1.3" />
      <circle cx="4.6" cy="12.4" r="1.1" />
      <circle cx="11.6" cy="19.4" r="1.1" />
    </>
  ),
  pelvicFloor: (
    <>
      <path d="M7.2 4.4c-1 1.7-1.5 3.7-1.5 5.8 0 4.6 2.6 8.6 6.3 10.2 3.7-1.6 6.3-5.6 6.3-10.2 0-2.1-.5-4.1-1.5-5.8" />
      <path d="M8.2 8.1c1.1 1.5 2.4 2.2 3.8 2.2s2.7-.7 3.8-2.2" />
      <path d="M8.9 13.6c.8 1.1 1.8 1.7 3.1 1.7s2.3-.6 3.1-1.7" />
      <path d="M12 10.3v5" />
    </>
  ),

  /* ---------- Products ---------- */
  compression: (
    <>
      <path d="M9 3h6l-.7 8.4a5.3 5.3 0 0 1-1.5 3.3L9.8 18a3 3 0 0 1-4.2 0 3 3 0 0 1 0-4.2l3-3" />
      <path d="M9.2 6.4h5.6M9 9.4h5.4" />
    </>
  ),
  brace: (
    <>
      <rect x="4.4" y="7.4" width="15.2" height="9.2" rx="3.2" />
      <path d="M9.2 7.4v9.2m5.6-9.2v9.2M4.4 12h15.2" />
    </>
  ),
  tens: (
    <>
      <rect x="4.2" y="3.4" width="9.2" height="13.2" rx="2.4" />
      <path d="M7.2 7h3.2m-3.2 3h3.2m-3.2 3h1.8" />
      <path d="M15.4 8.6c1.8.9 2.8 2.2 2.8 3.9s-1 3-2.8 4" />
    </>
  ),
  percussion: (
    <>
      <path d="M10.6 3.4h2.8v6.2h-2.8z" />
      <rect x="7.4" y="9.6" width="9.2" height="5.2" rx="2" />
      <path d="M12 14.8V21M8.6 21h6.8" />
    </>
  ),
  freeze: (
    <>
      <path d="M12 3v18M4.2 7.5l15.6 9M19.8 7.5l-15.6 9" />
      <path d="M12 7.4 9.8 5.2M12 7.4l2.2-2.2M12 16.6l-2.2 2.2m2.2-2.2 2.2 2.2" />
    </>
  ),

  /* ---------- Trust and utility ---------- */
  shield: (
    <>
      <path d="M12 21s7-3.2 7-8.6V5.8L12 3 5 5.8v6.6C5 17.8 12 21 12 21Z" />
      <path d="m9.2 11.8 2 2 3.6-3.8" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M12 7.4V12l3.2 2" />
    </>
  ),
  car: (
    <>
      <path d="M4.2 15.4h15.6v-3l-1.8-4.2a2 2 0 0 0-1.8-1.2H7.8a2 2 0 0 0-1.8 1.2L4.2 12.4z" />
      <circle cx="7.6" cy="17.6" r="1.6" />
      <circle cx="16.4" cy="17.6" r="1.6" />
    </>
  ),
  phone: <path d="M6.4 3.6h3l1.6 4-2 1.4a10.4 10.4 0 0 0 6 6l1.4-2 4 1.6v3a1.8 1.8 0 0 1-2 1.8A16.4 16.4 0 0 1 4.6 5.6a1.8 1.8 0 0 1 1.8-2Z" />,
  mail: (
    <>
      <rect x="3.4" y="5.4" width="17.2" height="13.2" rx="2.4" />
      <path d="m4.6 7.4 7.4 5.4 7.4-5.4" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s6.4-5.4 6.4-10.2A6.4 6.4 0 0 0 5.6 10.8C5.6 15.6 12 21 12 21Z" />
      <circle cx="12" cy="10.6" r="2.4" />
    </>
  ),
  star: (
    <path
      d="m12 3.6 2.6 5.4 5.9.8-4.3 4.1 1 5.9-5.2-2.9-5.2 2.9 1-5.9L3.5 9.8l5.9-.8z"
      fill="currentColor"
      stroke="none"
    />
  ),
  arrowRight: <path d="M4.6 12h14.4m0 0-5.2-5.2m5.2 5.2-5.2 5.2" />,
  arrowUpRight: <path d="M7.4 16.6 16.6 7.4m0 0H9.4m7.2 0v7.2" />,
  check: <path d="m4.8 12.6 4.6 4.6L19.2 7.4" />,
  plus: <path d="M12 5.4v13.2M5.4 12h13.2" />,
  minus: <path d="M5.4 12h13.2" />,
  chevronDown: <path d="m6.4 9.6 5.6 5.2 5.6-5.2" />,
  chevronRight: <path d="m9.6 6.4 5.2 5.6-5.2 5.6" />,
  external: <path d="M14 4.6h5.4V10M19 5 11.4 12.6M18 14v4.2a1.8 1.8 0 0 1-1.8 1.8H5.8A1.8 1.8 0 0 1 4 18.2V7.8A1.8 1.8 0 0 1 5.8 6H10" />,
  menu: <path d="M4 7.2h16M4 12h16M4 16.8h11" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 3v2m0 14v2M3 12h2m14 0h2M5.6 5.6 7 7m10 10 1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4" />
    </>
  ),
  moon: <path d="M20 14.4A8.6 8.6 0 0 1 9.6 4a8.6 8.6 0 1 0 10.4 10.4Z" />,
  calendar: (
    <>
      <rect x="3.6" y="5.4" width="16.8" height="15" rx="2.4" />
      <path d="M8 3.4v4m8-4v4M3.6 10.4h16.8" />
    </>
  ),
  users: (
    <>
      <circle cx="9.4" cy="8.4" r="3.2" />
      <path d="M3.6 19.4a5.8 5.8 0 0 1 11.6 0M16 5.6a3.2 3.2 0 0 1 0 5.6m1.4 2.4a5.8 5.8 0 0 1 3 5.8" />
    </>
  ),
  roof: (
    <>
      <path d="M3.4 10.6 12 4l8.6 6.6" />
      <path d="M5.6 12.2v7.2h12.8v-7.2" />
      <path d="M9.6 19.4v-4.2h4.8v4.2" />
    </>
  ),
  clipboard: (
    <>
      <path d="M9 4.6H7a1.8 1.8 0 0 0-1.8 1.8v12.2A1.8 1.8 0 0 0 7 20.4h10a1.8 1.8 0 0 0 1.8-1.8V6.4A1.8 1.8 0 0 0 17 4.6h-2" />
      <rect x="9" y="3" width="6" height="3.4" rx="1.2" />
      <path d="m9.4 12.4 1.8 1.8 3.4-3.6" />
    </>
  ),
  trend: <path d="M4 17.4l5.2-5.4 3.2 3.2 6-6.6m0 0h-4.6m4.6 0v4.6" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M3.4 12h17.2M12 3.4c2.4 2.4 3.6 5.4 3.6 8.6s-1.2 6.2-3.6 8.6c-2.4-2.4-3.6-5.4-3.6-8.6S9.6 5.8 12 3.4Z" />
    </>
  ),
  medal: (
    <>
      <circle cx="12" cy="14.6" r="5.4" />
      <path d="M9.4 9.6 7.4 3.6h9.2l-2 6" />
      <path d="m12 12.2 1 2 2.2.3-1.6 1.5.4 2.2-2-1.1-2 1.1.4-2.2-1.6-1.5 2.2-.3z" />
    </>
  ),
  sparkle: <path d="M12 3.4l1.8 4.8 4.8 1.8-4.8 1.8L12 16.6l-1.8-4.8-4.8-1.8 4.8-1.8zM18.4 15.4l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z" />,
  quote: (
    <path
      d="M9.2 6C6.4 7.4 4.6 10 4.6 13.2c0 2.8 1.6 4.8 4 4.8 2 0 3.4-1.4 3.4-3.4 0-1.8-1.2-3.2-3-3.2-.4 0-.8 0-1 .2.4-1.6 1.6-3 3.2-3.8zM19 6c-2.8 1.4-4.6 4-4.6 7.2 0 2.8 1.6 4.8 4 4.8 2 0 3.4-1.4 3.4-3.4 0-1.8-1.2-3.2-3-3.2-.4 0-.8 0-1 .2.4-1.6 1.6-3 3.2-3.8z"
      fill="currentColor"
      stroke="none"
    />
  ),
  facebook: (
    <path
      d="M13.4 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.6V3.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.3H7.5V13h2.7v8z"
      fill="currentColor"
      stroke="none"
    />
  ),
  instagram: (
    <>
      <rect x="3.6" y="3.6" width="16.8" height="16.8" rx="5" />
      <circle cx="12" cy="12" r="3.9" />
      <circle cx="16.9" cy="7.1" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  google: (
    <path
      d="M21.4 12.2c0-.7-.1-1.3-.2-1.9H12v3.6h5.3c-.2 1.2-.9 2.2-2 2.9v2.4h3.2c1.9-1.7 2.9-4.3 2.9-7zM12 22c2.7 0 4.9-.9 6.5-2.4l-3.2-2.4c-.9.6-2 .9-3.3.9-2.6 0-4.7-1.7-5.5-4H3.2v2.5C4.8 19.9 8.1 22 12 22zM6.5 14.1a6 6 0 0 1 0-4.2V7.4H3.2a10 10 0 0 0 0 9.2zM12 5.9c1.5 0 2.8.5 3.8 1.5l2.8-2.8C16.9 2.9 14.7 2 12 2 8.1 2 4.8 4.1 3.2 7.4l3.3 2.5c.8-2.3 2.9-4 5.5-4z"
      fill="currentColor"
      stroke="none"
    />
  ),
  languages: (
    <>
      <path d="M3.6 6.4h8M7.6 4.4v2M9.6 6.4c0 3.4-2.6 6.4-6 7.6" />
      <path d="M4.4 9.6c0 2.4 2.8 4.4 6.2 4.4M12.6 20.4l3.8-9.2 3.8 9.2M14.2 17.2h4.4" />
    </>
  ),
  heart: <path d="M12 20s-7.4-4.4-7.4-9.4A4.2 4.2 0 0 1 12 8.2a4.2 4.2 0 0 1 7.4 2.4c0 5-7.4 9.4-7.4 9.4Z" />,
};

export default function Icon({ name, className = 'h-5 w-5', title, ...rest }) {
  const glyph = paths[name];
  if (!glyph) return null;

  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden={title ? undefined : 'true'}
      role={title ? 'img' : undefined}
      focusable="false"
      {...STROKE}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      {glyph}
    </svg>
  );
}

export const iconNames = Object.keys(paths);
