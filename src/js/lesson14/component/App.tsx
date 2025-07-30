/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useState, version} from 'react'
import {preload} from 'react-dom'
import {UserProvider} from '../context/user.tsx'
import {ActionBar} from './app/ActionBar.tsx'
import {FocusForm} from './app/FocusForm.tsx'
import {ReactIcon} from './app/Icon/ReactIcon.tsx'
import {Pokemon} from './app/Pokemon.tsx'
import {Seo} from './app/Seo.tsx'
import {Footer} from './app/signin/Footer.tsx'
import {Main} from './app/signin/Main.tsx'

export default function App() {
  preload('/midudev-react-course/lesson14/css/styles.css', {
    as: 'style',
    fetchPriority: 'low',
  })

  preload('https://react.dev/images/uwu.png', {
    as: 'image',
    fetchPriority: 'low',
  })

  const [isSeoEnabled, setIsSeoEnabled] = useState(false)
  const [isReactIconEnabled, setIsReactIconEnabled] = useState(false)
  const [isFocusFormEnabled, setIsFocusFormEnabled] = useState(false)
  const [isPokemonEnabled, setIsPokemonEnabled] = useState(false)
  const [isSignInEnabled, setIsSignInEnabled] = useState(false)

  return (
    <UserProvider>
      <div className="flex flex-col gap-8 h-full w-1/3">
        <p className="italic text-xs text-center">
          This app uses the following React version: {version}
        </p>

        {isSeoEnabled && <Seo />}

        {isReactIconEnabled && <ReactIcon />}

        {isFocusFormEnabled && <FocusForm />}

        {isPokemonEnabled && <Pokemon />}

        {isSignInEnabled && (
          <div className="flex flex-col justify-center items-center gap-4">
            <Main />
            <Footer />
          </div>
        )}

        <ActionBar
          handleSeo={() => setIsSeoEnabled(!isSeoEnabled)}
          isSeoEnabled={isSeoEnabled}
          handleReactIcon={() => setIsReactIconEnabled(!isReactIconEnabled)}
          isReactIconEnabled={isReactIconEnabled}
          handleFocusForm={() => setIsFocusFormEnabled(!isFocusFormEnabled)}
          isFocusFormEnabled={isFocusFormEnabled}
          handlePokemon={() => setIsPokemonEnabled(!isPokemonEnabled)}
          isPokemonEnabled={isPokemonEnabled}
          handleSignIn={() => setIsSignInEnabled(!isSignInEnabled)}
          isSignInEnabled={isSignInEnabled}
        />
      </div>
    </UserProvider>
  )
}
