import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';



export function TopToolbar() {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Stephen Cahillane
                    </Typography>
                    <Button color="inherit">LinkedIn</Button>
                    <Button color="inherit">GitHub</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default TopToolbar;
