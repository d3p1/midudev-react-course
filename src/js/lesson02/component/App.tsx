/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useState} from 'react'
import GameManager from '../utils/game-manager.ts'
import Game from './app/Game.tsx'

export default function App() {
  const [board, setBoard] = useState<string[]>(GameManager.loadBoard())
  const [turn, setTurn] = useState(GameManager.loadTurn())
  const [winner, setWinner] = useState<boolean | null>(GameManager.loadWinner())

  const resetGame = () => {
    setBoard(new Array(9).fill(null))
    setTurn(GameManager.TURNS.O)
    setWinner(null)
    GameManager.clearData()
  }

  const updateGame = (index: number) => {
    if (board[index] || winner !== null) {
      return
    }

    const {newBoard, hasWinner, newTurn} = GameManager.updateGame(
      board,
      index,
      turn,
    )
    setBoard(newBoard)
    setWinner(hasWinner)
    setTurn(newTurn)
  }

  return (
    <Game
      board={board}
      turn={turn}
      winner={winner}
      updateGame={updateGame}
      resetGame={resetGame}
    />
  )
}
