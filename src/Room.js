// Room component with ref handling
import { useEffect, useState, useRef, forwardRef } from 'react';
import { OrbitControls, useGLTF } from '@react-three/drei';



export const Room = forwardRef((props, ref) => {
    const { scene } = useGLTF('/room2.glb');
    return <primitive ref={ref} object={scene} scale={[30, 20, 30]} position={[0.2, 24.5, 0.2]} />;
  });