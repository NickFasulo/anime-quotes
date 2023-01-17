import { useState, useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import * as THREE from 'three'

export default function Name({ children, ...props }) {
  const color = new THREE.Color()
  const fontProps = {
    fontSize: 2.5,
    letterSpacing: -0.04,
    lineHeight: 1,
    'material-toneMapped': false
  }

  const [hovered, setHovered] = useState(false)
  const over = e => (e.stopPropagation(), setHovered(true))
  const out = () => setHovered(false)
  const ref = useRef()

  useEffect(() => {
    if (hovered) document.body.style.cursor = 'pointer'
    return () => (document.body.style.cursor = 'auto')
  }, [hovered])

  useFrame(({ camera }) => {
    ref.current.quaternion.copy(camera.quaternion)
    ref.current.material.color.lerp(
      color.set(hovered ? '#fa2720' : 'white'),
      0.1
    )
  })

  return (
    <Text
      ref={ref}
      onPointerOver={over}
      onPointerOut={out}
      // onClick={() => console.log('clicked')}
      {...props}
      {...fontProps}
      children={children}
    />
  )
}
