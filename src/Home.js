import { Canvas, useLoader, useFrame, useThree, extend } from '@react-three/fiber';
import { Html, OrbitControls, useGLTF } from '@react-three/drei';
import { useEffect, useState, useRef, forwardRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { AnimationMixer, Box3, Vector3, LineSegments } from 'three';
import TopToolbar from './TopToolbar';
import { AnimatedCharacter } from './Character';
import { Room } from './Room';
import { Tween, Easing } from '@tweenjs/tween.js';  // Import tween for smooth camera transition
import { view } from 'framer-motion/client';


// Extend the LineSegments to work with React Three Fiber
extend({ LineSegments });


const InitialCameraSetup = () => {
  const { camera } = useThree();

  useEffect(() => {
    // Set the initial camera position and orientation
    camera.position.set(30, 90, 50); // Example position
    camera.lookAt(0, 0, 0); // Example target to look at
  }, [camera]);

  return null; // This component doesn't render anything
};

export function Home() {
  const [characterPosition, setCharacterPosition] = useState([0, 27, 0]);
  const [characterRotation, setCharacterRotation] = useState([0, 0, 0]);
  const [isAnimating, setIsAnimating] = useState(false);
  const characterRef = useRef();
  const roomRef = useRef();
  const [showMessage, setShowMessage] = useState(false);
  const [controlsEnabled, setControlsEnabled] = useState(true);  // Controls whether OrbitControls is enabled or not
  const [viewingComputer, setViewingComputer] = useState(false);
  const [moveCamera, setMoveCamera] = useState(false);  // State to trigger camera movement
  const [exitComputer, setExitComputer] = useState(false);




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
        if (!showMessage) {
          setShowMessage(true);
          console.log('Boxes are intersecting. Setting showMessage to true.');
        }
      } else {

        setShowMessage(false);
        console.log('Boxes are not intersecting. Setting showMessage to false.');

      }
    }


    window.addEventListener('keydown', handleEKeyDown);
    window.addEventListener('keydown', handleYKeyDown);
    window.addEventListener('keydown', handleTKeyDown);
    window.addEventListener('keydown', handleLKeyDown);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('keydown', handleEKeyDown);
      window.removeEventListener('keydown', handleLKeyDown);
      window.removeEventListener('keydown', handleYKeyDown);
    };
  }, [characterPosition]); // Ensure refs are included in the dependency array


  const handleEKeyDown = (event) => {
    if ((event.key === 'e' || event.key === 'E') && showMessage) {
      console.log('The "E" key was pressed!');
      setMoveCamera(true);  // Trigger camera movement
      setControlsEnabled(false);  // Disable OrbitControls
      setViewingComputer(true);
    }
  };

  const handleFKeyDown = (event) => {
    if ((event.key === 'f' || event.key === 'F') && viewingComputer) {
      console.log('The "F" key was pressed!');
      setControlsEnabled(true);
      setViewingComputer(false);
      setExitComputer(true);
    }
  };

  const handleLKeyDown = (event) => {
    if ((event.key === 'l' || event.key === 'L') && viewingComputer) {
      console.log('The "L" key was pressed!');
      window.open('https://www.linkedin.com/in/stephen-cahillane-68689b27b/', '_blank'); // Opens LinkedIn in a new tab
    }
  };

  const handleTKeyDown = (event) => {
    if ((event.key === 't' || event.key === 'T') && viewingComputer) {
      console.log('The "L" key was pressed!');
      window.open('https://x.com/Stephen_C_Tech', '_blank'); // Opens LinkedIn in a new tab
    }
  };

  const handleYKeyDown = (event) => {
    if ((event.key === 'y' || event.key === 'Y') && viewingComputer) {
      console.log('The "L" key was pressed!');
      window.open('https://www.youtube.com/@SteveHighLevel-gl8cf', '_blank'); // Opens LinkedIn in a new tab
    }
  };








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


  const CameraController = ({ targetPosition, moveCamera, setMoveCamera, exitComputer }) => {
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



  useEffect(() => {
    if (viewingComputer) {
      console.log('viewingComp:', viewingComputer);
    }

    window.addEventListener('keydown', handleFKeyDown);
    return () => {
      window.removeEventListener('keydown', handleFKeyDown);
    };
  }, [viewingComputer]);



  const roomPosition = roomRef.current ? roomRef.current.position : new Vector3(0, 0, 0);

  return (
    <>
      <TopToolbar />
      <div>
        <Canvas
          style={{
            
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
          <InitialCameraSetup />

          {controlsEnabled && <OrbitControls />}

          {showMessage && (
            <Html position={[10, 55, 0]} center>
              <div style={{ color: 'white', background: 'rgba(0, 0, 0, 0.7)', padding: '10px', borderRadius: '5px', fontStyle: 'italic' }}>
                Press 'e' to use Computer
              </div>
            </Html>
          )}

          {viewingComputer && (
            <Html position={[-130, 55, 10]} center>
              <div style={{ color: 'white', background: 'rgba(0, 0, 0, 0.7)', borderRadius: '5px', fontStyle: 'italic', width: '400px' }}>
                <p>Press 'f' to exit Computer</p>
                <p>Press 'L' for LinkedIn</p>
                <p>Press 'T' for Twitter</p>
                <p>Press 'Y' for YouTube</p>
              </div>
            </Html>
          )}

          {viewingComputer && (
            <Html position={[-130, 14, -35]} center>
              <div style={{ color: 'white', borderRadius: '5px', width: '400px', padding: '10px' }}>
                <img src="1684511227977 (1).jpg" alt="Example Image" style={{borderRadius: '50%', width: '75px', height: '75px', marginBottom: '10px' }} />
                
              </div>
            </Html>
          )}

          <CameraController
            targetPosition={roomPosition}
            moveCamera={moveCamera}
            setMoveCamera={setMoveCamera}
            exitComputer={exitComputer}
          />

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
