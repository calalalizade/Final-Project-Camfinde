import React, { useRef } from 'react'
// @import dependencies
import { useFrame, useThree, extend } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

extend({ OrbitControls })

export default () => {
  const {
    camera,
    gl: { domElement }
  } = useThree()
  const controls = useRef()
  useFrame(() => controls.current.update())
  return <orbitControls enablePan={false} enableZoom={false} ref={controls} args={[camera, domElement]} />
}
