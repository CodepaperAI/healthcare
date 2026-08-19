import Link from 'next/link';
import BlogCard from '@/components/blog/BlogCard';
import Container from '@/components/ui/Container';
import Icon from '@/components/ui/Icon';
import PageHero from '@/components/sections/PageHero';
import Schema from '@/components/ui/Schema';
import { getBlogs, hasUpliftConfig } from '@/lib/uplift';
import { breadcrumbSchema, webPageSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Health and wellness articles',
  description:
    'Practical health and wellness articles from Planet Health Care in London, Ontario, covering movement, recovery, pain management and everyday wellbeing.',
  path: '/blog',
});

function EmptyState({ configured, error }) {
  return (
    <div className="rounded-panel border border-line bg-surface px-6 py-12 text-center sm:px-10">
      <Icon name="book" className="mx-auto h-9 w-9 text-brand-600" />
      <h2 className="mt-5 font-display text-xl font-bold text-strong">
        {error === 'invalid-token'
          ? 'The article feed needs a fresh connection'
          : configured
            ? 'New articles are on the way'
            : 'Articles are being connected'}
      </h2>
      <p className="mx-auto mt-3 max-w-xl leading-relaxed text-muted">
        {error === 'invalid-token'
          ? 'The Uplift API token was rejected. Update UPLIFT_API_TOKEN in the server environment, then restart the Next.js server.'
          : configured
            ? 'Check back soon for practical guidance from the Planet Health Care team.'
          : 'The blog feed is not configured yet. Add the Uplift token to the server environment to publish articles here.'}
      </p>
    </div>
  );
}

export default async function BlogPage({ searchParams }) {
  const params = await searchParams;
  const page = Math.max(1, Number.parseInt(params?.page || '1', 10) || 1);
  const result = await getBlogs({ page, limit: 12 });
  const blogs = result?.blogs || [];
  const pagination = result?.pagination;

  return (
    <>
      <PageHero
        eyebrow="The Planet Health Care journal"
        title="Practical guidance for better movement and health"
        intro="Clear, useful articles from our clinic team to help you understand your body, prepare for care and keep moving between visits."
        trail={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }]}
      />

      <section className="bg-canvas py-section">
        <Container>
          {blogs.length ? (
            <>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {blogs.map((blog) => <BlogCard key={blog.id || blog.slug} blog={blog} />)}
              </div>

              {pagination?.totalPages > 1 && (
                <nav aria-label="Blog pages" className="mt-12 flex items-center justify-center gap-3">
                  {page > 1 && (
                    <Link href={`/blog?page=${page - 1}`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                      <Icon name="arrowLeft" className="h-4 w-4" /> Previous
                    </Link>
                  )}
                  <span className="px-3 text-sm text-muted">Page {page} of {pagination.totalPages}</span>
                  {page < pagination.totalPages && (
                    <Link href={`/blog?page=${page + 1}`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                      Next <Icon name="arrowRight" className="h-4 w-4" />
                    </Link>
                  )}
                </nav>
              )}
            </>
          ) : (
            <EmptyState configured={hasUpliftConfig()} error={result?.error} />
          )}
        </Container>
      </section>

      <Schema
        data={[
          webPageSchema({
            title: 'Health and wellness articles',
            description: 'Practical health and wellness articles from Planet Health Care in London, Ontario.',
            path: '/blog',
          }),
          breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }]),
        ]}
      />
    </>
  );
}