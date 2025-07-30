/**
 * @description Message manager
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
export class MessageManager {
  /**
   * @type {string[]}
   */
  static messages: string[] = []

  /**
   * Add a message
   *
   * @param   {string} message
   * @returns {Promise<void>}
   * @note    Add timer to simulate API request
   */
  static addMessage(message: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const isResolved = Math.random() > 0.5

      setTimeout(() => {
        if (isResolved) {
          MessageManager.messages.push(message)
          resolve()
          return
        }

        reject('There was an error.')
        return
      }, 1000)
    })
  }
}
