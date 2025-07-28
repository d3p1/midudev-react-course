/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
export const Form = () => {
  return (
    <form className="flex flex-col justify-center gap-6 bg-primary-600 p-8 rounded-2xl w-full">
      <input
        type="text"
        placeholder="Title"
        className="bg-primary-700 text-secondary p-6 rounded-2xl placeholder:text-secondary placeholder:italic"
      />
      <textarea
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
