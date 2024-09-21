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
import { Card, CardContent, Typography, Button } from '@mui/material';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MouseIcon from '@mui/icons-material/Mouse';
import MainToolbar from './Toolbar';
import Websites from './Websites';
import { useNavigate } from 'react-router-dom';




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
  };

  const handleKeyUp = (event) => {
    if (['w', 's', 'a', 'd'].includes(event.key)) {
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
      <MainToolbar color={'#1c2027'} />

      <div className='homePg'>
        <Card className='profileCard' sx={{ backgroundColor: '#3a3f48', mb: 3, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' }}>
          <CardContent>
            <TopToolbar color={'#3a3f48'} buttons={{ label: 'About Me', label2: 'Experience', label3: 'CV' }} setter1={setShowInfoCard} setter2={setShowExpCard} setter3={setShowCVCard} />

            {showInfoCard &&
              <Card sx={{
                width: '100%', display: 'block', margin: '0 auto', mt: 1, backgroundColor: '#3a3f48', boxShadow: 'none', // Removes the shadow
                border: 'none',
              }}>
                <CardContent>
                  <div className='headerAboutMe'>
                    <div className='btn&info'>
                      <Typography sx={{ color: 'white', maxWidth: '240px', mr: 0 }}>
                        I'm <span style={{ color: '#39FF14', fontSize: '22px' }}>Stephen</span>, a Full Stack Java Developer. This portfolio has been built in React, Material UI, and React3Fiber.
                      </Typography>
                      <Button
                        variant="outlined"
                        sx={{
                          ml: 6,
                          mt: 2,
                          color: '#39FF14',             // Change text color
                          borderColor: '#39FF14',       // Change border color
                          '&:hover': {
                            borderColor: '#39FF14',     // Ensure border color changes on hover as well
                            backgroundColor: 'rgba(57, 255, 20, 0.1)', // Optional: adds a light background color on hover
                          },
                        }}
                      >
                        Contact
                      </Button>
                    </div>
                    <div style={{ position: 'relative', display: 'inline-block' }}>
                      <img
                        src='cutout-pic2.png'
                        style={{ width: '100%', height: '175px', display: 'block', objectFit: 'cover' }}
                        alt='Invalid Src'
                      />
                      <div
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          backgroundColor: '#3a3f48',
                          opacity: 0.3, // Adjust opacity to control the intensity of the overlay
                          pointerEvents: 'none', // Ensure the overlay does not block interactions with the image
                        }}
                      />
                    </div>
                  </div>
                  <Typography sx={{ color: 'white', fontSize: '14px', mt: 3, }}>
                    I am a passionate Full Stack Developer with <span style={{ color: '#39FF14' }}>two years of experience </span>specializing in Java, Spring, React, and web design languages.
                    My journey in tech is complemented by a <span style={{ color: '#39FF14' }}>solid foundation in networking and cybersecurity, </span>
                    ensuring a well-rounded approach to building secure and efficient applications.

                    Before transitioning into the tech industry,
                    I spent <span style={{ color: '#39FF14' }}>six years in the U.S. Air Force </span> as an Aircraft Mechanic. During this time,
                    I developed a meticulous attention to detail and problem-solving skills.


                    Now based in Ireland, I am eager to contribute to the local tech community by leveraging my diverse skill
                    set to drive technological progress. My goal is to build <span style={{ color: '#39FF14' }}>sustainable and scalable code bases </span>
                    that support innovation and efficiency in the Irish tech landscape.
                  </Typography>

                  <div className='skillCards'>
                    <Card sx={{ backgroundColor: '#1c2027', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' }}>
                      <CardContent>
                        <img src='icons8-react-80.png'></img>
                        <Typography sx={{ color: 'white', textAlign: 'center' }}>ReactJS</Typography>
                      </CardContent>
                    </Card>
                    <Card sx={{ backgroundColor: '#1c2027', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' }}>
                      <CardContent>
                        <img src='icons8-java-80.png'></img>
                        <Typography sx={{ color: 'white', textAlign: 'center' }}>Java</Typography>
                      </CardContent>
                    </Card>
                    <Card sx={{ backgroundColor: '#1c2027', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' }}>
                      <CardContent>
                        <img src='icons8-spring-boot-80.png'></img>
                        <Typography sx={{ color: 'white', textAlign: 'center' }}>Spring</Typography>
                      </CardContent>
                    </Card>
                    <Card sx={{ backgroundColor: '#1c2027', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' }}>
                      <CardContent>
                        <img src='icons8-nodejs-80.png'></img>
                        <Typography sx={{ color: 'white', textAlign: 'center' }}>NodeJS</Typography>
                      </CardContent>
                    </Card>
                    <Card sx={{ backgroundColor: '#1c2027', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' }}>
                      <CardContent>
                        <img src='icons8-express-js-80.png'></img>
                        <Typography sx={{ color: 'white', textAlign: 'center' }}>ExpressJS</Typography>
                      </CardContent>
                    </Card>
                    <Card sx={{ backgroundColor: '#1c2027', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' }}>
                      <CardContent>
                        <img src='icons8-python-80.png'></img>
                        <Typography sx={{ color: 'white', textAlign: 'center' }}>Python</Typography>
                      </CardContent>
                    </Card>



                  </div>
                </CardContent>
              </Card>
            }

            {showExpCard &&
              <Card sx={{
                width: '100%', display: 'block', margin: '0 auto', mt: 1, backgroundColor: '#3a3f48', boxShadow: 'none', // Removes the shadow
                border: 'none',
              }}>
                <CardContent>
                  <div className='headerAboutMe'>
                    <div className='btn&info'>
                      <Typography sx={{ color: 'white', maxWidth: '240px', mr: 0 }}>
                        I'm <span style={{ color: '#39FF14', fontSize: '22px' }}>Stephen</span>, a Full Stack Java Developer. This portfolio has been built in React, Material UI, and React3Fiber.
                      </Typography>
                      <Button
                        variant="outlined"
                        sx={{
                          ml: 6,
                          mt: 2,
                          color: '#39FF14',             // Change text color
                          borderColor: '#39FF14',       // Change border color
                          '&:hover': {
                            borderColor: '#39FF14',     // Ensure border color changes on hover as well
                            backgroundColor: 'rgba(57, 255, 20, 0.1)', // Optional: adds a light background color on hover
                          },
                        }}
                      >
                        Contact
                      </Button>
                    </div>
                    <div style={{ position: 'relative', display: 'inline-block' }}>
                      <img
                        src='cutout-pic2.png'
                        style={{ width: '100%', height: '175px', display: 'block', objectFit: 'cover' }}
                        alt='Invalid Src'
                      />
                      <div
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          backgroundColor: '#3a3f48',
                          opacity: 0.3, // Adjust opacity to control the intensity of the overlay
                          pointerEvents: 'none', // Ensure the overlay does not block interactions with the image
                        }}
                      />
                    </div>
                  </div>

                  <Typography sx={{ color: 'white', fontSize: '14px', mt: 3, }}>
                    <div style={{ textAlign: 'center', color: '#39FF14' }}>
                      <span>Embedded Software Developer, One Source ICT, June 2023 - Current</span>
                    </div>

                    <div className='paragraph'>
                      <span style={{ fontSize: '12px' }}>Developed custom API integrations, linking GoHighLevel with other software solutions
                        to streamline client operations and improve data flow.</span>
                    </div>


                    <div className='paragraph'>
                      <span style={{ fontSize: '12px' }}>
                        Implemented webhooks to automate customer notifications, connecting the client's e-commerce platform with
                        their email marketing service, resulting in a 40% reduction in manual workload and improving order
                        confirmation turnaround time by 30%.
                      </span>
                    </div>

                    <div className='paragraph'>
                      <span style={{ fontSize: '12px' }}>
                        Built and customized client websites, including setting up backends with robust database connections and
                        integrations, resulting in a 25% increase in client satisfaction and enabling seamless data management and
                        retrieval.
                      </span>
                    </div>
                  </Typography>

                  <Typography sx={{ textAlign: 'center', color: '#39FF14', fontSize: '14px' }}>My Website Portfolio</Typography>


                  <div className='webCards'>
                    <Card sx={{ backgroundColor: '#1c2027', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' }}>
                      <Card sx={{ backgroundColor: '#1c2027', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' }}>
                        <CardContent>
                          <Typography sx={{ color: 'white', textAlign: 'center', fontSize: '12px', mb: 2 }}>Strength2Heal</Typography>
                          <img
                            src='https://assets.cdn.filesafe.space/pUoGUkj918EJf1mXFaIi/media/665cb33565b36f23aea6f299.png'
                            alt='s2healLogo'
                            style={{ height: '75px', width: '75px', display: 'block', margin: '0 auto' }}
                          >
                          </img>
                        </CardContent>
                      </Card>

                    </Card>


                    <Card sx={{ backgroundColor: '#1c2027', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' }}>
                      <CardContent>
                        <Typography sx={{ color: 'white', textAlign: 'center', fontSize: '12px', mb: 2 }}>Sugradh Creche</Typography>
                        <img
                          src='https://assets.cdn.filesafe.space/Qf6XLkEBnE5hoUBRyRIl/media/6669d33839eeea7e3f543934.jpeg'
                          alt='s2healLogo'
                          style={{ height: '75px', width: '120px', display: 'block', margin: '0 auto' }}
                        >
                        </img>
                      </CardContent>
                    </Card>


                    <Card sx={{ backgroundColor: '#1c2027', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' }}>
                      <CardContent>
                        <Typography sx={{ color: 'white', textAlign: 'center', fontSize: '12px', mb: 2 }}>One Source Business Development</Typography>
                        <img
                          src='https://assets.cdn.filesafe.space/mxxrduzd8Qcju97pwUEN/media/6647f59e81d1c14ba9ac631d.jpeg'
                          alt='s2healLogo'
                          style={{ height: '75px', width: '120px', display: 'block', margin: '0 auto' }}
                        >
                        </img>
                      </CardContent>
                    </Card>

                    <Card sx={{ backgroundColor: '#1c2027', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' }}>
                      <CardContent>
                        <Typography sx={{ color: 'white', textAlign: 'center', fontSize: '12px', mb: 2 }}>Profit Phantoms</Typography>
                        <img
                          src='https://assets.cdn.filesafe.space/kPSwaea4RBb8MhlP4TSu/media/66745ee962c064022eb279ad.png'
                          alt='s2healLogo'
                          style={{ height: '90px', width: '100px', display: 'block', margin: '0 auto' }}
                        >
                        </img>
                      </CardContent>
                    </Card>
                  </div>

                  <Button
                    variant='outlined'
                    sx={{
                      display: 'block',
                      margin: '0 auto',
                      mt: 2,
                      color: '#39FF14',        // Text color
                      borderColor: '#39FF14',  // Border color
                      '&:hover': {
                        borderColor: '#39FF14',  // Keep the border color on hover
                        backgroundColor: 'rgba(57, 255, 20, 0.1)' // Add a subtle background on hover (optional)
                      }
                    }}
                    onClick={() => navigate('/websites')}
                  >
                    View Portfolio
                  </Button>

                </CardContent>
              </Card>
            }

            {showCVCard &&
              <Card sx={{
                width: '100%', display: 'block', margin: '0 auto', mt: 1, backgroundColor: '#3a3f48', boxShadow: 'none', // Removes the shadow
                border: 'none',
              }}>
                <CardContent>
                  <div className='headerAboutMe'>
                    <div className='btn&info'>
                      <Typography sx={{ color: 'white', maxWidth: '240px', mr: 0 }}>
                        I'm <span style={{ color: '#39FF14', fontSize: '22px' }}>Stephen</span>, a Full Stack Java Developer. This portfolio has been built in React, Material UI, and React3Fiber.
                      </Typography>
                      <Button
                        variant="outlined"
                        sx={{
                          ml: 6,
                          mt: 2,
                          color: '#39FF14',             // Change text color
                          borderColor: '#39FF14',       // Change border color
                          '&:hover': {
                            borderColor: '#39FF14',     // Ensure border color changes on hover as well
                            backgroundColor: 'rgba(57, 255, 20, 0.1)', // Optional: adds a light background color on hover
                          },
                        }}
                      >
                        Contact
                      </Button>
                    </div>
                    <div style={{ position: 'relative', display: 'inline-block' }}>
                      <img
                        src='cutout-pic2.png'
                        style={{ width: '100%', height: '175px', display: 'block', objectFit: 'cover' }}
                        alt='Invalid Src'
                      />
                      <div
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          backgroundColor: '#3a3f48',
                          opacity: 0.3, // Adjust opacity to control the intensity of the overlay
                          pointerEvents: 'none', // Ensure the overlay does not block interactions with the image
                        }}
                      />
                    </div>
                  </div>


                  <div className='divider' style={{ display: 'block', margin: '0 auto', marginTop: '3em' }}></div>

                  <div className='cv'>
                    <img src='Cv1.PNG' style={{ width: '300px' }}></img>
                    <img src='cv2.PNG' style={{ width: '300px', marginTop: 8 }}></img>

                    <Button
                      variant="outlined"
                      sx={{
                       
                        mt: 2,
                        color: '#39FF14',             // Change text color
                        borderColor: '#39FF14',       // Change border color
                        '&:hover': {
                          borderColor: '#39FF14',     // Ensure border color changes on hover as well
                          backgroundColor: 'rgba(57, 255, 20, 0.1)', // Optional: adds a light background color on hover
                        },
                      }}
                    >
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            }

          </CardContent>
        </Card >

        <div className='rightSide'>

          <Card sx={{ mb: 5, width: '100%', height: '450px', backgroundColor: '#3a3f48', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' }}>
            <CardContent>
              <img src='logo-cropped.png' style={{ display: 'block', margin: '0 auto', height: '100px' }}></img>
              <List sx={{ color: 'white', textAlign: 'left', mx: 'auto', maxWidth: '600px', mt: 2 }}>

                <ListItem sx={{ backgroundColor: '#1c2027', border: '1px solid white', mt: 1 }}>
                  <ListItemIcon>
                    <MouseIcon sx={{ color: '#39FF14' }} />
                  </ListItemIcon>
                  <ListItemText primary="Zoom In & Out" />
                </ListItem>


                <ListItem sx={{ backgroundColor: '#1c2027', border: '1px solid white', mt: 1 }}>
                  <ListItemIcon sx={{color: '#39FF14', ml: 0.75}}>
                    W
                  </ListItemIcon>
                  <ListItemText primary="Move Forward" />
                </ListItem>

                <ListItem sx={{ backgroundColor: '#1c2027', border: '1px solid white', mt: 1 }}>
                <ListItemIcon sx={{color: '#39FF14', ml: 0.75}}>
                    S
                  </ListItemIcon>
                  <ListItemText primary="Move Backward" />
                </ListItem>

                <ListItem sx={{ backgroundColor: '#1c2027', border: '1px solid white', mt: 1 }}>
                <ListItemIcon sx={{color: '#39FF14', ml: 0.75}}>
                    A
                  </ListItemIcon>
                  <ListItemText primary="Move Up" />
                </ListItem>

                <ListItem sx={{ backgroundColor: '#1c2027', border: '1px solid white', mt: 1 }}>
                <ListItemIcon sx={{color: '#39FF14', ml: 0.75}}>
                    D
                  </ListItemIcon>
                  <ListItemText primary="Move Down" />
                </ListItem>

              </List>
            </CardContent>
          </Card>

          <Canvas
            style={{
              width: '600px',
              height: '400px',
              borderRadius: '10px',
            }}
            className="canvas"
          >
            <ambientLight intensity={10} color={'pink'} />
            <pointLight position={[10, 10, 10]} />
            <InitialCameraSetup />

            {controlsEnabled && <OrbitControls />}

            {showMessage && (
              <Html position={[10, 55, 0]} center>
                <div style={{ color: 'white', background: 'rgba(0, 0, 0, 0.7)', padding: '10px', borderRadius: '5px', border: '1px solid white' }}>
                 <Typography sx={{fontFamily: 'Bebas Neue'}}>'E' to use Computer</Typography> 
                </div>
              </Html>
            )}

            {viewingComputer && (
              <Html position={[-130, 55, 10]} center>
                <div style={{ color: 'white', borderRadius: '5px', width: '400px' }}>
                  <Typography sx={{fontFamily: 'Bebas Neue', border: '1px solid white', mb: 1, backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>Press 'f' to exit Computer</Typography>
                  <Typography sx={{fontFamily: 'Bebas Neue', border: '1px solid white', mb: 1, backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>Press 'L' for LinkedIn</Typography>
                  <Typography sx={{fontFamily: 'Bebas Neue', border: '1px solid white', mb: 1, backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>Press 'T' for Twitter</Typography>
                  <Typography sx={{fontFamily: 'Bebas Neue', border: '1px solid white', mb: 1, backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>Press 'Y' for YouTube</Typography>
                </div>
              </Html>
            )}

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
