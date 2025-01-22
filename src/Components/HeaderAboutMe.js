import React from 'react';
import { Button, Typography } from '@mui/material';
import { buttonContact, infodiv } from '../Styles/HomePageStyles';

const HeaderAboutMe = () => {
    return (
        <div className='headerAboutMe'>
            <div className='btn&info' style={{marginLeft: '25px'}}>
                <Typography sx={{ color: 'white', maxWidth: '240px', mr: 0 }}>
                    I'm <span style={{ color: '#39FF14', fontSize: '22px' }}>Stephen</span>, a Full Stack Java Developer. This portfolio has been built in React, Material UI, and React3Fiber.
                </Typography>
                <Button
                    variant="outlined"
                    sx={buttonContact}
                >
                    Contact
                </Button>
            </div>
            <div style={{ position: 'relative', display: 'inline-block' }}>
                <img
                    src='cutout-pic2.png'
                    style={{ width: '110%', height: '175px', display: 'block', objectFit: 'cover' }}
                    alt='Invalid Src'
                />
                <div
                    style={infodiv}
                />
            </div>
        </div>
    );
}

export default HeaderAboutMe;
