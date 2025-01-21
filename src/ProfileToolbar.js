import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

export function ProfileToolbar({ color, buttons, setter1, setter2 }) {

    const handleClick = (type) => {
        if (type === 'Exp') {
            setter1(false);
            setter2(true);
        } else {
            setter1(true);
            setter2(false);
        }
    };

    return (
        <div>
            <AppBar position="static" sx={{ backgroundColor: color }}>
                <Toolbar>
                    {buttons &&
                        <>
                            <Button onClick={() => handleClick('About')} sx={{ color: 'white', fontSize: '20px', mr: 23 }}>
                                {buttons.label}
                            </Button>
                            <Button onClick={() => handleClick('Exp')} sx={{color: '#39FF14'}}>
                                {buttons.label2}
                            </Button>
                        </>
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default ProfileToolbar;
