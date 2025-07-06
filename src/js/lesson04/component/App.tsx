/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import useCatImage from '../hook/useCatImage.ts'
import useFact from '../hook/useFact.ts'

export default function App() {
  const {fact, refreshFact} = useFact()
  const {imgUrl} = useCatImage(fact)

  return (
    <section className="flex flex-col justify-center items-center gap-4">
      {fact && <p className="italic p-4">"{fact}"</p>}
      {fact && imgUrl && (
        <img
          className="max-w-xs max-h-xs w-auto h-auto"
          src={imgUrl}
          alt={`An image of a cat from the first word of ${fact}`}
        />
      )}

      <button
        className="bg-secondary text-primary-900 font-black rounded-full p-5 cursor-pointer"
        onClick={refreshFact}
      >
        Refresh
      </button>
    </section>
  )
}
