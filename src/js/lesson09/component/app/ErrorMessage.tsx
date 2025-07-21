/**
 * @description Error message
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
export const ErrorMessage = () => {
  return (
    <div className="text-sm italic flex flex-col justify-center items-center gap-4">
      <p>
        This app uses the Gemini Nano model integrated in latest versions of
        Google Chrome.
      </p>
      <p>You should switch to that browser to use this app.</p>
    </div>
  )
}
