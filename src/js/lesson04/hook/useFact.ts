/**
 * @description Hook to manage facts
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useState, useEffect} from 'react'
import FactManager from '../utils/fact-manager.ts'

export default function useFact() {
  const [fact, setFact] = useState<string>()

  const refreshFact = () => {
    FactManager.getFact((data) => {
      if (data.fact) {
        setFact(data.fact)
      }
    })
  }

  useEffect(() => {
    refreshFact()
  }, [])

  return {fact, refreshFact}
}
