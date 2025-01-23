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

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography sx={{ color: 'white', fontSize: '70px', mb: 2, fontFamily: "Bebas Neue", letterSpacing: '2px', mr: 3 }}>
                            Developer Teams
                        </Typography>

                        <div style={{ border: 'red solid 1px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3px', marginBottom: '20px' }}>
                            <Typography sx={{ color: 'red', fontSize: '22px', maxWidth: '600px', fontFamily: 'Dancing Script' }}>
                                In Production
                            </Typography>
                        </div>

                    </div>

                    <Typography sx={{ color: 'white', fontSize: '18px', maxWidth: '600px' }}>
                        An app developed to allow aspiring programmers to join a team, receive mentorship and be held accountable on tasks and study progress.
                    </Typography>
                </div>

                <div className='appHeaderRight'>
                    <Typography sx={{ color: '#39FF14', fontSize: '25px', maxWidth: '600px', mb: 2, fontFamily: 'Dancing Script' }}>
                        Features
                    </Typography>

                    <List>
                        <ListItem sx={{ backgroundColor: 'rgb(30,30,30)', mb: 1, mt: 1 }}>
                            <ListItemIcon><StarsIcon sx={{ color: '#39FF14' }} /></ListItemIcon>
                            <ListItemText sx={{ color: 'white' }} primary='Join a team of aspiring programmers with the same goal.' />
                        </ListItem>

                        <ListItem sx={{ backgroundColor: 'rgb(30,30,30)', mb: 1, mt: 1 }}>
                            <ListItemIcon><StarsIcon sx={{ color: '#39FF14' }} /></ListItemIcon>
                            <ListItemText sx={{ color: 'white' }} primary='Receive guidance from a mentor, and attend weekly classes with your mentor.' />
                        </ListItem>

                        <ListItem sx={{ backgroundColor: 'rgb(30,30,30)', mb: 1, mt: 1 }}>
                            <ListItemIcon><StarsIcon sx={{ color: '#39FF14' }} /></ListItemIcon>
                            <ListItemText sx={{ color: 'white' }} primary='Real time chat with your fellow team members, powered by Socket.io' />
                        </ListItem>

                        <ListItem sx={{ backgroundColor: 'rgb(30,30,30)', mb: 1, mt: 1 }}>
                            <ListItemIcon><StarsIcon sx={{ color: '#39FF14' }} /></ListItemIcon>
                            <ListItemText sx={{ color: 'white' }} primary='Mentor Dashboard to view member task progress, study times and schedule events.' />
                        </ListItem>

                        <ListItem sx={{ backgroundColor: 'rgb(30,30,30)', mb: 1, mt: 1 }}>
                            <ListItemIcon><StarsIcon sx={{ color: '#39FF14' }} /></ListItemIcon>
                            <ListItemText sx={{ color: 'white' }} primary='Ranking system to receive rewards for completing daily tasks, study times. ' />
                        </ListItem>

                    </List>
                </div>
            </div>

            <div className='lowerApp'>
                <Card sx={{ width: '70%', mt: 10, mb: 10, backgroundColor: 'rgb(50,50,50)!important', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)', position: 'relative' }}>
                    <div 
                    onClick={() => window.location.href = 'https://sjcahillane-budget-tool.onrender.com'}
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '120px',
                        height: '120px',
                        backgroundColor: 'red',
                        clipPath: 'polygon(100% 0, 100% 100%, 0 0)',
                        display: 'flex',
                        alignItems: 'start',
                        justifyContent: 'center',
                        cursor: 'pointer'
                    }}>

                        <Typography sx={{ fontFamily: 'Dancing Script', fontSize: '27px', ml: 2, color: 'white' }}>Visit</Typography>
                    </div>
                    <CardContent>
                        <iframe
                            title="Embedded YouTube Video"
                            src="https://www.youtube.com/embed/tToODS_R7rI"
                            width="100%"
                            height="400px"
                            style={{ border: 'none', margin: '0 auto' }}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        />

                    </CardContent>
                </Card >
            </div >
        </>
    );

}

export default TeamApp;
