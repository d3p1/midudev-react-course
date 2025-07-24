/**
 * @description User manager
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {type User, type UserResult, UserSortType} from '../types'

const USER_API_BASE_URL = 'https://randomuser.me/api/'
const USER_API_PARAMS = 'results=100&inc=email,name,location,picture'
const USER_API_ENDPOINT = `${USER_API_BASE_URL}?${USER_API_PARAMS}`

export class UserManager {
  /**
   * @type {User[]}
   */
  users: User[] = []

  /**
   * Constructor
   */
  constructor() {}

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
   * @returns {Promise<void>}
   */
  async loadUsers(): Promise<void> {
    if (!this.users.length) {
      this.users = await this.#fetchUsers()
    }
  }

  /**
   * Fetch users
   *
   * @returns {Promise<User[]>}
   * @throws  {Error}
   */
  async #fetchUsers(): Promise<User[]> {
    const result = await fetch(USER_API_ENDPOINT)

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
