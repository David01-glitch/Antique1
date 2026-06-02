import { Link } from 'react-router-dom'

export function PageHeader({ eyebrow, title, intro, image, imageAlt }) {
  return (
    <header className="border-b border-brass/15 bg-parchment/50">
      <div className="container-page grid items-center gap-10 py-14 md:grid-cols-2 md:py-20">
        <div>
          {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
          <h1 className="text-3xl sm:text-4xl md:text-5xl">{title}</h1>
          {intro && <p className="prose-readable mt-5 text-lg">{intro}</p>}
        </div>
        {image && (
          <div className="overflow-hidden rounded-2xl border border-brass/20 shadow-card">
            <img
              src={image}
              alt={imageAlt}
              width="900"
              height="640"
              className="h-full w-full object-cover"
            />
          </div>
        )}
      </div>
    </header>
  )
}

export function SectionHeading({ eyebrow, title, intro, center }) {
  return (
    <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
      <h2 className="text-2xl sm:text-3xl">{title}</h2>
      {intro && <p className="prose-readable mt-3">{intro}</p>}
    </div>
  )
}

export function CtaRow() {
  return (
    <div className="flex flex-wrap gap-4">
      <Link to="/topic-guides" className="btn-primary">Browse the Guides</Link>
      <Link to="/community" className="btn-outline">Read Member Stories</Link>
    </div>
  )
}
