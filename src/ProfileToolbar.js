import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

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
            <AppBar position="static" sx={{ backgroundColor: color }}>
                <Toolbar>
                    {buttons &&
                        <>
                            <Button onClick={() => handleClick('About')} sx={{ color: 'white', fontSize: '18px', mr: 16,  }}>
                                {buttons.label}
                            </Button>
                            <Button onClick={() => handleClick('Exp')} sx={{color: '#39FF14', fontFamily: 'Dancing Script', mr: 4}}>
                                Experience
                            </Button>
                            <Button onClick={() => handleClick('Education')} sx={{color: '#39FF14', fontFamily: 'Dancing Script'}}>
                                Education
                            </Button>
                        </>
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default ProfileToolbar;
