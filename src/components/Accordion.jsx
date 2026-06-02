import { useEffect, useId, useState } from 'react'
import { trackEvent } from '../utils/analytics'

// Progressive-enhancement accordion.
// Renders OPEN during static generation so the full content is present and
// visible in the raw HTML (and for visitors with JavaScript disabled).
// After hydration it collapses to the requested initial state, then the
// user can toggle it inline — no modals, no navigation, no new tabs.
export default function Accordion({
  label = 'Read More',
  closeLabel,
  children,
  collapseOnMount = true,
  className = ''
}) {
  const id = useId()
  const [open, setOpen] = useState(true)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true)
    if (collapseOnMount) setOpen(false)
  }, [collapseOnMount])

  const toggle = () => {
    setOpen((v) => {
      const next = !v
      trackEvent('inline_expand', { label, state: next ? 'open' : 'closed' })
      return next
    })
  }

  return (
    <div className={className}>
      <button
        type="button"
        onClick={toggle}
        aria-expanded={open}
        aria-controls={id}
        className="inline-flex items-center gap-2 rounded-lg border border-brass/40 px-4 py-2 text-sm font-semibold text-navy transition hover:border-brass hover:bg-parchment focus-visible:outline-brass"
      >
        <span>{open && hydrated ? closeLabel || 'Show less' : label}</span>
        <span aria-hidden="true" className={`transition-transform ${open ? 'rotate-180' : ''}`}>▾</span>
      </button>
      <div id={id} className="accordion-panel mt-4" data-open={open} role="region">
        <div className="accordion-inner">{children}</div>
      </div>
    </div>
  )
}
