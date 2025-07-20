/**
 * @description Route
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import type {Route} from '../../../../types'

export default function Route({pathname, component}: Route) {
  return (
    <>
      <input type="text" value={pathname} hidden />
      <input type="text" value={typeof component} hidden />
    </>
  )
}
