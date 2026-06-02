import './index.css'
import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './routes'

export const createRoot = ViteReactSSG({ routes }, ({ router, routes, isClient }) => {
  // Place for one-time client setup if needed in the future.
})
