import { useMemo } from 'react'
import * as THREE from 'three'
import Name from '../Name'

export default function Cloud({ count, radius, quotes, ...props }) {
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
          quotes[idx].author,
          quotes[idx].text
        ])
        idx++
      }
    }

    return temp
  }, [count, radius, quotes])

  return names.map(([pos, name, quote], i) => (
    <Name key={i} position={pos} children={name} quote={quote} {...props} />
  ))
}
