import { useMemo } from 'react'
import * as THREE from 'three'
import Name from '../Name'

export default function Cloud({ count = 4, radius = 20, quotes }) {
  const names = useMemo(() => {
    const temp = []
    const spherical = new THREE.Spherical()
    const phiSpan = Math.PI / (count + 1)
    const thetaSpan = (Math.PI * 2) / count
    for (let i = 1; i < count + 1; i++)
      for (let j = 0; j < count; j++)
        temp.push([
          new THREE.Vector3().setFromSpherical(
            spherical.set(radius, phiSpan * i, thetaSpan * j)
          ),
          quotes[i].character
        ])
    return temp
  }, [count, radius, quotes])

  return names.map(([pos, word], index) => (
    <Name key={index} position={pos} children={word} />
  ))
}
