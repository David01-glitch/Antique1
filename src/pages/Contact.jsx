import { useState } from 'react'
import Seo from '../components/Seo'
import { PageHeader } from '../components/ui'
import { SITE } from '../data/site'
import { trackEvent } from '../utils/analytics'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', topic: 'General question', message: '' })
  const [sent, setSent] = useState(false)

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    trackEvent('contact_submit', { topic: form.topic })
    const subject = encodeURIComponent(`[Website] ${form.topic} — ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nTopic: ${form.topic}\n\n${form.message}`
    )
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE.name,
    email: SITE.email,
    telephone: SITE.phone,
    url: `${SITE.url}/contact`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postal,
      addressCountry: 'US'
    }
  }

  return (
    <>
      <Seo
        title="Contact"
        description="Contact Antique Clock Restorers in Scottsdale, Arizona. Email, phone, and address for questions about antique clock restoration, guides, and community stories."
        path="/contact"
        jsonLd={jsonLd}
      />
      <PageHeader
        eyebrow="Get in touch"
        title="Contact the workshop"
        intro="Questions about a clock on your bench, a suggestion for a guide, or a story to share? We read every message and answer thoughtfully, usually within a few business days."
      />

      <section className="container-page grid gap-12 py-16 lg:grid-cols-[1fr_22rem]">
        <div>
          {sent ? (
            <div role="status" className="card bg-parchment/60 p-8">
              <h2 className="text-2xl">Thank you — your message is on its way</h2>
              <p className="prose-readable mt-3">
                Your email program should now be opening with your message ready to send.
                If it did not, please write to us directly at{' '}
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. We look forward to
                hearing from you.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} className="card bg-white/70 p-7" noValidate>
              <h2 className="text-2xl">Send us a message</h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label htmlFor="name" className="block text-sm font-semibold text-navy">Your name</label>
                  <input id="name" type="text" required value={form.name} onChange={update('name')}
                    className="mt-2 w-full rounded-xl border border-brass/30 bg-ivory px-4 py-3 focus-visible:outline-brass" />
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="email" className="block text-sm font-semibold text-navy">Email address</label>
                  <input id="email" type="email" required value={form.email} onChange={update('email')}
                    className="mt-2 w-full rounded-xl border border-brass/30 bg-ivory px-4 py-3 focus-visible:outline-brass" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="topic" className="block text-sm font-semibold text-navy">Topic</label>
                  <select id="topic" value={form.topic} onChange={update('topic')}
                    className="mt-2 w-full rounded-xl border border-brass/30 bg-ivory px-4 py-3 focus-visible:outline-brass">
                    <option>General question</option>
                    <option>Help with a restoration</option>
                    <option>Suggestion for a guide</option>
                    <option>A story to share</option>
                    <option>Something else</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-navy">Your message</label>
                  <textarea id="message" rows="6" required value={form.message} onChange={update('message')}
                    className="mt-2 w-full rounded-xl border border-brass/30 bg-ivory px-4 py-3 focus-visible:outline-brass" />
                </div>
              </div>
              <button type="submit" className="btn-primary mt-6">Send message</button>
              <p className="mt-3 text-sm text-slate">
                We never share your details. See our{' '}
                <a className="underline" href="/legal/privacy">Privacy Policy</a>.
              </p>
            </form>
          )}
        </div>

        <aside>
          <div className="card bg-midnight p-7 text-ivory">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-brassLight">
              Direct details
            </h2>
            <dl className="mt-5 space-y-5 text-[0.97rem]">
              <div>
                <dt className="text-ivory/60">Email</dt>
                <dd><a className="hover:text-brassLight" href={`mailto:${SITE.email}`}>{SITE.email}</a></dd>
              </div>
              <div>
                <dt className="text-ivory/60">Phone</dt>
                <dd><a className="hover:text-brassLight" href={`tel:${SITE.phoneHref}`}>{SITE.phone}</a></dd>
              </div>
              <div>
                <dt className="text-ivory/60">Workshop address</dt>
                <dd className="text-ivory/85">
                  {SITE.address.street}<br />
                  {SITE.address.city}, {SITE.address.region} {SITE.address.postal}
                </dd>
              </div>
              <div>
                <dt className="text-ivory/60">Hours</dt>
                <dd className="text-ivory/85">Monday – Friday, 9:00 AM – 5:00 PM (MST)</dd>
              </div>
            </dl>
          </div>
        </aside>
      </section>
    </>
  )
}
