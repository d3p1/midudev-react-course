/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {Header} from './app/Header.tsx'
import {Footer} from './app/Footer.tsx'
import {TodoList} from './app/TodoList.tsx'
import {TodoProvider} from '../context/todo.tsx'

export default function App() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-16">
      <TodoProvider>
        <Header />
        <TodoList />
        <Footer />
      </TodoProvider>
    </div>
  )
}
