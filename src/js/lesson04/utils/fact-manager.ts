/**
 * @description Fact manager
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import FetchManager from './fetch-manager.ts'

const FACT_API_BASE_URL = 'https://catfact.ninja/'
const FACT_API_RESOURCE = 'fact'
const FACT_API_RESOURCE_ENDPOINT = `${FACT_API_BASE_URL}${FACT_API_RESOURCE}`

export default class FactManager {
  /**
   * Get fact
   *
   * @param   {(data: {[p: string]: string}) => void} callback
   * @returns {void}
   */
  static getFact(
    callback: (data: {[key: string]: string}) => void,
  ): void {
    FetchManager.fetch(FACT_API_RESOURCE_ENDPOINT, callback)
  }
}
