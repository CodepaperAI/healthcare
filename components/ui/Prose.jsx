import { cn } from '@/lib/utils';

/** Long-form body copy with a comfortable measure and consistent rhythm. */
export default function Prose({ paragraphs = [], className, size = 'md' }) {
  const sizes = {
    md: 'text-[1.02rem] leading-[1.75]',
    lg: 'text-[1.08rem] leading-[1.75] sm:text-[1.14rem]',
  };

  return (
    <div className={cn('flex max-w-prose flex-col gap-5 text-body', sizes[size], className)}>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}
