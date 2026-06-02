import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import { GUIDE_LINKS } from '../data/site'

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found"
        description="The page you were looking for could not be found. Browse our antique clock restoration guides and journal instead."
        path="/404"
      />
      <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-3 text-4xl sm:text-5xl">This page has stopped ticking</h1>
        <p className="prose-readable mx-auto mt-5">
          The page you were looking for could not be found — perhaps it was moved, or the
          link has worn out over time. Let us help you find your way back to the workbench.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/" className="btn-primary">Return home</Link>
          <Link to="/blog" className="btn-outline">Read the journal</Link>
        </div>
        <div className="mt-12 w-full max-w-xl">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-brass">Popular guides</h2>
          <ul className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[0.95rem]">
            {GUIDE_LINKS.map((g) => (
              <li key={g.to}>
                <Link to={g.to} className="text-navy hover:text-brass">{g.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
