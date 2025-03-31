import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Button, Box, Drawer, List, ListItem, Typography, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { buttonToolBarStyle, drawerContentBox, projectHeader, toolBarStyle } from './Styles/HomePageStyles';
import { ButtonGroup } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';
import GitHubIcon from '@mui/icons-material/GitHub';


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
                    onClick={() => navigate('/TeamApp')}
                    sx={toolBarStyle}
                >
                    <ListItemText primary='TeamUp Tech' primaryTypographyProps={{ sx: { fontSize: 24, fontFamily: 'Dancing Script' } }} />

                </ListItem>

                <ListItem
                    button
                    onClick={() => navigate('/Budget')}
                    sx={toolBarStyle}
                >
                    <ListItemText primary='Budget Tool' primaryTypographyProps={{ sx: { fontSize: 24, fontFamily: 'Dancing Script' } }} />

                </ListItem>

                <ListItem
                    button
                    onClick={() => navigate('/RegQuest')}
                    sx={toolBarStyle}
                >
                    <ListItemText primary='RegQuest' primaryTypographyProps={{ sx: { fontSize: 24, fontFamily: 'Dancing Script' } }} />

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


            </List>
        </Box>
    );

    return (
        <div>
            <AppBar position="static" sx={{ backgroundColor: 'rgb(30,30,30)' }} className='top-bar'>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={toggleDrawer}
                        className='burger-btn'
                    >
                        <MenuIcon sx={{ color: '#39FF14' }} className='burger-icon' />
                    </IconButton>

                    <Typography className='projects-text' sx={{ color: '#39FF14', fontFamily: 'Dancing Script', fontSize: '26px', letterSpacing: '1px' }}>Projects</Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <ButtonGroup variant="contained" aria-label="social media buttons">
                        <Button
                            className='social-media-icons'
                            sx={{ backgroundColor: '#1DA1F2', color: 'white' }}
                            startIcon={<Twitter className='icon'/>}
                            href="https://x.com/Stephen_C_Tech"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Twitter
                        </Button>
                        <Button
                            className='social-media-icons'
                            sx={{ backgroundColor: '#0077b5', color: 'white' }}
                            startIcon={<LinkedIn className='icon'/>}
                            href="https://www.linkedin.com/in/stephen-cahillane-68689b27b/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </Button>
                        <Button
                            className='social-media-icons'
                            sx={{ backgroundColor: 'grey', color: 'white' }}
                            startIcon={<GitHubIcon className='icon'/>}
                            href="https://github.com/StephenCahillane"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Github
                        </Button>
                    </ButtonGroup>
                    <Button className='get-in-touch' color="inherit" sx={buttonToolBarStyle}>Get In Touch</Button>

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
