import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { trackPageView } from '../utils/analytics'

// Resets scroll position and fires a GA page_view on every route change.
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    trackPageView(pathname, document.title)
  }, [pathname])

  return null
}
