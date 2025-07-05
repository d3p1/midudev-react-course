/**
 * @description Game manager
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
]

export default class GameManager {
  /**
   * @type {{X: string, O: string}}
   */
  static TURNS: {X: string; O: string} = {
    X: 'x',
    O: 'o',
  }

  /**
   * Update game
   *
   * @param   {string[]} board
   * @param   {number}   index
   * @param   {string}   turn
   * @returns {{newBoard: string[], hasWinner: boolean | null, newTurn: string}}
   */
  static updateGame(
    board: string[],
    index: number,
    turn: string,
  ): {newBoard: string[]; hasWinner: boolean | null; newTurn: string} {
    const newBoard = [...board]
    newBoard[index] = turn
    this.saveBoard(newBoard)

    let hasWinner = null
    let newTurn = turn
    if (this.hasWinner(newBoard)) {
      hasWinner = true
      this.saveWinner(true)
    } else if (newBoard.every((square) => square !== null)) {
      hasWinner = false
      this.saveWinner(false)
    } else {
      newTurn = turn === this.TURNS.O ? this.TURNS.X : this.TURNS.O
      this.saveTurn(newTurn)
    }

    return {
      newBoard: newBoard,
      hasWinner: hasWinner,
      newTurn: newTurn,
    }
  }

  /**
   * Check if game has winner
   *
   * @param   {string[]} board
   * @returns {boolean}
   */
  static hasWinner(board: string[]): boolean {
    for (const combo of WINNER_COMBOS) {
      if (
        board[combo[0]] &&
        board[combo[0]] === board[combo[1]] &&
        board[combo[0]] === board[combo[2]]
      ) {
        return true
      }
    }

    return false
  }

  /**
   * Save board to local storage
   *
   * @param   {string[]} board
   * @returns {void}
   */
  static saveBoard(board: string[]): void {
    localStorage.setItem('board', JSON.stringify(board))
  }

  /**
   * Save turn to local storage
   *
   * @param   {string} turn
   * @returns {void}
   */
  static saveTurn(turn: string): void {
    localStorage.setItem('turn', turn)
  }

  /**
   * Save winner to local storage
   *
   * @param   {boolean | null} winner
   * @returns {void}
   */
  static saveWinner(winner: boolean | null): void {
    localStorage.setItem('winner', JSON.stringify(winner))
  }

  /**
   * Load board from local storage
   *
   * @returns {string[]}
   */
  static loadBoard(): string[] {
    const board = localStorage.getItem('board')
    return board ? JSON.parse(board) : new Array(9).fill(null)
  }

  /**
   * Load turn from local storage
   *
   * @returns {string}
   */
  static loadTurn(): string {
    return localStorage.getItem('turn') ?? this.TURNS.O
  }

  /**
   * Load winner from local storage
   *
   * @returns {boolean | null}
   */
  static loadWinner(): boolean | null {
    const winner = localStorage.getItem('winner')
    return winner ? JSON.parse(winner) : null
  }

  /**
   * Clear data
   *
   * @returns {void}
   */
  static clearData(): void {
    localStorage.removeItem('board')
    localStorage.removeItem('turn')
    localStorage.removeItem('winner')
  }
}
