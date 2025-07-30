/**
 * @description Focus form
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useRef} from 'react'
import * as React from 'react'

const Input: React.FC<{ref: React.Ref<HTMLInputElement | null>}> = ({ref}) => {
  return (
    <input ref={ref} className="p-4 border-primary-600 border-2 border-solid" />
  )
}

export const FocusForm = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <>
      <Input ref={inputRef} />
      <button
        onClick={() => inputRef?.current?.focus()}
        className="bg-secondary text-primary-900 font-black p-4 rounded-2xl border-primary-300 border-solid border-8 cursor-pointer"
      >
        Focus
      </button>
    </>
  )
}
