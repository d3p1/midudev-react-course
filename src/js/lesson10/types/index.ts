/**
 * @description Types
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
export type UserId = string
export type UserFullName = string
export type UserEmail = string
export type UserGitHub = string

export interface User {
  id: UserId
  fullName: UserFullName
  email: UserEmail
  github: UserGitHub
}
