/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useState, useEffect} from 'react'

export default function App() {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({x: 0, y: 0})

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      const {clientX, clientY} = e
      setPosition({x: clientX, y: clientY})
    }

    if (enabled) {
      window.addEventListener('pointermove', handlePointerMove)
    }

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
    }
  }, [enabled])

  return (
    <>
      <div
        className={`w-40 h-40 rounded-full bg-secondary opacity-5 inset-shadow-[black_0_0_1rem] ${
          enabled ? 'block' : 'hidden'
        }`}
        style={{
          position: 'absolute',
          zIndex: -1,
          transform: 'translateX(-50%) translateY(-50%)',
          top: position.y,
          left: position.x,
        }}
      />

      <button
        className="bg-secondary p-4 rounded-full font-black text-primary-900 cursor-pointer"
        onClick={() => setEnabled(!enabled)}
      >
        {enabled ? 'Hide' : 'Show'}
      </button>
    </>
  )
}
