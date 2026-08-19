import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';

function formatDate(value) {
  if (!value) return null;
  return new Intl.DateTimeFormat('en-CA', {
    dateStyle: 'medium',
  }).format(new Date(value));
}

export default function BlogCard({ blog }) {
  const date = formatDate(blog.publishDate);
  const image = blog.featuredImage;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-elevated shadow-card transition-all duration-400 ease-premium hover:-translate-y-1 hover:border-brand-600/35 hover:shadow-lift">
      <Link href={`/blog/${blog.slug}`} className="block overflow-hidden bg-surface">
        {image ? (
          <Image
            src={image}
            alt={blog.title}
            width={1200}
            height={675}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="aspect-[16/9] w-full object-cover transition-transform duration-[900ms] ease-premium group-hover:scale-[1.03]"
          />
        ) : (
          <div className="grid aspect-[16/9] place-items-center bg-brand-800 text-white">
            <Icon name="book" className="h-10 w-10 text-teal-400" />
          </div>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-muted">
          {blog.categories?.[0] && <span className="text-brand-600">{blog.categories[0]}</span>}
          {date && <time dateTime={blog.publishDate}>{date}</time>}
        </div>
        <h2 className="mt-4 font-display text-[1.2rem] font-bold leading-snug text-strong">
          <Link href={`/blog/${blog.slug}`} className="transition-colors group-hover:text-brand-600">
            {blog.title}
          </Link>
        </h2>
        {blog.excerpt && <p className="mt-3 flex-1 text-[0.94rem] leading-relaxed text-muted">{blog.excerpt}</p>}
        <Link
          href={`/blog/${blog.slug}`}
          className="mt-6 inline-flex items-center gap-1.5 text-[0.86rem] font-semibold text-brand-600"
        >
          Read article
          <Icon name="arrowRight" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}