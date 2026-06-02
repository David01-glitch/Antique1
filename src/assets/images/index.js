// Central registry of locally-hosted images, imported as ES modules so Vite
// fingerprints and bundles them. No external/CDN/hotlinked images are used.
import hero from './hero/hero.jpg'
import anatomy from './guides/anatomy.jpg'
import workbench from './guides/workbench.jpg'
import pendulum from './categories/pendulum.jpg'
import grandfather from './categories/grandfather.jpg'
import pocketwatch from './categories/pocketwatch.jpg'
import archive from './categories/archive.jpg'
import senior from './community/senior.jpg'
import community from './community/community.jpg'

export const IMAGES = {
  hero,
  anatomy,
  workbench,
  pendulum,
  grandfather,
  pocketwatch,
  archive,
  senior,
  community
}

export const IMAGE_ALT = {
  hero: 'Antique brass clock movement resting on a watchmaker’s workbench in soft window light',
  anatomy: 'Macro view of a mechanical clock escapement and brass gear train',
  workbench: 'Watchmaker’s tools and clock parts arranged neatly on a workbench',
  pendulum: 'Brass clock pendulum and bob against a soft ivory background',
  grandfather: 'Tall antique longcase grandfather clock standing in an elegant room',
  pocketwatch: 'Open vintage pocket watch revealing its brass movement',
  archive: 'Archival shelves displaying a collection of antique clocks and collectibles',
  senior: 'Senior hobbyist wearing a loupe while restoring an antique mantel clock',
  community: 'Two collectors’ hands examining the brass movement of an antique clock together'
}

export function img(key) {
  return IMAGES[key] || hero
}
export function alt(key) {
  return IMAGE_ALT[key] || 'Antique Clock Restorers'
}
