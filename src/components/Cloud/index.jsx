import { useMemo } from 'react'
import * as THREE from 'three'
import shuffle from '../../utils/shuffle'
import Name from '../Name'

export default function Cloud({ count, radius, quotes }) {
  const shuffledQuotes = shuffle(quotes)

  const names = useMemo(() => {
    const temp = []
    const spherical = new THREE.Spherical()
    const phiSpan = Math.PI / (count + 1)
    const thetaSpan = (Math.PI * 2) / count
    let idx = 0

    for (let i = 1; i < count + 1; i++) {
      for (let j = 0; j < count; j++) {
        temp.push([
          new THREE.Vector3().setFromSpherical(
            spherical.set(radius, phiSpan * i, thetaSpan * j)
          ),
          shuffledQuotes[idx].character
        ])
        idx++
      }
    }

    return temp
  }, [count, radius, shuffledQuotes])

  return names.map(([pos, name], i) => (
    <Name key={i} position={pos} children={name} />
  ))
}
