import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileActionBar from '@/components/layout/MobileActionBar';
import Schema from '@/components/ui/Schema';
import { ThemeProvider, themeInitScript } from '@/components/layout/ThemeProvider';
import { medicalBusinessSchema, websiteSchema } from '@/lib/schema';
import { buildMetadata, defaultViewport } from '@/lib/seo';
import { site } from '@/data/site';

/**
 * Plus Jakarta Sans carries headings; Inter carries body and UI text.
 * Both are self-hosted and subset automatically by next/font — no network
 * request to Google at runtime and no layout shift.
 */
const display = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['600', '700', '800'],
  variable: '--font-display',
});

const body = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
});

export const metadata = {
  metadataBase: new URL(site.url),
  ...buildMetadata({
    title: 'Physiotherapy, Registered Massage, Pelvic Floor Physio & Custom Orthotics',
    description:
      'Planet Health Care is a multidisciplinary clinic at Sherwood Forest Mall in North London, Ontario — physiotherapy, pelvic floor physiotherapy, chiropractic, registered massage therapy, psychology, shockwave and acupuncture, plus medical compression stockings, custom orthotics and bracing.',
    path: '/',
    keywords: [
      'physiotherapy London Ontario',
      'pelvic floor physiotherapy London Ontario',
      'registered massage therapy North London',
      'chiropractor London Ontario',
      'custom orthotics London Ontario',
      'compression stockings London Ontario',
      'Sherwood Forest Mall clinic',
    ],
  }),
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  formatDetection: { telephone: true, address: true, email: true },
  manifest: '/manifest.webmanifest',
};

export const viewport = defaultViewport;

export default function RootLayout({ children }) {
  return (
    <html lang="en-CA" suppressHydrationWarning className={`${display.variable} ${body.variable}`}>
      <head>
        {/* Sets the theme class before first paint so there is no flash. */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-dvh">
        <ThemeProvider>
          <Header />
          <main id="main" className="min-h-[60vh]">
            {children}
          </main>
          <Footer />

          {/* Clears the fixed mobile action bar */}
          <div aria-hidden="true" className="h-[4.25rem] sm:hidden" />
          <MobileActionBar />
        </ThemeProvider>

        <Schema data={[medicalBusinessSchema(), websiteSchema()]} />
      </body>
    </html>
  );
}
