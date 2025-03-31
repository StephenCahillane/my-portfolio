import React from 'react';
import MainToolbar from './Toolbar';
import { Typography, List, ListItem, ListItemIcon, ListItemText, Card, CardContent, Badge } from '@mui/material';
import StarsIcon from '@mui/icons-material/Stars';

const Budget = () => {
    return (
        <>
            <MainToolbar color={'#1c2027'} />

            <div className='headerApp'>
                <div className='appHeaderLeft'>

                    <div style={{ display: 'flex', alignItems: 'center' }} className='top-header-app'>
                        <Typography className='app-title' sx={{ color: 'white', fontSize: '100px', mb: 2, fontFamily: "Bebas Neue", letterSpacing: '2px', mr: 3 }}>
                            Budget Tool
                        </Typography>

                        <div className='production-box' style={{ border: '#39FF14 solid 1px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3px' }}>
                            <Typography className='in-production' sx={{ color: '#39FF14', fontSize: '26px', maxWidth: '600px', fontFamily: 'Dancing Script' }}>
                                5 Active Users
                            </Typography>
                        </div>

                    </div>

                    <Typography className='explanation' sx={{ color: 'white', fontSize: '18px', maxWidth: '600px' }}>
                        An application developed to help users track their spending and save money.
                    </Typography>
                </div>

                <div className='appHeaderRight'>
                    <Typography className='features' sx={{ color: '#39FF14', fontSize: '25px', maxWidth: '600px', mb: 2, fontFamily: 'Dancing Script' }}>
                        Features
                    </Typography>

                    <List className='list-features'>
                        <ListItem sx={{ backgroundColor: 'rgb(30,30,30)', mb: 1, mt: 1 }} className='project-features'>
                            <ListItemIcon><StarsIcon className='listIcon' sx={{ color: '#39FF14' }} /></ListItemIcon>
                            <Typography className='features-text' sx={{ color: 'white' }}>Set categories of spending and track areas needed to work on.</Typography>
                        </ListItem>

                        <ListItem sx={{ backgroundColor: 'rgb(30,30,30)', mb: 1, mt: 1 }} className='project-features'>
                            <ListItemIcon><StarsIcon className='listIcon' sx={{ color: '#39FF14' }} /></ListItemIcon>
                            <Typography className='features-text' sx={{ color: 'white' }}>Set a budget, and log each days spending.</Typography>
                        </ListItem>

                        <ListItem sx={{ backgroundColor: 'rgb(30,30,30)', mb: 1, mt: 1 }} className='project-features'>
                            <ListItemIcon><StarsIcon className='listIcon' sx={{ color: '#39FF14' }} /></ListItemIcon>
                            <Typography className='features-text' sx={{ color: 'white' }}>Daily, weekly, monthly and yearly totals in amount saved and spent.</Typography>
                        </ListItem>

                        <ListItem sx={{ backgroundColor: 'rgb(30,30,30)', mb: 1, mt: 1 }} className='project-features'>
                            <ListItemIcon><StarsIcon className='listIcon' sx={{ color: '#39FF14' }} /></ListItemIcon>
                            <Typography className='features-text' sx={{ color: 'white' }}>Utilize charts and graphs to visualize progress.</Typography>
                        </ListItem>

                        <ListItem sx={{ backgroundColor: 'rgb(30,30,30)', mb: 1, mt: 1 }} className='project-features'>
                            <ListItemIcon><StarsIcon className='listIcon' sx={{ color: '#39FF14' }} /></ListItemIcon>
                            <Typography className='features-text' sx={{ color: 'white' }}>Email updates on user savings and spending for accountability.</Typography>
                        </ListItem>

                    </List>
                </div>
            </div>

            <div className='lowerApp'>
                <Card className='vid-card' sx={{ width: '70%', mt: 10, mb: 10, backgroundColor: 'rgb(20,20,20)', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)', position: 'relative' }}>
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
                    <CardContent className='vid-card-content'>
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

export default Budget;
