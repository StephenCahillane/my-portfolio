import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Button, Box, Drawer, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Import the menu icon

export function MainToolbar({ color }) {
    const [drawerOpen, setDrawerOpen] = useState(false);

    // Toggle drawer open/close
    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    // Define drawer content
    const drawerContent = (
        <Box
            sx={{ width: 130, padding: 2}}
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
        >
            <Typography variant="h6">Projects</Typography>
            <Button color="inherit" sx={{ display: 'block', marginTop: 2 }}>Vision App</Button>
            <Button color="inherit" sx={{ display: 'block', marginTop: 2 }}>Reg Quest</Button>
            <Button color="inherit" sx={{ display: 'block', marginTop: 2 }}>Mern Chat</Button>
        </Box>
    );

    return (
        <div>
            <AppBar position="static" sx={{ backgroundColor: color }}>
                <Toolbar>
                    {/* Burger menu button */}
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={toggleDrawer}
                    >
                        <MenuIcon sx={{color: '#39FF14'}} />
                    </IconButton>

                    {/* Spacing and buttons */}
                    <Box sx={{ flexGrow: 1 }} /> {/* Pushes buttons to the far right */}
                    
                    <Button
                        color="inherit"
                        sx={{
                            color: '#39FF14', // Text color
                            borderColor: '#39FF14', // Border color
                            border: '2px solid', // Border style
                            '&:hover': {
                                borderColor: '#39FF14', // Border color on hover
                                backgroundColor: 'rgba(57, 255, 20, 0.1)', // Light background on hover

                            },
                            ml: 1,
                            mr: 1
                        }}
                    >
                        Blog
                    </Button>
                    <Button
                        color="inherit"
                        sx={{
                            color: '#39FF14', // Text color
                            borderColor: '#39FF14', // Border color
                            border: '2px solid', // Border style
                            '&:hover': {
                                borderColor: '#39FF14', // Border color on hover
                                backgroundColor: 'rgba(57, 255, 20, 0.1)', // Light background on hover
                            },
                            ml: 1,
                            mr: 1
                        }}
                    >
                        Get In Touch
                    </Button>
                </Toolbar>
            </AppBar>

            {/* Drawer */}
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
                {drawerContent}
            </Drawer>
        </div>
    );
}

export default MainToolbar;
