/**
 * @description Link
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {type MouseEvent, type ReactNode} from 'react'
import NavigationManager from '../../../utils/navigation-manager.ts'

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
