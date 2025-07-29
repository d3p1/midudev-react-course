/**
 * @description Question store
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {create} from 'zustand/react'
import {persist, devtools} from 'zustand/middleware'
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

export const useQuestionStore = create<State>()(
  devtools(
    persist(
      (set, get) => ({
        questions: [],
        currentQuestion: 0,
        loadQuestions: async () => {
          const questions = await QuestionManager.loadQuestions()
          set(
            {
              questions,
            },
            false,
            'LOAD_QUESTIONS',
          )
        },
        answer: (questionId, answerIndex) => {
          const {questions} = get()
          const newQuestions = structuredClone(questions)
          const questionIndex = newQuestions.findIndex(
            (question) => question.id === questionId,
          )
          newQuestions[questionIndex].userSelectedAnswer = answerIndex

          set(
            {
              questions: newQuestions,
            },
            false,
            'ANSWER',
          )
        },
        goNextQuestion: () => {
          const {questions, currentQuestion} = get()
          if (currentQuestion < questions.length - 1) {
            set(
              {
                currentQuestion: currentQuestion + 1,
              },
              false,
              'GO_NEXT_QUESTION',
            )
          }
        },
        goPreviousQuestion: () => {
          const {currentQuestion} = get()
          if (currentQuestion > 0) {
            set(
              {
                currentQuestion: currentQuestion - 1,
              },
              false,
              'GO_PREV_QUESTION',
            )
          }
        },
        restart: () => {
          set(
            {
              questions: [],
              currentQuestion: 0,
            },
            false,
            'RESTART',
          )
        },
      }),
      {
        name: 'questions',
      },
    ),
  ),
)
