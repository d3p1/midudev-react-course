/**
 * @description Game square
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import GameManager from '../../../utils/game-manager.ts'

export default function Square({
  turn,
  updateGame,
}: {
  turn: string
  updateGame: () => void
}) {
  return (
    <div
      className={`border-primary-200 border-2 w-22 h-22 flex justify-center items-center font-black cursor-pointer select-none ${
        turn === GameManager.TURNS.X
          ? 'text-accent-primary'
          : 'text-accent-secondary'
      }`}
      onClick={updateGame}
    >
      {turn}
    </div>
  )
}
