/**
 * @description Cat image manager
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import FetchManager from './fetch-manager.ts'

const CAT_API_BASE_URL = 'https://cataas.com/'
const CAT_API_RESOURCE = 'cat/says/:text?json=true'
const CAT_API_RESOURCE_ENDPOINT = `${CAT_API_BASE_URL}${CAT_API_RESOURCE}`

export default class CatImageManager {
  /**
   * Get image from fact
   *
   * @param   {string}                                fact
   * @param   {(data: {[p: string]: string}) => void} callback
   * @returns {void}
   */
  static getImageFromFact(
    fact: string,
    callback: (data: {[key: string]: string}) => void,
  ): void {
    const factFirstWord = fact.split(' ', 1)

    if (!factFirstWord.length) {
      return
    }

    const endpoint = CAT_API_RESOURCE_ENDPOINT.replace(
      ':text',
      factFirstWord[0],
    )
    FetchManager.fetch(endpoint, callback)
  }
}
