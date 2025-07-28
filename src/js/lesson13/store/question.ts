/**
 * @description Question store
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {create} from 'zustand/react'
import type {Question} from '../types'
import {QuestionManager} from '../service/question-manager.ts'

interface State {
  questions: Question[]
  currentQuestion: number
  loadQuestions: () => Promise<void>
}

export const useQuestionStore = create<State>((set) => ({
  questions: [],
  currentQuestion: 0,
  loadQuestions: async () => {
    const questions = await QuestionManager.loadQuestions()
    set({
      questions,
    })
  },
}))
