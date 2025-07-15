/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import Home from './app/page/Home.tsx'
import About from './app/page/About.tsx'
import Search from './app/page/Search.tsx'
import Route from './app/Route.tsx'
import {Router} from './app/Router.tsx'

export default function App() {
  return (
    <Router
      routes={[
        {pathname: '/midudev-react-course/search/:query', component: Search},
      ]}
    >
      <Route pathname="/midudev-react-course/" component={Home} />
      <Route pathname="/midudev-react-course/about" component={About} />
    </Router>
  )
}
