/**
 * @description Start
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useQuestionStore} from '../../store/question.ts'

export const Start = () => {
  const loadQuestions = useQuestionStore((state) => state.loadQuestions)

  return (
    <button
      onClick={loadQuestions}
      className="bg-secondary text-primary-900 font-black p-4 rounded-2xl max-w-1/4 m-auto cursor-pointer"
    >
      Start
    </button>
  )
}
