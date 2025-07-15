/**
 * @description Router
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * @todo        Improve constants
 * @todo        Improve how `Route` component is handled
 * @todo        Improve types
 */
import {match} from 'path-to-regexp'
import {
  type MouseEvent,
  type ReactNode,
  type JSX,
  createElement,
  useState,
  useEffect,
  Children,
  type LazyExoticComponent,
} from 'react'

const NAVIGATE_FORWARD_EVENT = 'pushstate'
const NAVIGATE_BACK_EVENT = 'popstate'
const ROUTE_COMPONENT_TYPE = 'Route'

const _navigateTo = (pathname: string) => {
  history.pushState(null, '', pathname)
  const event = new Event(NAVIGATE_FORWARD_EVENT)
  dispatchEvent(event)
}

export function Router({
  routes,
  defaultPageComponent,
  children,
}: {
  routes: {
    pathname: string
    component:
      | (({
          routeParams,
        }: {
          routeParams?: {[key: string]: string}
        }) => JSX.Element)
      | LazyExoticComponent<
          ({
            routeParams,
          }: {
            routeParams?: {[key: string]: string}
          }) => JSX.Element
        >
  }[]
  defaultPageComponent:
    | (({routeParams}: {routeParams?: {[key: string]: string}}) => JSX.Element)
    | LazyExoticComponent<
        ({routeParams}: {routeParams?: {[key: string]: string}}) => JSX.Element
      >
  children?: ReactNode
}) {
  const [currentPathname, setCurrentPathname] = useState(
    window.location.pathname,
  )

  useEffect(() => {
    const handleNavigateTo = () => setCurrentPathname(window.location.pathname)

    window.addEventListener(NAVIGATE_FORWARD_EVENT, handleNavigateTo)
    window.addEventListener(NAVIGATE_BACK_EVENT, handleNavigateTo)

    return () => {
      window.removeEventListener(NAVIGATE_FORWARD_EVENT, handleNavigateTo)
      window.removeEventListener(NAVIGATE_BACK_EVENT, handleNavigateTo)
    }
  }, [])

  if (children) {
    const routesFromChildren = Children.map(
      children as {
        props: {pathname: string; component: () => JSX.Element}
        type: {name: string}
      }[],
      ({
        props: {pathname, component},
        type: {name},
      }: {
        props: {pathname: string; component: () => JSX.Element}
        type: {name: string}
      }) => {
        if (name !== ROUTE_COMPONENT_TYPE) {
          return null
        }

        return {pathname, component}
      },
    ).filter(Boolean)

    routes = routes.concat(routesFromChildren)
  }

  let routeParams = {}
  const page = routes.find((route) => {
    if (route.pathname === currentPathname) {
      return true
    }

    const matcher = match(route.pathname, {decode: decodeURIComponent})
    const matched = matcher(currentPathname)

    if (matched) {
      routeParams = matched.params
      return true
    }

    return false
  })?.component

  return page
    ? createElement(page, {routeParams})
    : createElement(defaultPageComponent, {routeParams})
}

export function Link({
  pathname,
  target = '_self',
  children,
}: {
  pathname: string
  target?: string
  children?: ReactNode
}) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    _navigateTo(pathname)
  }

  return (
    <a href={pathname} target={target} onClick={handleClick}>
      {children}
    </a>
  )
}
