import { useMemo } from 'react'
import * as THREE from 'three'
import Name from '../Name'

export default function Cloud({ count, radius, quotes }) {
  const shuffle = array => {
    for (let i = 0; i < array.length; i++) {
      const j = Math.round(Math.random() * i)
      const temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    return array
  }

  const shuffledQuotes = shuffle(quotes)

  const names = useMemo(() => {
    const temp = []
    const spherical = new THREE.Spherical()
    const phiSpan = Math.PI / (count + 1)
    const thetaSpan = (Math.PI * 2) / count
    let quoteArrIdx = 0

    for (let i = 1; i < count + 1; i++) {
      for (let j = 0; j < count; j++) {
        temp.push([
          new THREE.Vector3().setFromSpherical(
            spherical.set(radius, phiSpan * i, thetaSpan * j)
          ),
          shuffledQuotes[quoteArrIdx].character
        ])
        quoteArrIdx++
      }
    }

    return temp
  }, [count, radius, shuffledQuotes])

  return names.map(([pos, word], index) => (
    <Name key={index} position={pos} children={word} />
  ))
}
