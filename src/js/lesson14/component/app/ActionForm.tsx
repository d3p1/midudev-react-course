/**
 * @description Action form
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useActionState, useState} from 'react'
import {useFormStatus} from 'react-dom'
import {MessageManager} from '../../utils/message-manager.tsx'

const Button = () => {
  const {pending} = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-secondary text-primary-900 font-black p-4 rounded-2xl cursor-pointer"
    >
      {pending ? 'Loading...' : 'Submit'}
    </button>
  )
}

export const ActionForm = () => {
  const [messages, setMessages] = useState<string[]>([])

  const addMessage = async (
    _: {error: boolean; message?: string},
    formData: FormData,
  ) => {
    const message = (formData.get('message') as string) ?? ''
    if (message !== '') {
      try {
        await MessageManager.addMessage(message)
        setMessages((prevMessages) => [...prevMessages, message])
        return {
          error: false,
        }
      } catch (e) {
        console.error(e as string)
        return {
          error: true,
          message: e as string,
        }
      }
    } else {
      return {
        error: true,
        message: 'Message field is required.',
      }
    }
  }

  const [result, submitAction, isPending] = useActionState(addMessage, {
    error: false,
  })

  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <ul className="flex flex-col justify-center items-center gap-4">
        {messages.map((message, index) => {
          return <li key={index}>{message}</li>
        })}
      </ul>

      {result.error && (
        <p className="text-accent-secondary text-xs italic text-center">
          {result.message}
        </p>
      )}

      <form
        action={submitAction}
        className="flex flex-col justify-center items-center gap-4"
      >
        <input
          type="text"
          name="message"
          placeholder="A message"
          disabled={isPending}
          className="p-4 border-primary-300 border-4 border-solid"
        />
        <Button />
      </form>
    </div>
  )
}
