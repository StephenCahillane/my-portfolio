import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Button, Box, Drawer, List, ListItem, Typography, ListItemText } from '@mui/material';
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
                    <ListItemText primary='Home' primaryTypographyProps={{ sx: { fontSize: 24, fontFamily: 'Dancing Script' } }} />
                </ListItem>


                <ListItem
                    button
                    onClick={() => navigate('/Vision')}
                    sx={toolBarStyle}
                >
                    <ListItemText primary='Vision App' primaryTypographyProps={{ sx: { fontSize: 24, fontFamily: 'Dancing Script' } }} />

                </ListItem>
                <Box sx={{ paddingLeft: 0.0 }}>

                    <ListItem
                        button
                        onClick={() => navigate('/Vision', { state: { section: 'future' } })}
                        sx={toolBarStyle}
                    >
                        <ChevronRightIcon sx={{ fontSize: '28px', color: '#39FF14' }} />
                        <ListItemText primary='Planner' primaryTypographyProps={{ sx: { fontSize: 24, fontFamily: 'Dancing Script' } }} />
                    </ListItem>


                    <ListItem
                        button
                        onClick={() => navigate('/Vision', { state: { section: 'tasks' } })}
                        sx={toolBarStyle}
                    >
                        <ChevronRightIcon sx={{ fontSize: '28px', color: '#39FF14' }} />
                        <ListItemText primary='Tasks' primaryTypographyProps={{ sx: { fontSize: 24, fontFamily: 'Dancing Script' } }} />
                    </ListItem>

                    <ListItem
                        button
                        onClick={() => navigate('/Vision', { state: { section: 'visionBoard' } })}
                        sx={toolBarStyle}
                    >

                        <ChevronRightIcon sx={{ fontSize: '28px', color: '#39FF14' }} />
                        <ListItemText primary='Visionboard' primaryTypographyProps={{ sx: { fontSize: 24, fontFamily: 'Dancing Script' } }} />

                    </ListItem>

                    <ListItem
                        button
                        onClick={() => navigate('/Vision', { state: { section: 'studyCenter' } })}
                        sx={toolBarStyle}
                    >
                        <ChevronRightIcon sx={{ fontSize: '28px', color: '#39FF14' }} />
                        <ListItemText primary='Study Center' primaryTypographyProps={{ sx: { fontSize: 24, fontFamily: 'Dancing Script' } }} />

                    </ListItem>

                    <ListItem
                        button
                        onClick={() => navigate('/Vision', { state: { section: 'routine' } })}
                        sx={toolBarStyle}
                    >
                        <ChevronRightIcon sx={{ fontSize: '28px', color: '#39FF14' }} />
                        <ListItemText primary='Routine' primaryTypographyProps={{ sx: { fontSize: 24, fontFamily: 'Dancing Script' } }} />


                    </ListItem>

                </Box>
                <ListItem
                    button
                    onClick={() => navigate('/RegQuest')}
                    sx={toolBarStyle}
                >
                    <ListItemText primary='RegQuest' primaryTypographyProps={{ sx: { fontSize: 24, fontFamily: 'Dancing Script' } }} />

                </ListItem>

                <ListItem
                    button
                    onClick={() => navigate('/Budget')}
                    sx={toolBarStyle}
                >
                    <ListItemText primary='Budget Tool' primaryTypographyProps={{ sx: { fontSize: 24, fontFamily: 'Dancing Script' } }} />

                </ListItem>

            </List>
        </Box>
    );

    return (
        <div>
            <AppBar position="static" sx={{ backgroundColor: 'rgb(30,30,30)' }}>
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
                        backgroundColor: 'rgb(20,20,20)',
                    },
                }}
            >
                {drawerContent}
            </Drawer>
        </div>
    );
}

export default MainToolbar;
