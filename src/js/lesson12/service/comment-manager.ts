/**
 * @description Comment manager
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import type {Comment, CommentResult} from '../types'

/**
 * @todo Move these settings to environment variables.
 *       However, it is used a test account so there is no problem
 *       to expose this data to the client
 */
const API_BASE_URL = 'https://api.jsonbin.io/v3'
const API_BIN_ID = '6886c2d7f7e7a370d1eeeee7'
const API_KEY = '$2a$10$/KwWBXa2RC5HsxmAqYp8muZBiwnz8gj5ohntHIjoFWGlJU8LetwqK'
const API_ENDPOINT = `${API_BASE_URL}/b/${API_BIN_ID}`

export class CommentManager {
  /**
   * Get comments
   *
   * @returns {Promise<Comment[]>}
   */
  static async getComments(): Promise<Comment[]> {
    const result = await fetch(API_ENDPOINT, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Access-Key': API_KEY,
      },
    })

    if (!result.ok) {
      throw new Error('There was an error fetching comments.')
    }

    const data = (await result.json()) as CommentResult

    if (!data?.record?.comments?.length) {
      throw new Error('It was not possible to retrieve comments.')
    }

    return data.record.comments
  }
}
