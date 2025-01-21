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
import { Card, CardContent, Typography, Button, CircularProgress, Box } from '@mui/material';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import MainToolbar from './Toolbar';
import { useNavigate } from 'react-router-dom';
import { CameraController, InitialCameraSetup } from './Components/CameraController';
import { handleEKeyDown, handleFKeyDown, handleLKeyDown, handleTKeyDown, handleYKeyDown, handleKeyUp } from './Functions/KeydownFuncs';
import { profileCardStyle, canvasStyle } from './Styles/HomePageStyles';
import InfoCard from './Components/InfoCard';
import ExpCard from './Components/ExpCard';
import ControlsCard from './Components/ControlsCard';
import LoadingBox from './Components/LoadingBox';
import UseComputerMsg from './Components/UseConputerMsg';
import ComputerDirectionScreen from './Components/ComputerDirectionScreen';

// Extend the LineSegments to work with React Three Fiber
extend({ LineSegments });


export function Home() {
  //3d model states
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
  //end of model states

  //left hand card states
  const [showInfoCard, setShowInfoCard] = useState(true);
  const [showExpCard, setShowExpCard] = useState(false);
  const [showCVCard, setShowCVCard] = useState(false);
  //end of left hand states

  const roomPosition = roomRef.current ? roomRef.current.position : new Vector3(0, 0, 0);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);


  const navigate = useNavigate();

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


    window.addEventListener('keydown', handleEKeyDown(showMessage, setMoveCamera, setControlsEnabled, setViewingComputer));
    window.addEventListener('keydown', handleYKeyDown(viewingComputer));
    window.addEventListener('keydown', handleTKeyDown(viewingComputer));
    window.addEventListener('keydown', handleLKeyDown(viewingComputer));
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp(setIsAnimating));

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('keydown', handleEKeyDown);
      window.removeEventListener('keydown', handleLKeyDown);
      window.removeEventListener('keydown', handleYKeyDown);
    };
  }, [characterPosition]); // Ensure refs are included in the dependency array





  const handleKeyDown = (event) => {
    const moveSpeed = 1;
    let newPosition = [...characterPosition];
    let newRotation = [...characterRotation];
    switch (event.key) {
      case 'w':
        newPosition[0] -= moveSpeed; // Move forward
        setCharacterRotation([0, -Math.PI / 2, 0]);
        setIsAnimating(true);
        break;
      case 's':
        newPosition[0] += moveSpeed; // Move backward
        setCharacterRotation([0, Math.PI / 2, 0]);
        setIsAnimating(true);
        break;
      case 'a':
        newPosition[2] += moveSpeed; // Move left
        setCharacterRotation([0, 0, 0]);
        setIsAnimating(true);
        break;
      case 'd':
        newPosition[2] -= moveSpeed; // Move right
        setCharacterRotation([0, Math.PI, 0]);
        setIsAnimating(true);
        break;
      default:
        break;
    }

    setCharacterPosition(newPosition);
  }



  useEffect(() => {
    if (viewingComputer) {
      console.log('viewingComp:', viewingComputer);
    }

    window.addEventListener('keydown', handleFKeyDown(setControlsEnabled, setViewingComputer, setExitComputer, viewingComputer));
    return () => {
      window.removeEventListener('keydown', handleFKeyDown);
    };
  }, [viewingComputer]);





  return (
    <>
      <MainToolbar color={'#1c2027'} />

      <div className='homePg'>
        <Card className='profileCard' sx={profileCardStyle}>
          <CardContent>
            <TopToolbar
              color={'#3a3f48'}
              buttons={{ label: 'About Me', label2: 'Experience', label3: 'CV' }}
              setter1={setShowInfoCard}
              setter2={setShowExpCard}
              setter3={setShowCVCard}
            />

            {showInfoCard &&
              <InfoCard />
            }

            {showExpCard &&
              <ExpCard />
            }
          </CardContent>
        </Card >

        <div className='rightSide'>
          <ControlsCard />
          {loading && 
            <LoadingBox />
          }



          <Canvas style={canvasStyle} className="canvas">

            <ambientLight intensity={10} color={'pink'} />
            <pointLight position={[10, 10, 10]} />
            <InitialCameraSetup />

            {controlsEnabled && <OrbitControls />}

            {showMessage && 
              <UseComputerMsg />
            }

            {viewingComputer && 
              <ComputerDirectionScreen />
            }

            {viewingComputer && (
              <Html position={[-130, 14, -35]} center>
                <div style={{ color: 'white', borderRadius: '5px', width: '400px', padding: '10px' }}>
                  <img src="1684511227977 (1).jpg" alt="Example Image" style={{ borderRadius: '50%', width: '75px', height: '75px', marginBottom: '10px' }} />

                </div>
              </Html>
            )}

            <CameraController
              targetPosition={roomPosition}
              moveCamera={moveCamera}
              setMoveCamera={setMoveCamera}
              exitComputer={exitComputer}
              setExitComputer={setExitComputer}
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


      </div >
    </>
  );
}
