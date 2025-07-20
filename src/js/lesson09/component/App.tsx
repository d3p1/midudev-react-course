/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {InterchangeIcon} from './app/icon/InterchangeIcon.tsx'

export default function App() {
  return (
    <div className="grid grid-rows-[1fr_4fr] place-items-stretch gap-5 w-1/2">
      <div className="grid grid-cols-3 place-items-center p-8 bg-primary-800 inset-shadow-[black_0_0_2rem] rounded-2xl">
        <select className="bg-transparent text-secondary p-2 rounded-lg">
          <option className="bg-primary-800">Esp</option>
          <option className="bg-primary-800">Eng</option>
          <option className="bg-primary-800">Dutch</option>
        </select>
        <button className="cursor-pointer">
          <InterchangeIcon />
        </button>
        <select className="bg-transparent text-secondary p-2`` rounded-lg">
          <option className="bg-primary-800">Esp</option>
          <option className="bg-primary-800">Eng</option>
          <option className="bg-primary-800">Dutch</option>
        </select>
      </div>
      <div className="grid grid-cols-2 place-items-stretch p-8 gap-4 bg-primary-800 inset-shadow-[black_0_0_2rem] rounded-2xl italic">
        <textarea
          name="from-text"
          className="p-8 border-primary-700 border-solid border-2 rounded-2xl"
        >
          From text...
        </textarea>
        <textarea
          name="to-text"
          className="p-8 border-primary-700 border-solid border-2 rounded-2xl"
        >
          To text...
        </textarea>
      </div>
    </div>
  )
}
