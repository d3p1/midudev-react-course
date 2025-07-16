/**
 * @description Router manager
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {match} from 'path-to-regexp'
import {Children, type ReactNode} from 'react'
import type {
  RouteParams,
  RouteComponent,
  Routes,
  ChildrenRoutes,
} from '../types'

const ROUTE_COMPONENT_TYPE = 'Route'

export default class RouterManager {
  /**
   * Find routes from children
   *
   * @param   {React.ReactNode} children
   * @returns {Routes}
   */
  static findRoutesFromChildren(children: ReactNode): Routes {
    return Children.map(
      children as ChildrenRoutes,
      ({props: {pathname, component}, type: {name}}) => {
        if (name !== ROUTE_COMPONENT_TYPE) {
          return null
        }

        return {pathname, component}
      },
    ).filter(Boolean)
  }

  /**
   * Find route component
   *
   * @param   {Routes} routes
   * @param   {string} pathname
   * @returns {{component: RouteComponent | null, params: RouteParams | {}}}
   */
  static findRouteComponent(
    routes: Routes,
    pathname: string,
  ): {component: RouteComponent | null; params: RouteParams | null} {
    let params = null

    const component =
      routes.find((route) => {
        if (route.pathname === pathname) {
          return true
        }

        const matcher = match(route.pathname, {decode: decodeURIComponent})
        const matched = matcher(pathname)
        if (matched) {
          params = matched.params
          return true
        }

        return false
      })?.component ?? null

    return {component, params}
  }
}
