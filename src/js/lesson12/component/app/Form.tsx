/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import * as React from 'react'
import {CommentManager} from '../../service/comment-manager.ts'

export const Form = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.target as HTMLFormElement

    const data = new FormData(form)
    const title = (data.get('title') as string) || ''
    const message = (data.get('message') as string) || ''

    if (title !== '' && message !== '') {
      void CommentManager.addComment({
        title,
        message,
      })

      form.reset()
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center gap-6 bg-primary-600 p-8 rounded-2xl w-full"
    >
      <input
        name="title"
        type="text"
        placeholder="Title"
        className="bg-primary-700 text-secondary p-6 rounded-2xl placeholder:text-secondary placeholder:italic"
      />
      <textarea
        name="message"
        placeholder="Message"
        className="bg-primary-700 text-secondary p-6 rounded-2xl placeholder:text-secondary placeholder:italic"
      />
      <button
        type="submit"
        className="bg-secondary text-primary-900 font-black p-4 rounded-2xl cursor-pointer"
      >
        Save
      </button>
    </form>
  )
}
