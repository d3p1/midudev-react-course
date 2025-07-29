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
  answer: (questionId: number, answerIndex: number) => void
  goNextQuestion: () => void
  goPreviousQuestion: () => void
  restart: () => void
}

export const useQuestionStore = create<State>((set, get) => ({
  questions: [],
  currentQuestion: 0,
  loadQuestions: async () => {
    const questions = await QuestionManager.loadQuestions()
    set({
      questions,
    })
  },
  answer: (questionId, answerIndex) => {
    const {questions} = get()
    const newQuestions = structuredClone(questions)
    const questionIndex = newQuestions.findIndex(
      (question) => question.id === questionId,
    )
    newQuestions[questionIndex].userSelectedAnswer = answerIndex

    set({
      questions: newQuestions,
    })
  },
  goNextQuestion: () => {
    const {questions, currentQuestion} = get()
    if (currentQuestion < questions.length - 1) {
      set({
        currentQuestion: currentQuestion + 1,
      })
    }
  },
  goPreviousQuestion: () => {
    const {currentQuestion} = get()
    if (currentQuestion > 0) {
      set({
        currentQuestion: currentQuestion - 1,
      })
    }
  },
  restart: () => {
    set({
      questions: [],
      currentQuestion: 0,
    })
  },
}))
