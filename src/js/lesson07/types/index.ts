/**
 * @description Types
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import type {Component} from '../../core/types'

export type RouteParams = {routeParams?: {[key: string]: string}}

export type RouteComponent = Component<RouteParams>

export interface Route {
  pathname: string
  component: RouteComponent
}

export type Routes = Route[]

export type ChildrenRoutes = {
  props: Route
  type: {
    name: string
  }
}[]
