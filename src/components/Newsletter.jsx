import { useState } from 'react'
import { trackEvent } from '../utils/analytics'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    if (!email) return
    trackEvent('newsletter_signup', { method: 'inline_form' })
    setDone(true)
  }

  return (
    <section className="container-page my-20" aria-labelledby="newsletter-heading">
      <div className="card grid gap-8 bg-midnight p-8 text-ivory md:grid-cols-2 md:items-center md:p-12">
        <div>
          <p className="eyebrow text-brassLight">The Workbench Letter</p>
          <h2 id="newsletter-heading" className="mt-2 text-2xl text-ivory sm:text-3xl">
            One thoughtful restoration letter, twice a month
          </h2>
          <p className="mt-4 max-w-md text-ivory/80">
            Each issue carries a single workshop walkthrough, a reader's restoration
            story, and a short note on caring for the clocks already in your home. No
            noise, no daily emails — just craft.
          </p>
        </div>

        {done ? (
          <div
            role="status"
            className="rounded-xl border border-brassLight/40 bg-white/5 p-6 text-ivory"
          >
            <p className="font-display text-xl">Thank you for subscribing.</p>
            <p className="mt-2 text-sm text-ivory/80">
              A confirmation note is on its way to <strong>{email}</strong>. We are glad
              to have you at the bench.
            </p>
          </div>
        ) : (
          <form onSubmit={submit} className="flex flex-col gap-3 sm:flex-row">
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-ivory placeholder:text-ivory/50 focus-visible:outline-brass"
            />
            <button type="submit" className="shrink-0 rounded-xl bg-brass px-6 py-3 font-semibold text-midnight transition hover:bg-brassLight">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
