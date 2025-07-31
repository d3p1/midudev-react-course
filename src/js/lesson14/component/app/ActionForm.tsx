/**
 * @description Action form
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import * as React from 'react'
import {useState, useTransition} from 'react'
import {MessageManager} from '../../utils/message-manager.tsx'

export const ActionForm = () => {
  const [messages, setMessages] = useState<string[]>([])
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.target as HTMLFormElement
    const data = new FormData(form)
    const message = (data.get('message') as string) ?? ''

    if (message !== '') {
      setError(null)
      startTransition(async () => {
        try {
          await MessageManager.addMessage(message)
          setMessages((prevMessages) => [...prevMessages, message])
          form.reset()
        } catch (e) {
          console.error(e as string)
          setError(e as string)
        }
      })
    }
  }

  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <ul className="flex flex-col justify-center items-center gap-4">
        {messages.map((message, index) => {
          return <li key={index}>{message}</li>
        })}
      </ul>

      {error && (
        <p className="text-accent-secondary text-xs italic text-center">
          {error}
        </p>
      )}

      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-4"
      >
        <input
          type="text"
          name="message"
          placeholder="A message"
          disabled={isPending}
          className="p-4 border-primary-300 border-4 border-solid"
        />
        <button
          type="submit"
          disabled={isPending}
          className="bg-secondary text-primary-900 font-black p-4 rounded-2xl cursor-pointer"
        >
          {isPending ? 'Loading...' : 'Submit'}
        </button>
      </form>
    </div>
  )
}
