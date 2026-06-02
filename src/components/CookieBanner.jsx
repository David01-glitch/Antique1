import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { grantConsent, denyConsent, getStoredConsent } from '../utils/analytics'

export default function CookieBanner() {
  // Render the banner during static generation so the raw HTML always
  // contains the cookie-consent text and controls (crawlers, ad reviewers,
  // and visitors with JavaScript disabled all see it).
  // After hydration we hide it only if the visitor has already made a choice.
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (getStoredConsent()) {
      setVisible(false)
    }
  }, [])

  const accept = () => {
    grantConsent()
    setVisible(false)
  }
  const decline = () => {
    denyConsent()
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 translate-y-0 transition-transform duration-500"
    >
      <div className="container-page pb-4">
        <div className="card flex flex-col gap-4 bg-midnight/95 p-5 text-ivory shadow-lift backdrop-blur sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-relaxed text-ivory/90">
            We use cookies to understand how readers use our guides and to improve the
            workshop articles we publish. Analytics stays disabled until you choose to
            allow it. Read our{' '}
            <Link to="/legal/privacy" className="font-semibold text-brassLight underline">
              Privacy Policy
            </Link>
            .
          </p>
          <div className="flex shrink-0 gap-3">
            <button
              type="button"
              onClick={decline}
              className="rounded-xl border border-ivory/40 px-5 py-2.5 text-sm font-semibold text-ivory transition hover:bg-white/10"
            >
              Decline
            </button>
            <button
              type="button"
              onClick={accept}
              className="rounded-xl bg-brass px-5 py-2.5 text-sm font-semibold text-midnight transition hover:bg-brassLight"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
