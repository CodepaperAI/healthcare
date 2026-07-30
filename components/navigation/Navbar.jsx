'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ServicesDropdown from '@/components/navigation/ServicesDropdown';
import { primaryNav } from '@/data/navigation';
import { cn } from '@/lib/utils';

/**
 * Desktop navigation. Appears at xl and above; below that the header shows the
 * hamburger and the drawer takes over. Links are entirely data driven.
 */
export default function Navbar({ className }) {
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <nav aria-label="Main navigation" className={cn('items-center gap-0.5', className)}>
      {primaryNav.map((item) =>
        item.children ? (
          <ServicesDropdown key={item.href} item={item} isActive={isActive(item.href)} />
        ) : (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive(item.href) ? 'page' : undefined}
            className={cn(
              'relative rounded-full px-3 py-2 text-[0.84rem] font-semibold transition-colors duration-200',
              isActive(item.href) ? 'text-brand-600' : 'text-strong hover:text-brand-600',
            )}
          >
            {item.label}
            {isActive(item.href) && (
              <span
                aria-hidden="true"
                className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand-600"
              />
            )}
          </Link>
        ),
      )}
    </nav>
  );
}
