import { img, alt } from '../assets/images'
import Accordion from './Accordion'
import Blocks from './Blocks'

// Article preview card with an INLINE expandable full article. The full text
// is present in the raw HTML at load (rendered open during SSG) and expands in
// place — no new tab, no modal, no navigation.
export default function ArticleCard({ article, eager = false }) {
  return (
    <article className="card flex flex-col overflow-hidden">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={img(article.image)}
          alt={alt(article.image)}
          width="640"
          height="400"
          loading={eager ? 'eager' : 'lazy'}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate">
          <span className="rounded-full bg-parchment px-3 py-1 font-semibold uppercase tracking-wide text-brass">
            {article.category}
          </span>
          <span>{article.readingTime}</span>
        </div>
        <h3 className="text-xl leading-snug">{article.title}</h3>
        <p className="mt-3 text-[0.95rem] text-slateDark">{article.excerpt}</p>
        <p className="mt-4 text-sm text-slate">
          By {article.author} ·{' '}
          {new Date(article.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>

        <Accordion label="Read full article" closeLabel="Collapse article" className="mt-5">
          <Blocks blocks={article.body} />
        </Accordion>
      </div>
    </article>
  )
}
