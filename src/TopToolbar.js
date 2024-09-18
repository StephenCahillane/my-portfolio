import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';



export function TopToolbar({ color, buttons }) {



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
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
                        {buttons.label}
                    </Typography>
                    }

                    {buttons &&
                        <>
                            <Button color="inherit">{buttons.label2}</Button>
                            <Button color="inherit">{buttons.label3}</Button>
                        </>
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default TopToolbar;
