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
                            <ListItemText sx={{ color: 'white' }} primary='Real time notifications with two way connections.' />
                        </ListItem>

                        <ListItem sx={{ backgroundColor: '#1c2027', mb: 1, mt: 1 }}>
                            <ListItemIcon><StarsIcon sx={{ color: '#39FF14' }} /></ListItemIcon>
                            <ListItemText sx={{ color: 'white' }} primary='User sign up, login and security protocols.' />
                        </ListItem>

                        <ListItem sx={{ backgroundColor: '#1c2027', mb: 1, mt: 1 }}>
                            <ListItemIcon><StarsIcon sx={{ color: '#39FF14' }} /></ListItemIcon>
                            <ListItemText sx={{ color: 'white' }} primary='Backend set up with password hashing and decrypting functions.' />
                        </ListItem>

                        <ListItem sx={{ backgroundColor: '#1c2027', mb: 1, mt: 1 }}>
                            <ListItemIcon><StarsIcon sx={{ color: '#39FF14' }} /></ListItemIcon>
                            <ListItemText sx={{ color: 'white' }} primary='Set weekly and daily study goals, and track progress.' />
                        </ListItem>

                        <ListItem sx={{ backgroundColor: '#1c2027', mb: 1, mt: 1 }}>
                            <ListItemIcon><StarsIcon sx={{ color: '#39FF14' }} /></ListItemIcon>
                            <ListItemText sx={{ color: 'white' }} primary='Clean User Interface built in Bootstrap.' />
                        </ListItem>

                        <ListItem sx={{ backgroundColor: '#1c2027', mb: 1, mt: 1 }}>
                            <ListItemIcon><StarsIcon sx={{ color: '#39FF14' }} /></ListItemIcon>
                            <ListItemText sx={{ color: 'white' }} primary='Websockets built to enable real time connections.' />
                        </ListItem>

                    </List>
                </div>
            </div>

            <div className='lowerApp'>
                <Card sx={{ width: '80%', mt: 10, mb: 10, backgroundColor: '#1c2027', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)', border: '2px solid #39FF14' }}>
                    <CardContent>
                        <iframe
                            title="Google Drive Video"
                            src="https://drive.google.com/file/d/1aLz7CNbgvJJsO6yoNN-eMb6wfP6T7o1k/preview"
                            width="95%"
                            height="400px"
                            allow="autoplay"
                            style={{ border: 'none', display: 'block', margin: '0 auto' }}
                        />
                    </CardContent>
                </Card>


            </div>
        </>
    );
}

export default Chat;
