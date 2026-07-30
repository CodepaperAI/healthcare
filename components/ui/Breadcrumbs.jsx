import Link from 'next/link';
import Icon from '@/components/ui/Icon';

/**
 * Breadcrumb trail. Pair with breadcrumbSchema() from lib/schema.js so the
 * visible trail and the structured data always match.
 */
export default function Breadcrumbs({ trail = [], tone = 'light' }) {
  if (trail.length < 2) return null;

  const muted = tone === 'dark' ? 'text-white/55' : 'text-muted';
  const current = tone === 'dark' ? 'text-white' : 'text-strong';
  const hover = tone === 'dark' ? 'hover:text-white' : 'hover:text-brand-600';

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[0.78rem] font-medium">
        {trail.map((crumb, index) => {
          const isLast = index === trail.length - 1;
          return (
            <li key={crumb.href} className="flex items-center gap-1.5">
              {isLast ? (
                <span className={current} aria-current="page">
                  {crumb.label}
                </span>
              ) : (
                <>
                  <Link href={crumb.href} className={`${muted} ${hover} transition-colors`}>
                    {crumb.label}
                  </Link>
                  <Icon name="chevronRight" className={`h-3 w-3 ${muted}`} />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
