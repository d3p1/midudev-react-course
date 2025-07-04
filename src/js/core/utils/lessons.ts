/**
 * @description Lessons
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import Lesson01 from '../../lesson01/component/App.tsx'
import Lesson02 from '../../lesson02/component/App.tsx'
import type {Lessons} from '../../types'

export const lessons: Lessons = [
  {
    number: '01',
    title: 'Twitter Card',
    link: 'https://cursoreact.dev/01-react-desde-cero',
    component: Lesson01,
  },
  {
    number: '02',
    title: 'Tic-Tac-Toe',
    link: 'https://cursoreact.dev/02-use-state-use-effect',
    component: Lesson02,
  },
]
