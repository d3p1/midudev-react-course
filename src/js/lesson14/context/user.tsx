/**
 * @description User context
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import * as React from 'react'
import {createContext, type ReactNode, useCallback, useState} from 'react'

export const UserContext = createContext<{
  name: string | null
  isLoggedIn: boolean
  updateUser: (name: string, isLoggedIn: boolean) => void
}>({name: null, isLoggedIn: false, updateUser: () => null})

export const UserProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [name, setName] = useState<string | null>(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const updateUser = useCallback((name: string, isLoggedIn: boolean) => {
    setName(name)
    setIsLoggedIn(isLoggedIn)
  }, [])

  return (
    <UserContext
      value={{
        name,
        isLoggedIn,
        updateUser,
      }}
    >
      {children}
    </UserContext>
  )
}
