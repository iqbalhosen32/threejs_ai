import React, { useRef } from 'react'
import { easing } from 'maath';
import { useFrame } from '@react-three/fiber';
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';


const Backdrop = () => {
  const shadows = useRef();
  return (
    <AccumulativeShadows
      position={[0, 0, -0.14]}
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.85}
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
    >
      <RandomizedLight 
        amount={4}
        radius={9}
        intensity={0.60}
        ambient={0.30}
        position={[5, 7, -11]}
      />
      <RandomizedLight 
        amount={4}
        radius={5}
        intensity={0.30}
        ambient={0.60}
        position={[-5, 5, -9]}
      />
      
    </AccumulativeShadows>
  )
}

export default Backdrop