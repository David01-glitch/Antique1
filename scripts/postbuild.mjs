// Post-build cleanup: strip the `data-rh="true"` attribute that react-helmet-async
// adds to every <title>/<meta>/<link> it manages. Without this, naive auditors
// that grep for a plain "<title>" or "<meta name=...>" tag report the page as
// missing a title/description, even though the data is right there.
import { promises as fs } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DIST = path.resolve(__dirname, '..', 'dist')

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const files = []
  for (const e of entries) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) files.push(...(await walk(p)))
    else if (e.isFile() && p.endsWith('.html')) files.push(p)
  }
  return files
}

const files = await walk(DIST)
let touched = 0
for (const f of files) {
  const before = await fs.readFile(f, 'utf8')
  const after = before.replace(/\s+data-rh="true"/g, '')
  if (after !== before) {
    await fs.writeFile(f, after)
    touched++
  }
}
console.log(`[postbuild] normalized head tags in ${touched} HTML file(s)`)
