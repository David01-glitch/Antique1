import { Head } from 'vite-react-ssg'
import { SITE } from '../data/site'

export default function Seo({ title, description, path = '/', image, jsonLd }) {
  const fullTitle = title ? `${title} | ${SITE.name}` : SITE.name
  const canonical = `${SITE.url}${path === '/' ? '' : path}`
  const ogImage = image || `${SITE.url}/og-image.jpg`

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content="index, follow" />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Head>
  )
}
