/**
 * @description User manager
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import type {User} from '../types'
import {users} from '../data/users.ts'

export class UserManager {
  /**
   * Load users
   *
   * @returns {User[]}
   */
  static loadUsers(): User[] {
    const storedUsers = localStorage.getItem('users')
    if (storedUsers) {
      return JSON.parse(storedUsers)
    }

    return users
  }

  /**
   * Save users
   *
   * @returns {void}
   */
  static saveUsers(users: User[]): void {
    localStorage.setItem('users', JSON.stringify(users))
  }
}
