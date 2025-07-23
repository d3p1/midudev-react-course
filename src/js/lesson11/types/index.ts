/**
 * @description Types
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
export type UserId = string

export interface User {
  id: {
    value: UserId
  }
  name: {
    first: string
    last: string
  }
  location: {
    country: string
  }
  picture: {
    thumbnail: string
  }
}

export type UserResult = {
  results?: User[]
  error?: string
}

export enum UserSortType {
  Firstname = 'firstname',
  Lastname = 'lastname',
  Country = 'country',
}
