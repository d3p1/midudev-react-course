/**
 * @description Lessons
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {lazy} from 'react'
import type {Lessons} from '../types'

export const lessons: Lessons = [
  {
    number: '01',
    title: 'Twitter Card',
    link: 'https://cursoreact.dev/01-react-desde-cero',
    component: lazy(() => import('../../lesson01/component/App.tsx')),
  },
  {
    number: '02',
    title: 'Tic-Tac-Toe',
    link: 'https://cursoreact.dev/02-use-state-use-effect',
    component: lazy(() => import('../../lesson02/component/App.tsx')),
  },
  {
    number: '03',
    title: 'Mouse Follower',
    link: 'https://youtu.be/qkzcjwnueLA?t=4040',
    component: lazy(() => import('../../lesson03/component/App.tsx')),
  },
  {
    number: '04',
    title: 'Cat App',
    link: 'https://cursoreact.dev/03-react-prueba-tecnica',
    additionalNote: lazy(
      () => import('../../lesson04/component/app/AdditionalNote.tsx'),
    ),
    component: lazy(() => import('../../lesson04/component/App.tsx')),
  },
  {
    number: '05',
    title: 'Movie Search',
    link: 'https://cursoreact.dev/05-use-callback-use-memo-use-ref',
    component: lazy(() => import('../../lesson05/component/App.tsx')),
  },
  {
    number: '06',
    title: 'Shopping Cart',
    link: 'https://cursoreact.dev/06-use-reducer-use-context',
    component: lazy(() => import('../../lesson06/component/App.tsx')),
  },
  {
    number: '07',
    title: 'React Router From Scratch',
    link: 'https://cursoreact.dev/07-midu-router',
    component: lazy(() => import('../../lesson07/component/App.tsx')),
  },
  {
    number: '08',
    title: 'TODO App',
    link: 'https://cursoreact.dev/08-todo-app-typescript',
    component: lazy(() => import('../../lesson08/component/App.tsx')),
  },
  {
    number: '09',
    title: 'Google Translate',
    link: 'https://cursoreact.dev/09-google-translate-clone',
    component: lazy(() => import('../../lesson09/component/App.tsx')),
  },
  {
    number: '10',
    title: 'Redux CRUD',
    link: 'https://cursoreact.dev/10-crud-redux',
    component: lazy(() => import('../../lesson10/component/App.tsx')),
  },
  {
    number: '11',
    title: 'User Table',
    link: 'https://cursoreact.dev/11-typescript-prueba-tecnica',
    component: lazy(() => import('../../lesson11/component/App.tsx')),
  },
]
