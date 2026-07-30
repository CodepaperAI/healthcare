import Icon from '@/components/ui/Icon';
import { site } from '@/data/site';

/**
 * Persistent call/book bar on small screens, where the header CTA is hidden.
 * A matching spacer is rendered in the root layout so it never covers content.
 */
export default function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-canvas/92 backdrop-blur-lg sm:hidden">
      <div className="grid grid-cols-2 gap-2 px-3 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))]">
        <a
          href={site.phoneHref}
          className="flex h-11 items-center justify-center gap-2 rounded-full border border-line text-[0.88rem] font-semibold text-strong"
        >
          <Icon name="phone" className="h-4 w-4 text-brand-600" />
          Call
        </a>
        <a
          href={site.links.booking}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-11 items-center justify-center gap-2 rounded-full bg-brand-600 text-[0.88rem] font-semibold text-white"
        >
          <Icon name="calendar" className="h-4 w-4" />
          Book
        </a>
      </div>
    </div>
  );
}
