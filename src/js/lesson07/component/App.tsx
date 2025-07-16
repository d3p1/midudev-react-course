/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {lazy, Suspense} from 'react'
import {TranslatorProvider} from '../context/translator.tsx'
import Route from './app/core/router/Route.tsx'
import {Router} from './app/core/Router.tsx'

const Home = lazy(() => import('./app/page/Home.tsx'))
const About = lazy(() => import('./app/page/About.tsx'))
const Search = lazy(() => import('./app/page/Search.tsx'))
const NotFound = lazy(() => import('./app/page/NotFound.tsx'))

export default function App() {
  return (
    <TranslatorProvider>
      <Suspense fallback={<div className="font-black">Loading...</div>}>
        <Router
          routes={[
            {
              pathname: '/midudev-react-course/search/:query',
              component: Search,
            },
            {pathname: '/midudev-react-course/:lang/about', component: About},
          ]}
          defaultPageComponent={NotFound}
        >
          <Route pathname="/midudev-react-course/" component={Home} />
          <Route pathname="/midudev-react-course/about" component={About} />
        </Router>
      </Suspense>
    </TranslatorProvider>
  )
}
