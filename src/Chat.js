import React from 'react';
import MainToolbar from './Toolbar';
import { List, ListItem, ListItemText, ListItemIcon, Typography, Card, CardContent } from '@mui/material';
import StarsIcon from '@mui/icons-material/Stars';

function Chat() {
    return (
        <>
            <MainToolbar color={'#1c2027'} />
            <div className='headerApp'>
                <div className='appHeaderLeft'>
                    <Typography sx={{ color: 'white', fontSize: '105px', mb: 2, fontFamily: "Bebas Neue", letterSpacing: '2px' }}>Chat App</Typography>
                    <Typography sx={{ color: 'white', fontSize: '18px', maxWidth: '600px' }}>
                        A real time MERN chat app with websockets for instant notifications. Built to fit in with future
                        version releases of Vision App.
                    </Typography>
                </div>

                <div className='appHeaderRight'>
                    <Typography sx={{ color: '#39FF14', fontSize: '25px', maxWidth: '600px', mb: 2, fontFamily: 'Dancing Script' }}>
                        Features
                    </Typography>

                    <List>
                        <ListItem sx={{ backgroundColor: '#1c2027', mb: 1, mt: 1 }}>
                            <ListItemIcon><StarsIcon sx={{ color: '#39FF14' }} /></ListItemIcon>
                            <ListItemText sx={{ color: 'white' }} primary='Real Time Notifications & two way connections.' />
                        </ListItem>

                        <ListItem sx={{ backgroundColor: '#1c2027', mb: 1, mt: 1 }}>
                            <ListItemIcon><StarsIcon sx={{ color: '#39FF14' }} /></ListItemIcon>
                            <ListItemText sx={{ color: 'white' }} primary='.' />
                        </ListItem>

                        <ListItem sx={{ backgroundColor: '#1c2027', mb: 1, mt: 1 }}>
                            <ListItemIcon><StarsIcon sx={{ color: '#39FF14' }} /></ListItemIcon>
                            <ListItemText sx={{ color: 'white' }} primary='Set a daily Routine and mark complete to track progress.' />
                        </ListItem>

                        <ListItem sx={{ backgroundColor: '#1c2027', mb: 1, mt: 1 }}>
                            <ListItemIcon><StarsIcon sx={{ color: '#39FF14' }} /></ListItemIcon>
                            <ListItemText sx={{ color: 'white' }} primary='Set weekly and daily study goals, and track progress.' />
                        </ListItem>

                        <ListItem sx={{ backgroundColor: '#1c2027', mb: 1, mt: 1 }}>
                            <ListItemIcon><StarsIcon sx={{ color: '#39FF14' }} /></ListItemIcon>
                            <ListItemText sx={{ color: 'white' }} primary='Set a purpose statement, and track through a roadmap and separate goals.' />
                        </ListItem>

                        <ListItem sx={{ backgroundColor: '#1c2027', mb: 1, mt: 1 }}>
                            <ListItemIcon><StarsIcon sx={{ color: '#39FF14' }} /></ListItemIcon>
                            <ListItemText sx={{ color: 'white' }} primary='Set Goals, add milestones, and visualize your progress towards
                    goals.' />
                        </ListItem>

                    </List>
                </div>
            </div>

            <div className='lowerApp'>
                <Card sx={{ width: '80%', mt: 10, mb: 10, backgroundColor: '#1c2027', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)', border: '2px solid #39FF14' }}>
                    <CardContent>

                        <iframe
                            title="Embedded Website"
                            src=""
                            width="95%"
                            height='400px'
                            style={{ border: 'none' }}
                        />
                    </CardContent>
                </Card>
            </div>
        </>
    );
}

export default Chat;
