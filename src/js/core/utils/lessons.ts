/**
 * @description Lessons
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import Lesson01 from '../../lesson01/component/App.tsx'
import Lesson02 from '../../lesson02/component/App.tsx'
import Lesson03 from '../../lesson03/component/App.tsx'
import Lesson04 from '../../lesson04/component/App.tsx'
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
  {
    number: '03',
    title: 'Mouse Follower',
    link: 'https://youtu.be/qkzcjwnueLA?t=4040',
    component: Lesson03,
  },
  {
    number: '04',
    title: 'Cat App',
    link: 'https://cursoreact.dev/03-react-prueba-tecnica',
    component: Lesson04,
  },
]
