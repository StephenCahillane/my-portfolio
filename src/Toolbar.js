import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Button, Box, Drawer, List, ListItem, Typography, ListItemIcon } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { buttonToolBarStyle, drawerContentBox, projectHeader, toolBarStyle } from './Styles/HomePageStyles';


export function MainToolbar({ color }) {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const navigate = useNavigate();

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const drawerContent = (
        <Box
            sx={drawerContentBox}
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
        >
            <Typography variant="h6" sx={projectHeader}>Projects</Typography>


            <List>
                <ListItem
                    button
                    onClick={() => navigate('/')}
                    sx={toolBarStyle}
                >
                    Home
                </ListItem>


                <ListItem
                    button
                    onClick={() => navigate('/Vision')}
                    sx={toolBarStyle}
                >
                    Vision App
                </ListItem>
                <Box sx={{ paddingLeft: 1 }}>

                    <ListItem
                        button
                        onClick={() => navigate('/Vision', { state: { section: 'future' } })}
                        sx={toolBarStyle}
                    >
                        <ListItemIcon sx={{ color: '#39FF14', ml: 0, padding: 0 }}> {/* Optional: change icon color */}
                            <ChevronRightIcon />
                        </ListItemIcon>
                        Future Builder
                    </ListItem>


                    <ListItem
                        button
                        onClick={() => navigate('/Vision', { state: { section: 'tasks' } })}
                        sx={toolBarStyle}
                    >
                        <ListItemIcon sx={{ color: '#39FF14', ml: 0, padding: 0 }}> {/* Optional: change icon color */}
                            <ChevronRightIcon />
                        </ListItemIcon>
                        Task Manager
                    </ListItem>

                    <ListItem
                        button
                        onClick={() => navigate('/Vision', { state: { section: 'visionBoard' } })}
                        sx={toolBarStyle}
                    >
                        <ListItemIcon sx={{ color: '#39FF14', ml: 0, padding: 0 }}>
                            <ChevronRightIcon />
                        </ListItemIcon>
                        Vision Board
                    </ListItem>

                    <ListItem
                        button
                        onClick={() => navigate('/Vision', { state: { section: 'studyCenter' } })}
                        sx={toolBarStyle}
                    >
                        <ListItemIcon sx={{ color: '#39FF14', ml: 0, padding: 0 }}>
                            <ChevronRightIcon />
                        </ListItemIcon>
                        Study Centre
                    </ListItem>

                    <ListItem
                        button
                        onClick={() => navigate('/Vision', { state: { section: 'routine' } })}
                        sx={toolBarStyle}
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
                    sx={toolBarStyle}
                >
                    Reg Quest
                </ListItem>

                <ListItem
                    button
                    onClick={() => navigate('/Budget')}
                    sx={toolBarStyle}
                >
                    Budget Tool
                </ListItem>

            </List>
        </Box>
    );

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
                        onClick={toggleDrawer}
                    >
                        <MenuIcon sx={{ color: '#39FF14' }} />
                    </IconButton>

                    <Typography sx={{ color: '#39FF14', fontFamily: 'Dancing Script', fontSize: '26px', letterSpacing: '1px' }}>Projects</Typography>
                    <Box sx={{ flexGrow: 1 }} /> 
                    <Button color="inherit" sx={buttonToolBarStyle}>Blog</Button>
                    <Button color="inherit" sx={buttonToolBarStyle}>Get In Touch</Button>

                </Toolbar>
            </AppBar>
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer}
                PaperProps={{
                    sx: {
                        backgroundColor: '#1c2027',
                    },
                }}
            >
                {drawerContent}
            </Drawer>
        </div>
    );
}

export default MainToolbar;
