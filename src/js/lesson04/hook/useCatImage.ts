/**
 * @description Hook to manage cat images
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useState, useEffect} from 'react'
import CatImageManager from '../utils/cat-image-manager.ts'

export default function useCatImage(fact: string | undefined) {
  const [imgUrl, setImgUrl] = useState<string>()

  useEffect(() => {
    if (!fact) {
      return
    }

    CatImageManager.getImageFromFact(fact, (data) => {
      if (data.url) {
        setImgUrl(data.url)
      }
    })
  }, [fact])

  return {imgUrl}
}
