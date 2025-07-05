/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useState, useEffect} from 'react'

const FACT_API_BASE_URL = 'https://catfact.ninja/'
const FACT_API_RESOURCE = 'fact'
const FACT_API_RESOURCE_ENDPOINT = `${FACT_API_BASE_URL}${FACT_API_RESOURCE}`
const CAT_API_BASE_URL = 'https://cataas.com/'
const CAT_API_RESOURCE = 'cat/says/:text?json=true'
const CAT_API_RESOURCE_ENDPOINT = `${CAT_API_BASE_URL}${CAT_API_RESOURCE}`

const _fetch = (
  endpoint: string,
  callback: (res: {fact?: string; url?: string}) => void,
) => {
  fetch(endpoint)
    .then((res) => {
      if (!res.ok) {
        throw new Error('Failed to fetch endpoint')
      }

      return res.json()
    })
    .then((res) => callback(res))
    .catch((error) => console.error(error))
}

const _fetchCatImgFromFact = (
  fact: string | undefined,
  callback: (res: {url?: string}) => void,
) => {
  if (!fact) {
    return
  }

  const factFirstWord = fact.split(' ', 1)

  if (!factFirstWord.length) {
    return
  }

  const endpoint = CAT_API_RESOURCE_ENDPOINT.replace(':text', factFirstWord[0])
  _fetch(endpoint, callback)
}

export default function App() {
  const [fact, setFact] = useState<string>()
  const [imgUrl, setImgUrl] = useState<string>()

  useEffect(() => {
    _fetch(FACT_API_RESOURCE_ENDPOINT, (res) => {
      if (res.fact) {
        setFact(res.fact)
      }
    })
  }, [])

  useEffect(() => {
    _fetchCatImgFromFact(fact, (res) => {
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
