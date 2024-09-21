import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Button, Box, Drawer, List, ListItem, Typography, ListItemIcon, Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Import the menu icon
import { useNavigate } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';



export function MainToolbar({ color }) {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const navigate = useNavigate();

    // Toggle drawer open/close
    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    // Define drawer content with custom styles for background and text color
    const drawerContent = (
        <Box
            sx={{
                width: 220,
                padding: 1,
                backgroundColor: '#1c2027', // Darker background color for sidebar
                color: 'white' // Text color for better contrast
            }}
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
        >
            <Typography variant="h6" sx={{ marginBottom: 1.5, mt: 2, fontFamily: 'Bebas Neue', color: '#39FF14', textAlign: 'center', fontSize: '28px' }}>Projects</Typography>

            {/* List of items */}
            <List>
                {/* Home */}
                <ListItem
                    button
                    onClick={() => navigate('/')}
                    sx={{
                        cursor: 'pointer',
                        '&:hover': {
                            backgroundColor: '#303030', // Darker shade on hover
                        },
                        fontFamily: 'Bebas Neue',
                        letterSpacing: '1px',
                        fontSize: '22px',
                        
                    }}
                >
                    Home
                </ListItem>

                {/* Vision App with Sub-Items */}
                <ListItem
                    button
                    onClick={() => navigate('/Vision')}
                    sx={{
                        cursor: 'pointer',
                        '&:hover': {
                            backgroundColor: '#303030', // Darker shade on hover
                        },
                        fontFamily: 'Bebas Neue',
                        letterSpacing: '1px',
                        fontSize: '22px',
                        
                    }}
                >
                    Vision App
                </ListItem>
                <Box sx={{ paddingLeft: 1 }}>

                <ListItem
                        button
                        onClick={() => navigate('/Vision', { state: { section: 'future' } })}
                        sx={{
                            cursor: 'pointer',
                            '&:hover': {
                                backgroundColor: '#303030', // Darker shade on hover
                            },
                            fontFamily: 'Bebas Neue',
                            letterSpacing: '1px',
                            fontSize: '22px',
                            
                        }}
                    >
                        <ListItemIcon sx={{ color: '#39FF14', ml: 0, padding: 0 }}> {/* Optional: change icon color */}
                            <ChevronRightIcon />
                        </ListItemIcon>
                       Future Builder
                    </ListItem>


                    <ListItem
                        button
                        onClick={() => navigate('/Vision', { state: { section: 'tasks' } })}
                        sx={{
                            cursor: 'pointer',
                            '&:hover': {
                                backgroundColor: '#303030', // Darker shade on hover
                            },
                            fontFamily: 'Bebas Neue',
                            letterSpacing: '1px',
                            fontSize: '22px'
                        }}
                    >
                    <ListItemIcon sx={{ color: '#39FF14', ml: 0, padding: 0 }}> {/* Optional: change icon color */}
                            <ChevronRightIcon />
                        </ListItemIcon>
                        Task Manager
                    </ListItem>

                    <ListItem
                        button
                        onClick={() => navigate('/Vision', { state: { section: 'visionBoard' } })}
                        sx={{
                            cursor: 'pointer',
                            '&:hover': {
                                backgroundColor: '#303030', // Darker shade on hover
                            },
                            fontFamily: 'Bebas Neue',
                            letterSpacing: '1px',
                            fontSize: '22px'
                        }}
                    >
                    <ListItemIcon sx={{ color: '#39FF14', ml: 0, padding: 0 }}> {/* Optional: change icon color */}
                            <ChevronRightIcon />
                        </ListItemIcon>
                        Vision Board
                    </ListItem>

                    <ListItem
                        button
                        onClick={() => navigate('/Vision', { state: { section: 'studyCenter' } })}
                        sx={{
                            cursor: 'pointer',
                            '&:hover': {
                                backgroundColor: '#303030', // Darker shade on hover
                            },
                            fontFamily: 'Bebas Neue',
                            letterSpacing: '1px',
                            fontSize: '22px'
                        }}
                    >
                    <ListItemIcon sx={{ color: '#39FF14', ml: 0, padding: 0 }}> {/* Optional: change icon color */}
                            <ChevronRightIcon />
                        </ListItemIcon>
                        Study Centre
                    </ListItem>

                    <ListItem
                        button
                        onClick={() => navigate('/Vision', { state: { section: 'routine' } })}
                        sx={{
                            cursor: 'pointer',
                            '&:hover': {
                                backgroundColor: '#303030', // Darker shade on hover
                            },
                            fontFamily: 'Bebas Neue',
                            letterSpacing: '1px',
                            fontSize: '22px'
                        }}
                    >
                    <ListItemIcon sx={{ color: '#39FF14', ml: 0, padding: 0 }}> {/* Optional: change icon color */}
                            <ChevronRightIcon />
                        </ListItemIcon>
                        Daily Routine
                    </ListItem>

                </Box>
                <ListItem
                    button
                    onClick={() => navigate('/RegQuest')}
                    sx={{
                        cursor: 'pointer',
                        '&:hover': {
                            backgroundColor: '#303030', // Darker shade on hover
                        },
                        fontFamily: 'Bebas Neue',
                        letterSpacing: '1px',
                        fontSize: '22px'
                    }}
                >
                    Reg Quest
                </ListItem>
            </List>
        </Box>
    );

    return (
        <div>
            {/* AppBar with the menu icon and buttons */}
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
                        <MenuIcon sx={{ color: '#39FF14' }} />
                    </IconButton>

                    {/* Spacing and buttons */}
                    <Box sx={{ flexGrow: 1 }} /> {/* Pushes buttons to the far right */}

                    {/* Blog Button */}
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
                            mr: 1,
                        }}
                    >
                        Blog
                    </Button>

                    {/* Get In Touch Button */}
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
                            mr: 1,
                        }}
                    >
                        Get In Touch
                    </Button>
                </Toolbar>
            </AppBar>

            {/* Drawer with custom styles */}
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer}
                PaperProps={{
                    sx: {
                        backgroundColor: '#1c2027', // Darker background color for the entire drawer
                    },
                }}
            >
                {drawerContent}
            </Drawer>
        </div>
    );
}

export default MainToolbar;
