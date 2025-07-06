/**
 * @description Fetch manager
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
export default class FetchManager {
  /**
   * Fetch
   *
   * @param   {string}                                endpoint
   * @param   {(data: {[p: string]: string}) => void} callback
   * @returns {void}
   */
  static fetch(
    endpoint: string,
    callback: (data: {[key: string]: string}) => void,
  ): void {
    fetch(endpoint)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch endpoint')
        }

        return res.json()
      })
      .then((data) => callback(data))
      .catch((error) => console.error(error))
  }
}
