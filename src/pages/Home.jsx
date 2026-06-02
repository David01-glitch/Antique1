import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import Accordion from '../components/Accordion'
import FaqList from '../components/FaqList'
import Newsletter from '../components/Newsletter'
import ArticleCard from '../components/ArticleCard'
import { SectionHeading } from '../components/ui'
import { CATEGORIES } from '../data/categories'
import { ARTICLES } from '../data/articles'
import { TESTIMONIALS } from '../data/testimonials'
import { FAQS } from '../data/faqs'
import { SITE } from '../data/site'
import { img, alt } from '../assets/images'

const ANATOMY = [
  { part: 'The Mainspring or Weight', text: 'The reservoir of energy. A coiled spring or a hanging weight stores the power that the clock spends slowly, hour by hour.' },
  { part: 'The Gear Train', text: 'A series of brass wheels and steel pinions that carry power forward while dividing motion so the hands turn at the right speeds.' },
  { part: 'The Escapement', text: 'The gatekeeper that releases the gear train one measured step at a time, producing the steady tick and the gentle push that keeps the clock alive.' },
  { part: 'The Pendulum or Balance', text: 'The timekeeper. Its even swing decides how long each step lasts — lengthen it and the clock slows, shorten it and the clock gains.' }
]

export default function Home() {
  const featured = ARTICLES.slice(0, 3)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'WebSite'],
    name: SITE.name,
    url: SITE.url,
    email: SITE.email,
    telephone: SITE.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postal,
      addressCountry: 'US'
    },
    description:
      'An educational journal and community for restoring antique clocks, pocket watches, and vintage collectibles, written for collectors aged 55 and over.'
  }

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a }
    }))
  }

  return (
    <>
      <Seo
        title="Restoring Antique Clocks & Vintage Collectibles"
        description="A calm, expert learning workshop and community for collectors restoring antique clocks, pendulum and grandfather clocks, pocket watches, and vintage collectibles."
        path="/"
        jsonLd={[jsonLd, faqLd]}
      />

      {/* 2. Hero */}
      <section className="border-b border-brass/15 bg-parchment/40">
        <div className="container-page grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="eyebrow mb-4">Precision · Patience · Preservation</p>
            <h1 className="text-4xl leading-[1.1] sm:text-5xl">
              The quiet craft of bringing antique clocks back to life
            </h1>
            <p className="prose-readable mt-6 text-lg">
              Antique Clock Restorers is a learning workshop and journal for collectors
              who want to understand the mechanisms ticking inside their family heirlooms.
              We write clear, unhurried guides for hands that value doing a job properly —
              whether you are cleaning your first mantel clock or cataloguing a lifetime
              collection.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/topic-guides" className="btn-primary">Explore the Guides</Link>
              <Link to="/blog" className="btn-outline">Read the Journal</Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-brass/20 shadow-lift">
            <img
              src={img('hero')}
              alt={alt('hero')}
              width="1408"
              height="768"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3. Restoration Categories Grid */}
      <section className="container-page py-20" aria-labelledby="categories-heading">
        <SectionHeading
          eyebrow="Where to begin"
          title="Restoration categories for every kind of timepiece"
          intro="Six focused tracks, each with its own detailed guide. Start wherever your curiosity — or your latest estate-sale discovery — happens to lead."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="card group flex flex-col overflow-hidden transition hover:shadow-lift"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={img(c.image)}
                  alt={alt(c.image)}
                  width="640"
                  height="400"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl">{c.title}</h3>
                <p className="mt-2 text-[0.95rem] text-slateDark">{c.blurb}</p>
                <span className="mt-4 text-sm font-semibold text-brass">Open the guide →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. Featured Workshop Articles */}
      <section className="bg-parchment/40 py-20" aria-labelledby="featured-heading">
        <div className="container-page">
          <SectionHeading
            eyebrow="From the workbench"
            title="Featured workshop articles"
            intro="Practical, field-tested writing you can follow at your own bench. Open any article to read the full piece right here on the page."
          />
          <div className="mt-10 grid gap-7 md:grid-cols-3">
            {featured.map((a, i) => (
              <ArticleCard key={a.slug} article={a} eager={i === 0} />
            ))}
          </div>
          <div className="mt-10">
            <Link to="/blog" className="btn-outline">See all articles</Link>
          </div>
        </div>
      </section>

      {/* 5. Mechanical Clock Anatomy */}
      <section className="container-page py-20" aria-labelledby="anatomy-heading">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-brass/20 shadow-card">
            <img
              src={img('anatomy')}
              alt={alt('anatomy')}
              width="1280"
              height="896"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow mb-2">How a clock keeps time</p>
            <h2 id="anatomy-heading" className="text-2xl sm:text-3xl">
              The anatomy of a mechanical movement
            </h2>
            <p className="prose-readable mt-4">
              Every mechanical clock, however ornate, performs four jobs in sequence. Once
              you can name them, the brass stops looking like chaos and starts telling a
              story you can follow.
            </p>
            <dl className="mt-6 space-y-5">
              {ANATOMY.map((a) => (
                <div key={a.part} className="border-l-2 border-brass/40 pl-5">
                  <dt className="font-display text-lg text-midnight">{a.part}</dt>
                  <dd className="mt-1 text-[0.97rem] text-slateDark">{a.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* 6. Community Restoration Stories */}
      <section className="bg-midnight py-20 text-ivory" aria-labelledby="stories-heading">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-2 text-brassLight">Shared at the bench</p>
            <h2 id="stories-heading" className="text-2xl text-ivory sm:text-3xl">
              Restoration stories from our community
            </h2>
            <p className="mt-4 text-ivory/80">
              The best part of this hobby is rarely the clock — it is the people and the
              memories the clock carries. Our members share the heirlooms they have revived
              and the patience it asked of them.
            </p>
            <div className="mt-6 space-y-5">
              <Accordion label="“The clock my father wound every Sunday”" className="rounded-xl border border-white/10 p-5">
                <p className="text-ivory/85">
                  When Raymond from Tucson opened his late father’s Seth Thomas mantel clock,
                  he found decades of dried oil and a single seized arbor. Following our
                  cleaning sequence over three careful evenings, he freed the movement,
                  cleaned it properly, and oiled only the points that needed it. The clock
                  now chimes in his living room for the first time since the 1980s — and his
                  grandchildren wind it on Sundays, just as he once watched his father do.
                </p>
              </Accordion>
              <Accordion label="“A schoolroom hobby in retirement”" className="rounded-xl border border-white/10 p-5">
                <p className="text-ivory/85">
                  Marjorie spent forty years teaching and wanted a retirement hobby that
                  still asked something of her. She began with an inexpensive practice
                  movement, kept a bench journal for every piece, and now mentors newer
                  members. Her advice is always the same: go slowly, write everything down,
                  and never be afraid to set a clock aside and come back tomorrow.
                </p>
              </Accordion>
            </div>
            <Link to="/community" className="btn-outline mt-8 border-ivory/40 text-ivory hover:bg-white/10">
              Read more member stories
            </Link>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10 shadow-lift">
            <img
              src={img('community')}
              alt={alt('community')}
              width="1280"
              height="896"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 7. Senior Collector Testimonials */}
      <section className="container-page py-20" aria-labelledby="testimonials-heading">
        <SectionHeading
          center
          eyebrow="In their words"
          title="Trusted by collectors aged 55 and over"
          intro="We write for experienced hands and curious newcomers alike. Here is what our readers say about learning the craft with us."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="card flex h-full flex-col p-6">
              <blockquote className="flex-1 text-[0.97rem] leading-relaxed text-slateDark">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 border-t border-brass/15 pt-4">
                <span className="block font-display text-lg text-midnight">{t.name}</span>
                <span className="text-sm text-slate">{t.location} · Age {t.age}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* 8. Newsletter */}
      <Newsletter />

      {/* 9. FAQ Accordion */}
      <section className="container-page py-20" aria-labelledby="faq-heading">
        <SectionHeading
          eyebrow="Good questions"
          title="Frequently asked questions"
          intro="A few of the questions new restorers ask us most often. Select any question to read the full answer."
        />
        <div className="mt-8">
          <FaqList items={FAQS} />
        </div>
      </section>

      {/* 10. Contact Information */}
      <section className="bg-parchment/50 py-16" aria-labelledby="contact-heading">
        <div className="container-page grid gap-8 md:grid-cols-2">
          <div>
            <p className="eyebrow mb-2">We would love to hear from you</p>
            <h2 id="contact-heading" className="text-2xl sm:text-3xl">Get in touch with the workshop</h2>
            <p className="prose-readable mt-4">
              Have a question about a clock on your bench, a suggestion for a guide, or a
              restoration story to share? We read every message and answer thoughtfully.
            </p>
            <Link to="/contact" className="btn-primary mt-6">Visit the contact page</Link>
          </div>
          <div className="card bg-white/70 p-7">
            <dl className="space-y-4 text-[0.97rem]">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-brass">Email</dt>
                <dd><a className="text-navy hover:text-brass" href={`mailto:${SITE.email}`}>{SITE.email}</a></dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-brass">Phone</dt>
                <dd><a className="text-navy hover:text-brass" href={`tel:${SITE.phoneHref}`}>{SITE.phone}</a></dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-brass">Workshop Address</dt>
                <dd className="text-slateDark">
                  {SITE.address.street}<br />
                  {SITE.address.city}, {SITE.address.region} {SITE.address.postal}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </>
  )
}
