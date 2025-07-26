/**
 * @description User manager
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {type User, type UserResult, UserSortType} from '../types'

const USER_API_BASE_URL = 'https://randomuser.me/api/'
const USER_API_PARAMS = 'results=3&inc=email,name,location,picture&seed=d3p1'
const USER_API_ENDPOINT = `${USER_API_BASE_URL}?${USER_API_PARAMS}`

export class UserManager {
  /**
   * Filter users by country
   *
   * @param   {User[]} users
   * @param   {string} country
   * @returns {User[]}
   */
  static filterByCountry(users: User[], country: string): User[] {
    return users.filter((user) => user.location.country.includes(country))
  }

  /**
   * Sort users
   *
   * @param   {User[]}       users
   * @param   {UserSortType} sortType
   * @returns {User[]}
   */
  static sort(users: User[], sortType: UserSortType): User[] {
    const collator = new Intl.Collator('en', {sensitivity: 'base'})
    let sorter

    switch (sortType) {
      case UserSortType.Firstname:
        sorter = (a: User, b: User) =>
          collator.compare(a.name.first, b.name.first)
        break

      case UserSortType.Lastname:
        sorter = (a: User, b: User) =>
          collator.compare(a.name.last, b.name.last)
        break

      case UserSortType.Country:
        sorter = (a: User, b: User) =>
          collator.compare(a.location.country, b.location.country)
        break

      default:
        sorter = () => 0
    }

    return users.toSorted(sorter)
  }

  /**
   * Load users
   *
   * @param   {number} page
   * @returns {Promise<void>}
   */
  static async loadUsers(page: number): Promise<User[]> {
    return await this.#fetchUsers(page)
  }

  /**
   * Fetch users
   *
   * @param   {number} page
   * @returns {Promise<User[]>}
   * @throws  {Error}
   */
  static async #fetchUsers(page: number): Promise<User[]> {
    const endpoint = `${USER_API_ENDPOINT}&page=${page}`
    const result = await fetch(endpoint)

    if (!result.ok) {
      throw new Error('There was an error fetching the user endpoint.')
    }

    const data = (await result.json()) as UserResult
    if (data.error || !data.results) {
      throw new Error(
        `There was an error retrieving users: ${data.error ?? 'General error'}`,
      )
    }

    return data.results
  }
}
