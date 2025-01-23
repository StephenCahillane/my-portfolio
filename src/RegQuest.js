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

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography sx={{ color: 'white', fontSize: '70px', mb: 2, fontFamily: "Bebas Neue", letterSpacing: '2px', mr: 3 }}>
                            Reg Quest
                        </Typography>

                        <div style={{ border: '#39FF14 solid 1px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px', marginBottom: '20px' }}>
                            <Typography sx={{ color: '#39FF14', fontSize: '22px', maxWidth: '600px', fontFamily: 'Dancing Script' }}>
                                Live 
                            </Typography>
                        </div>

                    </div>
                    <Typography sx={{ color: 'white', fontSize: '18px', maxWidth: '600px' }}>An application developed to help young programmers understand and
                        use Regular Expressions in a fun, game environment.
                    </Typography>
                </div>

                <div className='appHeaderRight'>
                    <Typography sx={{ color: '#39FF14', fontSize: '25px', maxWidth: '600px', mb: 2, fontFamily: 'Dancing Script' }}>
                        Features
                    </Typography>

                    <List>
                        <ListItem sx={{ backgroundColor: 'rgb(30,30,30)', mb: 1, mt: 1 }} className='project-features'>
                            <ListItemIcon><StarsIcon sx={{ color: '#39FF14' }} /></ListItemIcon>
                            <ListItemText sx={{ color: 'white' }} primary='Solve RegEx Problems to escape traps.' />
                        </ListItem>

                        <ListItem sx={{ backgroundColor: 'rgb(30,30,30)', mb: 1, mt: 1 }} className='project-features'>
                            <ListItemIcon><StarsIcon sx={{ color: '#39FF14' }} /></ListItemIcon>
                            <ListItemText sx={{ color: 'white' }} primary='Moveable character with animations in a cartoon environment.' />
                        </ListItem>

                        <ListItem sx={{ backgroundColor: 'rgb(30,30,30)', mb: 1, mt: 1 }} className='project-features'>
                            <ListItemIcon><StarsIcon sx={{ color: '#39FF14' }} /></ListItemIcon>
                            <ListItemText sx={{ color: 'white' }} primary='Checking Algorithm built to match user input with RegEx Password to escape trap.' />
                        </ListItem>

                        <ListItem sx={{ backgroundColor: 'rgb(30,30,30)', mb: 1, mt: 1 }} className='project-features'>
                            <ListItemIcon><StarsIcon sx={{ color: '#39FF14' }} /></ListItemIcon>
                            <ListItemText sx={{ color: 'white' }} primary='Basic RegEx lessons to tutor users.' />
                        </ListItem>

                        <ListItem sx={{ backgroundColor: 'rgb(30,30,30)', mb: 1, mt: 1 }} className='project-features'>
                            <ListItemIcon><StarsIcon sx={{ color: '#39FF14' }} /></ListItemIcon>
                            <ListItemText sx={{ color: 'white' }} primary='Participated in daily scrum meetings, stand ups and operated
                            in an agile environment.' />
                        </ListItem>

                    </List>
                </div>
            </div>

            <div className='lowerApp'>
                <Card sx={{ position: 'relative', width: '75%', mt: 10, mb: 10, backgroundColor: 'rgb(30,30,30)', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' }}>
                <div 
                    onClick={() => window.location.href = 'https://github.com/StephenCahillane'}
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

                        <Typography sx={{ fontFamily: 'Dancing Script', fontSize: '27px', ml: 3, color: 'white' }}>Github</Typography>
                    </div>
                    
                    <CardContent>
                        <iframe
                            title="Embedded YouTube Video"
                            src="https://www.youtube.com/embed/R0ujZbNLKHY"
                            width="100%"
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
