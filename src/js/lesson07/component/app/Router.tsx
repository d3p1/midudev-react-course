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
} from 'react'
import type {RouteComponent, Routes} from '../../types'
import NavigationManager from '../../utils/navigation-manager.ts'

const ROUTE_COMPONENT_TYPE = 'Route'

export function Router({
  routes,
  defaultPageComponent,
  children,
}: {
  routes: Routes
  defaultPageComponent: RouteComponent
  children?: ReactNode
}) {
  const [currentPathname, setCurrentPathname] = useState(
    NavigationManager.getCurrentPathName(),
  )

  useEffect(() => {
    const navigationManager = new NavigationManager(() =>
      setCurrentPathname(NavigationManager.getCurrentPathName()),
    )
    return () => {
      navigationManager.dispose()
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
    NavigationManager.navigate(pathname)
  }

  return (
    <a href={pathname} target={target} onClick={handleClick}>
      {children}
    </a>
  )
}
