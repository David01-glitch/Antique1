import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Community from './pages/Community'
import Contact from './pages/Contact'
import TopicGuides from './pages/TopicGuides'
import GuidePage from './pages/GuidePage'
import NotFound from './pages/NotFound'
import Privacy from './pages/legal/Privacy'
import Terms from './pages/legal/Terms'
import Refund from './pages/legal/Refund'

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'blog', element: <Blog /> },
      { path: 'community', element: <Community /> },
      { path: 'contact', element: <Contact /> },
      { path: 'topic-guides', element: <TopicGuides /> },
      { path: 'restoration-techniques', element: <GuidePage guideKey="restoration-techniques" /> },
      { path: 'pendulum-clocks', element: <GuidePage guideKey="pendulum-clocks" /> },
      { path: 'grandfather-clocks', element: <GuidePage guideKey="grandfather-clocks" /> },
      { path: 'vintage-pocket-watches', element: <GuidePage guideKey="vintage-pocket-watches" /> },
      { path: 'collectible-valuations', element: <GuidePage guideKey="collectible-valuations" /> },
      { path: 'maintenance-care', element: <GuidePage guideKey="maintenance-care" /> },
      { path: 'legal/privacy', element: <Privacy /> },
      { path: 'legal/terms', element: <Terms /> },
      { path: 'legal/refund', element: <Refund /> },
      { path: '404', element: <NotFound /> },
      { path: '*', element: <NotFound /> }
    ]
  }
]
