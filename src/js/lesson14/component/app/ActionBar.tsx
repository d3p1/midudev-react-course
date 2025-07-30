/**
 * @description Action bar
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import * as React from 'react'

export const ActionBar: React.FC<{
  handleSeo: () => void
  isSeoEnabled: boolean
  handleReactIcon: () => void
  isReactIconEnabled: boolean
  handleFocusForm: () => void
  isFocusFormEnabled: boolean
  handlePokemon: () => void
  isPokemonEnabled: boolean
  handleSignIn: () => void
  isSignInEnabled: boolean
  handleActionForm: () => void
  isActionFormEnabled: boolean
}> = ({
  handleSeo,
  isSeoEnabled,
  handleReactIcon,
  isReactIconEnabled,
  handleFocusForm,
  isFocusFormEnabled,
  handlePokemon,
  isPokemonEnabled,
  handleSignIn,
  isSignInEnabled,
  handleActionForm,
  isActionFormEnabled,
}) => {
  return (
    <>
      <button
        onClick={handleSeo}
        className="bg-secondary text-primary-900 font-black p-4 rounded-2xl cursor-pointer"
      >
        {isSeoEnabled ? 'Deactivate SEO' : 'Activate SEO'}
      </button>

      <button
        onClick={handleReactIcon}
        className="bg-secondary text-primary-900 font-black p-4 rounded-2xl cursor-pointer"
      >
        {isReactIconEnabled ? 'Hide Icon' : 'Show Icon'}
      </button>

      <button
        onClick={handleFocusForm}
        className="bg-secondary text-primary-900 font-black p-4 rounded-2xl cursor-pointer"
      >
        {isFocusFormEnabled ? 'Hide Focus Form' : 'Show Focus Form'}
      </button>

      <button
        onClick={handlePokemon}
        className="bg-secondary text-primary-900 font-black p-4 rounded-2xl cursor-pointer"
      >
        {isPokemonEnabled ? 'Hide Pokemon' : 'Show Pokemon'}
      </button>

      <button
        onClick={handleSignIn}
        className="bg-secondary text-primary-900 font-black p-4 rounded-2xl cursor-pointer"
      >
        {isSignInEnabled ? 'Hide Sign In' : 'Show Sign In'}
      </button>

      <button
        onClick={handleActionForm}
        className="bg-secondary text-primary-900 font-black p-4 rounded-2xl cursor-pointer"
      >
        {isActionFormEnabled ? 'Hide Action Form' : 'Show Action Form'}
      </button>
    </>
  )
}
