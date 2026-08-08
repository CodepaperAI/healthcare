import Hero from '@/components/home/Hero';
import TrustBar from '@/components/home/TrustBar';
import ServicesPreview from '@/components/home/ServicesPreview';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import ProductsSpotlight from '@/components/home/ProductsSpotlight';
import TeamPreview from '@/components/home/TeamPreview';
import Testimonials from '@/components/home/Testimonials';
import LocationSection from '@/components/home/LocationSection';
import AppointmentCTA from '@/components/sections/AppointmentCTA';
import Schema from '@/components/ui/Schema';
import { serviceListSchema, webPageSchema } from '@/lib/schema';
import { services } from '@/data/services';

/**
 * Homepage. Metadata for "/" is declared in app/layout.js because the root
 * layout doubles as the site default — no duplicate export needed here.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesPreview />
      <WhyChooseUs />
      <ProductsSpotlight />
      <TeamPreview />
      <Testimonials />
      <LocationSection index="07" />
      <AppointmentCTA index="08" />

      <Schema
        data={[
          webPageSchema({
            title:
              'Physiotherapy, Massage Therapy, Chiropractic, Pelvic Floor Physio & Custom Orthotics',
            description:
              'Multidisciplinary clinic in North London, Ontario offering physiotherapy, pelvic floor physiotherapy, chiropractic, registered massage therapy, psychology, shockwave and acupuncture.',
            path: '/',
          }),
          serviceListSchema(services),
        ]}
      />
    </>
  );
}
