import { Canvas, useLoader, useFrame, useThree, extend } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useEffect, useState, useRef, forwardRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { AnimationMixer, Box3, Vector3, LineSegments, BufferGeometry, LineBasicMaterial, Float32BufferAttribute } from 'three';
import TopToolbar from './TopToolbar';
import { AnimatedCharacter } from './Character';
import { Room } from './Room';


// Extend the LineSegments to work with React Three Fiber
extend({ LineSegments });





export function Home() {
  const [characterPosition, setCharacterPosition] = useState([0, 27, 0]);
  const [characterRotation, setCharacterRotation] = useState([0, 0, 0]);
  const [isAnimating, setIsAnimating] = useState(false);
  const characterRef = useRef();
  const roomRef = useRef();
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (showMessage){
      
    };
  },[showMessage]);



  useEffect(() => {
    if (roomRef.current && characterRef.current) {
      // Manually define the room's bounding box center and size
      const roomCenter = new Vector3(-25, 24.5, -10); // Adjust to fit your scene
      const roomSize = new Vector3(30, 20, 30); // Size of the room bounding box
      const roomBox = new Box3().setFromCenterAndSize(roomCenter, roomSize);

      // Create a bounding box for the character based on its current position
      const characterVec = new Vector3(...characterPosition);
      const characterBox = new Box3().setFromCenterAndSize(characterVec, new Vector3(10, 10, 10)); // Size of the character box (adjust as necessary)

      // Check for intersection
      if (roomBox.intersectsBox(characterBox)) {
        setShowMessage(true);
      } else {
        setShowMessage(false);
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [characterPosition, roomRef.current, characterRef.current]); // Ensure refs are included in the dependency array


  const handleKeyDown = (event) => {
    const moveSpeed = 1;
    let newPosition = [...characterPosition];
    let newRotation = [...characterRotation];

    switch (event.key) {
      case 'ArrowUp':
        newPosition[0] -= moveSpeed; // Move forward
        setCharacterRotation([0, -Math.PI / 2, 0]);
        setIsAnimating(true);
        break;
      case 'ArrowDown':
        newPosition[0] += moveSpeed; // Move backward
        setCharacterRotation([0, Math.PI / 2, 0]);
        setIsAnimating(true);
        break;
      case 'ArrowLeft':
        newPosition[2] += moveSpeed; // Move left
        setCharacterRotation([0, 0, 0]);
        setIsAnimating(true);
        break;
      case 'ArrowRight':
        newPosition[2] -= moveSpeed; // Move right
        setCharacterRotation([0, Math.PI, 0]);
        setIsAnimating(true);
        break;
      default:
        break;
    }

    setCharacterPosition(newPosition);
  };

  const handleKeyUp = (event) => {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
      setIsAnimating(false);
    }
  };

  return (
    <>
      <TopToolbar />
      <div>
        <Canvas
          style={{
            border: '5px solid black',
            width: '600px',
            height: '400px',
            borderRadius: '10px',
            display: 'block',
            margin: '0 auto',
            marginTop: '5em',
          }}
          className="canvas"
        >
          <ambientLight intensity={10} color={'pink'} />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls />
          {/* <CameraSetup /> */}
          <Room ref={roomRef} />
          
          <AnimatedCharacter
            ref={characterRef}
            position={characterPosition}
            rotation={characterRotation}
            isAnimating={isAnimating}
          />
          
        </Canvas>
      </div>
    </>
  );
}
