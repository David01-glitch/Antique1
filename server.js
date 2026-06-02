import express from 'express'
import compression from 'compression'
import path from 'node:path'
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DIST = path.join(__dirname, 'dist')
const PORT = process.env.PORT || 8080

const app = express()
app.disable('x-powered-by')
app.use(compression())

// Long-lived caching for fingerprinted build assets.
app.use(
  '/assets',
  express.static(path.join(DIST, 'assets'), {
    immutable: true,
    maxAge: '1y'
  })
)

// Serve pre-rendered HTML and other static files. `extensions: ['html']`
// lets "/about" resolve to "about.html". HTML itself is not cached long so
// content updates are picked up promptly.
app.use(
  express.static(DIST, {
    extensions: ['html'],
    setHeaders(res, filePath) {
      if (filePath.endsWith('.html')) {
        res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate')
      } else {
        res.setHeader('Cache-Control', 'public, max-age=86400')
      }
    }
  })
)

// Fallback: resolve clean URLs to their pre-rendered HTML; otherwise 404.
app.get('*', (req, res) => {
  const clean = req.path.replace(/\/+$/, '') || '/index'
  const candidates = [
    path.join(DIST, `${clean}.html`),
    path.join(DIST, clean, 'index.html')
  ]
  const match = candidates.find((f) => fs.existsSync(f))
  if (match) {
    res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate')
    return res.status(200).sendFile(match)
  }
  const notFound = path.join(DIST, '404.html')
  if (fs.existsSync(notFound)) return res.status(404).sendFile(notFound)
  return res.status(404).send('Not Found')
})

app.listen(PORT, () => {
  console.log(`Antique Clock Restorers running on http://localhost:${PORT}`)
})
