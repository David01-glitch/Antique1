import Seo from '../components/Seo'
import { PageHeader } from '../components/ui'
import { img, alt } from '../assets/images'
import { SITE } from '../data/site'

export default function About() {
  return (
    <>
      <Seo
        title="About"
        description="The founder story and mission behind Antique Clock Restorers — an educational workshop helping collectors aged 55 and over restore antique clocks and vintage collectibles."
        path="/about"
      />
      <PageHeader
        eyebrow="Our story"
        title="A workshop built on patience and shared knowledge"
        intro="Antique Clock Restorers began at a single workbench in Scottsdale, Arizona, and grew into a community of collectors who believe old machines deserve to keep running."
        image={img('senior')}
        imageAlt={alt('senior')}
      />

      <section className="container-page py-16">
        <div className="prose-readable mx-auto">
          <h2>How it started</h2>
          <p>
            The workshop began the way many good things do — with an heirloom nobody knew
            what to do with. When our founder, Harold Brennan, inherited his
            grandfather’s silent mantel clock in 2014, he could find plenty of people
            willing to take it away for repair and almost no one willing to teach him how
            to understand it himself. He wanted to know what made it tick, quite literally,
            and he wanted to do the work with his own hands.
          </p>
          <p>
            What followed was two years of patient learning: scrap movements bought by the
            box, evenings spent with a loupe and a notebook, and a slowly growing
            confidence that this craft was not the exclusive territory of professionals.
            With care, good information, and a willingness to go slowly, an ordinary person
            could bring a clock back to life. The mantel clock chimes again to this day.
          </p>

          <h2>Why we write for collectors over 55</h2>
          <p>
            Along the way, Harold noticed who else was at the estate sales, the swap meets,
            and the online forums: people in retirement, often newly widowed or newly
            free of a long career, looking for a hobby with depth and meaning. Many had
            inherited a clock or a watch and wanted to honor it. Few could find resources
            written plainly, in type they could read, at a pace that respected their time.
          </p>
          <p>
            So we built exactly that. Everything we publish is written for the curious
            adult who is new to mechanical hobbies — large, readable type, one careful step
            at a time, and never a piece of jargon without a plain explanation first. We
            are not the fastest source on the internet, and we are proud of that. This is
            a craft that rewards patience, and our writing reflects it.
          </p>

          <h2>What we are — and what we are not</h2>
          <p>
            Antique Clock Restorers is an independent educational journal and community.
            We publish guides, restoration stories, and reference material to help you
            learn the craft yourself. We do not take clocks in for repair, we do not sell
            clocks, and we do not pretend that every job belongs on a home bench. A great
            deal of our writing is devoted to helping you recognize the moment when a piece
            should go to a qualified professional — because knowing your limits is part of
            respecting the work.
          </p>

          <h2>Our mission</h2>
          <p>
            Our mission is simple: to keep mechanical timepieces running, and to keep the
            knowledge of how to care for them from being lost. Every clock revived is a
            small act of preservation. Every reader who learns to set a clock in beat,
            clean a movement honestly, or judge a piece before buying it carries that
            knowledge forward. We would be glad to count you among them.
          </p>

          <h2>Visit or write to us</h2>
          <p>
            The workshop is based at {SITE.address.street}, {SITE.address.city},{' '}
            {SITE.address.region} {SITE.address.postal}. You can reach us by email at{' '}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or by telephone at{' '}
            <a href={`tel:${SITE.phoneHref}`}>{SITE.phone}</a>. We read every message and
            answer as thoughtfully as we can — usually within a few business days.
          </p>
        </div>
      </section>
    </>
  )
}
