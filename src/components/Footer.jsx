import { Link } from 'react-router-dom'
import { SITE, GUIDE_LINKS } from '../data/site'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-20 border-t border-brass/20 bg-midnight text-ivory/85">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="font-display text-xl text-ivory">Antique Clock Restorers</p>
          <p className="mt-3 text-sm leading-relaxed text-ivory/70">
            An independent learning workshop and journal for collectors who restore
            antique clocks, pocket watches, and mechanical heirlooms.
          </p>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-brassLight">
            Explore
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-brassLight">About</Link></li>
            <li><Link to="/blog" className="hover:text-brassLight">Blog</Link></li>
            <li><Link to="/topic-guides" className="hover:text-brassLight">Topic Guides</Link></li>
            <li><Link to="/community" className="hover:text-brassLight">Community</Link></li>
            <li><Link to="/contact" className="hover:text-brassLight">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-brassLight">
            Guides
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {GUIDE_LINKS.map((g) => (
              <li key={g.to}>
                <Link to={g.to} className="hover:text-brassLight">{g.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-brassLight">
            Contact
          </h2>
          <address className="mt-4 space-y-2 text-sm not-italic text-ivory/75">
            <p>{SITE.address.street}<br />{SITE.address.city}, {SITE.address.region} {SITE.address.postal}</p>
            <p><a href={`tel:${SITE.phoneHref}`} className="hover:text-brassLight">{SITE.phone}</a></p>
            <p><a href={`mailto:${SITE.email}`} className="hover:text-brassLight">{SITE.email}</a></p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-ivory/60 sm:flex-row">
          <p>© {year} Antique Clock Restorers. All rights reserved.</p>
          <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Legal">
            <Link to="/legal/privacy" className="hover:text-brassLight">Privacy</Link>
            <Link to="/legal/terms" className="hover:text-brassLight">Terms</Link>
            <Link to="/legal/refund" className="hover:text-brassLight">Refund</Link>
            <Link to="/about" className="hover:text-brassLight">About</Link>
            <Link to="/contact" className="hover:text-brassLight">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
