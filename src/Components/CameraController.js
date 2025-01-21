import React, { useRef, useEffect } from 'react';
import { Canvas, useLoader, useFrame, useThree, extend } from '@react-three/fiber';
import { AnimationMixer, Box3, Vector3, LineSegments } from 'three';




export const CameraController = ({ targetPosition, moveCamera, setMoveCamera, exitComputer, setExitComputer }) => {
    const { camera } = useThree();
    const cameraTarget = useRef(new Vector3());

    useFrame(() => {
      if (moveCamera && !exitComputer) {
        // Define the target position for the camera
        cameraTarget.current.set(-26.5, 24.5 + 20, -12.5);//-12.5

        // Move the camera smoothly towards the target position
        camera.position.lerp(cameraTarget.current, 0.05); // Adjust the speed by changing the 0.05 value

        const lookAtTarget = new Vector3(-130, 15.5, 40); // Adjust the target to fit your scene
        camera.lookAt(lookAtTarget);
        // Check if the camera is close enough to the target
        if (camera.position.distanceTo(cameraTarget.current) < 0.1) {
          camera.position.copy(cameraTarget.current);  // Snap to target when close enough
          setMoveCamera(false);  // Stop moving camera
        }
      }

      if (exitComputer) {
        console.log('exiting computer, ready to move cam');
        camera.position.set(30, 90, 50);


        setExitComputer(false);
      }
    });

    return null;
  };





export const InitialCameraSetup = () => {
    const { camera } = useThree();
  
    useEffect(() => {
      // Set the initial camera position and orientation
      camera.position.set(30, 90, 50); // Example position
      camera.lookAt(0, 0, 0); // Example target to look at
    }, [camera]);
  
    return null; // This component doesn't render anything
  };


