import Seo from '../components/Seo'
import { PageHeader } from '../components/ui'
import Accordion from '../components/Accordion'
import { TESTIMONIALS } from '../data/testimonials'
import { img, alt } from '../assets/images'

const STORIES = [
  {
    title: 'The regulator clock from a closed schoolhouse',
    body:
      'When a one-room schoolhouse near Prescott was finally cleared, its wall regulator went home with a retired carpenter named Glen. The case was sound but the movement had not moved in years. Working through our restoration-techniques guide over a month of unhurried weekends, Glen freed two seized arbors, re-bushed a worn pivot hole, and cleaned decades of dried oil from the plates. The clock now keeps time in the carpenter’s workshop, and he tells anyone who will listen that the hardest part was learning to stop and think instead of forcing a stuck wheel.'
  },
  {
    title: 'A grandmother’s pocket watch, opened at last',
    body:
      'Patricia had carried her grandmother’s pocket watch in a drawer for thirty years, afraid to open it. Our pocket-watch primer gave her the confidence to identify the case as a snap-back and open it correctly with a proper case knife. Inside she found an Elgin movement and a date that placed it in 1911 — the year her grandmother was born. She has not attempted to service the delicate movement herself, and that is exactly the point: she learned enough to understand it, to care for it, and to know when to leave well enough alone.'
  },
  {
    title: 'Two neighbors, one shared bench',
    body:
      'After both lost their spouses within a year, neighbors Carol and Walter discovered they shared a quiet interest in old clocks. They now meet weekly at a shared bench, working through our guides together — one reading aloud while the other works. They have revived four clocks between them and, by their own account, found something more valuable than any of them: steady company and a reason to look forward to Wednesday afternoons.'
  }
]

export default function Community() {
  return (
    <>
      <Seo
        title="Community"
        description="Restoration stories, member voices, and the shared spirit of the Antique Clock Restorers community — collectors helping one another learn the craft."
        path="/community"
      />
      <PageHeader
        eyebrow="At the bench, together"
        title="Our community"
        intro="Clocks are really about people — the hands that wound them, the homes they kept time in, and the new owners learning to care for them. These are some of the stories our members have shared."
        image={img('community')}
        imageAlt={alt('community')}
      />

      <section className="container-page py-16">
        <h2 className="text-2xl sm:text-3xl">Restoration stories</h2>
        <p className="prose-readable mt-3">
          Each of these began with a clock that had stopped and a person willing to learn.
          Select a story to read it in full.
        </p>
        <div className="mt-8 space-y-5">
          {STORIES.map((s) => (
            <div key={s.title} className="card bg-white/70 p-6">
              <h3 className="text-xl">{s.title}</h3>
              <Accordion label="Read this story" className="mt-3">
                <p className="prose-readable">{s.body}</p>
              </Accordion>
            </div>
          ))}
        </div>

        <h2 className="mt-16 text-2xl sm:text-3xl">Voices from the community</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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

        <div className="card mt-16 bg-parchment/60 p-8 text-center">
          <h2 className="text-2xl">Have a story of your own?</h2>
          <p className="prose-readable mx-auto mt-3">
            If you have revived a clock, opened a watch you were afraid to touch, or found
            unexpected company in this hobby, we would love to hear about it. Write to us —
            with your permission, we may share it here to encourage the next reader.
          </p>
          <a href="mailto:antiqueclockrestorers@gmail.com" className="btn-primary mt-6">
            Share your story
          </a>
        </div>
      </section>
    </>
  )
}
