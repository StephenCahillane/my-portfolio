import { Canvas, extend } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useEffect, useState, useRef } from 'react';
import { Box3, Vector3, LineSegments } from 'three';
import ProfileToolbar from './ProfileToolbar';
import { AnimatedCharacter } from './Character';
import { Room } from './Room';
import { Card, CardContent } from '@mui/material';
import MainToolbar from './Toolbar';
import { CameraController, InitialCameraSetup } from './Components/CameraController';
import { handleEKeyDown, handleFKeyDown, handleLKeyDown, handleTKeyDown, handleYKeyDown, handleKeyUp } from './Functions/KeydownFuncs';
import { profileCardStyle, canvasStyle } from './Styles/HomePageStyles';
import InfoCard from './Components/InfoCard';
import ExpCard from './Components/ExpCard';
import ControlsCard from './Components/ControlsCard';
import LoadingBox from './Components/LoadingBox';
import UseComputerMsg from './Components/UseConputerMsg';
import ComputerDirectionScreen from './Components/ComputerDirectionScreen';
import ComputerScreen from './Components/ComputerScreen';
import EduCard from './Components/EduCard';
// Extend the LineSegments to work with React Three Fiber
extend({ LineSegments });


export function Home() {
  const [characterPosition, setCharacterPosition] = useState([0, 27, 0]);
  const [characterRotation, setCharacterRotation] = useState([0, 0, 0]);
  const [isAnimating, setIsAnimating] = useState(false);
  const characterRef = useRef();
  const roomRef = useRef();
  const [showMessage, setShowMessage] = useState(false);
  const [controlsEnabled, setControlsEnabled] = useState(true);
  const [viewingComputer, setViewingComputer] = useState(false);
  const [moveCamera, setMoveCamera] = useState(false);  // State to trigger camera movement
  const [exitComputer, setExitComputer] = useState(false);
  const [showInfoCard, setShowInfoCard] = useState(true);
  const [showExpCard, setShowExpCard] = useState(false);
  const roomPosition = roomRef.current ? roomRef.current.position : new Vector3(0, 0, 0);
  const [loading, setLoading] = useState(true);
  const [showEduCard, setShowEduCard] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);


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
        }
      } else {
        setShowMessage(false);
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
  }, [characterPosition]);

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
      window.addEventListener('keydown', handleFKeyDown(
        setControlsEnabled,
        setViewingComputer,
        setExitComputer,
        viewingComputer
      ));
      return () => {
        window.removeEventListener('keydown', handleFKeyDown);
      };
    }
  }, [viewingComputer]);


  return (
    <>
      <MainToolbar color={'#1c2027'} />

      <div className='home-page'>
        <Card className='profileCard' sx={profileCardStyle}>
          <CardContent>
            <ProfileToolbar
              color={'#1c2027'}
              buttons={{ label: 'About Me', label2: 'Experience', label3: 'CV' }}
              setter1={setShowInfoCard}
              setter2={setShowExpCard}
              setter3={setShowEduCard}
            />

            {showInfoCard && <InfoCard />}
            {showExpCard && <ExpCard />}
            {showEduCard && <EduCard />}
          </CardContent>
        </Card >

        <div className='rightSide'>
          <ControlsCard />
          {loading && <LoadingBox />}
          <Canvas style={canvasStyle} className="canvas">
            <ambientLight intensity={10} color={'pink'} />
            <pointLight position={[10, 10, 10]} />
            <InitialCameraSetup />
            <CameraController
              targetPosition={roomPosition}
              moveCamera={moveCamera}
              setMoveCamera={setMoveCamera}
              exitComputer={exitComputer}
              setExitComputer={setExitComputer}
            />
            <AnimatedCharacter
              ref={characterRef}
              position={characterPosition}
              rotation={characterRotation}
              isAnimating={isAnimating}
            />
            <Room ref={roomRef} />
            {controlsEnabled && <OrbitControls />}

            {showMessage &&
              <UseComputerMsg />
            }

            {viewingComputer &&
              <>
                <ComputerDirectionScreen />
                <ComputerScreen />
              </>
            }
          </Canvas>
        </div>

      </div>
    </>
  );
}
