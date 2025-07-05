/**
 * @description Game square
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import GameManager from '../../../utils/game-manager.ts'

export default function Square({
  index,
  turn,
  updateGame,
}: {
  index: number
  turn: string
  updateGame: (index: number) => void
}) {
  return (
    <div
      className={`border-primary-200 border-2 p-10 font-black cursor-pointer select-none ${
        turn === GameManager.TURNS.X
          ? 'text-accent-primary'
          : 'text-accent-secondary'
      }`}
      onClick={() => updateGame(index)}
    >
      {turn}
    </div>
  )
}
