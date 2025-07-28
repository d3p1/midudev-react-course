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
   * @throws  {Error}
   */
  static async getComments(): Promise<Comment[]> {
    const result = await CommentManager.fetch('GET')

    const data = (await result.json()) as CommentResult

    if (!data?.record?.comments) {
      throw new Error('It was not possible to retrieve comments.')
    }

    return data.record.comments
  }

  /**
   * Add comment
   *
   * @param   {{title: string, message: string}} comment
   * @returns {Promise<Comment>}
   */
  static async addComment({
    title,
    message,
  }: Omit<Comment, 'id'>): Promise<Comment> {
    const id = crypto.randomUUID()
    const newComment = {
      title,
      message,
      id,
    }
    const currentComments = await CommentManager.getComments()
    const data = {
      comments: [...currentComments, newComment],
    }

    await CommentManager.fetch('PUT', JSON.stringify(data))

    return newComment
  }

  /**
   * Reset comments
   *
   * @returns {Promise<void>}
   */
  static async resetComments(): Promise<void> {
    await CommentManager.fetch('PUT', JSON.stringify({comments: []}))
  }

  /**
   * Fetch
   *
   * @param   {string} method
   * @param   {string} body
   * @returns {Promise<Response>}
   * @throws  {Error}
   */
  static async fetch(method: 'GET' | 'PUT', body?: string): Promise<Response> {
    const response = await fetch(API_ENDPOINT, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'X-Access-Key': API_KEY,
      },
      body,
    })

    if (!response.ok) {
      throw new Error('There was an error with the request.')
    }

    return response
  }
}
