import React from 'react';
import MainToolbar from './Toolbar';
import { Typography, List, ListItem, ListItemIcon, ListItemText, Card, CardContent, Badge } from '@mui/material';
import StarsIcon from '@mui/icons-material/Stars';

const TeamApp = () => {
    return (
        <>
            <MainToolbar color={'#1c2027'} />

            <div className='headerApp'>
                <div className='appHeaderLeft'>

                    <div style={{ display: 'flex', alignItems: 'center' }} className='top-header-app'>
                        <Typography className='app-title' sx={{ color: 'white', fontSize: '70px', mb: 2, fontFamily: "Bebas Neue", letterSpacing: '2px', mr: 3 }}>
                            TeamUp Tech
                        </Typography>

                        <div className='production-box' style={{ border: 'red solid 1px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3px', marginBottom: '20px' }}>
                            <Typography className='in-production' sx={{ color: 'red', fontSize: '22px', maxWidth: '600px', fontFamily: 'Dancing Script' }}>
                                In Production
                            </Typography>
                        </div>

                    </div>

                    <Typography  className='explanation' sx={{ color: 'white', fontSize: '18px', maxWidth: '600px' }}>
                        An app developed to allow aspiring programmers to join a team, receive mentorship and be held accountable on tasks and study progress.
                    </Typography>
                </div>

                <div className='appHeaderRight'>
                    <Typography className='features' sx={{ color: '#39FF14', fontSize: '25px', maxWidth: '600px', mb: 2, fontFamily: 'Dancing Script' }}>
                        Features
                    </Typography>

                    <List className='list-features'>
                        <ListItem sx={{ backgroundColor: 'rgb(30,30,30)', mb: 1, mt: 1 }} className='project-features'>
                            <ListItemIcon><StarsIcon className='listIcon' sx={{ color: '#39FF14' }} /></ListItemIcon>
                            <Typography className='features-text' sx={{ color: 'white' }}>Team based platform where users attend classes with a mentor.</Typography>
                        </ListItem>

                        <ListItem sx={{ backgroundColor: 'rgb(30,30,30)', mb: 1, mt: 1 }} className='project-features'>
                            <ListItemIcon><StarsIcon className='listIcon' sx={{ color: '#39FF14' }} /></ListItemIcon>
                            <Typography className='features-text' sx={{ color: 'white' }}>Mentor can assign tasks, monitor progress and follow up with users.</Typography>
                        </ListItem>

                        <ListItem sx={{ backgroundColor: 'rgb(30,30,30)', mb: 1, mt: 1 }} className='project-features'>
                            <ListItemIcon><StarsIcon className='listIcon' sx={{ color: '#39FF14' }} /></ListItemIcon>
                            <Typography className='features-text' sx={{ color: 'white' }}>Real time voice calling and messaging with Socket.io.</Typography>
                        </ListItem>

                        <ListItem sx={{ backgroundColor: 'rgb(30,30,30)', mb: 1, mt: 1 }} className='project-features'>
                            <ListItemIcon><StarsIcon className='listIcon' sx={{ color: '#39FF14' }} /></ListItemIcon>
                            <Typography className='features-text' sx={{ color: 'white' }}>Inbuilt IDE for solving algorithm challenges.</Typography>
                        </ListItem>

                        <ListItem sx={{ backgroundColor: 'rgb(30,30,30)', mb: 1, mt: 1 }} className='project-features'>
                            <ListItemIcon><StarsIcon className='listIcon' sx={{ color: '#39FF14' }} /></ListItemIcon>
                            <Typography className='features-text' sx={{ color: 'white' }}>Ranking system to receive rewards for completing daily tasks, study times.</Typography>
                        </ListItem>

                    </List>
                </div>
            </div>

            <div className='lowerApp'>


                <div style={{ width: '90%', display: 'flex', flexDirection: 'row', alignItems: 'space-between' }} class='lower-app-vids'>
                    <Card sx={{
                        width: '70%', mt: 10, mb: 10,
                        backgroundColor: 'rgb(20,20,20)!important',
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)',
                        position: 'relative',
                        mr: 2
                    }} className='vid-card'
                    >
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                width: '120px',
                                height: '120px',
                                backgroundColor: 'blue',
                                clipPath: 'polygon(100% 0, 100% 100%, 0 0)',
                                display: 'flex',
                                alignItems: 'start',
                                justifyContent: 'center',
                                cursor: 'pointer'
                            }}>

                            <Typography sx={{ fontFamily: 'Dancing Script', fontSize: '18px', ml: 5.5, color: 'white' }}>Mentor Dashboard</Typography>
                        </div>
                        <CardContent className='vid-card-content'>
                            <iframe
                                class='iframe-vid'
                                title="Embedded YouTube Video"
                                src="https://www.youtube.com/embed/_MXOLPiIK4A"
                                width="100%"
                                height="400px"
                                style={{ border: 'none', margin: '0 auto' }}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            />

                        </CardContent>
                    </Card >

                    <Card className='vid-card'
                    sx={{
                        width: '70%', mt: 10, mb: 10,
                        backgroundColor: 'rgb(20,20,20)!important',
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)',
                        position: 'relative'
                    }}>
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                width: '120px',
                                height: '120px',
                                backgroundColor: 'blue',
                                clipPath: 'polygon(100% 0, 100% 100%, 0 0)',
                                display: 'flex',
                                alignItems: 'start',
                                justifyContent: 'center',
                                cursor: 'pointer'
                            }}>

                            <Typography sx={{ fontFamily: 'Dancing Script', fontSize: '18px', ml: 5.5, color: 'white' }}>User Dashboard</Typography>
                        </div>
                        <CardContent>
                            <iframe
                                title="Embedded YouTube Video"
                                src="https://www.youtube.com/embed/zbVgoqshEsk"
                                width="100%"
                                height="400px"
                                style={{ border: 'none', margin: '0 auto' }}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            />

                        </CardContent>
                    </Card >
                </div>
            </div >
        </>
    );

}

export default TeamApp;
