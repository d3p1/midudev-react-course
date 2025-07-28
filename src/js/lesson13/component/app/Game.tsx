/**
 * @description Game
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useQuestionStore} from '../../store/question.ts'
import {Navigation} from './game/Navigation.tsx'
import {Question} from './game/Question.tsx'
import {Statics} from './game/Statics.tsx'

export const Game = () => {
  const questions = useQuestionStore((state) => state.questions)
  console.log(questions)

  return (
    <>
      <Navigation />
      <ul>
        <li className="flex flex-col gap-8 bg-primary-800 rounded-2xl p-6">
          <Question />
        </li>
      </ul>
      <Statics />
      <button className="bg-secondary text-primary-900 font-black p-4 rounded-2xl cursor-pointer">
        Restart
      </button>
    </>
  )
}
