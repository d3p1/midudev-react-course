/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useState, useEffect} from 'react'
import FactManager from '../utils/fact-manager.ts'
import CatImageManager from '../utils/cat-image-manager.ts'

export default function App() {
  const [fact, setFact] = useState<string>()
  const [imgUrl, setImgUrl] = useState<string>()

  useEffect(() => {
    FactManager.getFact((res) => {
      if (res.fact) {
        setFact(res.fact)
      }
    })
  }, [])

  useEffect(() => {
    if (!fact) {
      return
    }
    CatImageManager.getImageFromFact(fact, (res) => {
      if (res.url) {
        setImgUrl(res.url)
      }
    })
  }, [fact])

  return (
    <section className="flex flex-col justify-center items-center gap-4">
      {fact && <p className="italic">"{fact}"</p>}
      {fact && imgUrl && (
        <img
          className="max-w-md max-h-md w-auto h-auto"
          src={imgUrl}
          alt={`An image of a cat from the first word of ${fact}`}
        />
      )}
    </section>
  )
}
