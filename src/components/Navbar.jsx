import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { NAV_LINKS, SITE } from '../data/site'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `px-1 py-2 text-[0.95rem] font-medium transition-colors ${
      isActive ? 'text-brass' : 'text-navy hover:text-brass'
    }`

  return (
    <header className="sticky top-0 z-40 border-b border-brass/15 bg-ivory/90 backdrop-blur">
      <nav className="container-page flex items-center justify-between py-3" aria-label="Primary">
        <Link to="/" className="flex items-center gap-3" aria-label={`${SITE.name} home`}>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-midnight text-brassLight font-display text-lg">
            ◷
          </span>
          <span className="font-display text-lg font-600 leading-tight text-midnight">
            Antique Clock
            <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-brass">
              Restorers
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass} end={l.to === '/'}>
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-primary px-5 py-2.5 text-sm">
            Get in Touch
          </Link>
        </div>

        <button
          type="button"
          className="rounded-lg border border-brass/30 p-2 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 w-6 bg-navy" />
          <span className="mt-1.5 block h-0.5 w-6 bg-navy" />
          <span className="mt-1.5 block h-0.5 w-6 bg-navy" />
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-brass/15 bg-ivory lg:hidden">
          <div className="container-page flex flex-col py-3">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `border-b border-brass/10 py-3 text-base font-medium ${
                    isActive ? 'text-brass' : 'text-navy'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
