import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Icon from '@/components/ui/Icon';
import Schema from '@/components/ui/Schema';
import AppointmentCTA from '@/components/sections/AppointmentCTA';
import { getBlog } from '@/lib/uplift';
import { articleSchema, breadcrumbSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';
import { slugify } from '@/lib/utils';

function formatDate(value) {
  if (!value) return null;
  return new Intl.DateTimeFormat('en-CA', { dateStyle: 'long' }).format(new Date(value));
}

function safeContent(content = '') {
  return content
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<img\b[^>]*>/gi, '')
    .replace(/\son\w+=("[^"]*"|'[^']*'|[^\s>]+)/gi, '')
    .replace(/javascript:/gi, '');
}

function stripMarkup(value = '') {
  return value.replace(/<[^>]+>/g, '').trim();
}

function getArticleHeadings(content = '') {
  const headings = [];
  const usedIds = new Set();
  const headingPattern = /<(h2|h3)([^>]*)>([\s\S]*?)<\/\1>/gi;
  let match;

  while ((match = headingPattern.exec(safeContent(content))) !== null) {
    const label = stripMarkup(match[3]);
    const baseId = slugify(label);
    if (!label || !baseId) continue;

    let id = baseId;
    let suffix = 2;
    while (usedIds.has(id)) id = `${baseId}-${suffix++}`;
    usedIds.add(id);
    headings.push({ id, label, level: match[1].toLowerCase() });
  }

  return headings;
}

function BlogContent({ content, headings }) {
  if (!content) return null;
  if (/<[a-z][\s\S]*>/i.test(content)) {
    let headingIndex = 0;
    const cleanedContent = safeContent(content).replace(
      /<(h2|h3)([^>]*)>([\s\S]*?)<\/\1>/gi,
      (match, heading, attributes, label) => {
        const currentHeading = headings[headingIndex++];
        const attributesWithoutId = attributes.replace(/\s+id=("[^"]*"|'[^']*'|[^\s>]+)/i, '');
        return `<${heading}${attributesWithoutId} id="${currentHeading?.id || slugify(stripMarkup(label))}">${label}</${heading}>`;
      },
    );
    return <div className="blog-content" dangerouslySetInnerHTML={{ __html: cleanedContent }} />;
  }
  return content.split(/\n{2,}/).map((paragraph) => <p key={paragraph}>{paragraph}</p>);
}

function ArticleRail({ title, headings }) {
  return (
    <aside className="lg:sticky lg:top-28 lg:self-start">
      <div className="rounded-card border border-line bg-surface p-5">
        <p className="eyebrow">On this page</p>
        <nav aria-label="Article navigation" className="mt-4 flex flex-col gap-1">
          <a href="#article" className="rounded px-3 py-2 text-sm font-semibold text-body transition-colors hover:bg-elevated hover:text-brand-600">
            {title}
          </a>
          {headings.map((heading) => (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              className={`rounded px-3 py-2 text-sm leading-snug text-body transition-colors hover:bg-elevated hover:text-brand-600 ${
                heading.level === 'h3' ? 'pl-6 text-[0.82rem]' : 'font-semibold'
              }`}
            >
              {heading.label}
            </a>
          ))}
          <span aria-hidden="true" className="my-2 h-px bg-line" />
          <Link href="/blog" className="rounded px-3 py-2 text-sm font-semibold text-body transition-colors hover:bg-elevated hover:text-brand-600">
            All articles
          </Link>
          <Link href="/services" className="rounded px-3 py-2 text-sm font-semibold text-body transition-colors hover:bg-elevated hover:text-brand-600">
            Explore our services
          </Link>
        </nav>
      </div>
      <div className="mt-4 rounded-card bg-brand-800 p-5 text-white">
        <p className="font-display text-base font-bold">Ready for a next step?</p>
        <p className="mt-2 text-sm leading-relaxed text-white/75">Talk with our team about your care.</p>
        <Link href="/contact" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-300">
          Contact the clinic <Icon name="arrowRight" className="h-4 w-4" />
        </Link>
      </div>
    </aside>
  );
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = await getBlog(slug);
  if (!blog) return {};
  return buildMetadata({
    title: blog.meta?.seoTitle || blog.title,
    description: blog.meta?.seoDescription || blog.excerpt || blog.title,
    path: `/blog/${blog.slug}`,
    image: blog.featuredImage || '/images/og-default.jpg',
    type: 'article',
    keywords: blog.meta?.keywords || blog.tags || [],
  });
}

export default async function BlogArticlePage({ params }) {
  const { slug } = await params;
  const blog = await getBlog(slug);
  if (!blog) notFound();

  const date = formatDate(blog.publishDate);
  const headings = getArticleHeadings(blog.content);
  const trail = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: blog.title, href: `/blog/${blog.slug}` },
  ];

  return (
    <>
      <article className="bg-canvas">
        <Container className="pb-16 pt-8 lg:pb-24 lg:pt-12">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
            <Icon name="arrowLeft" className="h-4 w-4" /> Back to articles
          </Link>

          <div id="article" className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_15rem] lg:items-start">
            <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-muted">
              {blog.categories?.[0] && <span className="text-brand-600">{blog.categories[0]}</span>}
              {date && <time dateTime={blog.publishDate}>{date}</time>}
              {blog.customFields?.readingTime && <span>{blog.customFields.readingTime} read</span>}
            </div>
            <h1 className="mt-5 text-display-md font-extrabold text-strong">{blog.title}</h1>
            {blog.excerpt && <p className="mt-6 max-w-3xl text-[1.08rem] leading-relaxed text-muted">{blog.excerpt}</p>}

            {blog.featuredImage && (
              <div className="relative mt-10 overflow-hidden rounded-panel border border-line bg-surface">
                <Image
                  src={blog.featuredImage}
                  alt={blog.title}
                  width={1600}
                  height={900}
                  priority
                  sizes="(max-width: 1024px) 100vw, 900px"
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>
            )}

            <div className="blog-content mt-12 text-body">
              <BlogContent content={blog.content} headings={headings} />
            </div>
            </div>
            <ArticleRail title={blog.title} headings={headings} />
          </div>
        </Container>
      </article>

      <AppointmentCTA
        title="Have questions about your health?"
        body="Our multidisciplinary team can help you choose the right next step at Sherwood Forest Mall."
      />
      <Schema data={[articleSchema(blog), breadcrumbSchema(trail)]} />
    </>
  );
}