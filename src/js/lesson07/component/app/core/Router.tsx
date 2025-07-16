/**
 * @description Router
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {type ReactNode, createElement, useState, useEffect} from 'react'
import type {RouteComponent, Routes} from '../../../types'
import NavigationManager from '../../../utils/navigation-manager.ts'
import RouterManager from '../../../utils/router-manager.ts'

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

  const routesFromChildren = RouterManager.findRoutesFromChildren(children)
  routes = routes.concat(routesFromChildren)
  const {component, params} = RouterManager.findRouteComponent(
    routes,
    currentPathname,
  )

  return component
    ? createElement(component, params)
    : createElement(defaultPageComponent, params)
}
