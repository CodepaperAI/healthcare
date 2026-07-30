import { site } from '@/data/site';

export default function manifest() {
  return {
    name: site.name,
    short_name: 'Planet Health',
    description: site.shortDescription,
    start_url: '/',
    display: 'standalone',
    background_color: '#060666',
    theme_color: '#2563eb',
    icons: [{ src: '/icon-512.png', sizes: '512x512', type: 'image/png' }],
  };
}
