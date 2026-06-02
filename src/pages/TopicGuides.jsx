import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import { PageHeader } from '../components/ui'
import { GUIDES, GUIDE_ORDER } from '../data/guides'
import { img, alt } from '../assets/images'

export default function TopicGuides() {
  return (
    <>
      <Seo
        title="Topic Guides"
        description="Browse our complete library of antique clock restoration topic guides — techniques, pendulum and grandfather clocks, pocket watches, valuations, and maintenance."
        path="/topic-guides"
      />
      <PageHeader
        eyebrow="The library"
        title="Topic Guides"
        intro="Six in-depth guides covering the craft from first cleaning to lifelong care. Each one is written to be read slowly and followed at your own bench."
      />

      <section className="container-page py-16">
        <div className="grid gap-8">
          {GUIDE_ORDER.map((key, i) => {
            const g = GUIDES[key]
            return (
              <Link
                key={key}
                to={`/${key}`}
                className="card group grid gap-6 overflow-hidden p-0 transition hover:shadow-lift md:grid-cols-[20rem_1fr]"
              >
                <div className="aspect-[16/10] overflow-hidden md:aspect-auto">
                  <img
                    src={img(g.image)}
                    alt={alt(g.image)}
                    width="640"
                    height="400"
                    loading={i < 2 ? 'eager' : 'lazy'}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-col justify-center p-6 md:pr-10">
                  <p className="eyebrow mb-1">{g.eyebrow}</p>
                  <h2 className="text-2xl">{g.title}</h2>
                  <p className="mt-2 text-slateDark">{g.intro}</p>
                  <span className="mt-4 text-sm font-semibold text-brass">Read the guide →</span>
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    </>
  )
}
