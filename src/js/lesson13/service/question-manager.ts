/**
 * @description Question manager
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import type {Question} from '../types'

const QUESTION_API_ENDPOINT =
  'https://raw.githubusercontent.com/midudev/aprendiendo-react/refs/heads/master/projects/13-javascript-quiz-con-zustand/public/data.json'

export class QuestionManager {
  /**
   * Process answer styles
   *
   * @param   {number} answerIndex
   * @param   {number} correctAnswer
   * @param   {number} userSelectedAnswer
   * @returns {string}
   */
  static processAnswerStyles(
    answerIndex: number,
    correctAnswer: number,
    userSelectedAnswer?: number,
  ): string {
    if (userSelectedAnswer !== undefined) {
      if (answerIndex === correctAnswer) {
        return 'bg-accent-primary'
      }

      if (answerIndex !== correctAnswer && answerIndex === userSelectedAnswer) {
        return 'bg-accent-secondary'
      }
    }

    return 'bg-primary-700'
  }

  /**
   * Load questions
   *
   * @param   {number} limit
   * @returns {Promise<Question[]>}
   * @throws  {Error}
   */
  static async loadQuestions(limit: number = 10): Promise<Question[]> {
    const result = await fetch(QUESTION_API_ENDPOINT)

    if (!result.ok) {
      throw new Error('Failed to fetch questions.')
    }

    const data = (await result.json()) as Question[]

    if (!data.length) {
      throw new Error('Failed to load questions.')
    }

    return data.toSorted(() => (Math.random() > 0.5 ? -1 : 1)).slice(0, limit)
  }
}
