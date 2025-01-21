import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';



export function ProfileToolbar({ color, buttons, setter1, setter2 }) {

    const handleClick = () => {
        //show info card
        setter1(false);
        //show exp card
        setter2(true);
        
    };

    const handleAboutClick = () => {
        setter1(true);
        setter2(false);
        
    };

    return (
        <div>
            <AppBar position="static" sx={{ backgroundColor: color }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >

                    </IconButton>

                    {buttons &&
                    <Button variant="h6" component="div" onClick={() => handleAboutClick()} sx={{ flexGrow: 1, color: 'white', fontSize: '20px', mr: 11 }}>
                        {buttons.label}
                    </Button>
                    }

                    {buttons &&
                        <>
                            <Button color="inherit" onClick={() => handleClick()}>{buttons.label2}</Button>
                        
                        </>
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default ProfileToolbar;
