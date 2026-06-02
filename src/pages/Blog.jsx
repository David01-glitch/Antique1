import Seo from '../components/Seo'
import { PageHeader } from '../components/ui'
import ArticleCard from '../components/ArticleCard'
import { ARTICLES } from '../data/articles'

export default function Blog() {
  return (
    <>
      <Seo
        title="The Journal"
        description="Field-tested articles on antique clock restoration — how mechanical clocks work, common mistakes, safe cleaning, lubrication, estate-sale finds, and workshop setup."
        path="/blog"
      />
      <PageHeader
        eyebrow="The Journal"
        title="Workshop articles & restoration writing"
        intro="A growing collection of practical, unhurried articles from our restorers. Every piece opens in place — select “Read full article” to read the whole thing without leaving the page."
      />

      <section className="container-page py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((a, i) => (
            <ArticleCard key={a.slug} article={a} eager={i < 3} />
          ))}
        </div>
      </section>
    </>
  )
}
