import { useEffect, useState, useRef, forwardRef } from 'react';
import { Canvas, useLoader, useFrame, useThree, extend } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { AnimationMixer, Box3, Vector3, LineSegments, BufferGeometry, LineBasicMaterial, Float32BufferAttribute } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';



export const AnimatedCharacter = forwardRef(({ position, rotation, isAnimating }, ref) => {
    const gltf = useLoader(GLTFLoader, 'character.glb');
    const mixer = useRef(null);
    const action = useRef(null);
  
    useEffect(() => {
      if (gltf.animations.length) {
        mixer.current = new AnimationMixer(gltf.scene);
        action.current = mixer.current.clipAction(gltf.animations[0]);
        if (isAnimating) {
          action.current.play();
        }
      }
      return () => mixer.current?.stopAllAction();
    }, [gltf, isAnimating]);
  
    useEffect(() => {
      if (action.current) {
        if (isAnimating) {
          action.current.play();
        } else {
          action.current.stop();
        }
      }
    }, [isAnimating]);
  
    useFrame((state, delta) => {
      mixer.current?.update(delta);
    });
  
    return (
      <primitive
        ref={ref}
        object={gltf.scene}
        position={position}
        scale={[8, 8, 8]}
        rotation={rotation}
      />
    );
  });