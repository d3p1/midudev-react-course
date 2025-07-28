/**
 * @description Game statics
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
export const Statics = () => {
  return (
    <div className="flex justify-center items-center gap-6 p-4 bg-primary-800 rounded-2xl text-xs">
      <p>
        <span className="font-black">Correct:</span> <span>10</span>
      </p>
      <p>
        <span className="font-black">Incorrect:</span> <span>2</span>
      </p>
      <p>
        <span className="font-black">Pending:</span> <span>3</span>
      </p>
    </div>
  )
}
