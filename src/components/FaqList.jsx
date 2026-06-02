import { useEffect, useState } from 'react'

// Accessible FAQ accordion. All answers stay in the DOM (visible in raw HTML
// and to crawlers). Items render open during SSG, then collapse after
// hydration for the interactive experience.
export default function FaqList({ items }) {
  const [openIndex, setOpenIndex] = useState(-2) // -2 => all open (pre-hydration)

  useEffect(() => {
    setOpenIndex(-1) // collapse all once interactive
  }, [])

  return (
    <div className="divide-y divide-brass/15 rounded-2xl border border-brass/20 bg-white/60">
      {items.map((item, i) => {
        const open = openIndex === -2 || openIndex === i
        return (
          <div key={item.q} className="px-5 sm:px-7">
            <h3>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 py-5 text-left font-display text-lg text-midnight"
                aria-expanded={open}
                onClick={() => setOpenIndex(open && openIndex === i ? -1 : i)}
              >
                <span>{item.q}</span>
                <span aria-hidden="true" className={`shrink-0 text-brass transition-transform ${open ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
            </h3>
            <div className="accordion-panel" data-open={open}>
              <div className="accordion-inner">
                <p className="prose-readable pb-6">{item.a}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
