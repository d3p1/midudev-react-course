/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useQuestionStore} from '../store/question.ts'
import {Game} from './app/Game.tsx'
import {Start} from './app/Start.tsx'

export default function App() {
  const questions = useQuestionStore((state) => state.questions)

  return (
    <div className="w-1/2 h-full flex flex-col gap-4">
      {(questions.length && <Game />) || <Start />}
    </div>
  )
}
