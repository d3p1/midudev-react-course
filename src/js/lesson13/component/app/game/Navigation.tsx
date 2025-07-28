/**
 * @description Game navigation
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useQuestionStore} from '../../../store/question.ts'

export const Navigation = () => {
  const goNextQuestion = useQuestionStore((state) => state.goNextQuestion)
  const goPreviousQuestion = useQuestionStore(
    (state) => state.goPreviousQuestion,
  )
  const questions = useQuestionStore((state) => state.questions)
  const currentQuestion = useQuestionStore((state) => state.currentQuestion)

  return (
    <div className="flex justify-between items-center text-xs font-black p-4 bg-primary-800 rounded-2xl">
      <button
        onClick={goPreviousQuestion}
        disabled={currentQuestion <= 0}
        className="cursor-pointer"
      >
        {'<'}
      </button>
      <p>{currentQuestion + 1}/10</p>
      <button
        onClick={goNextQuestion}
        disabled={currentQuestion >= questions.length - 1}
        className="cursor-pointer"
      >
        {'>'}
      </button>
    </div>
  )
}
