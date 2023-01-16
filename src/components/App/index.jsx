import { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { TrackballControls } from '@react-three/drei'
import Cloud from '../Cloud'
import './app.css'

export default function App() {
  const [quotes, setQuotes] = useState([])
  const [selectedQuote, setSelectedQuote] = useState({})
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://xavier-v-project-2-build-api-production.up.railway.app/quote'
      )
      const data = await response.json()
      setQuotes(data)
      setLoading(false)
    } catch (e) {
      throw new Error(e)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (loading) {
    return (
      <main>
        <h1>Loading...</h1>
      </main>
    )
  }

  return (
    <Canvas className='main' dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
      <fog attach='fog' args={['#202025', 0, 80]} />
      <Cloud count={8} radius={20} quotes={quotes} />
      <TrackballControls />
    </Canvas>
  )
}
