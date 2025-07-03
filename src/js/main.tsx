/**
 * @description Main
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {createRoot} from 'react-dom/client'
import App from './core/component/App.tsx'

const root = createRoot(document.getElementById('root')!)
root.render(<App />)
