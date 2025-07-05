/**
 * @description Game
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import Square from './game/Square.tsx'

export default function Game({
  board,
  turn,
  winner,
  updateGame,
  resetGame,
}: {
  board: string[]
  turn: string
  winner: boolean | null
  updateGame: (index: number) => void
  resetGame: () => void
}) {
  return (
    <div className="flex flex-col gap-10">
      <button
        className="rounded-full bg-secondary text-primary-900 font-black p-5"
        onClick={resetGame}
      >
        Reset
      </button>

      <section className="grid grid-cols-3 gap-y-20 gap-x-20">
        {board.map((turn, index) => (
          <Square
            key={index}
            index={index}
            turn={turn}
            updateGame={updateGame}
          />
        ))}
      </section>

      {winner !== null && (
        <section className="text-center text-2xl">
          <span className="font-black uppercase">
            {(winner && `Winner: ${turn}`) || `Draw`}
          </span>
        </section>
      )}
    </div>
  )
}
