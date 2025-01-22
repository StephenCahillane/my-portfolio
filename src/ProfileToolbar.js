import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

export function ProfileToolbar({ color, buttons, setter1, setter2, setter3 }) {

    const handleClick = (type) => {
        if (type === 'Exp') {
            setter1(false);
            setter2(true);
            setter3(false);
        } else if (type === 'About') {
            setter1(true);
            setter2(false);
            setter3(false);
        } else {
            setter1(false);
            setter2(false);
            setter3(true);
        };
    };

    return (
        <div>
            <AppBar position="static" sx={{ backgroundColor: 'transparent' }}>
                <Toolbar>
                    {buttons &&
                        <>
                            <Button onClick={() => handleClick('About')} sx={{ color: 'white', fontSize: '18px', mr: 16, }}>
                                About
                            </Button>
                            <Button onClick={() => handleClick('Exp')} sx={{ mr: 3 }}>
                                <Typography sx={{ color: '#39FF14', fontFamily: 'Dancing Script', textTransform: 'none', fontSize: '24px' }}>Experience</Typography>
                            </Button>
                            <Button onClick={() => handleClick('Education')} sx={{ color: '#39FF14', fontFamily: 'Dancing Script' }}>
                                <Typography sx={{ color: '#39FF14', fontFamily: 'Dancing Script', textTransform: 'none', fontSize: '24px' }}>Education</Typography>

                            </Button>
                        </>
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default ProfileToolbar;
