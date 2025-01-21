import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';



export const InfoCard = () => {
    return (
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
    );
}

export default InfoCard;
