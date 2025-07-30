/**
 * @description Sign-in footer
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {use} from 'react'
import {UserContext} from '../../../context/user.tsx'

export const Footer = () => {
  const {name} = use(UserContext)

  if (!name) {
    return null
  }

  return (
    <p className="italic text-xs">
      Welcome: <strong>{name}</strong>
    </p>
  )
}
