import Seo from './Seo'
import { PageHeader } from './ui'
import { SITE } from '../data/site'

export default function LegalLayout({ title, description, path, updated, sections }) {
  return (
    <>
      <Seo title={title} description={description} path={path} />
      <PageHeader eyebrow="Legal" title={title} intro={`Last updated: ${updated}`} />
      <section className="container-page py-14">
        <div className="prose-readable mx-auto">
          {sections.map((s, i) => (
            <section key={i} aria-labelledby={`sec-${i}`}>
              <h2 id={`sec-${i}`}>
                {i + 1}. {s.h}
              </h2>
              {s.body.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </section>
          ))}
          <p className="mt-10 border-t border-brass/15 pt-6 text-sm text-slate">
            Questions about this document may be directed to {SITE.name} at{' '}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or {SITE.phone}, or by mail to{' '}
            {SITE.address.street}, {SITE.address.city}, {SITE.address.region}{' '}
            {SITE.address.postal}.
          </p>
        </div>
      </section>
    </>
  )
}
