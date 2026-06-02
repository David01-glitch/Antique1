import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import Blocks from '../components/Blocks'
import { PageHeader } from '../components/ui'
import { GUIDES, GUIDE_ORDER } from '../data/guides'
import { GUIDE_LINKS } from '../data/site'
import { img, alt } from '../assets/images'
import { ARTICLES } from '../data/articles'

export default function GuidePage({ guideKey }) {
  const guide = GUIDES[guideKey]
  const path = `/${guideKey}`
  const related = GUIDE_LINKS.filter((g) => g.to !== path)
  const articles = ARTICLES.filter((a) =>
    a.category.toLowerCase().includes(guide.title.split(' ')[0].toLowerCase())
  ).slice(0, 2)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.description,
    image: `https://antiqueclockrestorers.com${img(guide.image)}`,
    author: { '@type': 'Organization', name: 'Antique Clock Restorers' },
    publisher: { '@type': 'Organization', name: 'Antique Clock Restorers' }
  }

  return (
    <>
      <Seo title={guide.title} description={guide.description} path={path} jsonLd={jsonLd} />
      <PageHeader
        eyebrow={guide.eyebrow}
        title={guide.title}
        intro={guide.intro}
        image={img(guide.image)}
        imageAlt={alt(guide.image)}
      />

      <div className="container-page grid gap-12 py-16 lg:grid-cols-[1fr_18rem]">
        <article>
          <Blocks blocks={guide.blocks} />

          {articles.length > 0 && (
            <div className="mt-12 border-t border-brass/15 pt-8">
              <h2 className="text-2xl">Related reading from the journal</h2>
              <ul className="mt-4 space-y-3">
                {articles.map((a) => (
                  <li key={a.slug}>
                    <Link to="/blog" className="font-semibold text-navy hover:text-brass">
                      {a.title}
                    </Link>
                    <p className="text-sm text-slate">{a.excerpt}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </article>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="card bg-white/70 p-6">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-brass">
              More topic guides
            </h2>
            <ul className="mt-4 space-y-2 text-[0.95rem]">
              {related.map((g) => (
                <li key={g.to}>
                  <Link to={g.to} className="text-navy hover:text-brass">{g.label}</Link>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn-primary mt-6 w-full text-sm">
              Ask the workshop
            </Link>
          </div>
        </aside>
      </div>
    </>
  )
}
