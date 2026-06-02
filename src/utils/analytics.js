// Lightweight wrappers around the global gtag() defined in index.html.
// Safe to call during SSG (guards for missing window).

const GA_ID = 'G-4J046JXWVC'

function getGtag() {
  if (typeof window === 'undefined') return null
  return typeof window.gtag === 'function' ? window.gtag : null
}

export function trackPageView(path, title) {
  const gtag = getGtag()
  if (!gtag) return
  gtag('event', 'page_view', {
    page_path: path,
    page_title: title || (typeof document !== 'undefined' ? document.title : ''),
    page_location: typeof window !== 'undefined' ? window.location.href : '',
    send_to: GA_ID
  })
}

export function trackEvent(name, params = {}) {
  const gtag = getGtag()
  if (!gtag) return
  gtag('event', name, params)
}

export function grantConsent() {
  const gtag = getGtag()
  if (gtag) {
    gtag('consent', 'update', {
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      analytics_storage: 'granted'
    })
  }
  try {
    localStorage.setItem('acr-consent', 'granted')
  } catch (e) {}
}

export function denyConsent() {
  const gtag = getGtag()
  if (gtag) {
    gtag('consent', 'update', {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'denied'
    })
  }
  try {
    localStorage.setItem('acr-consent', 'denied')
  } catch (e) {}
}

export function getStoredConsent() {
  try {
    return localStorage.getItem('acr-consent')
  } catch (e) {
    return null
  }
}
