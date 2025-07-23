/**
 * @description User form
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import * as React from 'react'
import {useUser} from '../../hook/useUser.ts'
import type {UserEmail, UserFullName, UserGitHub} from '../../types'

export const UserForm = () => {
  const {handleAddUser} = useUser()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    const fullName = formData.get('name') as UserFullName
    const email = formData.get('email') as UserEmail
    const github = formData.get('github') as UserGitHub

    handleAddUser({
      fullName,
      email,
      github,
    })

    form.reset()
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-4">
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        className="border-primary-600 border-solid border-2 p-4 placeholder:italic"
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        className="border-primary-600 border-solid border-2 p-4 placeholder:italic"
      />
      <input
        type="text"
        name="github"
        placeholder="GitHub"
        className="border-primary-600 border-solid border-2 p-4 placeholder:italic"
      />
      <button
        type="submit"
        className="bg-primary-800 text-seconday font-black rounded-2xl p-4 cursor-pointer"
      >
        Add
      </button>
    </form>
  )
}
