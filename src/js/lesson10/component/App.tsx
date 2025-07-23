/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {Provider} from 'react-redux'
import {store} from '../store'
import {UserForm} from './app/UserForm.tsx'
import {UserList} from './app/UserList.tsx'

export default function App() {
  return (
    <Provider store={store}>
      <div className="flex flex-col w-4/5 bg-primary-700 inset-shadow-[black_0_0_1rem] rounded-2xl">
        <UserList />
      </div>
      <div className="flex flex-col w-4/5 bg-primary-700 inset-shadow-[black_0_0_1rem] rounded-2xl mt-4">
        <UserForm />
      </div>
    </Provider>
  )
}
