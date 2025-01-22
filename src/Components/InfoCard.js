import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { infoCardStyle, skillCardStyle, skillCardText } from '../Styles/HomePageStyles';
import HeaderAboutMe from './HeaderAboutMe';

export const InfoCard = () => {
    return (
        <Card sx={ infoCardStyle }>
            <CardContent>
              <HeaderAboutMe />
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
                <Card sx={skillCardStyle}>
                  <CardContent>
                    <img src='icons8-react-80.png' alt=''></img>
                    <Typography sx={skillCardText}>ReactJS</Typography>
                  </CardContent>
                </Card>
                <Card sx={skillCardStyle}>
                  <CardContent>
                    <img src='icons8-java-80.png' alt=''></img>
                    <Typography sx={skillCardText}>Java</Typography>
                  </CardContent>
                </Card>
                <Card sx={skillCardStyle}>
                  <CardContent>
                    <img src='icons8-spring-boot-80.png' alt=''></img>
                    <Typography sx={skillCardText}>Spring</Typography>
                  </CardContent>
                </Card>
                <Card sx={skillCardStyle}>
                  <CardContent>
                    <img src='icons8-nodejs-80.png' alt=''></img>
                    <Typography sx={skillCardText}>NodeJS</Typography>
                  </CardContent>
                </Card>
                <Card sx={skillCardStyle}>
                  <CardContent>
                    <img src='icons8-express-js-80.png' alt=''></img>
                    <Typography sx={skillCardText}>ExpressJS</Typography>
                  </CardContent>
                </Card>
                <Card sx={skillCardStyle}>
                  <CardContent>
                    <img src='icons8-python-80.png' alt=''></img>
                    <Typography sx={skillCardText}>Python</Typography>
                  </CardContent>
                </Card>

              </div>
            </CardContent>
          </Card>
    );
}

export default InfoCard;
