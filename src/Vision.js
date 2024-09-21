import React from 'react';
import MainToolbar from './Toolbar';
import { List, ListItem, ListItemText, ListItemIcon, Typography, Card, CardContent } from '@mui/material';
import StarsIcon from '@mui/icons-material/Stars';
import Future from './Future';
import Tasks from './Tasks';

function Vision() {
    return (
        <>

            <MainToolbar color={'#1c2027'} />

            <div className='headerApp'>
                <div className='appHeaderLeft'>
                    <Typography sx={{ color: 'white', fontSize: '105px', mb: 2, fontFamily: "Bebas Neue", letterSpacing: '2px' }}>Vision</Typography>
                    <Typography sx={{ color: 'white', fontSize: '18px', maxWidth: '600px' }}>An application developed to structure tasks, goals, future
                        plans, studying, and overall progress towards your overall life plan and vision.
                    </Typography>
                </div>

                <div className='appHeaderRight'>
                    <Typography sx={{ color: '#39FF14', fontSize: '25px', maxWidth: '600px', mb: 2, fontFamily: 'Dancing Script' }}>
                        Features
                    </Typography>

                    <List>
                        <ListItem sx={{ backgroundColor: '#1c2027', mb: 1, mt: 1 }}>
                            <ListItemIcon><StarsIcon sx={{ color: '#39FF14' }} /></ListItemIcon>
                            <ListItemText sx={{ color: 'white' }} primary='Track Daily Tasks and receive Email notification' />
                        </ListItem>

                        <ListItem sx={{ backgroundColor: '#1c2027', mb: 1, mt: 1 }}>
                            <ListItemIcon><StarsIcon sx={{ color: '#39FF14' }} /></ListItemIcon>
                            <ListItemText sx={{ color: 'white' }} primary='Design a Vision Board with Image and Text, draggable and resizable.' />
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
                            src="https://drive.google.com/file/d/1AExb6LYWBrkolJXyDrOee9Q_FJUhelUH/preview"
                            width="95%"
                            height='400px'
                            style={{ border: 'none', display: 'block', margin: '0 auto' }}
                        />
                    </CardContent>
                </Card>
            </div>

            <Future />

        </>
    );
}

export default Vision;
