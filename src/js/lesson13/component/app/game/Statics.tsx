/**
 * @description Game statics
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useQuestionStore} from '../../../store/question.ts'

export const Statics = () => {
  const questions = useQuestionStore((state) => state.questions)
  const correct = questions.filter(
    (question) => question.correctAnswer === question.userSelectedAnswer,
  ).length
  const incorrect = questions.filter(
    (question) =>
      question.userSelectedAnswer !== undefined &&
      question.correctAnswer !== question.userSelectedAnswer,
  ).length
  const pending = questions.filter(
    (question) => question.userSelectedAnswer === undefined,
  ).length

  return (
    <div className="flex justify-center items-center gap-6 p-4 bg-primary-800 rounded-2xl text-xs">
      <p>
        <span className="font-black">Correct:</span> <span>{correct}</span>
      </p>
      <p>
        <span className="font-black">Incorrect:</span> <span>{incorrect}</span>
      </p>
      <p>
        <span className="font-black">Pending:</span> <span>{pending}</span>
      </p>
    </div>
  )
}
