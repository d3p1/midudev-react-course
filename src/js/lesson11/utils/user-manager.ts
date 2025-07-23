/**
 * @description User manager
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import type {User, UserResult} from '../types'

const USER_API_BASE_URL = 'https://randomuser.me/api/'
const USER_API_PARAMS = 'results=100&inc=id,name,location,picture'
const USER_API_ENDPOINT = `${USER_API_BASE_URL}?${USER_API_PARAMS}`

export class UserManager {
  /**
   * @type {User[] | null}
   */
  users: User[] | null = null

  /**
   * Constructor
   */
  constructor() {}

  /**
   * Load users
   *
   * @returns {Promise<void>}
   */
  async loadUsers(): Promise<void> {
    if (!this.users) {
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
