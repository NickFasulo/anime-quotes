import { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { TrackballControls } from '@react-three/drei'
import shuffle from '../../utils/shuffle'
import filter from '../../utils/filter'
import Cloud from '../Cloud'
import Quote from '../Quote'
import axios from 'axios'
import './App.css'

export default function App() {
  const [quotes, setQuotes] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedQuote, setSelectedQuote] = useState({})
  const [open, setOpen] = useState(false)

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://xavier-v-project-2-build-api-production.up.railway.app/quote'
      )
      const filteredData = filter(response.data)
      const shuffledData = shuffle(filteredData)

      setQuotes(shuffledData)
      setLoading(false)
    } catch (error) {
      throw new Error(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleOpen = quote => {
    setOpen(true)
    setSelectedQuote(quote)
  }

  const handleClose = () => {
    setOpen(false)
    setSelectedQuote({})
  }

  if (loading) {
    return (
      <main>
        <h1>Loading...</h1>
      </main>
    )
  }

  return (
    <main>
      <Canvas
        className='canvas'
        dpr={[1, 2]}
        camera={{ position: [0, 0, 35], fov: 130 }}
      >
        <fog attach='fog' args={['#202025', 0, 80]} />
        <Cloud count={10} radius={30} quotes={quotes} handleOpen={handleOpen} />
        <TrackballControls />
      </Canvas>
      {open && <Quote data={selectedQuote} handleClose={handleClose} />}
    </main>
  )
}
