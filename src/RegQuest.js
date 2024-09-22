import React from 'react';
import MainToolbar from './Toolbar';
import { List, ListItem, ListItemText, ListItemIcon, Typography, Card, CardContent } from '@mui/material';
import StarsIcon from '@mui/icons-material/Stars';

function RegQuest() {
    return (

        <>
            <MainToolbar color={'#1c2027'} />

            <div className='headerApp'>
                <div className='appHeaderLeft'>
                    <Typography sx={{ color: 'white', fontSize: '105px', mb: 2, fontFamily: "Bebas Neue", letterSpacing: '2px' }}>RegQuest</Typography>
                    <Typography sx={{ color: 'white', fontSize: '18px', maxWidth: '600px' }}>An application developed to help young programmers understand and
                        use Regular Expressions in a fun, game environment.
                    </Typography>
                </div>

                <div className='appHeaderRight'>
                    <Typography sx={{ color: '#39FF14', fontSize: '25px', maxWidth: '600px', mb: 2, fontFamily: 'Dancing Script' }}>
                        Features
                    </Typography>

                    <List>
                        <ListItem sx={{ backgroundColor: '#1c2027', mb: 1, mt: 1 }}>
                            <ListItemIcon><StarsIcon sx={{ color: '#39FF14' }} /></ListItemIcon>
                            <ListItemText sx={{ color: 'white' }} primary='Solve RegEx Problems to escape traps.' />
                        </ListItem>

                        <ListItem sx={{ backgroundColor: '#1c2027', mb: 1, mt: 1 }}>
                            <ListItemIcon><StarsIcon sx={{ color: '#39FF14' }} /></ListItemIcon>
                            <ListItemText sx={{ color: 'white' }} primary='Moveable character with animations in a cartoon environment.' />
                        </ListItem>

                        <ListItem sx={{ backgroundColor: '#1c2027', mb: 1, mt: 1 }}>
                            <ListItemIcon><StarsIcon sx={{ color: '#39FF14' }} /></ListItemIcon>
                            <ListItemText sx={{ color: 'white' }} primary='Checking Algorithm built to match user input with RegEx Password to escape trap.' />
                        </ListItem>

                        <ListItem sx={{ backgroundColor: '#1c2027', mb: 1, mt: 1 }}>
                            <ListItemIcon><StarsIcon sx={{ color: '#39FF14' }} /></ListItemIcon>
                            <ListItemText sx={{ color: 'white' }} primary='Basic RegEx lessons to tutor users.' />
                        </ListItem>

                        <ListItem sx={{ backgroundColor: '#1c2027', mb: 1, mt: 1 }}>
                            <ListItemIcon><StarsIcon sx={{ color: '#39FF14' }} /></ListItemIcon>
                            <ListItemText sx={{ color: 'white' }} primary='Participated in daily scrum meetings, stand ups and operated
                            in an agile environment.' />
                        </ListItem>

                    </List>
                </div>
            </div>

            <div className='lowerApp'>
                <Card sx={{ width: '70%', mt: 10, mb: 10, backgroundColor: '#282c34', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' }}>
                    <CardContent>

                        <iframe
                            title="Embedded YouTube Video"
                            src="https://www.youtube.com/embed/R0ujZbNLKHY"
                            width="90%"
                            height="400px"
                            style={{ border: 'none', display: 'block', margin: '0 auto' }}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        />

                    </CardContent>
                </Card>
            </div>
        </>
    );
}

export default RegQuest;
